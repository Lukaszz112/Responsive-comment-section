import React from 'react'
import { GlobalStyles } from './GlobalStyles'

export const Content = ({children}) => {
  return (
    <GlobalStyles>{children}</GlobalStyles>
  )
}
