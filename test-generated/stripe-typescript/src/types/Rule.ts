import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * RadarRule
 *
 * 
 */
export interface Rule {
  /**
   * The action taken on the payment.
   */
  action: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The predicate to evaluate the payment against.
   */
  predicate: string;
}

export const RuleSchema: TypedSchema<Rule> = typed<Rule>(object({
  action: string(),
  id: string(),
  predicate: string(),
}));