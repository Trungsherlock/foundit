import { Category, Type } from "@prisma/client";

export type TProduct = {
    id: string,
    link?: string,
    title: string,
    type: Type[],
    brief: string,
    description: string,
    image: string[],
    vote: number,
    createdAt: string,
    updatedAt: string,
    authorId: string,
    author: string
    categories: Category[],
}
