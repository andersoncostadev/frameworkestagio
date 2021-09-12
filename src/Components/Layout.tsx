import SideMenu from "./SideMenu";
import Title from "./Title";

interface LayoutProps {
  title?: string;
  children?: any;

}


export default function Layout(props: LayoutProps) {
  return (
    <div className={`flex h-screen w-screen`}>
      <SideMenu />
      <div className={`flex flex-col w-full p-7
       bg-white text-purple-800 rounded-md`}>
        <Title>{props.children}</Title>

      </div>
    </div>
  )
}