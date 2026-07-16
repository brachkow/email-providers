import { PROVIDERS } from "../index.js";

// Real browser UA: several providers bot-block default client agents.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

// Accept-Encoding is mandatory: Microsoft's edge answers 417 without it, and
// libcurl (which hurl uses) omits it by default.
const request = ({ id, url }) => `# ${id}
GET ${url}
Accept-Encoding: gzip, deflate, br
User-Agent: ${USER_AGENT}
[Options]
location: true
HTTP 200
`;

process.stdout.write(PROVIDERS.map(request).join("\n"));
