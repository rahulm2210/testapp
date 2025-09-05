// middleware.js

import { NextResponse } from 'next/server';

export const config = {
  matcher: '/DndDraggableExample.jsx',
};

export function middleware(request) {
  const response = NextResponse.next();

  // Add CORS and JS MIME headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Content-Type', 'application/javascript');

  return response;
}
