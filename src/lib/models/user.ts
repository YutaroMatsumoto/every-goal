import type { UserMetadata as SupaabseUserMetadataType } from '@supabase/supabase-js';

export type UserMetadata = SupaabseUserMetadataType & {
  id?: string
  email?: string
	avatar_url?: string
	full_name?: string
}
