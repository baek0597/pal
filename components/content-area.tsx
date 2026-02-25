"use client"

import { getPromptsBySection, chapters } from "@/lib/prompt-data"
import { PromptCard } from "@/components/prompt-card"
import { WebsiteList } from "@/components/website-list"
import { FileDownloadView } from "@/components/file-download"
import { FileText, Sparkles } from "lucide-react"
import type { ViewMode } from "@/app/page"

interface ContentAreaProps {
  viewMode: ViewMode
  selectedChapter: string | null
  selectedSection: string | null
}

export function ContentArea({
  viewMode,
  selectedChapter,
  selectedSection,
}: ContentAreaProps) {
  if (viewMode === "website") {
    return <WebsiteList />
  }

  if (viewMode === "filedownload") {
    return <FileDownloadView />
  }

  if (!selectedChapter || !selectedSection) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
          <Sparkles className="h-10 w-10 text-primary" />
        </div>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground text-balance">
          Welcome to Global PAL
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
          Select a section from the sidebar to browse prompts.
          Each prompt can be copied to your clipboard with a single click.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {chapters.map((ch) => (
            <div
              key={ch.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <FileText className="h-4 w-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-foreground">
                  {ch.title}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {ch.prompts.length} prompts
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const prompts = getPromptsBySection(selectedChapter, selectedSection)
  const chapter = chapters.find((c) => c.id === selectedChapter)

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-3xl px-6 py-8 md:px-10 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {chapter?.title}
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance">
            {selectedSection}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {prompts.length} prompt{prompts.length !== 1 ? "s" : ""} in this
            section
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-5">
          {prompts.map((prompt, idx) => (
            <PromptCard key={idx} text={prompt.text} index={idx + 1} />
          ))}
        </div>

        {prompts.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
            <FileText className="mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              No prompts found in this section
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
