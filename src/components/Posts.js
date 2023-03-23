import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();
  
    useEffect(()=>{
        const getData = async() => {
            const data = await fetch('https://dummyjson.com/posts/');
            const json = await data.json();
            setPosts(json.posts)
        }
        getData()

    }, [])
  
  return (
    <>
    <h1>Posts</h1>
    <p>View our posts</p>
    <div className='posts-body'>
     {
        posts.map(item => (
        <Link data-testid="link" key={item.id} to={`/posts/${item.id}`}>
            <li>{item.title}</li>
        </Link>))

     }
      </div></>)
}
    
export default Posts