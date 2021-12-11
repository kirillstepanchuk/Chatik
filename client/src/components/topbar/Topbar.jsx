import "./topbar.css";
// import { Search } from "@material-ui/icons";
import { FiMessageCircle } from 'react-icons/fi';
import { CgLogOut, CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Topbar() {
  const { user } = useContext(AuthContext);
  const { isFetching, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const onClickHandler = () =>{
    dispatch({type: "LOGOUT"});
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        
        <Link to={`/`} className="topbarIconItem">
          <FiMessageCircle className="topbarIconItemImg"/>
        </Link>
    
        <Link to={`/profile/${user.username}`} className="topbarIconItem">
          <CgProfile className="topbarIconItemImg"/>
        </Link>
        <div onClick={onClickHandler} className="topbarIconItem">
            <CgLogOut className="topbarIconItemImg"/>
          </div>
      </div>
    </div>
  );
}
