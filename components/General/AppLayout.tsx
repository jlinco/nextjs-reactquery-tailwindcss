import React from 'react'

interface Props {
  children: any
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col justify-start">
      {children}
    </div>
  )
}

export default AppLayout