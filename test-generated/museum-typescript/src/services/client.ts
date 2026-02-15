import { EventsService } from './events';
import { OperationsService } from './operations';
import { TicketsService } from './tickets';

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
  museumPlaceholderAuth?: string;
}

/**
 * Options for constructing the SDK client.
 */
export interface RedoclyMuseumApiSDKOptions {
  /** Base URL for API requests. Defaults to 'https://redocly.com/_mock/docs/openapi/museum-api'. */
  baseUrl?: string;
  /** Security credentials. */
  security?: SecurityConfig;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class RedoclyMuseumApiSDK {
  private _events: EventsService | undefined;
  private _operations: OperationsService | undefined;
  private _tickets: TicketsService | undefined;
  
  private readonly baseUrl: string;
  private readonly security: SecurityConfig;
  private readonly hooks: SDKHooks;

  constructor(options: RedoclyMuseumApiSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://redocly.com/_mock/docs/openapi/museum-api';
    this.security = options.security ?? {};
    this.hooks = options.hooks ?? {};
  }

  get events(): EventsService {
    if (!this._events) {
      this._events = new EventsService(this.baseUrl, this.security, this.hooks);
    }
    return this._events;
  }

  get operations(): OperationsService {
    if (!this._operations) {
      this._operations = new OperationsService(this.baseUrl, this.security, this.hooks);
    }
    return this._operations;
  }

  get tickets(): TicketsService {
    if (!this._tickets) {
      this._tickets = new TicketsService(this.baseUrl, this.security, this.hooks);
    }
    return this._tickets;
  }

}