import {prisma} from '../../../lib/prismadb';
import {getSession} from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { SelectOption } from '@/components/modules/select/types';
import { Category, Type } from '@prisma/client';
import { SelectOption2 } from '@/components/templates/uploadIdeaDetails/types';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const {title, description, feature, tags, type} = req.body;
            let categories: Category[] = [];
            tags.forEach((tag: SelectOption) => {
                categories.push(tag.value)
            });
            let typeOfProduct: Type = type.value;
            console.log("title", title);
            const session = await getSession({req});
            console.log(session);
            if (!session) {
                res.status(401).json({message: 'Unauthorized'});
                return;
            }
            const authorId = session.user.id;
            console.log("author", authorId);
            const result = await prisma.idea.create({
                data: {
                    title,
                    description,
                    feature,
                    author: { connect: { id: authorId } },
                    categories, 
                    type: typeOfProduct
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