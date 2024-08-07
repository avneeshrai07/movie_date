import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/home.css'
function Home(props) {

    const name = props.userData.name;
    const page = props.userData.page;

    const[username,setusername] = useState('');
    const navigate = useNavigate();
    const [showAnimation, setShowAnimation] = useState(false);

    const handelusername=(e)=>{
        setusername(e.target.value);
        setShowAnimation(false);
    }

    useEffect(() => {
        if (username === name) {
          navigate('/'+page);
        }
      }, [username, navigate]);

    const handleButtonClick = () =>{
        setShowAnimation(true);
    }

  return (
    <div className='Home'>
    {showAnimation && <div className="animation"></div>}
      <div className="form">
        <h3>Hii {username}</h3>
        <input type="text" value = {username} onChange={handelusername} placeholder="Enter Your Name"></input>
      </div>
      <div className="btn">
        <button onClick={handleButtonClick}>submit</button>
      </div>
    </div>
  )
}

export default Home
