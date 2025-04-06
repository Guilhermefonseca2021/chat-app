import '@fontsource/lato';
import '@fontsource/lato/700.css';
import '@fontsource/lato/400.css';
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  styles: {},
  colors: {},
  components: {},
});

export default customTheme;