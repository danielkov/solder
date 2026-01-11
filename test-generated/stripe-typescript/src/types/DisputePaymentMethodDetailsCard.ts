import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * DisputePaymentMethodDetailsCard
 *
 * 
 */
export interface DisputePaymentMethodDetailsCard {
  /**
   * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
   */
  brand: string;
  /**
   * The type of dispute opened. Different case types may have varying fees and financial impact.
   */
  caseType: string;
  /**
   * The card network's specific dispute reason code, which maps to one of Stripe's primary dispute categories to simplify response guidance. The [Network code map](https://stripe.com/docs/disputes/categories#network-code-map) lists all available dispute reason codes by network.
   */
  networkReasonCode?: string;
}

export const DisputePaymentMethodDetailsCardSchema: TypedSchema<DisputePaymentMethodDetailsCard> = typed<DisputePaymentMethodDetailsCard>(object({
  brand: string(),
  caseType: string(),
  networkReasonCode: optional(string()),
}));