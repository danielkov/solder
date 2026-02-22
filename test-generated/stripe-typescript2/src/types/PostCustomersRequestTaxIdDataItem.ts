import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * data_params
 */
export interface PostCustomersRequestTaxIdDataItem {
  type: string;
  value: string;
}

export const PostCustomersRequestTaxIdDataItemSchema: TypedSchema<PostCustomersRequestTaxIdDataItem> = typed<PostCustomersRequestTaxIdDataItem>(object({ type: string(), value: string() }));
