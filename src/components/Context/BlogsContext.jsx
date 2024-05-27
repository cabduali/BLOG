import { useState, useEffect, createContext, useContext } from "react"
import Loading from "../Loading";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
export const postcontext = createContext();

function BlogsContext({ children }) {
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(false)

    async function getpost() {
        try {
            setloading(true)
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const data = await res.json();
            setpost(data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false)
        }
    }

 
    useEffect(() => {
        getpost()

    }, [])
    if (loading){
        return <postcontext.Provider value={{loading}}>
        <Header />
        <Loading/>
        <Footer />
      </postcontext.Provider>
    }
    return (
        <postcontext.Provider value={post}>
            {children}
        </postcontext.Provider>

    )
}

export default BlogsContext