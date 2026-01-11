import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SelfConflictTest {
  /**
   * The `Self` keyword - also cannot use r#Self
   */
  self?: string;
  /**
   * Triple underscore - tests multi-level conflict
   */
  self?: string;
  /**
   * Already uses underscore prefix - forces conflict resolution
   */
  self?: string;
  /**
   * The `self` keyword - cannot use r#self in Rust
   */
  self?: string;
}

export const SelfConflictTestSchema: TypedSchema<SelfConflictTest> = typed<SelfConflictTest>(object({
  self: optional(string()),
  self: optional(string()),
  self: optional(string()),
  self: optional(string()),
}));