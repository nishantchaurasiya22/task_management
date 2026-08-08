import "../styles/side_bar.css"
import HandleLogOut from "./HandleLogOut"

import Message from "./Message"


const Header = () => {
  return (
    <div className="side_bar">
    <Message/>
    <HandleLogOut/>
    </div>
  )
}

export default Header