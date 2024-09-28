import IconField from '@/AddListing/components/IconField'
import carSpecification from '@/Shared/carSpecification'
import React from 'react'

function Specification({carDetail}) {
  return (
    <div className='p-10 rounded-xl border shadow-md mt-7'>
        <h2 className='font-medium text-2xl'>Specification</h2>
        {carDetail? carSpecification?.map((item,index)=>(
            <div key={index} className='mt-5 flex items-center justify-between gap-8'>                
                <h2  className='flex gap-2'><IconField icon={item.icon}/>{item?.label}</h2>
                <h2>{carDetail?.[item?.name]}</h2>
            </div>
        ))
    : <div className='w-full h-[500px] rounded-xl bg-slate-200 animate-pulse'></div>
    }

    </div>
  )
}

export default Specification