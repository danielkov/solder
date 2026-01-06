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
 * Security configuration for the SDK
 */
export interface SecurityConfig {
  /** API key as bearer token in Authorization header */
  apiKey?: string;
  /** API key as bearer token in Authorization header */
  bearer?: string;
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
  

  constructor(private security: SecurityConfig, private baseUrl: string = 'https://openrouter.ai/api/v1') {}

  get apiKeys(): ApiKeysService {
    if (!this._apiKeys) {
      this._apiKeys = new ApiKeysService(this.baseUrl, this.security);
    }
    return this._apiKeys;
  }

  get analytics(): AnalyticsService {
    if (!this._analytics) {
      this._analytics = new AnalyticsService(this.baseUrl, this.security);
    }
    return this._analytics;
  }

  get chat(): ChatService {
    if (!this._chat) {
      this._chat = new ChatService(this.baseUrl, this.security);
    }
    return this._chat;
  }

  get completions(): CompletionsService {
    if (!this._completions) {
      this._completions = new CompletionsService(this.baseUrl, this.security);
    }
    return this._completions;
  }

  get credits(): CreditsService {
    if (!this._credits) {
      this._credits = new CreditsService(this.baseUrl, this.security);
    }
    return this._credits;
  }

  get embeddings(): EmbeddingsService {
    if (!this._embeddings) {
      this._embeddings = new EmbeddingsService(this.baseUrl, this.security);
    }
    return this._embeddings;
  }

  get endpoints(): EndpointsService {
    if (!this._endpoints) {
      this._endpoints = new EndpointsService(this.baseUrl, this.security);
    }
    return this._endpoints;
  }

  get generations(): GenerationsService {
    if (!this._generations) {
      this._generations = new GenerationsService(this.baseUrl, this.security);
    }
    return this._generations;
  }

  get models(): ModelsService {
    if (!this._models) {
      this._models = new ModelsService(this.baseUrl, this.security);
    }
    return this._models;
  }

  get oAuth(): OAuthService {
    if (!this._oAuth) {
      this._oAuth = new OAuthService(this.baseUrl, this.security);
    }
    return this._oAuth;
  }

  get parameters(): ParametersService {
    if (!this._parameters) {
      this._parameters = new ParametersService(this.baseUrl, this.security);
    }
    return this._parameters;
  }

  get providers(): ProvidersService {
    if (!this._providers) {
      this._providers = new ProvidersService(this.baseUrl, this.security);
    }
    return this._providers;
  }

  get betaResponses(): BetaResponsesService {
    if (!this._betaResponses) {
      this._betaResponses = new BetaResponsesService(this.baseUrl, this.security);
    }
    return this._betaResponses;
  }

}