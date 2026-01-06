import { OrdersService } from './orders';
import { ProductsService } from './products';
import { UsersService } from './users';

/**
 * Security configuration for the SDK
 */
export interface SecurityConfig {
  apiKey?: string;
  bearerAuth?: string;
}

export class MultiFileReferenceApiSDK {
  private _orders: OrdersService | undefined;
  private _products: ProductsService | undefined;
  private _users: UsersService | undefined;
  

  constructor(private security: SecurityConfig, private baseUrl: string = 'https://api.example.com/v1') {}

  get orders(): OrdersService {
    if (!this._orders) {
      this._orders = new OrdersService(this.baseUrl, this.security);
    }
    return this._orders;
  }

  get products(): ProductsService {
    if (!this._products) {
      this._products = new ProductsService(this.baseUrl, this.security);
    }
    return this._products;
  }

  get users(): UsersService {
    if (!this._users) {
      this._users = new UsersService(this.baseUrl, this.security);
    }
    return this._users;
  }

}