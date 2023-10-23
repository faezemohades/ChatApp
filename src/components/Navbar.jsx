import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
    const {currentUser,logout}=UserAuth();
    const handleLogout=async ()=>{
      try{await logout()}
      catch(error){
        console.log(error)
      }
    }
  return (
    <div className="navbar bg-teal-600 text-neutral-content">
    <div className="containerWrap  flex justify-between text-white">
  <a className="btn btn-ghost normal-case text-xl">InstantChat</a>
 {currentUser &&  <button onClick={handleLogout} className="text-white">Logout</button>}
   </div>
    </div>
  )
}

export default Navbar
