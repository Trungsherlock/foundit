import {prisma} from '../../../lib/prismadb';
import {getSession} from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Category, Type } from '@prisma/client';
import { TProduct } from 'types/product';
import { SelectOption } from '@/components/modules/select/types';
import { cache } from "../../../lib/redis";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const {title, type, brief, description, link, image, categories} = req.body;
            let cate: Category[] = [];
            categories.forEach((tag: SelectOption) => {
                cate.push(tag.value)
            });
            let typeOfProduct: Type[] = [type.value];
            const session = await getSession({req});
            if (!session) {
                res.status(401).json({message: 'Unauthorized'});
                return;
            }
            const authorId = session.user.id;
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

            await cache.del('products:all');
            res.status(200).json(result);
        }
        catch (e) {
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