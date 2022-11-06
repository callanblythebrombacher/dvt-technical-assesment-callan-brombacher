import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../src/redux/store/store";

function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return <Component {...props.pageProps} />
}

export default App;
