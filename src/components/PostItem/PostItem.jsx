import React, { useContext } from 'react'


function PostItem({post}) {

  return (
    <div>
 
      <a href="#" title="" className="block aspect-w-4 aspect-h-3"> 
        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg" alt="" />
      </a>
      <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
      <p className="mt-6 text-xl font-semibold">
        <a href="#" title="" className="text-black"> {post.title}</a>
      </p>
      <p className="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
      <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
    </div>
  )
}

export default PostItem