"use client"

import { useState, useCallback } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface PromptCardProps {
  text: string
  index: number
}

export function PromptCard({ text, index }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [text])

  return (
    <div className="group relative rounded-lg border border-border bg-card transition-all duration-200 hover:border-primary/30">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-muted-foreground">
          {"Prompt #"}{index}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200",
            copied
              ? "bg-primary/20 text-primary"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          )}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-foreground/90">
          {text}
        </pre>
      </div>
    </div>
  )
}
