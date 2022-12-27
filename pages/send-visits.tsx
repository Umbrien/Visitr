import { useState } from 'react';
import { prisma } from '../prisma/prisma';
import { API_URL } from '../utils/constants';

export async function getServerSideProps() {
  const visits = await prisma.visit.findMany({
  where: {
    room_id: 1,
  },
  })
  const isEnterVisits = visits.filter(visit => visit.is_enter === true);
  const isExitVisits = visits.filter(visit => visit.is_enter === false);
  const visitsCount = isEnterVisits.length - isExitVisits.length;

  return {
    props: {
      visitsCount
    }
  }
}

function VisitButton({onClick, variant, children}: {
  onClick: () => void,
  variant: 'primary' | 'secondary',
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <button className={`h-screen w-full text-white font-bold py-2 px-4 rounded
      ${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-yellow-500 hover:bg-yellow-700'}
      `}
      onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default function SendVisits({visitsCount}: {visitsCount: number}) {
  const [visits, setVisits] = useState(visitsCount);
  function enter() {
    fetch(`${API_URL}/api/visits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room_id: 1,
        is_enter: true
      })
    }).then(res => {
      if (res.ok) {
        setVisits(v => v + 1);
      }
    })
  }

  function exit() {
    fetch(`${API_URL}/api/visits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room_id: 1,
        is_enter: false
      })
    }).then(res => {
      if (res.ok) {
        setVisits(v => v - 1);
      }
    })
  }

  return (
    <div className="">
      <h1 className="text-7xl">Send Visits: {visits}</h1>
      <div className="flex justify-center w-screen">
      <VisitButton onClick={enter} variant="primary">Enter</VisitButton>
      <VisitButton onClick={exit} variant="secondary">Exit</VisitButton>
      </div>
    </div>
  )
}