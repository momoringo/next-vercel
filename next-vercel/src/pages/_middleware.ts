import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
    // basic認証のUser/Passが、envファイルにある値と同じかをチェック
  const ip = req.headers.get('x-forwarded-for')
  if (ip && ip === process.env.IP) {
    return NextResponse.next()
  }


  // 同じでなければエラーを返す
  return new Response(ip, {
    status: 401
  })
}