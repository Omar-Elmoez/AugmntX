import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Input from "../components/input/Input";
import { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({
    user_email: "",
    user_pass: "",
  });
  const [notValid, setNotValid] = useState(false);
  function userDataHandler(event) {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    if (userData.user_email && userData.user_pass) {
      pushDataToAPI(userData);
    } else {
      setNotValid(true)
    }
  }
  async function pushDataToAPI(data) {
    const response = await fetch("https://augmntx.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Successfully Login");
      console.log(response);
    } else {
      console.error("Error pushing data to API:", response.status);
    }
  }
  return (
    <>
      <Header />
      <main className="bg-[#f3fafe] py-16">
        <div className="bg-[#fefefe] py-[50px] px-[60px] w-[490px] mx-auto shadow-formShadow rounded-lg">
          <h3 className="text-[#343f52] text-[1.1rem] font-bold">
            Sign in to start your session
          </h3>
          <form className="mt-6" onSubmit={formSubmitHandler}>
            <div>
              <Input
                type="email"
                name="user_email"
                value={userData.user_email}
                placeholder="Email"
                onChange={userDataHandler}
              />
              {notValid && !userData.user_email && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <div>
              <Input
                type="password"
                name="user_pass"
                value={userData.user_pass}
                placeholder="Password"
                className="mt-4"
                onChange={userDataHandler}
              />
              {notValid && !userData.user_pass && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#5271FF] py-2.5 px-5 rounded-lg mt-5 text-white transform transition-transform duration-500 ease-in-out hover:translate-y-[-0.35rem] hover:shadow-btnShadow"
            >
              Continue
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
