import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Trash2, Plus } from "lucide-react"
import { useEffect, useCallback, useRef, useImperativeHandle, forwardRef } from "react"

interface SchemaField {
  name: string
  type: "string" | "number" | "float" | "boolean" | "objectId" | "nested" | ""
  children?: SchemaField[]
}

interface SchemaForm {
  fields: SchemaField[]
}

interface SchemaBuilderProps {
  onSchemaChange: (schema: any, fields: SchemaField[]) => void
  addFieldButtonClass?: string
}

export interface SchemaBuilderRef {
  resetForm: (fields?: SchemaField[]) => void
}

export const SchemaBuilder = forwardRef<SchemaBuilderRef, SchemaBuilderProps>(({ onSchemaChange, addFieldButtonClass }, ref) => {
  const { control, watch, setValue, register, reset } = useForm<SchemaForm>({
    defaultValues: {
      fields: [{ name: "", type: "" }]
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fields } = useFieldArray({
    control,
    name: "fields"
  })

  const watchedFields = watch("fields")
  const onSchemaChangeRef = useRef(onSchemaChange)

  useEffect(() => {
    onSchemaChangeRef.current = onSchemaChange
  }, [onSchemaChange])

  useImperativeHandle(ref, () => ({
    resetForm: (fields?: SchemaField[]) => {
      reset({ fields: fields || [{ name: "", type: "" }] })
    }
  }), [reset])

  const buildJsonSchema = useCallback((fields: SchemaField[]): any => {
    const schema: any = {}
    fields.forEach(field => {
      if (field.name) {
        if (field.type === "nested" && field.children) {
          schema[field.name] = buildJsonSchema(field.children)
        } else if (field.type === "string") {
          schema[field.name] = "STRING"
        } else if (field.type === "number") {
          schema[field.name] = "number"
        } else if (field.type === "float") {
          schema[field.name] = "float"
        } else if (field.type === "boolean") {
          schema[field.name] = "boolean"
        } else if (field.type === "objectId") {
          schema[field.name] = "ObjectId"
        }
      }
    })
    return schema
  }, [])

  useEffect(() => {
    const schema = buildJsonSchema(watchedFields)
    onSchemaChangeRef.current(schema, watchedFields)
  }, [watchedFields, buildJsonSchema])

  function updateFieldTypeAtPath(path: number[], type: "string" | "number" | "float" | "boolean" | "objectId" | "nested") {
    const updatedFields = JSON.parse(JSON.stringify(watchedFields))
    let ref = updatedFields
    for (let i = 0; i < path.length - 1; i++) {
      ref = ref[path[i]].children
    }
    const idx = path[path.length - 1]
    ref[idx] = { ...ref[idx], type }
    if (type === "nested" && !ref[idx].children) {
      ref[idx].children = [{ name: "", type: "" }]
    }
    setValue("fields", updatedFields)
  }

  function addFieldAtPath(path: number[]) {
    const updatedFields = JSON.parse(JSON.stringify(watchedFields))
    let ref = updatedFields
    for (let i = 0; i < path.length; i++) {
      ref = ref[path[i]].children
    }
    ref.push({ name: "", type: "" })
    setValue("fields", updatedFields)
  }

  function removeFieldAtPath(path: number[]) {
    const updatedFields = JSON.parse(JSON.stringify(watchedFields))
    let ref = updatedFields
    for (let i = 0; i < path.length - 1; i++) {
      ref = ref[path[i]].children
    }
    ref.splice(path[path.length - 1], 1)
    setValue("fields", updatedFields)
  }

  function renderFields(fields: SchemaField[], path: number[] = [], level = 0) {
    return fields.map((field, idx) => {
      const currentPath = [...path, idx]
      const fieldPath = currentPath.flatMap((i, d) => d === 0 ? [i] : ["children", i])
      const registerPath = `fields.${fieldPath.join(".")}.name`
      return (
        <div key={currentPath.join("-")} className="space-y-3">
          <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 shadow-inner border border-neutral-800 transition-all">
            {/* @ts-ignore */}
            <Input
              placeholder="Field name"
              {...register(registerPath as any)}
              className="flex-1 bg-transparent border-neutral-700 text-white placeholder-neutral-400 focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 rounded-lg transition-all"
            />
            <Select
              value={field.type || ""}
              onValueChange={(value: "string" | "number" | "float" | "boolean" | "objectId" | "nested") => updateFieldTypeAtPath(currentPath, value)}
            >
              <SelectTrigger className="w-32 bg-transparent border-neutral-700 text-white focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 rounded-lg transition-all">
                <SelectValue placeholder="Field Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#18181b] border-neutral-700 text-white rounded-lg">
                <SelectItem value="string">string</SelectItem>
                <SelectItem value="number">number</SelectItem>
                <SelectItem value="float">float</SelectItem>
                <SelectItem value="boolean">boolean</SelectItem>
                <SelectItem value="objectId">objectId</SelectItem>
                <SelectItem value="nested">nested</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeFieldAtPath(currentPath)}
              className="rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white hover:scale-105 focus:ring-2 focus:ring-pink-400 transition-all"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          {field.type === "nested" && field.children && (
            <div className="ml-6 space-y-3 border-l-2 border-neutral-800 pl-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-neutral-300 tracking-wide uppercase">Nested fields</span>
                <Button onClick={() => addFieldAtPath(currentPath)} size="sm" className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-cyan-400 focus:ring-2 focus:ring-blue-400 transition-all">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Field
                </Button>
              </div>
              {renderFields(field.children, currentPath, level + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-wide text-white drop-shadow">Schema Fields</h2>
        <Button onClick={() => addFieldAtPath([])} size="sm" className={addFieldButtonClass || "rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-cyan-400 focus:ring-2 focus:ring-blue-400 transition-all"}>
          <Plus className="h-4 w-4 mr-2" />
          Add Field
        </Button>
      </div>
      <div className="space-y-3">
        {renderFields(fields)}
      </div>
    </div>
  )
}) 