import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prisma'


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
  } else if (req.method == 'PUT') {
    const room = await prisma.room.update({
      where: {
        id: Number(req.query.id),
      },
      data: {
        name: req.body.name,
        max_capacity: req.body.max_capacity,
      },
    })
    res.json(room)
  }
}
