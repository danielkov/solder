import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * simplified
 */
export interface PostTaxRegistrationsRequestAm {
  type: string;
}

export const PostTaxRegistrationsRequestAmSchema: TypedSchema<PostTaxRegistrationsRequestAm> = typed<PostTaxRegistrationsRequestAm>(object({ type: string() }));
