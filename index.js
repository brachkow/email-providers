/**
 * @typedef {Object} ProviderApp
 * @property {string | null} ios — url scheme that opens the app on iOS
 * @property {string | null} android — package name (Play Store id) of the app
 */

/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} url — url of web interface
 * @property {string} label — label that can be outputed into UI
 * @property {string[]} keywords — keyword that can be used to determine that email belongs to the provider
 * @property {ProviderApp} [app] - native apps, absent when the provider ships none
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
    app: { ios: "googlegmail://", android: "com.google.android.gm" },
  },
  {
    id: "MAILRU",
    url: "https://e.mail.ru/inbox/",
    label: "Mail.ru",
    keywords: ["@mail.ru", "@bk.ru", "@inbox.ru", "@list.ru", "@internet.ru"],
    app: { ios: null, android: "ru.mail.mailapp" },
  },
  {
    id: "FASTMAIL",
    url: "https://app.fastmail.com/mail/Inbox/",
    label: "Fastmail",
    keywords: ["@fastmail"],
    app: { ios: "fastmail://", android: "com.fastmail.app" },
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
    app: { ios: "ms-outlook://", android: "com.microsoft.office.outlook" },
  },
  {
    id: "YAHOO",
    url: "https://mail.yahoo.com",
    label: "Yahoo",
    keywords: ["@yahoo", "@myyahoo", "@ymail.com", "@rocketmail.com"],
    app: {
      ios: "ymail://",
      android: "com.yahoo.mobile.client.android.mail",
    },
  },
  {
    id: "ZOHO",
    url: "https://mail.zoho.com",
    label: "Zoho",
    keywords: ["@zohomail", "@zoho.com"],
    app: { ios: null, android: "com.zoho.mail" },
  },
  {
    id: "APPLE",
    url: "https://www.icloud.com/mail/",
    label: "iCloud Mail",
    keywords: ["@icloud", "@me.com", "@mac.com"],
    // Apple ships no Android mail client; iCloud on Android is web-only.
    app: { ios: "message://", android: null },
  },
  {
    id: "PROTON",
    url: "https://mail.proton.me/",
    label: "Proton Mail",
    keywords: ["@proton.me", "@protonmail.com", "@protonmail.ch", "@pm.me"],
    // Still the legacy package name despite the proton.me rebrand.
    app: { ios: "protonmail://", android: "ch.protonmail.android" },
  },
  {
    id: "YANDEX",
    url: "https://mail.yandex.ru/",
    label: "Yandex Mail",
    keywords: ["@yandex", "@ya.ru", "@narod.ru"],
    app: { ios: "yandexmail://", android: "ru.yandex.mail" },
  },
  {
    id: "AOL",
    url: "https://mail.aol.com/",
    label: "AOL Mail",
    keywords: ["@aol.com", "@aim.com", "@verizon.net"],
    app: { ios: null, android: "com.aol.mobile.aolapp" },
  },
  {
    id: "GMX",
    url: "https://www.gmx.net/",
    label: "GMX",
    keywords: ["@gmx.de", "@gmx.net", "@gmx.at", "@gmx.ch", "@gmx.eu"],
    app: { ios: null, android: "de.gmx.mobile.android.mail" },
  },
  {
    id: "GMX_COM",
    url: "https://www.gmx.com/",
    label: "GMX",
    keywords: ["@gmx.com", "@gmx.us"],
    // Deliberately the same package as GMX: there is no separate .com build.
    app: { ios: null, android: "de.gmx.mobile.android.mail" },
  },
  {
    id: "WEBDE",
    url: "https://web.de/",
    label: "WEB.DE",
    keywords: ["@web.de"],
    app: { ios: null, android: "de.web.mobile.android.mail" },
  },
  {
    id: "TONLINE",
    url: "https://email.t-online.de/",
    label: "T-Online",
    keywords: ["@t-online.de", "@magenta.de"],
    app: { ios: null, android: "de.telekom.mail" },
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
    // Package still carries the pre-rebrand tutanota name.
    app: { ios: null, android: "de.tutao.tutanota" },
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
    app: { ios: null, android: "com.mail.mobile.android.mail" },
  },
  {
    id: "HEY",
    url: "https://app.hey.com/",
    label: "HEY",
    keywords: ["@hey.com"],
    app: { ios: null, android: "com.basecamp.hey" },
  },
  {
    id: "QQ",
    url: "https://mail.qq.com/",
    label: "QQ Mail",
    keywords: ["@qq.com", "@vip.qq.com", "@foxmail.com"],
    app: { ios: null, android: "com.tencent.androidqqmail" },
  },
  // NetEase's Mail Master serves 163, 126 and yeah.net alike. It is delisted
  // from Google Play but ships on the Chinese stores its users actually have.
  {
    id: "NETEASE_163",
    url: "https://mail.163.com/",
    label: "163 Mail",
    keywords: ["@163.com"],
    app: { ios: null, android: "com.netease.mail" },
  },
  {
    id: "NETEASE_126",
    url: "https://mail.126.com/",
    label: "126 Mail",
    keywords: ["@126.com"],
    app: { ios: null, android: "com.netease.mail" },
  },
  {
    id: "NETEASE_YEAH",
    url: "https://mail.yeah.net/",
    label: "Yeah.net",
    keywords: ["@yeah.net"],
    app: { ios: null, android: "com.netease.mail" },
  },
  {
    id: "NAVER",
    url: "https://mail.naver.com/",
    label: "Naver Mail",
    keywords: ["@naver.com"],
    app: { ios: null, android: "com.nhn.android.mail" },
  },
  {
    id: "DAUM",
    url: "https://mail.daum.net/",
    label: "Daum Mail",
    keywords: ["@daum.net", "@hanmail.net"],
    app: { ios: null, android: "net.daum.android.mail" },
  },
  {
    id: "SEZNAM",
    url: "https://email.seznam.cz/",
    label: "Seznam Email",
    keywords: ["@seznam.cz", "@email.cz", "@post.cz", "@spoluzaci.cz"],
    app: { ios: "szn-email://", android: "cz.seznam.email" },
  },
  {
    id: "LIBERO",
    url: "https://mail.libero.it/",
    label: "Libero Mail",
    keywords: ["@libero.it", "@iol.it", "@inwind.it", "@blu.it", "@giallo.it"],
    app: { ios: null, android: "it.italiaonline.mail" },
  },
  {
    id: "ORANGE",
    url: "https://mail.orange.fr/",
    label: "Orange",
    keywords: ["@orange.fr", "@wanadoo.fr"],
    app: { ios: null, android: "com.orange.mail.fr" },
  },
  // Free ships no first-party mail app; @free.fr users are sent to the webmail.
  {
    id: "FREE",
    url: "https://webmail.free.fr/",
    label: "Free",
    keywords: ["@free.fr"],
  },
  // Rambler's app was pulled from Google Play and now ships on RuStore only.
  // The package name still resolves for anyone who installed it there.
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
    app: { ios: null, android: "ru.rambler.mail" },
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
