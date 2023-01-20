import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';

function MyApp({ Component, pageProps }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
