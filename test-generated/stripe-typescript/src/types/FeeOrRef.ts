import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { ApplicationFee } from './ApplicationFee';
import { ApplicationFeeSchema } from './ApplicationFee';
export type FeeOrRef = string | ApplicationFee;

export const FeeOrRefSchema: TypedSchema<FeeOrRef> = typed<FeeOrRef>(union(string(), ApplicationFeeSchema));