import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from 'axios'
import {LoggedUserContext} from '../context/loggedUserContext'

interface ButtonProps {
  route: string;
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();
  const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)

  const logout = () =>{
    axios.post('http://localhost:8080/api/logout', {}, {withCredentials:true})
    .then((res) => {
        console.log(res)
        navigate('/')
    })
    .catch((err) => {
        console.log(err);
    })
  }
  const handleClick = () => {
    if (props.text === "Logout") {
      logout();
      setLoggedUser(null)
    }
  };
  return (
    <Link to={props.route}>
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:inline-block hidden"
      >
        {props.text}
      </button>
    </Link>
  );
};
export default Button;
