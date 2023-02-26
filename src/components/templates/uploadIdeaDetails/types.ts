import { Category, Type } from "@prisma/client";

export type SelectOption1 = {
    label: string
    value: Category
}

export type SelectOption2 = {
    label: string
    value: Type
}
