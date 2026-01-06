import { BookingsService } from './bookings';
import { PaymentsService } from './payments';
import { StationsService } from './stations';
import { TripsService } from './trips';

/**
 * Security configuration for the SDK
 */
export interface SecurityConfig {
  /** OAuth 2.0 authorization code following RFC8725 best practices. */
  oAuth2?: string;
}

export class TrainTravelApiSDK {
  private _bookings: BookingsService | undefined;
  private _payments: PaymentsService | undefined;
  private _stations: StationsService | undefined;
  private _trips: TripsService | undefined;
  

  constructor(private security: SecurityConfig, private baseUrl: string = 'https://try.microcks.io/rest/Train+Travel+API/1.0.0') {}

  get bookings(): BookingsService {
    if (!this._bookings) {
      this._bookings = new BookingsService(this.baseUrl, this.security);
    }
    return this._bookings;
  }

  get payments(): PaymentsService {
    if (!this._payments) {
      this._payments = new PaymentsService(this.baseUrl, this.security);
    }
    return this._payments;
  }

  get stations(): StationsService {
    if (!this._stations) {
      this._stations = new StationsService(this.baseUrl, this.security);
    }
    return this._stations;
  }

  get trips(): TripsService {
    if (!this._trips) {
      this._trips = new TripsService(this.baseUrl, this.security);
    }
    return this._trips;
  }

}