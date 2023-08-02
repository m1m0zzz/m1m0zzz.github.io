import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#DCF9FF",
      200: "#B8F9FF",
      300: "#AEEDF2",
      400: "#91C5C9",
      500: "#89b9bd",
      600: "#769FA3",
      700: "#5A7A7D",
      800: "#48A9AB",
      900: "#2E6D6E",
    },
  }
})

export default theme
