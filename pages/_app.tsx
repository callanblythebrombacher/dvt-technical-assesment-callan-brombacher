import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../src/redux/store/store";
import {UserCtx, defaultUserCtx} from "../src/context/UserContext.component";
import {Provider} from 'react-redux'
import Header from '../src/components/templates/header.component'
import Footer from '../src/components/templates/footer.component'
function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
      <Provider store={store}>
          <UserCtx.Provider
              value={defaultUserCtx}
          >
             <Header/>
              <section className={'webpage-content'}>
             <Component {...props.pageProps} />
              </section>
            <Footer/>
          </UserCtx.Provider>
      </Provider>
  )
}

export default App;
