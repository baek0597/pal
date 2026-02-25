"use client"

import { useState } from "react"
import { Download, FileArchive, CheckCircle } from "lucide-react"

const FILE_URL =
  "https://github.com/baek0597/pal/raw/main/global pal.zip"
const FILE_NAME = "global pal.zip"

export function FileDownloadView() {
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    const a = document.createElement("a")
    a.href = FILE_URL
    a.download = FILE_NAME
    a.target = "_blank"
    a.rel = "noopener noreferrer"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    setTimeout(() => {
      setDownloading(false)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000)
    }, 1500)
  }

  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
          <FileArchive className="h-10 w-10 text-primary" />
        </div>

        {/* Title */}
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground text-balance">
          File Download
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground text-pretty">
          Download the Global PAL resource pack. Click the button below to start
          downloading.
        </p>

        {/* File card */}
        <div className="mx-auto mb-6 flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <FileArchive className="h-6 w-6 text-primary" />
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate text-sm font-medium text-foreground">
              {FILE_NAME}
            </p>
            <p className="text-xs text-muted-foreground">ZIP Archive</p>
          </div>
        </div>

        {/* Download button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
        >
          {downloading ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Downloading...
            </>
          ) : downloaded ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Downloaded
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              Download
            </>
          )}
        </button>
      </div>
    </div>
  )
}
