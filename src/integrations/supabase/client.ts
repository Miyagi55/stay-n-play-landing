// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bpzhbsnesdskfezsnvwo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwemhic25lc2Rza2ZlenNudndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4ODYwNDUsImV4cCI6MjA1NDQ2MjA0NX0.fLXRXUXusjLUDWI4lqgypvDSwnMecp9XUHO0rp8lP9s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);