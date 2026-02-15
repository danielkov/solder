import { ApiKeysService } from './api_keys';
import { AnalyticsService } from './analytics';
import { ChatService } from './chat';
import { CompletionsService } from './completions';
import { CreditsService } from './credits';
import { EmbeddingsService } from './embeddings';
import { EndpointsService } from './endpoints';
import { GenerationsService } from './generations';
import { ModelsService } from './models';
import { OAuthService } from './o_auth';
import { ParametersService } from './parameters';
import { ProvidersService } from './providers';
import { BetaResponsesService } from './beta_responses';

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
  /** API key as bearer token in Authorization header */
  apiKey?: string;
  /** API key as bearer token in Authorization header */
  bearer?: string;
}

/**
 * Options for constructing the SDK client.
 */
export interface OpenRouterApiSDKOptions {
  /** Base URL for API requests. Defaults to 'https://openrouter.ai/api/v1'. */
  baseUrl?: string;
  /** Security credentials. */
  security?: SecurityConfig;
  /** Lifecycle hooks. */
  hooks?: SDKHooks;
}

export class OpenRouterApiSDK {
  private _apiKeys: ApiKeysService | undefined;
  private _analytics: AnalyticsService | undefined;
  private _chat: ChatService | undefined;
  private _completions: CompletionsService | undefined;
  private _credits: CreditsService | undefined;
  private _embeddings: EmbeddingsService | undefined;
  private _endpoints: EndpointsService | undefined;
  private _generations: GenerationsService | undefined;
  private _models: ModelsService | undefined;
  private _oAuth: OAuthService | undefined;
  private _parameters: ParametersService | undefined;
  private _providers: ProvidersService | undefined;
  private _betaResponses: BetaResponsesService | undefined;
  
  private readonly baseUrl: string;
  private readonly security: SecurityConfig;
  private readonly hooks: SDKHooks;

  constructor(options: OpenRouterApiSDKOptions = {}) {
    this.baseUrl = options.baseUrl ?? 'https://openrouter.ai/api/v1';
    this.security = options.security ?? {};
    this.hooks = options.hooks ?? {};
  }

  get apiKeys(): ApiKeysService {
    if (!this._apiKeys) {
      this._apiKeys = new ApiKeysService(this.baseUrl, this.security, this.hooks);
    }
    return this._apiKeys;
  }

  get analytics(): AnalyticsService {
    if (!this._analytics) {
      this._analytics = new AnalyticsService(this.baseUrl, this.security, this.hooks);
    }
    return this._analytics;
  }

  get chat(): ChatService {
    if (!this._chat) {
      this._chat = new ChatService(this.baseUrl, this.security, this.hooks);
    }
    return this._chat;
  }

  get completions(): CompletionsService {
    if (!this._completions) {
      this._completions = new CompletionsService(this.baseUrl, this.security, this.hooks);
    }
    return this._completions;
  }

  get credits(): CreditsService {
    if (!this._credits) {
      this._credits = new CreditsService(this.baseUrl, this.security, this.hooks);
    }
    return this._credits;
  }

  get embeddings(): EmbeddingsService {
    if (!this._embeddings) {
      this._embeddings = new EmbeddingsService(this.baseUrl, this.security, this.hooks);
    }
    return this._embeddings;
  }

  get endpoints(): EndpointsService {
    if (!this._endpoints) {
      this._endpoints = new EndpointsService(this.baseUrl, this.security, this.hooks);
    }
    return this._endpoints;
  }

  get generations(): GenerationsService {
    if (!this._generations) {
      this._generations = new GenerationsService(this.baseUrl, this.security, this.hooks);
    }
    return this._generations;
  }

  get models(): ModelsService {
    if (!this._models) {
      this._models = new ModelsService(this.baseUrl, this.security, this.hooks);
    }
    return this._models;
  }

  get oAuth(): OAuthService {
    if (!this._oAuth) {
      this._oAuth = new OAuthService(this.baseUrl, this.security, this.hooks);
    }
    return this._oAuth;
  }

  get parameters(): ParametersService {
    if (!this._parameters) {
      this._parameters = new ParametersService(this.baseUrl, this.security, this.hooks);
    }
    return this._parameters;
  }

  get providers(): ProvidersService {
    if (!this._providers) {
      this._providers = new ProvidersService(this.baseUrl, this.security, this.hooks);
    }
    return this._providers;
  }

  get betaResponses(): BetaResponsesService {
    if (!this._betaResponses) {
      this._betaResponses = new BetaResponsesService(this.baseUrl, this.security, this.hooks);
    }
    return this._betaResponses;
  }

}