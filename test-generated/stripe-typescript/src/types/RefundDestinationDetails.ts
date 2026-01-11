import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DestinationDetailsUnimplemented } from './DestinationDetailsUnimplemented';
import { DestinationDetailsUnimplementedSchema } from './DestinationDetailsUnimplemented';
import type { RefundDestinationDetailsBlik } from './RefundDestinationDetailsBlik';
import { RefundDestinationDetailsBlikSchema } from './RefundDestinationDetailsBlik';
import type { RefundDestinationDetailsBrBankTransfer } from './RefundDestinationDetailsBrBankTransfer';
import { RefundDestinationDetailsBrBankTransferSchema } from './RefundDestinationDetailsBrBankTransfer';
import type { RefundDestinationDetailsCard } from './RefundDestinationDetailsCard';
import { RefundDestinationDetailsCardSchema } from './RefundDestinationDetailsCard';
import type { RefundDestinationDetailsCrypto } from './RefundDestinationDetailsCrypto';
import { RefundDestinationDetailsCryptoSchema } from './RefundDestinationDetailsCrypto';
import type { RefundDestinationDetailsEuBankTransfer } from './RefundDestinationDetailsEuBankTransfer';
import { RefundDestinationDetailsEuBankTransferSchema } from './RefundDestinationDetailsEuBankTransfer';
import type { RefundDestinationDetailsGbBankTransfer } from './RefundDestinationDetailsGbBankTransfer';
import { RefundDestinationDetailsGbBankTransferSchema } from './RefundDestinationDetailsGbBankTransfer';
import type { RefundDestinationDetailsJpBankTransfer } from './RefundDestinationDetailsJpBankTransfer';
import { RefundDestinationDetailsJpBankTransferSchema } from './RefundDestinationDetailsJpBankTransfer';
import type { RefundDestinationDetailsMbWay } from './RefundDestinationDetailsMbWay';
import { RefundDestinationDetailsMbWaySchema } from './RefundDestinationDetailsMbWay';
import type { RefundDestinationDetailsMultibanco } from './RefundDestinationDetailsMultibanco';
import { RefundDestinationDetailsMultibancoSchema } from './RefundDestinationDetailsMultibanco';
import type { RefundDestinationDetailsMxBankTransfer } from './RefundDestinationDetailsMxBankTransfer';
import { RefundDestinationDetailsMxBankTransferSchema } from './RefundDestinationDetailsMxBankTransfer';
import type { RefundDestinationDetailsP24 } from './RefundDestinationDetailsP24';
import { RefundDestinationDetailsP24Schema } from './RefundDestinationDetailsP24';
import type { RefundDestinationDetailsPaypal } from './RefundDestinationDetailsPaypal';
import { RefundDestinationDetailsPaypalSchema } from './RefundDestinationDetailsPaypal';
import type { RefundDestinationDetailsSwish } from './RefundDestinationDetailsSwish';
import { RefundDestinationDetailsSwishSchema } from './RefundDestinationDetailsSwish';
import type { RefundDestinationDetailsThBankTransfer } from './RefundDestinationDetailsThBankTransfer';
import { RefundDestinationDetailsThBankTransferSchema } from './RefundDestinationDetailsThBankTransfer';
import type { RefundDestinationDetailsUsBankTransfer } from './RefundDestinationDetailsUsBankTransfer';
import { RefundDestinationDetailsUsBankTransferSchema } from './RefundDestinationDetailsUsBankTransfer';
/**
 * refund_destination_details
 *
 * 
 */
export interface RefundDestinationDetails {
  /**
   * destination_details_unimplemented
   *
   * 
   */
  affirm?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  afterpayClearpay?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  alipay?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  alma?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  amazonPay?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  auBankTransfer?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_blik
   *
   * 
   */
  blik?: RefundDestinationDetailsBlik;
  /**
   * refund_destination_details_br_bank_transfer
   *
   * 
   */
  brBankTransfer?: RefundDestinationDetailsBrBankTransfer;
  /**
   * refund_destination_details_card
   *
   * 
   */
  card?: RefundDestinationDetailsCard;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  cashapp?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_crypto
   *
   * 
   */
  crypto?: RefundDestinationDetailsCrypto;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  customerCashBalance?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  eps?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_eu_bank_transfer
   *
   * 
   */
  euBankTransfer?: RefundDestinationDetailsEuBankTransfer;
  /**
   * refund_destination_details_gb_bank_transfer
   *
   * 
   */
  gbBankTransfer?: RefundDestinationDetailsGbBankTransfer;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  giropay?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  grabpay?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_jp_bank_transfer
   *
   * 
   */
  jpBankTransfer?: RefundDestinationDetailsJpBankTransfer;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  klarna?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_mb_way
   *
   * 
   */
  mbWay?: RefundDestinationDetailsMbWay;
  /**
   * refund_destination_details_multibanco
   *
   * 
   */
  multibanco?: RefundDestinationDetailsMultibanco;
  /**
   * refund_destination_details_mx_bank_transfer
   *
   * 
   */
  mxBankTransfer?: RefundDestinationDetailsMxBankTransfer;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  nzBankTransfer?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_p24
   *
   * 
   */
  p24?: RefundDestinationDetailsP24;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  paynow?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_paypal
   *
   * 
   */
  paypal?: RefundDestinationDetailsPaypal;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  pix?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  revolut?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  sofort?: DestinationDetailsUnimplemented;
  /**
   * refund_destination_details_swish
   *
   * 
   */
  swish?: RefundDestinationDetailsSwish;
  /**
   * refund_destination_details_th_bank_transfer
   *
   * 
   */
  thBankTransfer?: RefundDestinationDetailsThBankTransfer;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  twint?: DestinationDetailsUnimplemented;
  /**
   * The type of transaction-specific details of the payment method used in the refund (e.g., `card`). An additional hash is included on `destination_details` with a name matching this value. It contains information specific to the refund transaction.
   */
  type: string;
  /**
   * refund_destination_details_us_bank_transfer
   *
   * 
   */
  usBankTransfer?: RefundDestinationDetailsUsBankTransfer;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  wechatPay?: DestinationDetailsUnimplemented;
  /**
   * destination_details_unimplemented
   *
   * 
   */
  zip?: DestinationDetailsUnimplemented;
}

export const RefundDestinationDetailsSchema: TypedSchema<RefundDestinationDetails> = typed<RefundDestinationDetails>(object({
  get affirm() { return optional(DestinationDetailsUnimplementedSchema) },
  get afterpayClearpay() { return optional(DestinationDetailsUnimplementedSchema) },
  get alipay() { return optional(DestinationDetailsUnimplementedSchema) },
  get alma() { return optional(DestinationDetailsUnimplementedSchema) },
  get amazonPay() { return optional(DestinationDetailsUnimplementedSchema) },
  get auBankTransfer() { return optional(DestinationDetailsUnimplementedSchema) },
  get blik() { return optional(RefundDestinationDetailsBlikSchema) },
  get brBankTransfer() { return optional(RefundDestinationDetailsBrBankTransferSchema) },
  get card() { return optional(RefundDestinationDetailsCardSchema) },
  get cashapp() { return optional(DestinationDetailsUnimplementedSchema) },
  get crypto() { return optional(RefundDestinationDetailsCryptoSchema) },
  get customerCashBalance() { return optional(DestinationDetailsUnimplementedSchema) },
  get eps() { return optional(DestinationDetailsUnimplementedSchema) },
  get euBankTransfer() { return optional(RefundDestinationDetailsEuBankTransferSchema) },
  get gbBankTransfer() { return optional(RefundDestinationDetailsGbBankTransferSchema) },
  get giropay() { return optional(DestinationDetailsUnimplementedSchema) },
  get grabpay() { return optional(DestinationDetailsUnimplementedSchema) },
  get jpBankTransfer() { return optional(RefundDestinationDetailsJpBankTransferSchema) },
  get klarna() { return optional(DestinationDetailsUnimplementedSchema) },
  get mbWay() { return optional(RefundDestinationDetailsMbWaySchema) },
  get multibanco() { return optional(RefundDestinationDetailsMultibancoSchema) },
  get mxBankTransfer() { return optional(RefundDestinationDetailsMxBankTransferSchema) },
  get nzBankTransfer() { return optional(DestinationDetailsUnimplementedSchema) },
  get p24() { return optional(RefundDestinationDetailsP24Schema) },
  get paynow() { return optional(DestinationDetailsUnimplementedSchema) },
  get paypal() { return optional(RefundDestinationDetailsPaypalSchema) },
  get pix() { return optional(DestinationDetailsUnimplementedSchema) },
  get revolut() { return optional(DestinationDetailsUnimplementedSchema) },
  get sofort() { return optional(DestinationDetailsUnimplementedSchema) },
  get swish() { return optional(RefundDestinationDetailsSwishSchema) },
  get thBankTransfer() { return optional(RefundDestinationDetailsThBankTransferSchema) },
  get twint() { return optional(DestinationDetailsUnimplementedSchema) },
  type: string(),
  get usBankTransfer() { return optional(RefundDestinationDetailsUsBankTransferSchema) },
  get wechatPay() { return optional(DestinationDetailsUnimplementedSchema) },
  get zip() { return optional(DestinationDetailsUnimplementedSchema) },
}));