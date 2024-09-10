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
import Pagination from './Components/pageination';
import { AppContext } from './Context/AppContext';


export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, [])

  
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />
      <Blogs />
      <Pagination />
      <div>
        hello world
      </div>
    </div>
  )
}

export default App