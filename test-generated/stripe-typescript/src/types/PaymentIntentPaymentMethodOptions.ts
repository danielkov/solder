import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { AcssDebitUnion } from './AcssDebitUnion';
import { AcssDebitUnionSchema } from './AcssDebitUnion';
import type { AffirmUnion } from './AffirmUnion';
import { AffirmUnionSchema } from './AffirmUnion';
import type { AfterpayClearpayUnion } from './AfterpayClearpayUnion';
import { AfterpayClearpayUnionSchema } from './AfterpayClearpayUnion';
import type { AlipayUnion } from './AlipayUnion';
import { AlipayUnionSchema } from './AlipayUnion';
import type { AlmaUnion } from './AlmaUnion';
import { AlmaUnionSchema } from './AlmaUnion';
import type { AmazonPayUnion } from './AmazonPayUnion';
import { AmazonPayUnionSchema } from './AmazonPayUnion';
import type { AuBecsDebitUnion } from './AuBecsDebitUnion';
import { AuBecsDebitUnionSchema } from './AuBecsDebitUnion';
import type { BacsDebitUnion } from './BacsDebitUnion';
import { BacsDebitUnionSchema } from './BacsDebitUnion';
import type { BancontactUnion } from './BancontactUnion';
import { BancontactUnionSchema } from './BancontactUnion';
import type { BillieUnion } from './BillieUnion';
import { BillieUnionSchema } from './BillieUnion';
import type { BlikUnion } from './BlikUnion';
import { BlikUnionSchema } from './BlikUnion';
import type { BoletoUnion } from './BoletoUnion';
import { BoletoUnionSchema } from './BoletoUnion';
import type { CardPresentUnion } from './CardPresentUnion';
import { CardPresentUnionSchema } from './CardPresentUnion';
import type { CardUnion } from './CardUnion';
import { CardUnionSchema } from './CardUnion';
import type { CashappUnion } from './CashappUnion';
import { CashappUnionSchema } from './CashappUnion';
import type { CryptoUnion } from './CryptoUnion';
import { CryptoUnionSchema } from './CryptoUnion';
import type { CustomerBalanceUnion } from './CustomerBalanceUnion';
import { CustomerBalanceUnionSchema } from './CustomerBalanceUnion';
import type { EpsUnion } from './EpsUnion';
import { EpsUnionSchema } from './EpsUnion';
import type { FpxUnion } from './FpxUnion';
import { FpxUnionSchema } from './FpxUnion';
import type { GiropayUnion } from './GiropayUnion';
import { GiropayUnionSchema } from './GiropayUnion';
import type { GrabpayUnion } from './GrabpayUnion';
import { GrabpayUnionSchema } from './GrabpayUnion';
import type { IdealUnion } from './IdealUnion';
import { IdealUnionSchema } from './IdealUnion';
import type { InteracPresentUnion } from './InteracPresentUnion';
import { InteracPresentUnionSchema } from './InteracPresentUnion';
import type { KakaoPayUnion } from './KakaoPayUnion';
import { KakaoPayUnionSchema } from './KakaoPayUnion';
import type { KlarnaUnion } from './KlarnaUnion';
import { KlarnaUnionSchema } from './KlarnaUnion';
import type { KonbiniUnion } from './KonbiniUnion';
import { KonbiniUnionSchema } from './KonbiniUnion';
import type { KrCardUnion } from './KrCardUnion';
import { KrCardUnionSchema } from './KrCardUnion';
import type { LinkUnion } from './LinkUnion';
import { LinkUnionSchema } from './LinkUnion';
import type { MbWayUnion } from './MbWayUnion';
import { MbWayUnionSchema } from './MbWayUnion';
import type { MobilepayUnion } from './MobilepayUnion';
import { MobilepayUnionSchema } from './MobilepayUnion';
import type { MultibancoUnion } from './MultibancoUnion';
import { MultibancoUnionSchema } from './MultibancoUnion';
import type { NaverPayUnion } from './NaverPayUnion';
import { NaverPayUnionSchema } from './NaverPayUnion';
import type { NzBankAccountUnion } from './NzBankAccountUnion';
import { NzBankAccountUnionSchema } from './NzBankAccountUnion';
import type { OxxoUnion } from './OxxoUnion';
import { OxxoUnionSchema } from './OxxoUnion';
import type { P24Union } from './P24Union';
import { P24UnionSchema } from './P24Union';
import type { PayByBankUnion } from './PayByBankUnion';
import { PayByBankUnionSchema } from './PayByBankUnion';
import type { PaycoUnion } from './PaycoUnion';
import { PaycoUnionSchema } from './PaycoUnion';
import type { PaynowUnion } from './PaynowUnion';
import { PaynowUnionSchema } from './PaynowUnion';
import type { PaypalUnion } from './PaypalUnion';
import { PaypalUnionSchema } from './PaypalUnion';
import type { PixUnion } from './PixUnion';
import { PixUnionSchema } from './PixUnion';
import type { PromptpayUnion } from './PromptpayUnion';
import { PromptpayUnionSchema } from './PromptpayUnion';
import type { RevolutPayUnion } from './RevolutPayUnion';
import { RevolutPayUnionSchema } from './RevolutPayUnion';
import type { SamsungPayUnion } from './SamsungPayUnion';
import { SamsungPayUnionSchema } from './SamsungPayUnion';
import type { SatispayUnion } from './SatispayUnion';
import { SatispayUnionSchema } from './SatispayUnion';
import type { SepaDebitUnion } from './SepaDebitUnion';
import { SepaDebitUnionSchema } from './SepaDebitUnion';
import type { SofortUnion } from './SofortUnion';
import { SofortUnionSchema } from './SofortUnion';
import type { SwishUnion } from './SwishUnion';
import { SwishUnionSchema } from './SwishUnion';
import type { TwintUnion } from './TwintUnion';
import { TwintUnionSchema } from './TwintUnion';
import type { UsBankAccountUnion } from './UsBankAccountUnion';
import { UsBankAccountUnionSchema } from './UsBankAccountUnion';
import type { WechatPayUnion } from './WechatPayUnion';
import { WechatPayUnionSchema } from './WechatPayUnion';
import type { ZipUnion } from './ZipUnion';
import { ZipUnionSchema } from './ZipUnion';
/**
 * PaymentIntentPaymentMethodOptions
 *
 * 
 */
export interface PaymentIntentPaymentMethodOptions {
  acssDebit?: AcssDebitUnion;
  affirm?: AffirmUnion;
  afterpayClearpay?: AfterpayClearpayUnion;
  alipay?: AlipayUnion;
  alma?: AlmaUnion;
  amazonPay?: AmazonPayUnion;
  auBecsDebit?: AuBecsDebitUnion;
  bacsDebit?: BacsDebitUnion;
  bancontact?: BancontactUnion;
  billie?: BillieUnion;
  blik?: BlikUnion;
  boleto?: BoletoUnion;
  card?: CardUnion;
  cardPresent?: CardPresentUnion;
  cashapp?: CashappUnion;
  crypto?: CryptoUnion;
  customerBalance?: CustomerBalanceUnion;
  eps?: EpsUnion;
  fpx?: FpxUnion;
  giropay?: GiropayUnion;
  grabpay?: GrabpayUnion;
  ideal?: IdealUnion;
  interacPresent?: InteracPresentUnion;
  kakaoPay?: KakaoPayUnion;
  klarna?: KlarnaUnion;
  konbini?: KonbiniUnion;
  krCard?: KrCardUnion;
  link?: LinkUnion;
  mbWay?: MbWayUnion;
  mobilepay?: MobilepayUnion;
  multibanco?: MultibancoUnion;
  naverPay?: NaverPayUnion;
  nzBankAccount?: NzBankAccountUnion;
  oxxo?: OxxoUnion;
  p24?: P24Union;
  payByBank?: PayByBankUnion;
  payco?: PaycoUnion;
  paynow?: PaynowUnion;
  paypal?: PaypalUnion;
  pix?: PixUnion;
  promptpay?: PromptpayUnion;
  revolutPay?: RevolutPayUnion;
  samsungPay?: SamsungPayUnion;
  satispay?: SatispayUnion;
  sepaDebit?: SepaDebitUnion;
  sofort?: SofortUnion;
  swish?: SwishUnion;
  twint?: TwintUnion;
  usBankAccount?: UsBankAccountUnion;
  wechatPay?: WechatPayUnion;
  zip?: ZipUnion;
}

export const PaymentIntentPaymentMethodOptionsSchema: TypedSchema<PaymentIntentPaymentMethodOptions> = typed<PaymentIntentPaymentMethodOptions>(object({
  get acssDebit() { return optional(AcssDebitUnionSchema) },
  get affirm() { return optional(AffirmUnionSchema) },
  get afterpayClearpay() { return optional(AfterpayClearpayUnionSchema) },
  get alipay() { return optional(AlipayUnionSchema) },
  get alma() { return optional(AlmaUnionSchema) },
  get amazonPay() { return optional(AmazonPayUnionSchema) },
  get auBecsDebit() { return optional(AuBecsDebitUnionSchema) },
  get bacsDebit() { return optional(BacsDebitUnionSchema) },
  get bancontact() { return optional(BancontactUnionSchema) },
  get billie() { return optional(BillieUnionSchema) },
  get blik() { return optional(BlikUnionSchema) },
  get boleto() { return optional(BoletoUnionSchema) },
  get card() { return optional(CardUnionSchema) },
  get cardPresent() { return optional(CardPresentUnionSchema) },
  get cashapp() { return optional(CashappUnionSchema) },
  get crypto() { return optional(CryptoUnionSchema) },
  get customerBalance() { return optional(CustomerBalanceUnionSchema) },
  get eps() { return optional(EpsUnionSchema) },
  get fpx() { return optional(FpxUnionSchema) },
  get giropay() { return optional(GiropayUnionSchema) },
  get grabpay() { return optional(GrabpayUnionSchema) },
  get ideal() { return optional(IdealUnionSchema) },
  get interacPresent() { return optional(InteracPresentUnionSchema) },
  get kakaoPay() { return optional(KakaoPayUnionSchema) },
  get klarna() { return optional(KlarnaUnionSchema) },
  get konbini() { return optional(KonbiniUnionSchema) },
  get krCard() { return optional(KrCardUnionSchema) },
  get link() { return optional(LinkUnionSchema) },
  get mbWay() { return optional(MbWayUnionSchema) },
  get mobilepay() { return optional(MobilepayUnionSchema) },
  get multibanco() { return optional(MultibancoUnionSchema) },
  get naverPay() { return optional(NaverPayUnionSchema) },
  get nzBankAccount() { return optional(NzBankAccountUnionSchema) },
  get oxxo() { return optional(OxxoUnionSchema) },
  get p24() { return optional(P24UnionSchema) },
  get payByBank() { return optional(PayByBankUnionSchema) },
  get payco() { return optional(PaycoUnionSchema) },
  get paynow() { return optional(PaynowUnionSchema) },
  get paypal() { return optional(PaypalUnionSchema) },
  get pix() { return optional(PixUnionSchema) },
  get promptpay() { return optional(PromptpayUnionSchema) },
  get revolutPay() { return optional(RevolutPayUnionSchema) },
  get samsungPay() { return optional(SamsungPayUnionSchema) },
  get satispay() { return optional(SatispayUnionSchema) },
  get sepaDebit() { return optional(SepaDebitUnionSchema) },
  get sofort() { return optional(SofortUnionSchema) },
  get swish() { return optional(SwishUnionSchema) },
  get twint() { return optional(TwintUnionSchema) },
  get usBankAccount() { return optional(UsBankAccountUnionSchema) },
  get wechatPay() { return optional(WechatPayUnionSchema) },
  get zip() { return optional(ZipUnionSchema) },
}));