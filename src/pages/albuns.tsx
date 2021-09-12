import { useState, useEffect } from 'react'
import Layout from '../Components/Layout';
import AlbumsTable from "../Components/AlbumsTable"


interface albums {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function AlbumsPage() {

  const [albums, setAlbums] = useState<albums[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/albums")
    ).json()
    setAlbums(response);
  };


  return (

    <div className={`
     bg-gradient-to-t from-green-500 to-blue-500 h-screen
  `} >

      <Layout>
        <AlbumsTable albums={albums || []} />
      </Layout>
    </div>
  );
}