import { DefaultService } from './default';

/**
 * Describes the outgoing request. Mutate any field in `onRequest` to
 * alter the request before it is sent (e.g. add headers, rewrite URL).
 */
export interface SDKRequestInit {
  method: string;
  url: string;
  headers: Record<string, string>;
  body?: string;
}

/**
 * Read-only snapshot of the response returned by `fetch`.
 */
export interface SDKResponseInfo {
  method: string;
  url: string;
  status: number;
  headers: Headers;
}

/**
 * Hooks for intercepting SDK lifecycle events.
 * All hooks are optional.
 */
export interface SDKHooks {
  /** Called before each request is sent. Mutate `request` to add headers, rewrite the URL, etc. */
  onRequest?: (request: SDKRequestInit) => void | Promise<void>;
  /** Called after each response is received, before the body is parsed. */
  onResponse?: (response: SDKResponseInfo) => void | Promise<void>;
  /** Called when any API call results in an error, before the error is thrown. */
  onError?: (error: unknown) => void | Promise<void>;
}

/**
 * Options for constructing the SDK client.
 */
export interface OasGenBugReproductionSDKOptions {
  /** Base URL for API requests. Defaults to 'https://api.example.com'. */
  baseUrl?: string;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class OasGenBugReproductionSDK {
  private _default: DefaultService | undefined;
  
  private readonly baseUrl: string;
  private readonly hooks: SDKHooks;

  constructor(options: OasGenBugReproductionSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://api.example.com';
    this.hooks = options.hooks ?? {};
  }

  get default(): DefaultService {
    if (!this._default) {
      this._default = new DefaultService(this.baseUrl, this.hooks);
    }
    return this._default;
  }

}