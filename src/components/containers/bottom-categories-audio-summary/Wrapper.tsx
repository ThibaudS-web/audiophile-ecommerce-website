import React from 'react'
import { WrapperBottom } from './WrapperStyle'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
      <WrapperBottom>{children}</WrapperBottom>
  )
}

export default Wrapper