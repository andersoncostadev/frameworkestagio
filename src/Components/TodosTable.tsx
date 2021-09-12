interface TodosProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TabelaTodos {
  todos: TodosProps[];
}

export default function TodosTable(props: TabelaTodos) {

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Título</th>
        <th className="text-center p-4">Completado</th>
      </tr>
    )
  }

  function renderData() {
    return props.todos?.map((item, i) => {
      return (
        <tr key={item.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-left text-sm font-bold p-4">{item.title}</td>
          <td className="text-center text-sm p-4">{item.completed ? 'Sim' : 'Não'}</td>
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
