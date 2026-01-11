import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { ApplicationFee } from './ApplicationFee';
import { ApplicationFeeSchema } from './ApplicationFee';
export type ApplicationFeeOrRef = string | ApplicationFee;

export const ApplicationFeeOrRefSchema: TypedSchema<ApplicationFeeOrRef> = typed<ApplicationFeeOrRef>(union(string(), ApplicationFeeSchema));