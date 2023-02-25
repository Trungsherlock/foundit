import {prisma} from '../../lib/prismadb';
import {getSession} from 'next-auth/react';
import { SelectOption } from '@/components/modules/select/types';


export default async function handler(
    req: any,
    res: any
) {
    if (req.method === 'POST') {
        try {
            const {title, description, feature, tags} = req.body;
            const categories = tags.map((tag: any) => {
                return {name: tag.label}
            });
            console.log(tags);
            const session = await getSession({req});
            console.log(session);
            if (!session) {
                res.status(401).json({message: 'Unauthorized'});
                return;
            }
            const authorId = "12";
            const result = await prisma.idea.create({
                data: {
                    title,
                    description,
                    feature,
                    author: { connect: { id: authorId } },
                    // categories: {
                    //     connectOrCreate: categories.map((category: SelectOption) => ({
                    //         where: {name: category.name},
                    //         create: {name: category.name}
                    //     }))
                    // },  
                }
                
            });
            console.log(result);
            res.status(200).json(result);
        }
        catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }

    else {
		res.setHeader('Allow', ['POST'])
		res
			.status(405)
			.json({ message: `HTTP method ${req.method} is not supported.` })
	}
    
}