import "./addUser.css";
import avatar_png from "../../../public/avatar.png";

const Adduser = () => {
  return (
    <>
    <div className='addUser'>
        <form action="">
            <input type="text" placeholder='Username' name='username'/>
            <button> Search</button>
        </form>
        <div className='user'>
            <div className='detail'>
                <img src={avatar_png} alt="" />
                <span>Jane Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
    </>
  )
}

export default Adduser