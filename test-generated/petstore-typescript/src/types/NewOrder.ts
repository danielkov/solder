import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface NewOrder {
  ownerId: string;
  petId: string;
  quantity?: number;
}

export const NewOrderSchema: TypedSchema<NewOrder> = typed<NewOrder>(object({
  ownerId: string(),
  petId: string(),
  quantity: optional(number()),
}));