/*model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String? @db.Text
  access_token       String? @db.Text
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String? @db.Text
  session_state      String?
  oauth_token_secret String?
  oauth_token        String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}*/
export type TUser = {
    id: string;
    //userId:string;
    //type: string;
    //provider: string;
    //providerAccountId: string;
    name: string;
    address: string; // Wallet address of user
    avatar: string;
    bio: string;
    facebook: string;
    twitter: string;
    instagram: string;
    createdAt: string;
}