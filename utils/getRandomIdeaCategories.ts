import {TIdea} from "../types/idea"
import { Category } from "@prisma/client";


  export const getRandomProductCategories = (data: TIdea, limit: number) : (Category[] | undefined) => {
    if (data.categories.length <= limit) return data.categories;
    let rdata: Category[] = [];
    let index: number[] = [];
    let i = 0;
    while (i < limit) {
        let randomIndex = Math.floor(Math.random() * data.categories.length)
        if (!index.includes(randomIndex)) {
            index.push(randomIndex);
            rdata.push(data.categories[randomIndex]);
            i++;
        }
    }
    return rdata;
} 