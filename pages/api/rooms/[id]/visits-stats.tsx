import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../prisma/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  if (req.method === 'GET') {
  const date = new Date();
  const datesToFetch = [];
  date.setDate(date.getDate() + 1);
  for (let i = 0; i < 10; i++) {
    date.setDate(date.getDate() - 1);
    datesToFetch.push(new Date(date));
  }

  const datesVisits = await Promise.all(datesToFetch.map(async (date) => {
    const visits = await prisma.visit.findMany({
      where: {
        room_id: parseInt(req.query.id as string),
        creation: {
          gte: new Date(date),
          lte: new Date(date.setDate(date.getDate() + 1)),
        },
      },
      select: {
        creation: true,
        is_enter: true,
      },
      orderBy: {
        creation: 'desc',
      },
    });

    const isEnterVisits = visits.filter(visit => visit.is_enter === true);
    const visitsCount = isEnterVisits.length;
    return {
      date: date,
      count: visitsCount,
    }
  }));

  res.json(datesVisits)
  }
}
