import { EventsService } from './events';
import { OperationsService } from './operations';
import { TicketsService } from './tickets';

/**
 * Security configuration for the SDK
 */
export interface SecurityConfig {
  museumPlaceholderAuth?: string;
}

export class RedoclyMuseumApiSDK {
  private _events: EventsService | undefined;
  private _operations: OperationsService | undefined;
  private _tickets: TicketsService | undefined;
  

  constructor(private security: SecurityConfig, private baseUrl: string = 'https://redocly.com/_mock/docs/openapi/museum-api') {}

  get events(): EventsService {
    if (!this._events) {
      this._events = new EventsService(this.baseUrl, this.security);
    }
    return this._events;
  }

  get operations(): OperationsService {
    if (!this._operations) {
      this._operations = new OperationsService(this.baseUrl, this.security);
    }
    return this._operations;
  }

  get tickets(): TicketsService {
    if (!this._tickets) {
      this._tickets = new TicketsService(this.baseUrl, this.security);
    }
    return this._tickets;
  }

}