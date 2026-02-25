"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  Download,
  Globe,
  Sparkles,
  FileText,
  Menu,
  X,
} from "lucide-react"
import { chapters } from "@/lib/prompt-data"
import { cn } from "@/lib/utils"
import type { ViewMode } from "@/app/page"

interface SidebarProps {
  viewMode: ViewMode
  selectedChapter: string | null
  selectedSection: string | null
  onSelectSection: (chapterId: string, section: string) => void
  onSelectWebsite: () => void
  onSelectFileDownload: () => void
}

export function Sidebar({
  viewMode,
  selectedChapter,
  selectedSection,
  onSelectSection,
  onSelectWebsite,
  onSelectFileDownload,
}: SidebarProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(["ch2"])
  const [promptExpanded, setPromptExpanded] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleChapter = (id: string) => {
    setExpandedChapters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const handleSelectSection = (chapterId: string, section: string) => {
    onSelectSection(chapterId, section)
    setMobileOpen(false)
  }

  const sidebarContent = (
    <nav className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 border-b border-sidebar-border px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <h1 className="text-base font-semibold tracking-tight text-foreground">
          Prompt Hub
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        {/* File Download */}
        <button
          onClick={() => {
            onSelectFileDownload()
            setMobileOpen(false)
          }}
          className={cn(
            "mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
            viewMode === "filedownload"
              ? "bg-primary/15 font-medium text-primary"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          <Download className="h-4 w-4" />
          <span>File Download</span>
        </button>

        {/* Website */}
        <button
          onClick={() => {
            onSelectWebsite()
            setMobileOpen(false)
          }}
          className={cn(
            "mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
            viewMode === "website"
              ? "bg-primary/15 font-medium text-primary"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          <Globe className="h-4 w-4" />
          <span>Website</span>
        </button>

        {/* Prompt - Expandable */}
        <div className="mt-1">
          <button
            onClick={() => setPromptExpanded(!promptExpanded)}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <FileText className="h-4 w-4 text-primary" />
            <span>Prompt</span>
            <ChevronDown
              className={cn(
                "ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200",
                !promptExpanded && "-rotate-90"
              )}
            />
          </button>

          {promptExpanded && (
            <div className="ml-3 mt-1 border-l border-border pl-3">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="mb-1">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {expandedChapters.includes(chapter.id) ? (
                      <ChevronDown className="h-3 w-3 shrink-0" />
                    ) : (
                      <ChevronRight className="h-3 w-3 shrink-0" />
                    )}
                    <span className="truncate">{chapter.title}</span>
                  </button>

                  {expandedChapters.includes(chapter.id) && (
                    <div className="ml-3 space-y-0.5 border-l border-border/50 pl-2">
                      {chapter.sections.map((section) => {
                        const isActive =
                          selectedChapter === chapter.id &&
                          selectedSection === section
                        return (
                          <button
                            key={section}
                            onClick={() =>
                              handleSelectSection(chapter.id, section)
                            }
                            className={cn(
                              "flex w-full items-center rounded-md px-2 py-1.5 text-xs transition-all duration-150",
                              isActive
                                ? "bg-primary/15 font-medium text-primary"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                          >
                            <span className="truncate">{section}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border px-5 py-4">
        <p className="text-[10px] text-muted-foreground">
          AI Prompt Collection v1.0
        </p>
      </div>
    </nav>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border text-foreground md:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-dvh w-72 border-r border-sidebar-border bg-sidebar transition-transform duration-300 md:static md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
