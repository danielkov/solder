import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FaqCategory } from './FaqCategory';
import { FaqCategorySchema } from './FaqCategory';
/**
 * Frequently asked question item - tests acronym handling (FAQItem -> FaqItem)
 */
export interface FaqItem {
  /**
   * The answer text
   */
  answer: string;
  /**
   * FAQ category - tests acronym in enum name
   */
  category: FaqCategory;
  id: string;
  /**
   * The question text
   */
  question: string;
  /**
   * Related URLs - tests URL acronym handling
   */
  relatedUrLs?: Array<string>;
}

export const FaqItemSchema: TypedSchema<FaqItem> = typed<FaqItem>(object({
  answer: string(),
  category: FaqCategorySchema,
  id: string(),
  question: string(),
  relatedUrLs: optional(array(string())),
}));