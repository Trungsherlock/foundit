import {prisma} from '../../../lib/prismadb';
import {getSession} from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Category, Type } from '@prisma/client';
import { TProduct } from 'types/product';
import { SelectOption } from '@/components/modules/select/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const {title, type, brief, description, link, image, categories} = req.body;
            let cate: Category[] = [];
            console.log("title", title);
            categories.forEach((tag: SelectOption) => {
                cate.push(tag.value)
            });
            let typeOfProduct: Type = type.value;
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
                    type: typeOfProduct,
                    brief,
                    description,
                    link,
                    image,
                    author: { connect: { id: authorId } },
                    categories: cate
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