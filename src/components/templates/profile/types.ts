import { TUser } from "../../../../types/user";

export interface IProfile {
    user: TUser;
}

export type TSlide = {
    children: JSX.Element;
}