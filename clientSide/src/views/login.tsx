import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {useContext, useState} from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {LoggedUserContext} from '../context/loggedUserContext'
import { setCookie } from 'typescript-cookie';


const Login: React.FC = (props) => {
  const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [errors, setErrors] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    axios.post('http://localhost:8080/api/login', {email,password}, { withCredentials: true })
      .then (res => {
        setLoggedUser(res.data);
        // Store user info in local storage
        setCookie('loggedUser', JSON.stringify(res.data), { expires: 1 });
        navigate('/Explore');
      })
      .catch( err => {        
        setErrors(err.response.data)
        console.log(errors);
      })
  }

  return (
    <>
      <Navbar />
      <div className="h-20"></div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <span className="text-green-600 dark:text-green-500">
                Gear Grade:
              </span>{" "}
              A place to rate, share, and gear up together!
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Join our vibrant backpacking community by creating your account
              and start sharing your gear experiences with fellow adventurers
              today!
            </p>
            <a
              href="#"
              className="text-green-600 dark:text-green-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more about our app
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign in to Gear Grade
              </h2>
              <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="name@company.com"
                    required
                    onChange={ e => setEmail(e.target.value)}
                  />
                  { errors ? (
                      <span className="text-red-400">{errors}</span>
                    ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required
                    onChange={ e => setPassword(e.target.value)}
                  />
                  { errors ? (
                      <span className="text-red-400">{errors}</span>
                    ) : null}
                  
                </div>
                <div className="flex items-start">
                  <a
                    href="#"
                    className="ml-auto text-sm font-medium text-green-600 hover:underline dark:text-green-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 sm:w-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?{" "}
                  <Link
                    to="/SignUp"
                    className="text-green-600 hover:underline dark:text-green-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
