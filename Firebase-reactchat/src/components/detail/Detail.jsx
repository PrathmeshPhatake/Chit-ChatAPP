import "./detail.css";
import user_pro from "../../../public/avatar.png";
import arrowup from "../../../public/arrowUp.png";
import arrodown from "../../../public/arrowDown.png";
import download from "../../../public/download.png";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={user_pro} alt="" />
        <h2>ravi phatake</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title ">
            <span>Chat Setting </span>
            <img src={arrowup} alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title ">
            <span>privacy & help</span>
            <img src={arrowup} alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title ">
            <span>Shared photos</span>
            <img src={arrodown} alt="" />
          </div>
          <div className="photos">
            <div className="photoitem">
              <div className="photosdetail">
                <img
                  src="https://th.bing.com/th/id/R.8ad8553e1d7fc5a8d39611f2a199873a?rik=pM7TYAb6IDoQew&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fHD-Best-Nature-Wallpapers-For-Desktop.jpg&ehk=YqvOwOnHgHnt5VEnUodfYzGSZwTGaGOt03tKjkEogDM%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} alt="" className="icon"/>
            </div>
            <div className="photoitem">
              <div className="photosdetail">
                <img
                  src="https://th.bing.com/th/id/R.8ad8553e1d7fc5a8d39611f2a199873a?rik=pM7TYAb6IDoQew&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fHD-Best-Nature-Wallpapers-For-Desktop.jpg&ehk=YqvOwOnHgHnt5VEnUodfYzGSZwTGaGOt03tKjkEogDM%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>
            <div className="photoitem">
              <div className="photosdetail">
                <img
                  src="https://th.bing.com/th/id/R.8ad8553e1d7fc5a8d39611f2a199873a?rik=pM7TYAb6IDoQew&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fHD-Best-Nature-Wallpapers-For-Desktop.jpg&ehk=YqvOwOnHgHnt5VEnUodfYzGSZwTGaGOt03tKjkEogDM%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} alt="" className="icon"/>
            </div>
            <div className="photoitem">
              <div className="photosdetail">
                <img
                  src="https://th.bing.com/th/id/R.8ad8553e1d7fc5a8d39611f2a199873a?rik=pM7TYAb6IDoQew&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fHD-Best-Nature-Wallpapers-For-Desktop.jpg&ehk=YqvOwOnHgHnt5VEnUodfYzGSZwTGaGOt03tKjkEogDM%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src={download} alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title ">
            <span>Shared Files</span>
            <img src={arrowup} alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Log-Out</button>
      </div>
    </div>
  );
};

export default Detail;
