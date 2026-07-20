import { PROVIDERS } from "../index.js";

// Real browser UA: several providers bot-block default client agents.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

// Accept-Encoding is mandatory: Microsoft's edge answers 417 without it, and
// libcurl (which hurl uses) omits it by default.
const request = (name, url) => `# ${name}
GET ${url}
Accept-Encoding: gzip, deflate, br
User-Agent: ${USER_AGENT}
[Options]
location: true
HTTP 200
`;

const webmail = PROVIDERS.map(({ id, url }) => request(id, url));

// Not every app is on Google Play, but the package name still resolves on a
// device that installed it elsewhere — so these are checked against the store
// that actually carries them rather than dropped.
const STORES = {
  "ru.rambler.mail": "https://www.rustore.ru/catalog/app/ru.rambler.mail",
  "com.netease.mail": "https://app.mi.com/details?id=com.netease.mail",
};

const storeUrl = (pkg) =>
  STORES[pkg] ?? `https://play.google.com/store/apps/details?id=${pkg}`;

// A missing listing 404s, so a package name typo shows up as a failing check.
// Google throttles under load and 404s spuriously, though — re-run a red
// result by hand before deleting a package name over it.
const packages = [
  ...new Set(
    PROVIDERS.map((provider) => provider.app?.android).filter(Boolean),
  ),
];

const stores = packages.map((pkg) => request(pkg, storeUrl(pkg)));

process.stdout.write([...webmail, ...stores].join("\n"));
