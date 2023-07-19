const PROVIDERS = [
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

export const getProvider = (id) => PROVIDERS.find((provider) => provider.id === id);

export default PROVIDERS;
