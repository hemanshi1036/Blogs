 import React, { useContext, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom';
 
 const BlogPage = () => {

    const[blog, setBlog] = useState();
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatefBlogs(){
      setLoading(true);
      let url = `${baseurl}?blogId=${blogId}`;
      try{
          const res = await fetch(url);
          const data = await res.json();
          
          setBlog(data.blog);
          setRelatedBlogs(data.relatedblogs);

      }
      catch(error){

      }
    }

   return (
     <div>
       <Header/>
       <div>

       </div>
    </div>
   )
 }
 
 export default BlogPage
 