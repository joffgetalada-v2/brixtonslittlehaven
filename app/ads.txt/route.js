import { adsense } from '@/content/site';

// Serves /ads.txt once the AdSense publisher ID is configured in content/site.js.
// While the ID is blank this responds 404, which is the correct pre-approval state
// (an empty or malformed ads.txt would trigger AdSense warnings).
export function GET() {
  if (!adsense.publisherId) {
    return new Response('Not found', { status: 404 });
  }
  const id = adsense.publisherId.replace(/^ca-/, ''); // ads.txt wants pub-..., not ca-pub-...
  return new Response(`google.com, ${id}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}

// Deliberately dynamic: a statically-exported Response loses its 404 status,
// which would serve crawlers a bogus 200 "Not found" body as ads.txt.
