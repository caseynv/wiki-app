import ErrorImg from "../assets/images/404.png"
import Button from "../components/reusable/Button"

const ErrorPage = () => {
  return (
    <div className="h-screen flex px:4 lg:px-16 flex-col justify-center">
      <div className="flex flex-col-reverse py-16 lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left">
        <h1 className="font-extrabold text-4xl sys_primary">404 <br/>Oops, Page not found</h1>
        <p className="my-4 opacity-80 sys_black text-xl">This page does not exist or was removed! <br/> We suggest you go back home :)</p>
        <Button text="Go to Home" link="/"/>
        </div>
        <img src={ErrorImg} alt="404 error"/>
      </div>
    </div>
  )
}

export default ErrorPage;