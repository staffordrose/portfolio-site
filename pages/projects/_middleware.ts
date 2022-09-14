import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (!req.nextUrl.search) {
    let url = req.nextUrl.clone()
    url.search = '?p=address-book'
    return NextResponse.redirect(url)
  } else {
    return NextResponse.next()
  }
}
