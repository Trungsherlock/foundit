import { prisma } from "../../../lib/prismadb";

export default async function handler(req: any, res: any) {
    if (req.method === 'PUT') {
        try {
            const { id } = req.query;
            const { 
                name, 
                bio, 
                image, 
                twitter,
                instagram,
                facebook,
            } = req.body;
            console.log(req);
            const user = await prisma.user.update({
                where: { id },
                data: {
                    name,
                    bio,
                    image,
                    twitter,
                    instagram,
                    facebook
                },
            });
            res.status(200).json(user);
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
    
    // HTTP method not supported!
    else {
      res.setHeader('Allow', ['PUT']);
      res
        .status(405)
        .json({ message: `HTTP method ${req.method} is not supported.` });
    }
}