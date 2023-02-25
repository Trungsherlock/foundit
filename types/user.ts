import {TIdea} from "./idea"

// model User {
//     id            String    @id @default(cuid())
//     name          String?
//     bio           String?
//     facebook      String?
//     instagram     String?
//     twitter       String?
//     email         String?   @unique
//     emailVerified DateTime?
//     image         String?
//     point         Int       @default(0)
//     createdAt     DateTime  @default(now())
//     accounts      Account[]
//     sessions      Session[]
//     ideas         Idea[]
//     products      Product[]
//   }

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