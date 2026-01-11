import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface ItemsItem {
  productId: string;
  quantity: number;
}

export const ItemsItemSchema: TypedSchema<ItemsItem> = typed<ItemsItem>(object({
  productId: string(),
  quantity: number(),
}));