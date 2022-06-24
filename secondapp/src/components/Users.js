
import {useEffect,useState} from 'react'
import axios from 'axios'
function Users() {
  let [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  },[])
    return (
      <div className="container">
        <table className="table text-center"> 
          <thead>
          <tr>
            <th>name</th>
            <th>city</th>
          </tr>
          </thead>
          <tbody>
            {
              users.map((userObj)=>(<tr>
                <td>{userObj.name}</td>
                <td>{userObj.city}</td>
              </tr>))
            }
          </tbody>
        </table>

      </div>

    )
  }
  
  export default Users;
  