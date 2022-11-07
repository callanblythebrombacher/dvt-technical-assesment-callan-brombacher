import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../src/redux/store/store";
import {UserCtx, defaultUserCtx} from "../src/context/UserContext.component";
import {Provider} from 'react-redux'
import Header from '../src/components/templates/header.component'
import Footer from '../src/components/templates/footer.component'
import {useEffect, useRef, useCallback, } from "react";
function App({ Component, ...rest }: AppProps) {

  const {store, props} = wrapper.useWrappedStore(rest);
    const contentRef =  useRef<HTMLDivElement>(null)

    const listenToScroll = ():void => {
        const content = contentRef.current
        if(content !==null){
        const marginTop = parseInt((window.getComputedStyle(content)
            .getPropertyValue("margin-top"))
            .replace('px', ''))
        if( window.scrollY ===0) content.style.marginTop = ''
        if( window.scrollY !==0 && content.style.marginTop==='')content.style.marginTop = (marginTop - 50) + "px"
    }}

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
    }, [])

  return (
      <Provider store={store}>
          <UserCtx.Provider
              value={defaultUserCtx}
          >
             <Header/>
              <div ref={contentRef} className={'webpage-content'}>
             <Component {...props.pageProps} />
              </div>
            <Footer/>
          </UserCtx.Provider>
      </Provider>
  )
}

export default App;
