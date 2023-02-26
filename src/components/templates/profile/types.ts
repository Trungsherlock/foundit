import { TUser } from "../../../../types/user";
import { TProduct } from "types/product";
import { TIdea } from "types/idea";

export interface IProfile {
    user: TUser;
    products: TProduct[];
    ideas: TIdea[];
}

export type TSlide = {
    children: JSX.Element;
}