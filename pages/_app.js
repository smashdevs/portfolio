import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/poppins/500.css";
import { theme } from '/components/theme'

export default function App({ Component, pageProps }) {
  
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}
