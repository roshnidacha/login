import React from 'react';
import {Link,Outlet} from 'react-router-dom';
function Technologies() {
    return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
         <Link className="nav-link active text-center" to="">Html</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active text-center" to="Javascript">Javascript</Link>
        </li>
  
  
      </ul>
      <div className='container'>
      <Outlet/>
    </div>
    </div>

    )
  }
  
  export default Technologies;
  