import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { AcssDebitUnion2 } from './AcssDebitUnion2';
import { AcssDebitUnion2Schema } from './AcssDebitUnion2';
import type { AmazonPayUnion2 } from './AmazonPayUnion2';
import { AmazonPayUnion2Schema } from './AmazonPayUnion2';
import type { BacsDebitUnion2 } from './BacsDebitUnion2';
import { BacsDebitUnion2Schema } from './BacsDebitUnion2';
import type { CardPresentUnion2 } from './CardPresentUnion2';
import { CardPresentUnion2Schema } from './CardPresentUnion2';
import type { CardUnion2 } from './CardUnion2';
import { CardUnion2Schema } from './CardUnion2';
import type { KlarnaUnion2 } from './KlarnaUnion2';
import { KlarnaUnion2Schema } from './KlarnaUnion2';
import type { LinkUnion2 } from './LinkUnion2';
import { LinkUnion2Schema } from './LinkUnion2';
import type { PaypalUnion2 } from './PaypalUnion2';
import { PaypalUnion2Schema } from './PaypalUnion2';
import type { SepaDebitUnion2 } from './SepaDebitUnion2';
import { SepaDebitUnion2Schema } from './SepaDebitUnion2';
import type { UsBankAccountUnion2 } from './UsBankAccountUnion2';
import { UsBankAccountUnion2Schema } from './UsBankAccountUnion2';
/**
 * SetupIntentPaymentMethodOptions
 *
 * 
 */
export interface SetupIntentPaymentMethodOptions {
  acssDebit?: AcssDebitUnion2;
  amazonPay?: AmazonPayUnion2;
  bacsDebit?: BacsDebitUnion2;
  card?: CardUnion2;
  cardPresent?: CardPresentUnion2;
  klarna?: KlarnaUnion2;
  link?: LinkUnion2;
  paypal?: PaypalUnion2;
  sepaDebit?: SepaDebitUnion2;
  usBankAccount?: UsBankAccountUnion2;
}

export const SetupIntentPaymentMethodOptionsSchema: TypedSchema<SetupIntentPaymentMethodOptions> = typed<SetupIntentPaymentMethodOptions>(object({
  get acssDebit() { return optional(AcssDebitUnion2Schema) },
  get amazonPay() { return optional(AmazonPayUnion2Schema) },
  get bacsDebit() { return optional(BacsDebitUnion2Schema) },
  get card() { return optional(CardUnion2Schema) },
  get cardPresent() { return optional(CardPresentUnion2Schema) },
  get klarna() { return optional(KlarnaUnion2Schema) },
  get link() { return optional(LinkUnion2Schema) },
  get paypal() { return optional(PaypalUnion2Schema) },
  get sepaDebit() { return optional(SepaDebitUnion2Schema) },
  get usBankAccount() { return optional(UsBankAccountUnion2Schema) },
}));