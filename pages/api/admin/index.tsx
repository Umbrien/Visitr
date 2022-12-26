import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/prisma'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  if (req.method === 'GET') {
    const rooms = await prisma.admin.findMany()
    res.json(rooms)
  } else if (req.method === 'POST') {
    const room = await prisma.admin.create({
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
