import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostIdentityVerificationSessionsRequestDocumentObject } from './PostIdentityVerificationSessionsRequestDocumentObject';
import { PostIdentityVerificationSessionsRequestDocumentObjectSchema } from './PostIdentityVerificationSessionsRequestDocumentObject';
export type PostIdentityVerificationSessionsRequestDocument = PostIdentityVerificationSessionsRequestDocumentObject | string;

export const PostIdentityVerificationSessionsRequestDocumentSchema: TypedSchema<PostIdentityVerificationSessionsRequestDocument> = typed<PostIdentityVerificationSessionsRequestDocument>(union(PostIdentityVerificationSessionsRequestDocumentObjectSchema, string()));