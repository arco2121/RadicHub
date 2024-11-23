import Navbar from "./components/commons/Navbar"
import Sidebar from "./components/commons/Sidebar"
import MainContent from "./components/commons/MainContent"
import "./appCommons.css"

const App = () => {
  return <div className="app"><Navbar></Navbar>
    <Sidebar></Sidebar><MainContent></MainContent></div>
}

export default App