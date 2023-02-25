import NextAuth from "next-auth";

// Extend the built-in session type

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
        };
    }
}

// model User {
//     uid           String    @id @default(cuid())
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
