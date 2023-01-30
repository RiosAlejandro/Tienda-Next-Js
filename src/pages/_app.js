import StateWrapper from '@/components/stateWrapper';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
      <StateWrapper>
        <Component {...pageProps} />
      </StateWrapper>
  )
}
