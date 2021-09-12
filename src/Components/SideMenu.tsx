import { IconeAlbuns, IconeHome, IconePosts, IconeTable } from "../Icons";
import MenuItem from "./ItenMenu";

export default function SideMenu() {
  return (
    <aside className={`
    flex flex-col
  bg-purple-800 text-green-300
`}>
      <div className=''>
        <ul className="flex-grow">
          <MenuItem url="/" texto="Início" icone={IconeHome} />
          <MenuItem url="/posts" texto="Postagens" icone={IconePosts} />
          <MenuItem url="/albuns" texto="Albuns" icone={IconeAlbuns} />
          <MenuItem url="/todos" texto="Todos" icone={IconeTable} />
        </ul>
      </div>
    </aside>
  )
}