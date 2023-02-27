import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/global'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      </ThemeProvider>
  )
}
