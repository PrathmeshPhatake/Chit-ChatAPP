import "./chat.css";
import user_img from "../../../public/avatar.png";
import phone from "../../../public/phone.png";
import video from "../../../public/video.png";
import info from "../../../public/info.png";
import emojii from "../../../public/emoji.png";
import img from "../../../public/img.png";
import camera from "../../../public/camera.png";
import mic from "../../../public/mic.png";
import Emojipicker from "emoji-picker-react";
import io from 'socket.io-client'
import { useEffect, useState,useRef } from "react";
const API = import.meta.env.VITE_BACKEND_URL;
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  // this hook for when we opned it comes to that div automatic 
  const endRef=useRef(null)
  /* ****
  socket connection  
  */

  useEffect(()=>{
    const socketConnection =io(API,{
      auth:{
        token:localStorage.getItem('token')
      }
    })

    return ()=>{
     socketConnection.disconnect()
    }
  })



















   
  useEffect(()=>{
    endRef.current?.scrollIntoView({behaviour:"smooth"});
  },[]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user_img} alt="" />
          <div className="texts">
            <span> Jane doe</span>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={info} alt="" />
        </div>
      </div>
      <div className="center custom-scrollbar">
        <div className="message">
          <img src={user_img} alt="" />
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own ">
          <div className="text">
          <img src="https://th.bing.com/th/id/R.8ad8553e1d7fc5a8d39611f2a199873a?rik=pM7TYAb6IDoQew&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fHD-Best-Nature-Wallpapers-For-Desktop.jpg&ehk=YqvOwOnHgHnt5VEnUodfYzGSZwTGaGOt03tKjkEogDM%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message">
          <img src={user_img} alt="" />
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dolorem totam dolores beatae saepe modi sint iste exercitationem et.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="texts"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img src={emojii} alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
            <Emojipicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
