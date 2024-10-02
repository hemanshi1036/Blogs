import React from 'react'
import Header from '../Components/Header'
import Pageination from '../Components/Pageination'

const Home = () => {
  return (
    <div>
      <Header>
        <div>
            <Blogs/>
            <Pageination/>
        </div>
      </Header>
    </div>
  )
}

export default Home
