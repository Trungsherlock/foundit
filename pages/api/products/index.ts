import {prisma} from '../../../lib/prismadb';
import {getSession} from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { SelectOption } from 'src/components/modules/select/types';
import { Category } from '@prisma/client';
import { TProduct } from 'types/product';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const {title, type, brief, description, link} = req.body as TProduct;
            let categories: Category[] = [];
            console.log("title", title);
            const session = await getSession({req});
            console.log(session);
            if (!session) {
                res.status(401).json({message: 'Unauthorized'});
                return;
            }
            const authorId = session.user.id;
            console.log("author", authorId);
            const result = await prisma.product.create({
                data: {
                    title,
                    type,
                    brief,
                    description,
                    link,
                    author: { connect: { id: authorId } },
                    categories
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