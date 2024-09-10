// import { createContext, useState } from "react";
// import { baseUrl } from "../baseUrl"
 

// //step 1 --> creation
// export const AppContext = createContext();

// //childerren aetle index js ma App copponent
//  function AppContextProvider({childern}){
//     const [loading, setLoading] = useState(false);
//     const [post, setPost] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalPage, setTotalPage] = useState(null);

// async function fetchBlogsPosts(page = 1) {
//     setLoading(true)
//     let url = `${baseUrl}?page=${page}`;
//     try {
//         const result = await fetch(url);
//         const data = await result.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error in fetching Data");
//         setPage(1);
//         setPost([]);
//         setTotalPage(null);
//     }
//     setLoading(false);
// }

// function pageChangeHandler(page){
//     setPage(page);
//     fetchBlogsPosts(page)
// }
// const value = {
//     loading,
//     setLoading,
//     post,
//     setPost,
//     page,
//     setPage,
//     totalPage,
//     setTotalPage,
//     fetchBlogsPosts,
//     pageChangeHandler
// };


// //step 2 -->provider
//     return<AppContext.Provider value={value}>
//         {childern}
//     </AppContext.Provider>
       
    
// }

// export default AppContextProvider;


import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step1
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);

    // Data Filling
    async function fetchBlogPosts(page = 1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages);
        }
        catch (e) {
            console.log("Error")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchBlogPosts
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;