import './chat.css'
import user_img from "../../../public/avatar.png";
import phone from "../../../public/phone.png";
import video from "../../../public/video.png";
import info from "../../../public/info.png";
import emojii from "../../../public/emoji.png";
import img from "../../../public/img.png";
import camera from "../../../public/camera.png";
import mic from "../../../public/mic.png";


const Chat = () => {
  return (
    <div className='chat'>
      <div className='top'> 
        <div className='user'>
          <img src={user_img} alt="" />
          <div className='texts'>
            <span> Jane doe</span>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='icons'>
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={info} alt="" />
        </div>
      </div>
      <div className='center'>Center</div>
      <div className='bottom'>
        <div className='icons'>
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />

        </div>
        <input type="text" placeholder='Type a message...' className='texts' />
        <div className='emoji'>
          <img src={emojii} alt="" />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat