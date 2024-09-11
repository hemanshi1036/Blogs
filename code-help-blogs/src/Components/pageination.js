import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'


const Pageination = () => {

  const {page, handlerPageChange, totalPages} = useContext(AppContext);
  return (
    <div>
      <div>
        {/* previous button je button par hasu aeni pachad nu batavse aetle -1 */}
        { page > 1 &&
        <button onClick={() => handlerPageChange(page-1) }>
          previous
        </button>
        } 
        { page < totalPages &&
          <button onClick={() => handlerPageChange(page+1)}>
              Next
          </button>
        }
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pageination
