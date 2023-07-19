/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} url — url of web interface
 * @property {string} label — label that will can be outputed into UI
 * @property {string[]} keywords — keyword that can be used to determine that email belongs to the provider
 */
/** @constant
 *  @type {Provider[]}
 */
export const PROVIDERS: Provider[];
export function getProvider(id: string): (Provider | undefined);
export function getProviderById(id: string): (Provider | undefined);
export function getProviderByEmail(email: string): (Provider | undefined);
export default PROVIDERS;
export type Provider = {
    id: string;
    /**
     * — url of web interface
     */
    url: string;
    /**
     * — label that will can be outputed into UI
     */
    label: string;
    /**
     * — keyword that can be used to determine that email belongs to the provider
     */
    keywords: string[];
};
//# sourceMappingURL=index.d.ts.map