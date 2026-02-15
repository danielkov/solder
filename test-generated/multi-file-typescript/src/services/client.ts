import { OrdersService } from './orders';
import { ProductsService } from './products';
import { UsersService } from './users';

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
  apiKey?: string;
  bearerAuth?: string;
}

/**
 * Options for constructing the SDK client.
 */
export interface MultiFileReferenceApiSDKOptions {
  /** Base URL for API requests. Defaults to 'https://api.example.com/v1'. */
  baseUrl?: string;
  /** Security credentials. */
  security?: SecurityConfig;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class MultiFileReferenceApiSDK {
  private _orders: OrdersService | undefined;
  private _products: ProductsService | undefined;
  private _users: UsersService | undefined;
  
  private readonly baseUrl: string;
  private readonly security: SecurityConfig;
  private readonly hooks: SDKHooks;

  constructor(options: MultiFileReferenceApiSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://api.example.com/v1';
    this.security = options.security ?? {};
    this.hooks = options.hooks ?? {};
  }

  get orders(): OrdersService {
    if (!this._orders) {
      this._orders = new OrdersService(this.baseUrl, this.security, this.hooks);
    }
    return this._orders;
  }

  get products(): ProductsService {
    if (!this._products) {
      this._products = new ProductsService(this.baseUrl, this.security, this.hooks);
    }
    return this._products;
  }

  get users(): UsersService {
    if (!this._users) {
      this._users = new UsersService(this.baseUrl, this.security, this.hooks);
    }
    return this._users;
  }

}