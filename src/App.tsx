import { useState, useCallback, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { SchemaBuilder, SchemaBuilderRef } from "./components/SchemaBuilder"
import { JsonPreview } from "./components/JsonPreview"
import { SchemaList } from "./components/SchemaList"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Save } from "lucide-react"
import { Toaster, toast } from "react-hot-toast"
import { AboutMe } from "./components/AboutMe"

interface SavedSchema {
  id: string
  name: string
  schema: any
  preview: string
  fields: any[]
}

function MainApp() {
  const [currentSchema, setCurrentSchema] = useState<any>({})
  const [currentFields, setCurrentFields] = useState<any[]>([{ name: "", type: "" }])
  const [savedSchemas, setSavedSchemas] = useState<SavedSchema[]>([])
  const [schemaName, setSchemaName] = useState("")
  const schemaBuilderRef = useRef<SchemaBuilderRef>(null)

  const saveSchema = () => {
    if (!schemaName.trim()) {
      toast.error("Write schema name first!", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      })
      return
    }

    if (Object.keys(currentSchema).length === 0) {
      toast.error("Add at least one field to save schema!", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      })
      return
    }

    const newSchema: SavedSchema = {
      id: Date.now().toString(),
      name: schemaName,
      schema: currentSchema,
      preview: JSON.stringify(currentSchema).slice(0, 50) + "...",
      fields: currentFields
    }

    setSavedSchemas(prev => [...prev, newSchema])
    setSchemaName("")
    setCurrentSchema({})
    setCurrentFields([{ name: "", type: "" }])
    schemaBuilderRef.current?.resetForm()
    toast.success(`Schema "${newSchema.name}" saved successfully!`, {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#10b981",
        color: "#fff",
      },
    })
  }

  const deleteSchema = (id: string) => {
    setSavedSchemas(prev => prev.filter(schema => schema.id !== id))
  }

  const loadSchema = (schema: SavedSchema) => {
    setCurrentSchema(schema.schema)
    setCurrentFields(schema.fields)
    setSchemaName(schema.name)
    schemaBuilderRef.current?.resetForm(schema.fields)
  }

  const handleSchemaChange = useCallback((schema: any, fields: any[]) => {
    setCurrentSchema(schema)
    setCurrentFields(fields)
  }, [])

  const clearForm = () => {
    setCurrentSchema({})
    setCurrentFields([{ name: "", type: "" }])
    setSchemaName("")
    schemaBuilderRef.current?.resetForm()
  }

  const isSchemaSaved = savedSchemas.some(schema => 
    schema.name === schemaName && 
    JSON.stringify(schema.schema) === JSON.stringify(currentSchema)
  )

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Toaster />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-7 space-y-8">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border-none p-8 transition-all">
              <SchemaBuilder ref={schemaBuilderRef} onSchemaChange={handleSchemaChange} addFieldButtonClass="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-cyan-400 focus:ring-2 focus:ring-blue-400 transition-all" />
              <div className="flex items-center gap-4 mt-8">
                <Input
                  placeholder="Schema name"
                  value={schemaName}
                  onChange={(e) => setSchemaName(e.target.value)}
                  className="max-w-xs bg-white/10 border-neutral-700 text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 rounded-xl transition-all"
                />
                <Button 
                  onClick={saveSchema} 
                  disabled={!schemaName.trim() || Object.keys(currentSchema).length === 0}
                  className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-400 hover:to-pink-400 focus:ring-2 focus:ring-purple-400 transition-all"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Schema
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-3 space-y-8">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border-none p-6 transition-all">
              <JsonPreview 
                schema={currentSchema} 
                onClear={clearForm}
                isSchemaSaved={isSchemaSaved}
              />
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border-none p-6 transition-all">
              <SchemaList schemas={savedSchemas} onDeleteSchema={deleteSchema} onLoadSchema={loadSchema} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  )
}

export default App
