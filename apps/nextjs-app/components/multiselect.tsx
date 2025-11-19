"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/molecules/shadcn/popover";
import { Button } from "@repo/ui/atoms/shadcn/button";
import { ChevronDown, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@repo/ui/molecules/shadcn/command";
import { Checkbox } from "@repo/ui/atoms/shadcn/checkbox";
import { Badge } from "@repo/ui/atoms/shadcn/badge";

export default function MultiSelect({
  title,
  options,
  values,
  onChange,
}: {
  title: string;
  options: string[];
  values: string[];
  onChange: (next: string[]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const selected = new Set(values);

  const remove = (opt: string) => {
    if (!selected.has(opt)) return;
    const next = values.filter((v) => v !== opt);
    onChange(next);
  };

  const toggle = (opt: string) => {
    const next = new Set(selected);
    next.has(opt) ? next.delete(opt) : next.add(opt);
    onChange(Array.from(next));
  };

  const clearAll = () => onChange([]);

  // For compact trigger label
  const maxChipsInTrigger = 2;
  const chips = values.slice(0, maxChipsInTrigger);
  const overflow = values.length - chips.length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[260px] justify-between gap-2 bg-accent"
          aria-label={`${title}: ${values.length} selected`}
        >
          <div className="flex items-center gap-1 overflow-hidden">
            <span className="shrink-0">{title}</span>
            {values.length > 0 && (
              <div className="flex items-center gap-1 overflow-hidden">
                {chips.map((v) => (
                  // Inside chip rendering:
                  <Badge
                    key={v}
                    variant="outline"
                    className="pl-2 pr-1 py-0.5 flex items-center gap-1 max-w-[110px] bg-background"
                    title={v}
                  >
                    <span className="truncate">{v}</span>
                    <span
                      role="button"
                      tabIndex={0}
                      className="rounded hover:bg-muted/60 transition cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        remove(v);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          remove(v);
                        }
                      }}
                      aria-label={`Remove ${v}`}
                    >
                      <X className="h-3 w-3 opacity-70" />
                    </span>
                  </Badge>

                ))}
                {overflow > 0 && (
                  <Badge variant="outline" className="px-2 py-0.5">
                    +{overflow}
                  </Badge>
                )}
              </div>
            )}
          </div>
          <ChevronDown className="ml-1 h-4 w-4 opacity-60 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-[320px] z-30">
        <Command>
          <div className="p-2 border-b">
            <CommandInput placeholder={`Search ${title.toLowerCase()}...`} />
            {/* Selected chips inside the popover (removable) */}
            {values.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {values.map((v) => (
                  <Badge
                    key={v}
                    variant="secondary"
                    className="pl-2 pr-1 py-0.5 flex items-center gap-1"
                  >
                    <span className="truncate max-w-[180px]" title={v}>
                      {v}
                    </span>
                    <span
                      role="button"
                      tabIndex={0}
                      className="rounded hover:bg-muted/60 transition cursor-pointer"
                      onClick={() => remove(v)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          remove(v);
                        }
                      }}
                      aria-label={`Remove ${v}`}
                    >
                      <X className="h-3 w-3 opacity-70" />
                    </span>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <CommandEmpty className="py-6 text-center text-sm">No options found.</CommandEmpty>
          <CommandList className="max-h-64 overflow-auto">
            <CommandGroup>
              {options.map((opt) => {
                const checked = selected.has(opt);
                return (
                  <CommandItem
                    key={opt}
                    onSelect={() => toggle(opt)}
                    className="flex items-center gap-2"
                  >
                    <Checkbox checked={checked} onCheckedChange={() => toggle(opt)} />
                    <span className="truncate">{opt}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>

          <div className="flex justify-between border-t p-2">
            <Button size="sm" variant="ghost" onClick={clearAll} disabled={!values.length}>
              Clear
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              Done
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
