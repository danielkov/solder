import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { ApplicationFee } from './ApplicationFee';
import { ApplicationFeeSchema } from './ApplicationFee';
/**
 * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
 */
export type ApplicationFeeOrRef = string | ApplicationFee;

export const ApplicationFeeOrRefSchema: TypedSchema<ApplicationFeeOrRef> = typed<ApplicationFeeOrRef>(union(string(), ApplicationFeeSchema));
