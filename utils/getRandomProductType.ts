import { TProduct } from "../types/product"
import { Type } from "@prisma/client";

export const getRandomProductType = (data: TProduct) : Type => {
  let type = Type.AI;
  if (data.type.length != 0) {
    return data.type[Math.floor(Math.random() * data.type.length)]
  }

  return type;
} 