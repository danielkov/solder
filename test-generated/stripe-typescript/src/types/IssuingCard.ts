import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingCardAuthorizationControls } from './IssuingCardAuthorizationControls';
import { IssuingCardAuthorizationControlsSchema } from './IssuingCardAuthorizationControls';
import type { IssuingCardFraudWarning } from './IssuingCardFraudWarning';
import { IssuingCardFraudWarningSchema } from './IssuingCardFraudWarning';
import type { IssuingCardShipping } from './IssuingCardShipping';
import { IssuingCardShippingSchema } from './IssuingCardShipping';
import type { IssuingCardWallets } from './IssuingCardWallets';
import { IssuingCardWalletsSchema } from './IssuingCardWallets';
import type { IssuingCardholder } from './IssuingCardholder';
import { IssuingCardholderSchema } from './IssuingCardholder';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PersonalizationDesignOrRef } from './PersonalizationDesignOrRef';
import { PersonalizationDesignOrRefSchema } from './PersonalizationDesignOrRef';
import type { ReplacedByOrRef } from './ReplacedByOrRef';
import { ReplacedByOrRefSchema } from './ReplacedByOrRef';
import type { ReplacementForOrRef } from './ReplacementForOrRef';
import { ReplacementForOrRefSchema } from './ReplacementForOrRef';
/**
 * IssuingCard
 *
 * You can [create physical or virtual cards](https://stripe.com/docs/issuing) that are issued to cardholders.
 */
export interface IssuingCard {
  /**
   * The brand of the card.
   */
  brand: string;
  /**
   * The reason why the card was canceled.
   */
  cancellationReason?: string;
  /**
   * IssuingCardholder
   *
   * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.

Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards/virtual/issue-cards#create-cardholder)
   */
  cardholder: IssuingCardholder;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Supported currencies are `usd` in the US, `eur` in the EU, and `gbp` in the UK.
   */
  currency: string;
  /**
   * The card's CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
   */
  cvc?: string;
  /**
   * The expiration month of the card.
   */
  expMonth: number;
  /**
   * The expiration year of the card.
   */
  expYear: number;
  /**
   * The financial account this card is attached to.
   */
  financialAccount?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The last 4 digits of the card number.
   */
  last4: string;
  /**
   * Stripe’s assessment of whether this card’s details have been compromised. If this property isn't null, cancel and reissue the card to prevent fraudulent activity risk.
   */
  latestFraudWarning?: IssuingCardFraudWarning;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
   */
  number?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The personalization design object belonging to this card.
   */
  personalizationDesign?: PersonalizationDesignOrRef;
  /**
   * The latest card that replaces this card, if any.
   */
  replacedBy?: ReplacedByOrRef;
  /**
   * The card this card replaces, if any.
   */
  replacementFor?: ReplacementForOrRef;
  /**
   * The reason why the previous card needed to be replaced.
   */
  replacementReason?: string;
  /**
   * Text separate from cardholder name, printed on the card.
   */
  secondLine?: string;
  /**
   * Where and how the card will be shipped.
   */
  shipping?: IssuingCardShipping;
  /**
   * IssuingCardAuthorizationControls
   *
   * 
   */
  spendingControls: IssuingCardAuthorizationControls;
  /**
   * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
   */
  status: string;
  /**
   * The type of the card.
   */
  type: string;
  /**
   * Information relating to digital wallets (like Apple Pay and Google Pay).
   */
  wallets?: IssuingCardWallets;
}

export const IssuingCardSchema: TypedSchema<IssuingCard> = typed<IssuingCard>(object({
  brand: string(),
  cancellationReason: optional(string()),
  cardholder: IssuingCardholderSchema,
  created: number(),
  currency: string(),
  cvc: optional(string()),
  expMonth: number(),
  expYear: number(),
  financialAccount: optional(string()),
  id: string(),
  last4: string(),
  get latestFraudWarning() { return optional(IssuingCardFraudWarningSchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  number: optional(string()),
  object: string(),
  get personalizationDesign() { return optional(PersonalizationDesignOrRefSchema) },
  get replacedBy() { return optional(ReplacedByOrRefSchema) },
  get replacementFor() { return optional(ReplacementForOrRefSchema) },
  replacementReason: optional(string()),
  secondLine: optional(string()),
  get shipping() { return optional(IssuingCardShippingSchema) },
  spendingControls: IssuingCardAuthorizationControlsSchema,
  status: string(),
  type: string(),
  get wallets() { return optional(IssuingCardWalletsSchema) },
}));