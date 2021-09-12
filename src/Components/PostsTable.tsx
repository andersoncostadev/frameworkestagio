interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface TabelaPosts {
  posts: PostsProps[];
}

export default function PostsTable(props: TabelaPosts) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-center p-4">Título</th>
        <th className="text-center p-4">Descrição</th>
      </tr>
    )
  }

  function renderData() {
    return props.posts?.map((item, i) => {
      return (
        <tr key={item.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left text-sm font-bold p-4">{item.title}</td>
          <td className="text-left text-sm p-4">{item.body}</td>
        </tr>

      )
    }

    )
  }

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className={`
         text-gray-100
         bg-gradient-to-r from-purple-500 from-purple-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  );
}






