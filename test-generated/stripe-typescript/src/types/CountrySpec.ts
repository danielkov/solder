import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';

import type { CountrySpecVerificationFields } from './CountrySpecVerificationFields';
import { CountrySpecVerificationFieldsSchema } from './CountrySpecVerificationFields';
import type { SupportedBankAccountCurrenciesProperty } from './SupportedBankAccountCurrenciesProperty';
import { SupportedBankAccountCurrenciesPropertySchema } from './SupportedBankAccountCurrenciesProperty';
/**
 * CountrySpec
 *
 * Stripe needs to collect certain pieces of information about each account
created. These requirements can differ depending on the account's country. The
Country Specs API makes these rules available to your integration.

You can also view the information from this API call as [an online
guide](/docs/connect/required-verification-information).
 */
export interface CountrySpec {
  /**
   * The default currency for this country. This applies to both payment methods and bank accounts.
   */
  defaultCurrency: string;
  /**
   * Unique identifier for the object. Represented as the ISO country code for this country.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Currencies that can be accepted in the specific country (for transfers).
   */
  supportedBankAccountCurrencies: SupportedBankAccountCurrenciesProperty;
  /**
   * Currencies that can be accepted in the specified country (for payments).
   */
  supportedPaymentCurrencies: Array<string>;
  /**
   * Payment methods available in the specified country. You may need to enable some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your account before they appear in this list. The `stripe` payment method refers to [charging through your platform](https://stripe.com/docs/connect/destination-charges).
   */
  supportedPaymentMethods: Array<string>;
  /**
   * Countries that can accept transfers from the specified country.
   */
  supportedTransferCountries: Array<string>;
  /**
   * CountrySpecVerificationFields
   *
   * 
   */
  verificationFields: CountrySpecVerificationFields;
}

export const CountrySpecSchema: TypedSchema<CountrySpec> = typed<CountrySpec>(object({
  defaultCurrency: string(),
  id: string(),
  object: string(),
  supportedBankAccountCurrencies: SupportedBankAccountCurrenciesPropertySchema,
  supportedPaymentCurrencies: array(string()),
  supportedPaymentMethods: array(string()),
  supportedTransferCountries: array(string()),
  verificationFields: CountrySpecVerificationFieldsSchema,
}));