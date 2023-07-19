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
    id: 'GMAIL',
    url: 'https://mail.google.com/',
    label: 'GMail',
    keywords: ['@gmail'],
  },
  {
    id: 'MAILRU',
    url: 'https://e.mail.ru/inbox/',
    label: 'Mail.ru',
    keywords: ['@mail.ru'],
  },
  {
    id: 'FASTMAIL',
    url: 'https://app.fastmail.com/mail/Inbox/?u=95c940d4',
    label: 'Fastmail',
    keywords: ['@fastmail'],
  },
  {
    id: 'OUTLOOK',
    url: 'https://outlook.live.com/',
    label: 'Outlook',
    keywords: ['@outlook'],
  },
  {
    id: 'YAHOO',
    url: 'https://mail.yahoo.com',
    label: 'Yahoo',
    keywords: ['@yahoo', '@myyahoo'],
  },
  {
    id: 'ZOHO',
    url: 'https://mail.zoho.com',
    label: 'Zoho',
    keywords: ['@zohomail'],
  },
  {
    id: 'APPLE',
    url: 'https://www.icloud.com/mail/',
    label: 'iCloud Mail',
    keywords: ['@icloud'],
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
