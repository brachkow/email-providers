import { describe, it, expect } from 'vitest'
// @ts-expect-error — plain-JS source is typed via JSDoc, no declared TS module
import PROVIDERS_DEFAULT, {
  PROVIDERS,
  getProvider,
  getProviderById,
  getProviderByEmail,
  // @ts-expect-error — see above
} from '../index.js'

describe('PROVIDERS', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(PROVIDERS)).toBe(true)
    expect(PROVIDERS.length).toBeGreaterThan(0)
  })

  it('has well-formed entries with valid urls', () => {
    for (const provider of PROVIDERS) {
      expect(typeof provider.id).toBe('string')
      expect(typeof provider.label).toBe('string')
      expect(Array.isArray(provider.keywords)).toBe(true)
      expect(provider.keywords.length).toBeGreaterThan(0)
      expect(() => new URL(provider.url)).not.toThrow()
    }
  })

  it('has unique ids', () => {
    const ids = PROVIDERS.map((provider) => provider.id)

    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe('getProvider', () => {
  it('returns the provider for a known id', () => {
    expect(getProvider('GMAIL')?.label).toBe('GMail')
  })

  it('returns undefined for an unknown id', () => {
    expect(getProvider('NOPE')).toBeUndefined()
  })
})

describe('getProviderById', () => {
  it('is an alias for getProvider', () => {
    expect(getProviderById('GMAIL')).toBe(getProvider('GMAIL'))
  })
})

describe('getProviderByEmail', () => {
  it('resolves a provider from an email', () => {
    expect(getProviderByEmail('user@gmail.com')?.id).toBe('GMAIL')
  })

  it('resolves a provider matched by a secondary keyword', () => {
    expect(getProviderByEmail('user@myyahoo.com')?.id).toBe('YAHOO')
  })

  it('returns undefined for an unknown domain', () => {
    expect(getProviderByEmail('user@example.com')).toBeUndefined()
  })

  // Guards against keyword shadowing: matching is a substring test resolved by
  // array order, so an earlier provider's keyword can silently swallow a later one.
  it.each(
    PROVIDERS.flatMap((provider) =>
      provider.keywords.map((keyword) => [provider.id, keyword]),
    ),
  )('resolves %s from its own keyword %s', (id, keyword) => {
    expect(getProviderByEmail(`user${keyword}`)?.id).toBe(id)
  })

  it.each([
    ['user@zoho.com', 'ZOHO'],
    ['user@hotmail.com', 'OUTLOOK'],
    ['user@hotmail.co.uk', 'OUTLOOK'],
    ['user@live.com', 'OUTLOOK'],
    ['user@live.com.au', 'OUTLOOK'],
    ['user@msn.com', 'OUTLOOK'],
    ['user@bk.ru', 'MAILRU'],
    ['user@inbox.ru', 'MAILRU'],
    ['user@me.com', 'APPLE'],
    ['user@mac.com', 'APPLE'],
    ['user@googlemail.com', 'GMAIL'],
    ['user@ymail.com', 'YAHOO'],
    ['user@vip.qq.com', 'QQ'],
    ['user@gmx.com', 'GMX_COM'],
    ['user@gmx.net', 'GMX'],
    ['user@163.com', 'NETEASE_163'],
    ['user@126.com', 'NETEASE_126'],
  ])('resolves %s to %s', (email, id) => {
    expect(getProviderByEmail(email)?.id).toBe(id)
  })

  // Substring matching makes bare brand keywords unsafe — these domains belong
  // to unrelated services and must not be mistaken for a provider.
  it.each([
    'user@livescore.com',
    'user@msnbc.com',
    'user@inbox.lv',
    'user@zohocorp.com',
    'user@acme.com',
    'user@home.com',
    'user@bigmac.com',
  ])('does not falsely match %s', (email) => {
    expect(getProviderByEmail(email)).toBeUndefined()
  })
})

describe('default export', () => {
  it('is the PROVIDERS array', () => {
    expect(PROVIDERS_DEFAULT).toBe(PROVIDERS)
  })
})
