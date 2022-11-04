import type { AppProps } from 'next/app';
import { AuthProvider } from '../auth';
import { initializeClientFirebase } from '../firebaseClient';

function MyApp({ Component, pageProps }: AppProps) {
  initializeClientFirebase();
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
