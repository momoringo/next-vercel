import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
    // basic認証のUser/Passが、envファイルにある値と同じかをチェック


  // 同じでなければエラーを返す
  return new Response('testes', {
    status: 401
  })
}