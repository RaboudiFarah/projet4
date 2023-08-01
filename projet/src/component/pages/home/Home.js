
import './home.css';
import Header from '../../header/Header';
 import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import Teacher from '../../teacher/Teacher';
export default function Home() {
  return (
    <>
   
    <Header/>
    <div className ='home'>
   <Sidebar/>
   
   <Posts/>

    </div>
    <Teacher/>
    </>
  )
}
