import SideMenu from '../Components/SideMenu'

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-img-home bg-no-repeat bg-cover">
      <div className="flex h-screen w-screen ">
        <SideMenu />
      </div>
    </div>
  )
}
