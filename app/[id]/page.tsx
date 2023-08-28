import React from 'react'
import './page.scss'
import Link from 'next/link'


async function getBlogs() {
    const res = await fetch(`http://localhost:3000/api/hello`)

    return await res.json()
}


type Props = {
    params: {
        id: string
    }
}


export default async function Post({params: {id}}: Props) {
    const blog = await getBlogs()
    const data = blog.find((elem: {id: number}) => elem.id === parseInt(id))
    return (
        <div className='Post_container'>
            <div className='post_header'>
                <div className='post_header_title'>
                    <h2>
                    <Link href="/">
                        Lincode Blog
                    </Link>
                    </h2>
                </div>   
            </div>
        <div className='post'>
        <h1>{data.title}</h1>
          <p>{data.blogs_text}</p>
        </div>
        </div>
    )
}