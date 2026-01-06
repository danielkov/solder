import { DefaultService } from './default';

/**
 * Security configuration for the SDK
 */
export interface SecurityConfig {
  /** Basic HTTP authentication. Allowed headers-- Authorization: Basic <api_key> | Authorization: Basic <base64 hash of `api_key:`> */
  basicAuth?: string;
  /** Bearer HTTP authentication. Allowed headers-- Authorization: Bearer <api_key> */
  bearerAuth?: string;
}

export class StripeApiSDK {
  private _default: DefaultService | undefined;
  

  constructor(private security: SecurityConfig, private baseUrl: string = 'https://api.stripe.com/') {}

  get default(): DefaultService {
    if (!this._default) {
      this._default = new DefaultService(this.baseUrl, this.security);
    }
    return this._default;
  }

}