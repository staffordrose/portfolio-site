import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

import { outRoutes } from '@/common/data/projects/out-routes'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (!req.nextUrl.search) {
    let url = req.nextUrl.clone()
    url.search = `?p=${outRoutes.id}`
    return NextResponse.redirect(url)
  } else {
    return NextResponse.next()
  }
}
