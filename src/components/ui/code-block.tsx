"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ 
  code, 
  language = "text", 
  className,
  showLineNumbers = true 
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = async () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error("Failed to copy code:", error)
    }
  }

  const lines = code.split('\n')

  return (
    <div className={cn("relative group", className)}>
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between bg-slate-800 text-slate-300 px-4 py-2 text-sm rounded-t-lg">
        <span className="font-medium">{language}</span>
        {isClient && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-8 px-2 text-slate-300 hover:text-white hover:bg-slate-700"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </>
            )}
          </Button>
        )}
      </div>
      
      {/* Code content */}
      <div className="bg-slate-900 rounded-b-lg overflow-x-auto">
        <pre className="p-4 text-sm">
          <code className={`language-${language} text-slate-200`}>
{isClient && showLineNumbers ? (
              <div className="flex">
                <div className="select-none text-slate-500 pr-4 text-right min-w-[3rem]">
                  {lines.map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>
                <div className="flex-1">
                  {lines.map((line, index) => (
                    <div key={index}>{line || '\u00A0'}</div>
                  ))}
                </div>
              </div>
            ) : (
              <div>{code}</div>
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}