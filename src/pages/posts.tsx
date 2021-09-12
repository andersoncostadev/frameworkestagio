import { useState, useEffect } from 'react'
import Layout from '../Components/Layout';
import PostsTable from "../Components/PostsTable"


interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {

  const [posts, setPosts] = useState<posts[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json()
    setPosts(response);
  };


  return (

    <div className={`
     bg-gradient-to-t from-green-500 to-blue-500 h-screen
  `} >

      <Layout>
        <PostsTable posts={posts || []} />
      </Layout>
    </div>
  );
}
