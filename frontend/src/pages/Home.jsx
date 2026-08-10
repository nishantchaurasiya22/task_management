import "../styles/home.css"
import Header from '../components/Header'
import Create_Task from "../components/Create_Task"
import Manage_Tasks from "../components/Manage_Tasks"
const Home = () => {
  return (
    <div className='home_page'>
      <Header/>
      <div className="task_manage">
       <Create_Task/>
       <Manage_Tasks/>
      </div>
    </div>
  )
}

export default Home