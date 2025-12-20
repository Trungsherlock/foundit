import {prisma} from 'lib/prismadb';
import {getSession} from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next'
import { SelectOption } from '@/components/modules/select/types';
import { Category, Type } from '@prisma/client';
import { SelectOption2 } from '@/components/templates/uploadIdeaDetails/types';
import { cache } from "lib/redis";
import { limiter } from 'lib/rate-limit';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const rateLimitPassed = await limiter.check(req, res, 10);
    if (!rateLimitPassed) return;

    if (req.method === 'POST') {
        try {
            const {title, description, feature, tags, type} = req.body;
            let categories: Category[] = [];
            tags.forEach((tag: SelectOption) => {
                categories.push(tag.value)
            });
            let typeOfProduct: Type[] = [type.value];
            const session = await getSession({req});
            if (!session) {
                res.status(401).json({message: 'Unauthorized'});
                return;
            }
            const authorId = session.user.id;
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
            await cache.del('ideas:all');
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