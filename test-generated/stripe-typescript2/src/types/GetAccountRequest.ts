import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface GetAccountRequest {}

export const GetAccountRequestSchema: TypedSchema<GetAccountRequest> = typed<GetAccountRequest>(object({}));
