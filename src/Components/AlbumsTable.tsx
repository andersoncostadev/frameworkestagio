interface AlbumsProps {
  userId: number;
  id: number;
  title: string;
}

interface TabelaAlbums {
  albums: AlbumsProps[];
}

export default function AlbumsTable(props: TabelaAlbums) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-center p-4">ID</th>
        <th className="text-center p-4">Título</th>
      </tr>
    )
  }

  function renderData() {
    return props.albums?.map((item, i) => {
      return (
        <tr key={item.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-center text-sm font-bold p-4">{item.id}</td>
          <td className="text-center text-sm p-4">{item.title}</td>
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