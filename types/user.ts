import {TIdea} from "./idea"
import { TProduct } from "./product";

export type TUser = {
    id: string;
    name: string;
    bio: string;
    facebook: string;
    twitter: string;
    email: string;
    instagram: string;
    createdAt: string;
    image: string;
    ideas: TIdea[];
    point: number;
    product: TProduct[]
}