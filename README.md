# @brachkow/email-providers

URLs of popular email providers as JS object.

## Installation and usage

```
npm i @brachkow/email-providers
```

```js
import { getProviderByEmail } from '@brachkow/email-providers';

const provider = getProviderByEmail('johndoe@gmail.com');

console.log(provider);

// {
//   id: 'GMAIL',
//   url: 'https://mail.google.com/', — url that leads to web interface
//   label: 'GMail', — label for output into UI, for example «Open in ${label}»
//   keywords: ['@gmail'],
// },
```

## Contributions

Can't find your email provider? Submit a PR or an Issue!
