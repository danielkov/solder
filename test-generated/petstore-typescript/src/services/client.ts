import { FaqService } from './faq';
import { FilesService } from './files';
import { OrdersService } from './orders';
import { OwnersService } from './owners';
import { PetsService } from './pets';

export class PetStoreApiSDK {
  private _faq: FaqService | undefined;
  private _files: FilesService | undefined;
  private _orders: OrdersService | undefined;
  private _owners: OwnersService | undefined;
  private _pets: PetsService | undefined;
  

  constructor(private baseUrl: string = 'https://api.petstore.example.com/v1') {}

  get faq(): FaqService {
    if (!this._faq) {
      this._faq = new FaqService(this.baseUrl);
    }
    return this._faq;
  }

  get files(): FilesService {
    if (!this._files) {
      this._files = new FilesService(this.baseUrl);
    }
    return this._files;
  }

  get orders(): OrdersService {
    if (!this._orders) {
      this._orders = new OrdersService(this.baseUrl);
    }
    return this._orders;
  }

  get owners(): OwnersService {
    if (!this._owners) {
      this._owners = new OwnersService(this.baseUrl);
    }
    return this._owners;
  }

  get pets(): PetsService {
    if (!this._pets) {
      this._pets = new PetsService(this.baseUrl);
    }
    return this._pets;
  }

}