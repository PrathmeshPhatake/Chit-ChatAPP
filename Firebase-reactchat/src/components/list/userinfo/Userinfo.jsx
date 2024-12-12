import './userinfo.css'
import avatar from "../../../../public/avatar.png"

const Userinfo = () => {
  return (
    <div className='userinfo'>
        <div className='user'>
        <img src={avatar} alt="" />
        <h2>ravi phalke</h2>
        </div>
        <div className='icons'>
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo