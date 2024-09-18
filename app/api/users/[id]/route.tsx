import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })
  // if (params.id > 10) return NextResponse.json({ message: 'User not found' }, { status: 404 })
  if(!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user, {status: 200})
}
