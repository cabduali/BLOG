import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList'
import BlogsContext from './components/Context/BlogsContext'

function App() {
  return (
    <BlogsContext>
      <Header/>
       <PostList/>
      <Footer/>
    </BlogsContext>
  )
}

export default App