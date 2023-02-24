import { Category } from "@prisma/client";

export type SelectOption = {
    label: string
    value: Category
}

export type TRoyaltiesMap = {
    [key: string]: number;
}