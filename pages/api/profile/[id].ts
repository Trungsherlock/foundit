import { prisma } from "../../../lib/prismadb";

export default async function handler(req: any, res: any) {
    // Get the home's onwer
    if (req.method === 'GET') {
      try {
        const { id } = req.query;
        const user = await prisma.user.findUnique({
          where: { id },
        });
        res.status(200).json(user);
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
    // HTTP method not supported!
    else {
      res.setHeader('Allow', ['GET']);
      res
        .status(405)
        .json({ message: `HTTP method ${req.method} is not supported.` });
    }
}

