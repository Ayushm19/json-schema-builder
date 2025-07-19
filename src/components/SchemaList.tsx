import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"

interface SavedSchema {
  id: string
  name: string
  schema: any
  preview: string
  fields: any[]
}

interface SchemaListProps {
  schemas: SavedSchema[]
  onDeleteSchema: (id: string) => void
  onLoadSchema: (schema: SavedSchema) => void
}

export function SchemaList({ schemas, onDeleteSchema, onLoadSchema }: SchemaListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Saved Schemas</h2>
      <div className="space-y-3">
        {schemas.map((schema) => (
          <Card 
            key={schema.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onLoadSchema(schema)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{schema.name}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteSchema(schema.id)
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{schema.preview}</p>
            </CardContent>
          </Card>
        ))}
        {schemas.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No saved schemas yet</p>
          </div>
        )}
      </div>
    </div>
  )
} 