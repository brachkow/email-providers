/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} url — url of web interface
 * @property {string} label — label that can be outputed into UI
 * @property {string[]} keywords — keyword that can be used to determine that email belongs to the provider
 */

/** @constant
 *  @type {Provider[]}
 */
export const PROVIDERS = [
  {
    id: "GMAIL",
    url: "https://mail.google.com/",
    label: "GMail",
    keywords: ["@gmail", "@googlemail"],
  },
  {
    id: "MAILRU",
    url: "https://e.mail.ru/inbox/",
    label: "Mail.ru",
    keywords: ["@mail.ru", "@bk.ru", "@inbox.ru", "@list.ru", "@internet.ru"],
  },
  {
    id: "FASTMAIL",
    url: "https://app.fastmail.com/mail/Inbox/",
    label: "Fastmail",
    keywords: ["@fastmail"],
  },
  {
    id: "OUTLOOK",
    url: "https://outlook.live.com/mail/",
    label: "Outlook",
    keywords: [
      "@outlook",
      "@hotmail",
      "@live.com",
      "@live.co.uk",
      "@live.fr",
      "@live.de",
      "@live.nl",
      "@live.it",
      "@live.ca",
      "@msn.com",
    ],
  },
  {
    id: "YAHOO",
    url: "https://mail.yahoo.com",
    label: "Yahoo",
    keywords: ["@yahoo", "@myyahoo", "@ymail.com", "@rocketmail.com"],
  },
  {
    id: "ZOHO",
    url: "https://mail.zoho.com",
    label: "Zoho",
    keywords: ["@zohomail", "@zoho.com"],
  },
  {
    id: "APPLE",
    url: "https://www.icloud.com/mail/",
    label: "iCloud Mail",
    keywords: ["@icloud", "@me.com", "@mac.com"],
  },
  {
    id: "PROTON",
    url: "https://mail.proton.me/",
    label: "Proton Mail",
    keywords: ["@proton.me", "@protonmail.com", "@protonmail.ch", "@pm.me"],
  },
  {
    id: "YANDEX",
    url: "https://mail.yandex.ru/",
    label: "Yandex Mail",
    keywords: ["@yandex", "@ya.ru", "@narod.ru"],
  },
  {
    id: "AOL",
    url: "https://mail.aol.com/",
    label: "AOL Mail",
    keywords: ["@aol.com", "@aim.com", "@verizon.net"],
  },
  {
    id: "GMX",
    url: "https://www.gmx.net/",
    label: "GMX",
    keywords: ["@gmx.de", "@gmx.net", "@gmx.at", "@gmx.ch", "@gmx.eu"],
  },
  {
    id: "GMX_COM",
    url: "https://www.gmx.com/",
    label: "GMX",
    keywords: ["@gmx.com", "@gmx.us"],
  },
  {
    id: "WEBDE",
    url: "https://web.de/",
    label: "WEB.DE",
    keywords: ["@web.de"],
  },
  {
    id: "TONLINE",
    url: "https://email.t-online.de/",
    label: "T-Online",
    keywords: ["@t-online.de", "@magenta.de"],
  },
  {
    id: "TUTA",
    url: "https://app.tuta.com/",
    label: "Tuta Mail",
    keywords: [
      "@tuta.com",
      "@tutamail.com",
      "@tutanota.com",
      "@tutanota.de",
      "@tuta.io",
      "@keemail.me",
    ],
  },
  {
    id: "MAILCOM",
    url: "https://www.mail.com/",
    label: "Mail.com",
    keywords: [
      "@mail.com",
      "@email.com",
      "@usa.com",
      "@consultant.com",
      "@myself.com",
      "@post.com",
      "@europe.com",
      "@asia.com",
      "@engineer.com",
      "@techie.com",
      "@dr.com",
      "@iname.com",
    ],
  },
  {
    id: "HEY",
    url: "https://app.hey.com/",
    label: "HEY",
    keywords: ["@hey.com"],
  },
  {
    id: "QQ",
    url: "https://mail.qq.com/",
    label: "QQ Mail",
    keywords: ["@qq.com", "@vip.qq.com", "@foxmail.com"],
  },
  {
    id: "NETEASE_163",
    url: "https://mail.163.com/",
    label: "163 Mail",
    keywords: ["@163.com"],
  },
  {
    id: "NETEASE_126",
    url: "https://mail.126.com/",
    label: "126 Mail",
    keywords: ["@126.com"],
  },
  {
    id: "NETEASE_YEAH",
    url: "https://mail.yeah.net/",
    label: "Yeah.net",
    keywords: ["@yeah.net"],
  },
  {
    id: "NAVER",
    url: "https://mail.naver.com/",
    label: "Naver Mail",
    keywords: ["@naver.com"],
  },
  {
    id: "DAUM",
    url: "https://mail.daum.net/",
    label: "Daum Mail",
    keywords: ["@daum.net", "@hanmail.net"],
  },
  {
    id: "SEZNAM",
    url: "https://email.seznam.cz/",
    label: "Seznam Email",
    keywords: ["@seznam.cz", "@email.cz", "@post.cz", "@spoluzaci.cz"],
  },
  {
    id: "LIBERO",
    url: "https://mail.libero.it/",
    label: "Libero Mail",
    keywords: ["@libero.it", "@iol.it", "@inwind.it", "@blu.it", "@giallo.it"],
  },
  {
    id: "ORANGE",
    url: "https://mail.orange.fr/",
    label: "Orange",
    keywords: ["@orange.fr", "@wanadoo.fr"],
  },
  {
    id: "FREE",
    url: "https://webmail.free.fr/",
    label: "Free",
    keywords: ["@free.fr"],
  },
  {
    id: "RAMBLER",
    url: "https://mail.rambler.ru/",
    label: "Rambler",
    keywords: [
      "@rambler.ru",
      "@lenta.ru",
      "@autorambler.ru",
      "@myrambler.ru",
      "@ro.ru",
      "@r0.ru",
    ],
  },
];

/**
 * Gets provider by id
 * @param {string} id - id of provider
 * @returns {(Provider | undefined)} — returns provider object if found, and undefined if not found
 */
export const getProvider = (id) =>
  PROVIDERS.find((provider) => provider.id === id); //#FIXME Completely rename to getProviderById in next version
export const getProviderById = getProvider;

/**
 * Gets provider from email
 * @param {string} email - email to search
 * @returns {(Provider | undefined)} — returns provider object if found, and undefined if not found
 */
export const getProviderByEmail = (email) =>
  PROVIDERS.find((provider) => {
    return provider.keywords.find((keyword) => email.includes(keyword));
  });

export default PROVIDERS;
