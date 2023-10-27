import { PiShareFat } from 'react-icons/pi';
import { TbMessageCircleExclamation } from 'react-icons/tb';
import { FiDownload } from 'react-icons/fi';

function DevContact() {
  return (
    <div className='text-[#343f52] text-base font-semibold flex flex-col md:flex-row lg:flex-row gap-3 mt-4'>
      <div className='flex items-center gap-2 hover:bg-[#5272ff] hover:text-white w-fit mx-auto hover:px-20 hover:rounded-full transform transition-transform duration-500 ease-in-out hover:translate-y-[-0.35rem] hover:shadow-btnShadow'>
        <PiShareFat /> Share
      </div>
      <div className='flex items-center gap-2 hover:bg-[#5272ff] hover:text-white w-fit mx-auto hover:px-20 hover:rounded-full transform transition-transform duration-500 ease-in-out hover:translate-y-[-0.35rem] hover:shadow-btnShadow'>
        <TbMessageCircleExclamation /> Hire Rajput B
      </div>
      <div className='flex items-center gap-2 hover:bg-[#5272ff] hover:text-white w-fit mx-auto hover:px-20 hover:rounded-full transform transition-transform duration-500 ease-in-out hover:translate-y-[-0.35rem] hover:shadow-btnShadow'>
        <FiDownload /> Download PDF
      </div>
    </div>
  );
}

export default DevContact;