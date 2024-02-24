import React from 'react'
import DefaultLayout from '@deploy/shared/components/layout/default.layout'
const layout = ({ children}:{children:React.ReactNode}) => {
  return (
    <DefaultLayout>{children}</DefaultLayout>
  )
}

export default layout