import { TUser } from "../../../../types/user";

export type TCard = {
    className: string;
    item: {
        title: string; 
        price: string,
        highestBid: string,
        counter: string,
        bid: string,
        image: string,
        image2x: string,
        category: string,
        categoryText: string,
        url: string,
    }
}