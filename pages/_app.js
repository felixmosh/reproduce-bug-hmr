import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'
import { useHMR } from './hooks/use-hmr'


const App = ({ Component, pageProps }) => {
  useHMR();
  return <Component {...pageProps} />
}

// export default appWithTranslation(App);
export default appWithTranslation(App, nextI18NextConfig);