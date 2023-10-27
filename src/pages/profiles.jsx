import Header from "../components/header/Header";
import Container from "../components/container/Container";
import Card from "../components/card/Card";
import { BiChevronsRight, BiLogoTelegram } from "react-icons/bi";
import { BsArrowRight, BsGlobe2 } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import { useEffect, useState } from "react";

function Profiles() {
  const [devsData, setDevsData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch("https://augmntx.com/api/profile_list?limit=9")
      .then((res) => res.json())
      .then((data) => setDevsData(data));
  }, [count]);

  return (
    <>
      <Header />
      <main className="pt-10 bg-[#fefefe]">
        <section className="lg:flex lg:flex-row-reverse">
          <div className="lg:flex-1">
            <Container>
              <section>
                <input
                  type="search"
                  placeholder="Search For Skills"
                  className="border border-[rgba(8, 60, 130, 0.07)] py-[0.6rem] px-4 outline-none text-[#60697b] rounded-md w-full focus:border-[#66afe9]"
                />
                <div className="mt-4 lg:flex lg:flex-wrap lg:justify-between ">
                  {devsData.map((item, index) => (
                    <Card key={index} {...item} />
                  ))}
                </div>
                <ul className="flex border border-[rgba(164, 174, 198, 0.2)] rounded-[0.4rem] divide-x divide-slate-200 w-fit mx-auto mb-4">
                  <li className="py-3 px-4 text-[0.65rem] text-[#5271ff] font-bold flex items-center justify-center cursor-pointer" onClick={() => setCount(1)}>
                    1
                  </li>
                  <li className="py-3 px-4 text-[0.65rem] font-bold flex items-center justify-center cursor-pointer" onClick={() => setCount(2)}>
                    2
                  </li>
                  <li className="py-3 px-4 text-[0.65rem] font-bold flex items-center justify-center cursor-pointer" onClick={() => setCount(3)}>
                    3
                  </li>
                  <li className="py-3 px-4 text-[0.65rem] font-bold flex items-center justify-center cursor-pointer" onClick={() => setCount(4)}>
                    <BiChevronsRight />
                  </li>
                </ul>
              </section>
            </Container>
          </div>
          <div className="bg-[#fefefe] lg:w-1/4">
            <Container>
              <aside className="py-14 lg:pl-10">
                <h4 className="font-bold text-[#343f52] text-lg">
                  Hiring resources
                </h4>
                <div className="text-[#60697b] flex items-center gap-2 mt-4">
                  Guide to Hiring devs
                  <span className="flex items-center">
                    (<BsArrowRight className="text-[#aab0bc] text-sm" />)
                  </span>
                </div>
                <div className="text-[#60697b] flex items-center gap-2 mt-2">
                  Job Template
                  <span className="flex items-center">
                    (<BsArrowRight className="text-[#aab0bc] text-sm" />)
                  </span>
                </div>
                <div className="text-[#60697b] flex items-center gap-2 mt-2">
                  Interview Questions
                  <span className="flex items-center">
                    (<BsArrowRight className="text-[#aab0bc] text-sm" />)
                  </span>
                </div>
                <div className="text-[#60697b] flex items-center gap-2 mt-2">
                  Common Mistakes
                  <span className="flex items-center">
                    (<BsArrowRight className="text-[#aab0bc] text-sm" />)
                  </span>
                </div>
                <h4 className="font-bold text-[#343f52] text-lg mt-8">
                  Need help?
                </h4>
                <div className="text-[#60697b] flex items-center gap-2 mt-4">
                  Book a meeting
                  <span className="flex items-center">
                    (<BsArrowRight className="text-[#aab0bc] text-sm" />)
                  </span>
                </div>
                <div className="text-[#60697b] flex items-center gap-2 mt-2">
                  Chat with an expert
                  <span className="flex items-center">
                    (<BsArrowRight className="text-[#aab0bc] text-sm" />)
                  </span>
                </div>
              </aside>
            </Container>
          </div>
        </section>
        <section className="py-12 lg:py-16 bg-[#f6f7f9]">
          <Container className="lg:flex lg:flex-wrap lg:gap-8">
            <div className="flex gap-4 lg:w-[520px]">
              <div className="text-[44px]">
                <FaPeopleGroup />
              </div>
              <div>
                <h4 className="text-[#343f52] font-bold text-lg">
                  Verified profiles
                </h4>
                <p className="font-medium text-[#60697b] leading-relaxed">
                  AugmntX vets profiles rigorously & the best candidates are
                  handpicked by our experts.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8 lg:mt-0 lg:w-[520px]">
              <div className="text-[44px]">
                <BiLogoTelegram />
              </div>
              <div>
                <h4 className="text-[#343f52] font-bold text-lg">
                  Fast onboarding
                </h4>
                <p className="font-medium text-[#60697b] leading-relaxed">
                  You will be able to get an developer working on your project
                  within 2 to 3 business days.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-8 lg:mt-0 lg:w-[520px]">
              <div className="text-[44px]">
                <BsGlobe2 />
              </div>
              <div>
                <h4 className="text-[#343f52] font-bold text-lg">
                  Effortless scaling
                </h4>
                <p className="font-medium text-[#60697b] leading-relaxed">
                  With our large talent pool of dev, you can effortlessly scale
                  your team fast.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <Contact />
    </>
  );
}

export default Profiles;
