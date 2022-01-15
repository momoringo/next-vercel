import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const ip = req.headers.get('x-forwarded-for')

/*
  return new Response(ip, {
    status: 401
  })
*/
  return NextResponse.next()
}