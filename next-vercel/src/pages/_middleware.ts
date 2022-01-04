import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const basicAuth = req.headers.get('authorization')
  //HeaderにAuthorizationが定義されているかをチェック
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    // basic認証のUser/Passが、envファイルにある値と同じかをチェック
    if (user ===  process.env.NEXT_PUBLIC_USER && pwd === process.env.NEXT_PUBLIC_PASS) {
      return NextResponse.next()
    }
  }

  const ip = req.headers['x-forwarded-for'] as any


  // 同じでなければエラーを返す
  return new Response(ip, {
    status: 401
  })
}