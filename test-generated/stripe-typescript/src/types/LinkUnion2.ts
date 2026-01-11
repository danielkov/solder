import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsLink } from './SetupIntentPaymentMethodOptionsLink';
import { SetupIntentPaymentMethodOptionsLinkSchema } from './SetupIntentPaymentMethodOptionsLink';
import type { SetupIntentTypeSpecificPaymentMethodOptionsClient } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
import { SetupIntentTypeSpecificPaymentMethodOptionsClientSchema } from './SetupIntentTypeSpecificPaymentMethodOptionsClient';
export type LinkUnion2 = SetupIntentPaymentMethodOptionsLink | SetupIntentTypeSpecificPaymentMethodOptionsClient;

export const LinkUnion2Schema: TypedSchema<LinkUnion2> = typed<LinkUnion2>(union(SetupIntentPaymentMethodOptionsLinkSchema, SetupIntentTypeSpecificPaymentMethodOptionsClientSchema));