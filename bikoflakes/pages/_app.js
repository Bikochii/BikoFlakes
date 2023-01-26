import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import { SupabaseClient } from "../utils/SupabaseClient";

function MyApp({ Component, pageProps }) {
  const supabase = createClient(
    "https://joqwtcqtucsiandrqizn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvcXd0Y3F0dWNzaWFuZHJxaXpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4ODYzNDcsImV4cCI6MTk4OTQ2MjM0N30.nWqDLs2-aeGjnoZxQP1mUeo9VILLEfzYRsCdaXaz-Lk"
  );

  console.log(supabase);

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
