import { TIdea } from "../types/idea"
import { Type } from "@prisma/client";

export const getRandomProductType = (data: TIdea) : (Type| undefined) => {
  if (data.type.length != 0) {
    return data.type[Math.floor(Math.random() * data.type.length)]
  }
  return undefined;
} 