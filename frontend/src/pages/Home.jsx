import "../styles/home.css"
import Header from '../components/Header'
import Create_Task from "../components/Create_Task"
const Home = () => {
  return (
    <div className='home_page'>
      <Header/>
      <div>
        <Create_Task/>
      </div>
    </div>
  )
}

export default Home