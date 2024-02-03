import React from 'react'
import { Skeleton } from '../ui/skeleton'

const Skeletons = () => {
  return (
    <div className='grid grid-cols-2 gap-5 w-full  max-sm:grid-cols-1 mt-8 '>
        <Skeleton className='w-full h-[250px]' />
        <Skeleton className='w-full h-[250px]'/>
        <Skeleton className='w-full h-[250px]' />
        <Skeleton  className='w-full h-[250px]'/>



    </div>
  )
}

export default Skeletons