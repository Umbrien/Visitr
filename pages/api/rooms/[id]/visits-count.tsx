import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../prisma/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  if (req.method === 'GET') {
    const visits = await prisma.visit.findMany({
    where: {
      room_id: parseInt(req.query.id as string),
    },
    })
    const isEnterVisits = visits.filter(visit => visit.is_enter === true);
    const isExitVisits = visits.filter(visit => visit.is_enter === false);
    const visitsCount = isEnterVisits.length - isExitVisits.length;
    res.json(visitsCount);
  }
}
