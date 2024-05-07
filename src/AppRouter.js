import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home'
import Projects from './pages/projects'

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
         <Route exact path="/" element = {<Home></Home>} />
         <Route exact path="/home" element = {<Home/>} />
         <Route exact path="/projects" element = {<Projects/>} />
       </Routes>
   </BrowserRouter>

    )
}
   

export default AppRouter
