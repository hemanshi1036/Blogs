import React from 'react'
import Header from '../Components/Header'
import Pageination from '../Components/Pageination'
import { useLocation, useNavigation } from 'react-router-dom'

const TagPage = () => {

    const navigation = useNavigation();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)}>
            Back
        </button>
        <h2>
            Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pageination/>
    </div>
  )
}

export default TagPage
