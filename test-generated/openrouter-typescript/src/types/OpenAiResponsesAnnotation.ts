import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { FileCitation } from './FileCitation';
import { FileCitationSchema } from './FileCitation';
import type { FilePath } from './FilePath';
import { FilePathSchema } from './FilePath';
import type { UrlCitation } from './UrlCitation';
import { UrlCitationSchema } from './UrlCitation';
export type OpenAiResponsesAnnotation = FileCitation | UrlCitation | FilePath;

export const OpenAiResponsesAnnotationSchema: TypedSchema<OpenAiResponsesAnnotation> = typed<OpenAiResponsesAnnotation>(union(FileCitationSchema, UrlCitationSchema, FilePathSchema));