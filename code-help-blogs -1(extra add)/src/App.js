// import './App.css';
// import Header from "./Components/Header"
// import Blogs from "./Components/Blogs"
// import Pageination from "./Components/pageination"
// import React from 'react';

// function App() {
//   return (
//    <div>
//       <Header/>
//       <Blogs/>
//       <Pageination/>
//    </div>
//   );
// }

// export default App;


import React, { useContext, useEffect } from 'react'
import Header from './Components/Header';
import Blogs from './Components/Blogs'
import Pagination from './Components/Pageination';
import { AppContext } from './Context/AppContext';


export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  //first render par function aapi didhu
  useEffect(() => {
    fetchBlogPosts();
  }, [])

  
  
  return (
    <div className='flex flex-col gap-y-1 w-full justify-center h-full items-center'>
      <Header />
      <Blogs />
      <Pagination />
      
    </div>
  )
}

export default App