import { FaqService } from './faq';
import { FilesService } from './files';
import { OrdersService } from './orders';
import { OwnersService } from './owners';
import { PetsService } from './pets';

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
export interface PetStoreApiSDKOptions {
  /** Base URL for API requests. Defaults to 'https://api.petstore.example.com/v1'. */
  baseUrl?: string;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class PetStoreApiSDK {
  private _faq: FaqService | undefined;
  private _files: FilesService | undefined;
  private _orders: OrdersService | undefined;
  private _owners: OwnersService | undefined;
  private _pets: PetsService | undefined;
  
  private readonly baseUrl: string;
  private readonly hooks: SDKHooks;

  constructor(options: PetStoreApiSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://api.petstore.example.com/v1';
    this.hooks = options.hooks ?? {};
  }

  get faq(): FaqService {
    if (!this._faq) {
      this._faq = new FaqService(this.baseUrl, this.hooks);
    }
    return this._faq;
  }

  get files(): FilesService {
    if (!this._files) {
      this._files = new FilesService(this.baseUrl, this.hooks);
    }
    return this._files;
  }

  get orders(): OrdersService {
    if (!this._orders) {
      this._orders = new OrdersService(this.baseUrl, this.hooks);
    }
    return this._orders;
  }

  get owners(): OwnersService {
    if (!this._owners) {
      this._owners = new OwnersService(this.baseUrl, this.hooks);
    }
    return this._owners;
  }

  get pets(): PetsService {
    if (!this._pets) {
      this._pets = new PetsService(this.baseUrl, this.hooks);
    }
    return this._pets;
  }

}