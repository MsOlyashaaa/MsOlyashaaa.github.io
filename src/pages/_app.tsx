import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { openSansFont } from '@/styles/fonts/OpenSans';
import '../styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSansFont.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
