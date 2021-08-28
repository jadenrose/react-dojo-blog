import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'big stinky pinky',
            body: 'big stinky lorem ipsum',
            author: 'Pinky',
            id: 1,
        },
        {
            title: 'big smelly belly',
            body: 'big smelly lorem ipsum',
            author: 'Belly',
            id: 2,
        },
        {
            title: 'big corny horny',
            body: 'big corny lorem ipsum',
            author: 'Horny',
            id: 3,
        },
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="funky junky monkey" />
        </div>
    )
}

export default Home
