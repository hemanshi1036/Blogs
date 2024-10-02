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
import Home from './Pages/Home';
import { AppContext } from './Context/AppContext';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';


export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  //for the search parameter 
  const[searchParams, setSearchParams] = useSearchParams();
  const location = useLocation(); // currently je location par hoi aene direct access kari sakye


  //first render par function aapi didhu
  useEffect(() => {
    // fetchBlogPosts();
    //data available mate code lakhsu ahiya
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show krna h
      //-1 thi last vari entity madi jase
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      //iska matlab tag wala page show krna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));

    }
    // url ni andar pathname ma change tgase aetle call thase
  }, [location.pathname, location.search]);

  
  
  return (
    // <div className='flex flex-col gap-y-1 w-full justify-center h-full items-center'>
    //   <Header />
    //   <Blogs />
    //   <Pagination />
      
    // </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>


   
    </Routes>
  )
}

export default App