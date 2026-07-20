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
//   keywords: ['@gmail', '@googlemail'], — used to match an email to a provider
//   app: { — native apps, see below
//     ios: 'googlegmail://',
//     android: 'com.google.android.gm',
//   },
// },
```

## Mobile apps

On mobile you usually want the provider's own app rather than a browser tab.
Providers that ship one carry an `app` field with an iOS url scheme and an
Android package name:

```js
import { getProviderByEmail } from '@brachkow/email-providers';
import { Linking, Platform } from 'react-native';

const openInbox = async (email) => {
  const provider = getProviderByEmail(email);

  if (!provider) return;

  const scheme = Platform.OS === 'ios' ? provider.app?.ios : null;

  if (scheme && (await Linking.canOpenURL(scheme))) {
    return Linking.openURL(scheme);
  }

  return Linking.openURL(provider.url);
};
```

Coverage is partial, and deliberately so — only values that could be verified
are shipped. Always fall back to `provider.url`:

- `app` is **absent** when the provider has no native app at all.
- `app.ios` or `app.android` is **`null`** when it has one on the other platform
  only. iCloud Mail, for instance, has no Android app.
- An app existing doesn't mean it's installed. Check with `Linking.canOpenURL`
  (iOS also needs the scheme declared in `LSApplicationQueriesSchemes`) or, on
  Android, by querying the package name.

`app.android` is a package name, not a download link, so it's listed whenever
the app exists — including for apps distributed outside Google Play, such as
Rambler Mail (RuStore) and NetEase Mail Master (Chinese app stores). Opening an
installed app works the same regardless of where it came from.

## Credits

iOS url schemes and app names come from
[react-native-email-link](https://github.com/tschoffelen/react-native-email-link)
by [Thomas Schoffelen](https://github.com/tschoffelen), used under the MIT
license.

## Contributions

Can't find your email provider? Submit a PR or an Issue!
