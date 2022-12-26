import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prisma'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  if (req.method === 'GET') {
    const rooms = await prisma.admin.findUnique({
      where: {
        id: parseInt(req.query.id as string),
      },
    })
    res.json(rooms)
  } else if (req.method === 'DELETE') {
    const room = await prisma.admin.delete({
      where: {
        id: parseInt(req.body.id as string),
      },
    })
    res.json(room)
  } else if (req.method === 'PUT') {
    const room = await prisma.admin.update({
      where: {
        id: parseInt(req.body.id as string),
      },
      data: {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        email: req.body.email,
        phone: req.body.phone,
      },
    })
    res.json(room)
  }
}
