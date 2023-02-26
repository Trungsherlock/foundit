import { Category, Type } from "@prisma/client";

export type TIdea = {
    id: string,
    title: string,
    type: Type[],
    description: string,
    feature: string,
    createdAt: string,
    updatedAt: string,
    authorId: string,
    author: string,
    categories: Category[],
    likeAuthor: string[]
}
