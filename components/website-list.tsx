"use client"

import { websites } from "@/lib/prompt-data"
import { ExternalLink, Globe } from "lucide-react"

export function WebsiteList() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-3xl px-6 py-8 md:px-10 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              Resources
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance">
            AI Website Collection
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {websites.length} curated AI tools and services
          </p>
        </div>

        {/* Website List */}
        <div className="space-y-2">
          {websites.map((site, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30 hover:bg-card/80"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-semibold text-muted-foreground">
                {idx + 1}
              </span>

              <div className="flex min-w-0 flex-1 items-center gap-2">
                <Globe className="hidden h-4 w-4 shrink-0 text-primary sm:block" />
                <span className="font-semibold text-foreground">
                  {site.name}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground">
                  ({site.category})
                </span>
              </div>

              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1.5 text-sm text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
              >
                <span className="hidden truncate sm:inline">{site.url}</span>
                <span className="sm:hidden">Open</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
