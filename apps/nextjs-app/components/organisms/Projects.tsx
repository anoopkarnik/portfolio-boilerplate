"use client";

import React, { useEffect, useMemo, useState } from "react";
import { projectProps } from "@/lib/ts-types/project";
import ProjectCard from "../molecules/ProjectCard";
import MultiSelect from "../multiselect";
import { Button } from "@repo/ui/atoms/shadcn/button";

const PAGE_SIZE = 6;

const Projects = ({ projects }: { projects: projectProps[] }) => {
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const [projectSkills, setProjectSkills] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique types & skills from all projects
  useEffect(() => {
    if (!projects?.length) {
      setProjectTypes([]);
      setSelectedTypes([]);

      setProjectSkills([]);
      setSelectedSkills([]);

      setCurrentPage(1);
      return;
    }

    // Types
    const allTypes = projects.flatMap((project) => project.type ?? []);
    const uniqueTypes = Array.from(new Set(allTypes));

    setProjectTypes(uniqueTypes);
    setSelectedTypes(uniqueTypes); // default: all types

    // Skills (from project.skills[].title)
    const allSkills = projects.flatMap((project) =>
      (project.skills ?? []).map((skill) => skill.title)
    );
    const uniqueSkills = Array.from(new Set(allSkills));

    setProjectSkills(uniqueSkills);
    setSelectedSkills(uniqueSkills); // default: all skills

    setCurrentPage(1);
  }, [projects]);

  // Filter projects based on selected types & skills
  const filteredProjects = useMemo(() => {
    if (!projects) return [];

    return projects.filter((project) => {
      // Type filter
      const projectTypesForProject = project.type ?? [];
      const typeMatch =
        !selectedTypes.length ||
        projectTypesForProject.some((t) => selectedTypes.includes(t));

      // Skill filter
      const projectSkillTitles = (project.skills ?? []).map((s) => s.title);
      const skillMatch =
        !selectedSkills.length ||
        projectSkillTitles.some((s) => selectedSkills.includes(s));

      // Must satisfy BOTH filters
      return typeMatch && skillMatch;
    });
  }, [projects, selectedTypes, selectedSkills]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));

  // Ensure current page is valid when filter/data change
  useEffect(() => {
    setCurrentPage((prev) => {
      if (prev > totalPages) return totalPages;
      if (prev < 1) return 1;
      return prev;
    });
  }, [totalPages]);

  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredProjects.slice(pageStart, pageStart + PAGE_SIZE);

  const handleTypesChange = (next: string[]) => {
    setSelectedTypes(next);
    setCurrentPage(1);
  };

  const handleSkillsChange = (next: string[]) => {
    setSelectedSkills(next);
    setCurrentPage(1);
  };

  const hasProjects = filteredProjects.length > 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Filters row */}
      {(projectTypes.length > 0 || projectSkills.length > 0) && (
        <div className="flex flex-wrap gap-3">
          {projectTypes.length > 0 && (
            <MultiSelect
              title="Project Types"
              options={projectTypes}
              values={selectedTypes}
              onChange={handleTypesChange}
            />
          )}

          {projectSkills.length > 0 && (
            <MultiSelect
              title="Skills"
              options={projectSkills}
              values={selectedSkills}
              onChange={handleSkillsChange}
            />
          )}
        </div>
      )}

      {/* Projects grid */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {pageItems.map((project, index) => (
          // If you have project.id, use that instead of index
          <ProjectCard key={index} project={project} />
        ))}

        {!hasProjects && (
          <p className="text-sm text-muted-foreground">
            No projects found for the selected filters.
          </p>
        )}
      </div>

      {/* Pagination controls */}
      {hasProjects && totalPages > 1 && (
        <div className="mt-2 flex items-center justify-between gap-2">
          <div>
            <span className="text-sm">
              Page {currentPage} of {totalPages} for {filteredProjects.length} projects
            </span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
