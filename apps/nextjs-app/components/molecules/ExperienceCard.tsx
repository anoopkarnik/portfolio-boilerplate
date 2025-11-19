"use client"

import { experienceProps } from '@/lib/ts-types/experience'
import { projectProps } from '@/lib/ts-types/project'
import React, { useState } from 'react'
import ExperienceProjectCard from './ExperienceProjectCard'

const PROJECTS_PER_PAGE = 3

const ExperienceCard = ({ experience }: { experience: experienceProps }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const projects: projectProps[] = experience?.projects ?? []

  const totalPages = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE))

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const visibleProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className="flex flex-col bg-accent p-4 rounded-sm gap-2 overflow-hidden">
      {/* Header */}
      <div>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{experience.position}</div>
        <div className="text-sm font-light">{experience.durationDisplay}</div>
      </div>
      <div className="text-md text-primary">{experience.company}</div>
      </div>

      {/* Projects (paginated) */}
      <div className="flex flex-col gap-4">
        {visibleProjects.map((project: projectProps, index: number) => (
          <ExperienceProjectCard
            key={project.id ?? `${experience.id ?? 'exp'}-${startIndex + index}`}
            project={project}
          />
        ))}
      </div>

      {/* Pagination controls */}
      {projects.length > PROJECTS_PER_PAGE && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-2">
          {/* Back / Next */}
          <div className="flex gap-2">
            <button
              className="text-xs px-2 py-1 border rounded disabled:opacity-50"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Back
            </button>
            <button
              className="text-xs px-2 py-1 border rounded disabled:opacity-50"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          {/* Page numbers */}
          <div className="flex flex-wrap items-center gap-1 text-xs">
            {Array.from({ length: totalPages }, (_, i) => {
              const page = i + 1
              const isActive = page === currentPage
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={
                    "px-2 py-1 rounded border " +
                    (isActive
                      ? "font-semibold"
                      : "opacity-70 hover:opacity-100")
                  }
                >
                  {page}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
