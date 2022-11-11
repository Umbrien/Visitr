import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const visits = await prisma.visit.findMany()
    res.json(visits)
  } else if (req.method == 'POST') {
    const visit = await prisma.visit.create({
      data: {
        room_id: req.body.room_id,
        is_enter: req.body.is_enter,
        creation: req.body.creation,
      },
    })
    res.json(visit)
  }
}
