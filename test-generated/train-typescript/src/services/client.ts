import { BookingsService } from './bookings';
import { PaymentsService } from './payments';
import { StationsService } from './stations';
import { TripsService } from './trips';

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
  /** OAuth 2.0 authorization code following RFC8725 best practices. */
  oAuth2?: string;
}

/**
 * Options for constructing the SDK client.
 */
export interface TrainTravelApiSDKOptions {
  /** Base URL for API requests. Defaults to 'https://try.microcks.io/rest/Train+Travel+API/1.0.0'. */
  baseUrl?: string;
  /** Security credentials. */
  security?: SecurityConfig;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class TrainTravelApiSDK {
  private _bookings: BookingsService | undefined;
  private _payments: PaymentsService | undefined;
  private _stations: StationsService | undefined;
  private _trips: TripsService | undefined;
  
  private readonly baseUrl: string;
  private readonly security: SecurityConfig;
  private readonly hooks: SDKHooks;

  constructor(options: TrainTravelApiSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://try.microcks.io/rest/Train+Travel+API/1.0.0';
    this.security = options.security ?? {};
    this.hooks = options.hooks ?? {};
  }

  get bookings(): BookingsService {
    if (!this._bookings) {
      this._bookings = new BookingsService(this.baseUrl, this.security, this.hooks);
    }
    return this._bookings;
  }

  get payments(): PaymentsService {
    if (!this._payments) {
      this._payments = new PaymentsService(this.baseUrl, this.security, this.hooks);
    }
    return this._payments;
  }

  get stations(): StationsService {
    if (!this._stations) {
      this._stations = new StationsService(this.baseUrl, this.security, this.hooks);
    }
    return this._stations;
  }

  get trips(): TripsService {
    if (!this._trips) {
      this._trips = new TripsService(this.baseUrl, this.security, this.hooks);
    }
    return this._trips;
  }

}