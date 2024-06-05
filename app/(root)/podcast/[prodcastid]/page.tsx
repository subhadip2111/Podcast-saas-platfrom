import React from 'react'

const page = ({params}:{params:{prodcastId:string}}) => {
  return (
    <p className='text-white-1'>
      Prodcast details for{params.prodcastId}
    </p>
  )
}

export default page
