// middleware.js

export const config = {
  matcher: '/DndDraggableExample.jsx',
}

export default function middleware(request) {
  const response = new Response(/* file content */, {
    headers: {
      'Content-Type': 'application/javascript',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return response;
}
