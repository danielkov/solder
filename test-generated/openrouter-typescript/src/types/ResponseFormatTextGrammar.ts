import { TypedSchema, literal, object, string, typed } from '@speakeasy-api/tonic';
export interface ResponseFormatTextGrammar {
  grammar: string;
  type: "grammar";
}

export const ResponseFormatTextGrammarSchema: TypedSchema<ResponseFormatTextGrammar> = typed<ResponseFormatTextGrammar>(object({
  grammar: string(),
  type: literal("grammar"),
}));