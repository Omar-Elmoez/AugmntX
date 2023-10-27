/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import noImg from "../../assets/noimage.jpg";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { AiOutlineDownload } from "react-icons/ai";
import Skill from "../skill/Skill";

function Card(props) {
  return (
    <NavLink to={`${props.unique_id}`} className="lg:w-[48%] mr-1">
      <div className="bg-white p-2.5 rounded-lg shadow-lg mb-6">
        <div className="flex items-center gap-6">
          <img
            src={
              props?.userPhoto.endsWith(".webp")
                ? `https://augmntx.com/${props?.userPhoto}`
                : noImg
            }
            alt="dev-img"
            className="w-1/3 lg:w-[100px] rounded-full shadow-imgshadow"
          />
          <div>
            <div className="font-medium text-[1rem]">
              {`${props.last_name} ${props.first_name}`}
              <span className="text-[#e2626b] text-[10px] ml-1">
                {props.unique_id}
              </span>
            </div>
            <div className="font-bold text-[14px] mt-2">
              {`${props.primary_title}, ${props.experience} years`}
            </div>
            <div className="text-[10px] flex items-center gap-2 mt-2">
              {props.skills.map((skill, index) => {
                return index < 3 ? (
                  <Skill key={index}>{skill.slice(0, 8)}</Skill>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-[12px] mt-3 font-b">{`${props.bio.slice(
          0,
          165
        )}...`}</p>
        <div className="text-[12px] mt-4">
          <span className="font-extrabold no-underline">Industries: </span>
          {props.profile_industries.map((item, index) => {
            return (
              <>
                <span key={index} className="font-semibold underline">
                  {item}
                </span>
                {index !== props.profile_industries.length - 1 ? ", " : ""}
              </>
            );
          })}
        </div>
        <div className="text-[#5271FF] text-[12px] flex mt-2">
          <div className="flex items-center justify-center gap-1 flex-1">
            <HiOutlineChatBubbleOvalLeft />
            Hire DA R
          </div>
          <div className="flex items-center justify-center gap-1 flex-1">
            <AiOutlineDownload />
            Download PDF
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
