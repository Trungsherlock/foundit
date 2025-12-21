import type { NextApiRequest, NextApiResponse } from 'next';

type ReadyResponse = {
    ready: boolean
    timestamp: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ReadyResponse>
) {
    res.status(200).json({
        ready: true,
        timestamp: new Date().toISOString()
    })
}