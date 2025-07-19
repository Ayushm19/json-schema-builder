import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import toast from "react-hot-toast"

interface JsonPreviewProps {
  schema: any
  onClear: () => void
  isSchemaSaved: boolean
}

export function JsonPreview({ schema, onClear, isSchemaSaved }: JsonPreviewProps) {
  const handleClear = () => {
    if (!isSchemaSaved) {
      toast.error("Save schema first before clearing!", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      })
      return
    }
    
    onClear()
    toast.success("Form and preview cleared!", {
      duration: 2000,
      position: "top-right",
      style: {
        background: "#10b981",
        color: "#fff",
      },
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">JSON Preview</h2>
        <Button
          size="sm"
          onClick={handleClear}
          className="flex items-center gap-2 bg-transparent border border-neutral-700 text-white hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-all"
        >
          <Trash2 className="h-4 w-4" />
          Clear
        </Button>
      </div>
      <div className="rounded-lg border bg-muted/30 p-4 h-96 overflow-auto">
        <pre className="text-sm font-mono">
          <code>{JSON.stringify(schema, null, 2)}</code>
        </pre>
      </div>
    </div>
  )
} 