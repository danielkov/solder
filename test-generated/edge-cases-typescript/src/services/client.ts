import { DefaultService } from './default';

export class OasGenBugReproductionSDK {
  private _default: DefaultService | undefined;
  

  constructor(private baseUrl: string = 'https://api.example.com') {}

  get default(): DefaultService {
    if (!this._default) {
      this._default = new DefaultService(this.baseUrl);
    }
    return this._default;
  }

}