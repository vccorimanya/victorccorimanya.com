import React, { useEffect, useState } from 'react';
import Box from '../components/Box';
import datos from '../static-data/blog';


const Blog = () => {


  const [blogs, setList] = useState([])

  useEffect(() => {
    setList(datos)
  }, [])

  return (
    <section className="">
      <div className='blog-title container'>
      <h2 className='line'>Blog</h2>
      </div>
      <div>
        {
          blogs.map(item => (
            <Box key={item.id} {...item}/>
          ))
        }
      </div>

    </section>
  )
}


export default Blog;