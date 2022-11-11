import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const rooms = await prisma.room.findMany()
    res.json(rooms)
  } else if (req.method === 'POST') {
    const room = await prisma.room.create({
      data: {
        name: req.body.name,
        max_capacity: req.body.max_capacity,
      },
    })
    res.json(room)
  }
}
