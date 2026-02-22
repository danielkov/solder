import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { ApplicationFee } from './ApplicationFee';
import { ApplicationFeeSchema } from './ApplicationFee';
/**
 * ID of the application fee that was refunded.
 */
export type FeeOrRef = string | ApplicationFee;

export const FeeOrRefSchema: TypedSchema<FeeOrRef> = typed<FeeOrRef>(union(string(), ApplicationFeeSchema));
