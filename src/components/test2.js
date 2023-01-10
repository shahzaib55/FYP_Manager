import React from 'react'

function Test2({posts}) {
  return (
    <>
    {
        posts.map((post)=>(
        <li>
            {post.id}

        </li>

        ))
        
    }
    
    </>
  )
}

export default Test2