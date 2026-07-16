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
})

describe('default export', () => {
  it('is the PROVIDERS array', () => {
    expect(PROVIDERS_DEFAULT).toBe(PROVIDERS)
  })
})
