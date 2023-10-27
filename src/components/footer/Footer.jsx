import Container from "../container/Container";
import Logo from "../../assets/footerLogo.png";

function Footer() {
  return (
    <footer className="py-14 bg-black">
      <Container>
        <div>
          <img src={Logo} alt="Augmntx-logo" className="w-[247px] lg:w-3/4" />
        </div>
        <div className="text-base text-[#d3d3d3] mt-8 flex flex-col lg:flex-row gap-8">
          <ul className="flex flex-col gap-4 lg:w-[190px] pr-8">
            <li className="font-bold text-[#fefefe] text-xl">Information</li>
            <li>About Us</li>
            <li>Corporate Information</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
          <ul className="flex flex-col gap-4 lg:w-[190px] pr-8">
            <li className="font-bold text-[#fefefe] text-xl">AugmntX</li>
            <li>View Profiles</li>
            <li>Discover</li>
            <li>On Demand Talent</li>
            <li>Pricing</li>
          </ul>
          <ul className="flex flex-col gap-4 lg:w-[190px] pr-8">
            <li className="font-bold text-[#fefefe] text-xl">Vendor</li>
            <li>Apply As Vendor</li>
            <li>Vendor Login</li>
            <li>Remote Jobs</li>
            <li>Resources</li>
          </ul>
        </div>
      </Container>
      <div className="border border-[#fefefe] mt-14"></div>
      <Container>
      <div className="mt-5 text-[#d3d3d3] lg:flex lg:justify-between">
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <span>© 2022 - 2023</span>
          <span className="text-white text-xl font-medium">AugmntX</span> -
          <span>Labor Omnia Vincit</span> <span>⚡ by</span>
          <span className="text-[#5271FF]">SuperLabs</span>
        </div>
        <div className="mt-4 lg:mt-0 flex flex-col gap-1 lg:gap-3 items-center lg:flex-row">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;
