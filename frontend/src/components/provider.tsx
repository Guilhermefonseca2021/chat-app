'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ReactNode } from 'react'
// import { ColorModeProvider } from './color-mode';

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* <ColorModeProvider > */}
        {children}
      {/* </ColorModeProvider> */}
    </ChakraProvider>
  )
}
