export async function GET(req) {
  return new Response(JSON.stringify({ message: "Hello World!" }), {
    headers: { 'Content-Type': 'application/json' },
  });
}