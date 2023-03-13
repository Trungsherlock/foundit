import { TWeb } from "../types/WebData";

export const ChangeStringToArray = (str: string) : (TWeb[] | string) => {
    console.log('str', str);
    const message = "I'm sorry, I cannot generate your results. Can you please provide me with more information?"
    let index1 = str.indexOf('[');
    let index2 = str.indexOf(']');
    if (index1 === -1) return message;

    const match = str.substring(index1, index2+1);
    console.log(match);
    if (!match) return message;
    const arr = JSON.parse(match);
    return arr.map((obj: any) => {
      const { name, url, about } = obj;
      return { name, url, about };
    });
} 