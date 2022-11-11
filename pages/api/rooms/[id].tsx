import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const room = await prisma.room.findUnique({
        where: {
            id: Number(req.query.id),
        },
    })
    res.json(room)
  }
}
