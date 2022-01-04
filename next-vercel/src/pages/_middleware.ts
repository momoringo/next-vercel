import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const basicAuth = req.headers.get('authorization')
  //HeaderにAuthorizationが定義されているかをチェック
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    // basic認証のUser/Passが、envファイルにある値と同じかをチェック
    const ip = req.headers.get('x-forwarded-for')
    if (ip && ip === process.env.IP) {
      return NextResponse.next()
    }
  }


  // 同じでなければエラーを返す
  return new Response('not access', {
    status: 401
  })
}