import {TIdea} from "./idea"

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
}