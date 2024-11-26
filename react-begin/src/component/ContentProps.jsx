import React from 'react'

export default function ContentProps({id,name,address,age,gender,phone}) {
  return (
    <div className='content'>
      <h3>props</h3>
      <ol>
        <li>아이디:{id}</li>
        <li>이름:{name}</li>
        <li>주소:{address}</li>
        <li>나이:{age}</li>
        <li>성별:{gender}</li>
        <li>{phone.join(',')}</li>
      </ol>
    </div>
  )
}
