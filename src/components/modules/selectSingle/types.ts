import { Category, Type } from "@prisma/client"
import { SelectOption2 } from "@/components/templates/uploadIdeaDetails/types"

// export type SelectOption = {
//     label: string
//     value: Type
// }
  
export type MultipleSelectProps = {
    multiple: true
    value: SelectOption2[]
    onChange: (value: SelectOption2[]) => void
}
  
export type SingleSelectProps = {
    multiple?: false
    value?: SelectOption2
    onChange: (value: SelectOption2 | undefined) => void
}
  
export type SelectProps = {
    options: SelectOption2[]
} & (SingleSelectProps | MultipleSelectProps)