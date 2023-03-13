import { TWeb } from "../types/WebData";

export const ChangeStringToArray = (str: string) : (TWeb[] | undefined) => {
    console.log('str', str);
    let index = str.indexOf('[{');
    if (index === -1) return undefined;
    const match = str.substring(index);
    console.log(match);
    if (!match) return undefined;
    const arr = JSON.parse(match);
    return arr.map((obj: any) => {
      const { name, url, image, about } = obj;
      return { name, url, image, about };
    });
} 