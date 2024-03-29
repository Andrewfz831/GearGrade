import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {LoggedUserContext} from '../context/loggedUserContext'
import { setCookie } from 'typescript-cookie';

const RegistrationForm: React.FC = () => {

    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Add your form submission logic here
      axios.post('http://localhost:8080/api/register', {username,email,password}, {withCredentials:true})
      .then( res => {
        console.log('signUp', res.data);
        setLoggedUser(res.data)
        // Store user info in local storage
        setCookie('loggedUser', JSON.stringify(res.data), { expires: 1 });
        navigate('/explore');
      })
      .catch( err => {
        setErrors(err.response.data)
        console.log(errors);
      })
    };

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
                Create Your Account!
              </h2>
              <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="username"
                    required
                    onChange={ e => {setUsername(e.target.value)}}
                  />
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
                    onChange={ e => {setEmail(e.target.value)}}
                  />
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
                    onChange={ e => {setPassword(e.target.value)}}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      name="remember"
                      type="checkbox"
                      className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="font-medium text-gray-500 dark:text-gray-400"
                    >
                      I agree with the{" "}
                      <Link
                        to=""
                        className="text-green-600 hover:underline dark:text-green-500"
                      >
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 sm:w-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Create Account
                </button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Already have an account?{" "}
                  <Link
                    to="/Login"
                    className="text-green-600 hover:underline dark:text-green-500"
                  >
                    Login Here!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default RegistrationForm;
