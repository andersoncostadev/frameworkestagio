import { useState, useEffect } from 'react'
import Layout from '../Components/Layout';
import TodosTable from '../Components/TodosTable';

interface todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function TodosPage() {

  const [todos, setTodos] = useState<todos[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json()
    setTodos(response);
  };


  return (

    <div className={`
     bg-gradient-to-t from-green-500 to-blue-500 h-screen
  `} >
      <Layout>
        <TodosTable todos={todos || []} />
      </Layout>
    </div>
  );
}