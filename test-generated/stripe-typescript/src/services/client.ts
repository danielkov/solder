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
 * Security configuration for the SDK
 */
export interface SecurityConfig {
  /** Basic HTTP authentication. Allowed headers-- Authorization: Basic <api_key> | Authorization: Basic <base64 hash of `api_key:`> */
  basicAuth?: string;
  /** Bearer HTTP authentication. Allowed headers-- Authorization: Bearer <api_key> */
  bearerAuth?: string;
}

/**
 * Options for constructing the SDK client.
 */
export interface StripeApiSDKOptions {
  /** Base URL for API requests. Defaults to 'https://api.stripe.com/'. */
  baseUrl?: string;
  /** Security credentials. */
  security?: SecurityConfig;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class StripeApiSDK {
  private _default: DefaultService | undefined;
  
  private readonly baseUrl: string;
  private readonly security: SecurityConfig;
  private readonly hooks: SDKHooks;

  constructor(options: StripeApiSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://api.stripe.com/';
    this.security = options.security ?? {};
    this.hooks = options.hooks ?? {};
  }

  get default(): DefaultService {
    if (!this._default) {
      this._default = new DefaultService(this.baseUrl, this.security, this.hooks);
    }
    return this._default;
  }

}