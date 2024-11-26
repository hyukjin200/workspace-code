import React from 'react'

export default function ContentParent({children}) {
  return (
    <div className='content'>    
      <h3>Parent Element</h3>
      {children}
    </div>
  )
}
