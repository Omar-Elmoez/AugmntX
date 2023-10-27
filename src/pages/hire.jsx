import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Input from "../components/input/Input";
import Contact from "../components/contact/Contact";
import { useState } from "react";

function Hire() {
  const [devData, setDevData] = useState({
    devName: "",
    jobTitle: "",
    companyName: "",
    workEmail: "",
    phone: "",
    hearAboutUs: "",
  });
  const [notValid, setNotValid] = useState(false);
  function devDataHandler(event) {
    setDevData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    if (
      devData.devName &&
      devData.jobTitle &&
      devData.companyName &&
      devData.workEmail &&
      devData.phone &&
      devData.hearAboutUs
    ) {
      pushDataToAPI(devData);
    } else {
      setNotValid(true);
    }
  }
  async function pushDataToAPI(data) {
    const response = await fetch("https://augmntx.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Successfully registered");
      console.log(response);
    } else {
      console.error("Error pushing data to API:", response.status);
    }
  }
  return (
    <>
      <Header />
      <main className="bg-[#f3fafe]">
        <Container className="py-8 text-center lg:max-w-[760px] lg:mx-auto">
          <h2 className="font-DM font-normal text-[#343f52] text-[40px]">
            Hire the best dedicated developers
          </h2>
          <p className="text-[#60697b] font-medium mt-4 text-xl">
            Hire pre-vetted developers with strong technical and communication
            skills at unbeatable prices.
          </p>
          <p className="text-[#60697b] font-medium mt-2 text-xl">
            If you decide to stop within one week, you pay nothing.
          </p>
          <form
            className="flex flex-col lg:flex-row lg:flex-wrap gap-4 mt-8"
            onSubmit={formSubmitHandler}
          >
            <div className="lg:w-[355px]">
              <Input
                placeholder="Name *"
                name="devName"
                value={devData.devName}
                onChange={devDataHandler}
              />
              {notValid && !devData.devName && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <div className="lg:w-[355px]">
              <Input
                placeholder="Job Title *"
                name="jobTitle"
                value={devData.jobTitle}
                onChange={devDataHandler}
              />
              {notValid && !devData.jobTitle && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <div className="lg:w-[355px]">
              <Input
                placeholder="Company Name *"
                name="companyName"
                value={devData.companyName}
                onChange={devDataHandler}
              />
              {notValid && !devData.companyName && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <div className="lg:w-[355px]">
              <Input
                placeholder="Work Email *"
                name="workEmail"
                value={devData.workEmail}
                onChange={devDataHandler}
              />
              {notValid && !devData.workEmail && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <div className="lg:w-[355px]">
              <Input
                placeholder="Phone *"
                name="phone"
                value={devData.phone}
                onChange={devDataHandler}
              />
              {notValid && !devData.phone && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <div className="lg:w-[355px]">
              <Input
                placeholder="How did you hear about us? *"
                name="hearAboutUs"
                value={devData.hearAboutUs}
                onChange={devDataHandler}
              />
              {notValid && !devData.hearAboutUs && (
                <div className="text-red-800 font-medium px-4">
                  This Field Is Required
                </div>
              )}
            </div>
            <button className="transform transition-transform duration-500 ease-in-out hover:translate-y-[-0.35rem] hover:shadow-btnShadow text-sm text-white font-bold py-3 px-6 rounded-full bg-[#5271FF] w-fit mx-auto mt-4">
              Submit
            </button>
            <div className="text-[#aab0bc] w-full">
              * These fields are required.
            </div>
          </form>
        </Container>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Hire;
