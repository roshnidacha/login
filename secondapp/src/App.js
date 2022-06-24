import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import Users from './components/Users'
import Contactus from './components/Contactus'
import Technologies from './components/Technologies'
import Html from './components/Html'
import Javascript from './components/Javascript'
import Login from './components/login'
import Registration from './components/Registration'
function App() {
  return (

  
    <div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <Link className="navbar-brand" to="">MyApp</Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
    {/* <li className="nav-item active ml-auto ">
         <Link className="nav-link" to="">Login</Link>
        </li> */}
      <li className="nav-item ">
        <Link className="nav-link active" to="Home">Home</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active" to="Users">Users</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active" to="Contactus">Contactus</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link active" to="Technologies">Technologies</Link>
      </li>
      <div className="ms-auto">
      <li className="nav-item ">
         <Link className="nav-link active" to="">Login</Link>
        </li>
        </div>
      
    </ul>
   
  </div>
  
</nav>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Users" element={<Users/>} />
      <Route path="/Contactus" element={<Contactus/>} />
      <Route path="/Technologies" element={<Technologies/>} >
             <Route path="" element={<Html/>} />
             <Route path="Javascript" element={<Javascript/>} />
      </Route>
    </Routes>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Registration" element={<Registration/>}/>
    </Routes>
    
    </div>
  )
}

export default App;
