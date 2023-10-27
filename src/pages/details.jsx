import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import { CiCalendarDate } from "react-icons/ci";
import { GoHourglass, GoGear } from "react-icons/go";
import {
  BsBriefcase,
  BsMortarboard,
  BsCodeSlash,
  BsArrowLeftShort,
} from "react-icons/bs";
import { LuLanguages } from "react-icons/lu";
// import Logo from "../assets/noimage.jpg";
import Skill from "../components/skill/Skill";
import DevContact from "../components/dev-contact/DevContact";
import DevInfo from "../components/dev-info/DevInfo";
import InfoTitle from "../components/info-title/InfoTitle";
import InfoBody from "../components/info-body/InfoBody";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Details() {
  const { unique_id } = useParams();
  const [devData, setDevData] = useState({});
  const url = `https://augmntx.com/api/profile/${unique_id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDevData(data));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="flex items-center gap-2 pt-2">
            <BsArrowLeftShort className="text-[#adb2bc]" />
            <a href="https://augmntx.com/home" className="text-[#5271FF]">
              Home
            </a>
            /
            <a href="https://augmntx.com/profiles" className="text-[#5271FF]">
              Developers
            </a>
            /
            <span className="text-[#adb2bc]">
              {devData.profile_info?.unique_id}
            </span>
          </div>
          <section className="lg:flex lg:gap-4 mt-4">
            <div className="min-w-[310px] lg:max-w-[310px]">
              <img
              src={`https://augmntx.com/${devData.profile_info?.userPhoto}`}
                // src={
                //   devData.profile_info?.userPhoto.startsWith("https:")
                //     ? devData.userPhoto
                //     : Logo
                // }
                alt="dev-logo"
              />
            </div>
            <div>
              <div className="mt-10 flex gap-3 items-end">
                <span className="text-[#adb2bc] font-bold text-lg">
                  {`${devData.profile_info?.last_name} ${devData.profile_info?.first_name}`}
                </span>
                <span className="text-[12px] text-[#ff0000] font-normal">
                  {devData.profile_info?.unique_id}
                </span>
                <span className="text-[12px] text-[#45c4a0] font-bold">
                  Active
                </span>
              </div>
              <h2 className="text-lg text-[#343f52] font-bold mt-2.5">
                {`${devData.profile_info?.primary_title}, ${devData.profile_info?.experience} years`}
              </h2>
              <p className="text-[#60697b] text-sm font-medium leading-relaxed mt-4">
                {devData.profile_info?.bio}
              </p>
            </div>
          </section>
          <div className="text-[12px] text-[#343f52] mt-5 flex flex-wrap gap-3">
            {devData.skills &&
              devData.skills.map((skill, index) => {
                return <Skill key={index}>{skill.name}</Skill>;
              })}
          </div>
          <div className="mt-4 p-2 flex flex-wrap">
            <span className="font-extrabold no-underline text-lg">
              Industries:
            </span>
            {devData.projects &&
              devData.projects.map((project, index) => {
                return (
                  <span
                    className="font-semibold underline text-base text-[#6f6b7b] ml-2"
                    key={index}
                  >
                    {project.industry}
                  </span>
                );
              })}
          </div>
          <DevContact />
          <section className="border-y-[2px] divide-y-2 mt-8">
            <DevInfo>
              <InfoTitle>
                <CiCalendarDate />
                Availability
              </InfoTitle>
              <InfoBody>{devData.profile_info?.comittment}</InfoBody>
            </DevInfo>
            <DevInfo>
              <InfoTitle className="w-[120px]">
                <GoHourglass />
                Total experience
              </InfoTitle>
              <InfoBody>{devData.profile_info?.experience} years</InfoBody>
            </DevInfo>
            <DevInfo className="flex-col lg:flex-row gap-6 lg:gap-0" start>
              <InfoTitle>
                <BsCodeSlash />
                Technical skills
              </InfoTitle>
              <InfoBody className="flex gap-16">
                <ul className="flex flex-col flex-1 lg:flex-grow-0 gap-3">
                  {devData.skills &&
                    devData?.skills.map((skill, index) => {
                      return <li key={index} className="w-max">{skill.name}</li>;
                    })}
                </ul>
                <ul className="flex flex-col flex-1 gap-3">
                  {devData.skills &&
                    devData?.skills.map((skill, index) => {
                      return <li key={index}>{skill.year} Years</li>;
                    })}
                </ul>
              </InfoBody>
            </DevInfo>
            <DevInfo className="flex-col lg:flex-row gap-8 lg:gap-0" start>
              <InfoTitle>
                <GoGear />
                Projects
              </InfoTitle>
              <InfoBody className="w-2/3 flex flex-col gap-4">
                {devData.projects &&
                  devData?.projects.map((project, index) => {
                    return (
                      <div key={index}>
                        <InfoTitle>
                          <span className="w-[8px] h-[8px] bg-black rounded-full"></span>
                          {devData.projects && project.title}
                        </InfoTitle>
                        <div className="pl-5 mt-4 border-l-[2px] border-dashed">
                          <h3 className="font-bold">Description</h3>
                          <p>{devData.projects && project.description}</p>
                          <h3 className="font-bold mt-4">
                            Roles and Responsibilites
                          </h3>
                          <div>
                            {devData.projects && project.responsibilities}
                          </div>
                          <div className="font-bold mt-4">
                            Technologies:
                            <span className="font-normal ml-1">
                              {devData.projects && project.technologies}
                            </span>
                          </div>
                          <div className="font-bold mt-4">
                            Industry:
                            <span className="font-normal ml-1">
                              {devData.projects && project.industry}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </InfoBody>
            </DevInfo>
            <DevInfo className="flex-col lg:flex-row gap-4 lg:gap-0" start>
              <InfoTitle>
                <BsBriefcase />
                Work history
              </InfoTitle>
              <InfoBody>
                {devData.experience && devData.experience.title
                  ? devData.experience.title
                  : devData.profile_info?.primary_title}
              </InfoBody>
            </DevInfo>
            <DevInfo className="flex-col lg:flex-row gap-4 lg:gap-0" start>
              <InfoTitle>
                <BsMortarboard />
                Education
              </InfoTitle>
                {devData.education && devData.education.map((eduData, index) => {
                  return (
                    <InfoBody key={index}>
                      {`${eduData.degree} in ${eduData.major}`}
                    <div className="text-[#aab0bc] flex flex-col gap-1 mt-2">
                      <span>{eduData.univ}</span>
                      <span>{`${eduData.edu_start} to ${eduData.edu_end}`}</span>
                    </div>
                  </InfoBody>
                  )
                })}
            </DevInfo>
            <DevInfo className="flex-col lg:flex-row gap-4 lg:gap-0" start>
              <InfoTitle>
                <LuLanguages />
                Language
              </InfoTitle>
              <InfoBody>English - {devData.profile_info?.english}</InfoBody>
            </DevInfo>
          </section>
          <DevContact />
          <div className="bg-[#5271FF] font-bold text-[26px] text-center text-[#fefefe] px-5 my-6 lg:flex">
            <div className="py-16 flex-1 border-b-[2px] lg:border-b-0">
              <div className="lg:border-r-[2px]">
                <div>
                  Hire software
                  <br />
                  developers today
                </div>
                <a
                  href="https://augmntx.com/hire"
                  className="bg-[#fefefe] text-[#343f52] text-sm py-2.5 px-6 mt-6 block w-fit mx-auto font-bold rounded-full cursor-pointer"
                >
                  Connect with us
                </a>
              </div>
            </div>
            <div className="py-16 flex-1">
              <div>
                Join the
                <br />
                developer network
              </div>
              <a
                href="https://augmntx.com/join"
                className="bg-[#fefefe] text-[#343f52] text-sm py-2.5 px-6 mt-6 block w-fit mx-auto font-bold rounded-full cursor-pointer"
              >
                Join AugmntX
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Details;
