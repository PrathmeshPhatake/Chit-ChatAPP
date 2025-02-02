import "./addUser.css";
import avatar_png from "../../../public/avatar.png";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import cancel from "../../../public/plus.png";
const API = import.meta.env.VITE_BACKEND_URL;

const Adduser = () => {
  const [searchUser, SetSearchUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const[search,SetSearch]=useState("");
  const[showPage,setShowPage]=useState(true);
  const handleSearchUser=async()=>{
    try {
      const URL=`${API}/user/search-user`;
      setLoading(true);
      const response=await axios.post(URL,{search})
      SetSearchUser(response?.data?.data);
      console.log("SearchUser:",response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message)
    }
  }
  useEffect(()=>{
    handleSearchUser();
  },[search]);
  
 if(!showPage) 
  { 
    // showPage(true);
    return null;
  }

  return (
    <>
      <div className="addUser">
        <div className="cancelIcon">
          <img src={cancel} alt="avatar"  className="icon" onClick={()=>setShowPage(false)}/>
        </div>
        <form  onSubmit={(e)=>{
          e.preventDefault();
          handleSearchUser();
        }}
        >
          <input type="text" placeholder="Username" name="username" onChange={(e)=>SetSearch(e.target.value)} value={search}/>
          <button type="submit"> Search</button>
        </form>
        <div>
          {searchUser.length === 0 && !loading && (
            <div>
              <span
                style={{
                  textAlign: "center",
                  marginTop: "18px",
                  display: "block",
                  fontSize: "20px",
                }}
              >
                No User found
              </span>
            </div>
          )}
          {loading && (
            <p
              style={{
                textAlign: "center",
                marginTop: "18px",
                display: "block",
                fontSize: "20px",
              }}
            >
              {" "}
              Loading..
            </p>
          )}
          <div className="user-list">
          {searchUser.length !== 0 &&
            !loading &&
            searchUser.map((user, index) => {
              return (
                <div className="user">
                  <div className="detail">
                    <img src={user.profile_pic ||avatar_png} alt="" />
                    <span>{user.name || "no name" }</span>
                  </div>
                  <button>Add User</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Adduser;
