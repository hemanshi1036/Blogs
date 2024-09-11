import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'


const Pageination = () => {

  const {page, handlerPageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white '>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'>
          {/* previous button je button par hasu aeni pachad nu batavse aetle -1 */}
        { page > 1 &&
        <button className='rounded-md  border-2 py-1 px-4'
        onClick={() => handlerPageChange(page-1) }>
          previous
        </button>
        } 
        { page < totalPages &&
          <button className='rounded-md  border-2 py-1 px-4'
           onClick={() => handlerPageChange(page+1)}>
              Next
          </button>
        }
      </div>
        
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pageination
