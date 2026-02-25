"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ContentArea } from "@/components/content-area"

export type ViewMode = "home" | "prompt" | "website" | "filedownload"

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("home")
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  const handleSelectSection = (chapterId: string, section: string) => {
    setViewMode("prompt")
    setSelectedChapter(chapterId)
    setSelectedSection(section)
  }

  const handleSelectWebsite = () => {
    setViewMode("website")
    setSelectedChapter(null)
    setSelectedSection(null)
  }

  const handleSelectFileDownload = () => {
    setViewMode("filedownload")
    setSelectedChapter(null)
    setSelectedSection(null)
  }

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-background">
      <Sidebar
        viewMode={viewMode}
        selectedChapter={selectedChapter}
        selectedSection={selectedSection}
        onSelectSection={handleSelectSection}
        onSelectWebsite={handleSelectWebsite}
        onSelectFileDownload={handleSelectFileDownload}
      />
      <main className="flex-1 overflow-hidden">
        <ContentArea
          viewMode={viewMode}
          selectedChapter={selectedChapter}
          selectedSection={selectedSection}
        />
      </main>
    </div>
  )
}
