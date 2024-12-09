import Image from "next/image";
import shopping from "../public/shopping.png"
  
const Contact = () => {
    return(
        <div className='w-[1920px] h-[900px] 1588  py-[140px] px-[220px] flex flex-col gap-[100px]'>
        <div className={`w-[1480px] h-[547px] flex items-center gap-[60px] `}>
          <div className='w-[672px] h-[411px]  gap-[60px] '>
            <div className="w-[700px] h-[288px] gap-6">
              <h1 className='w-[672px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-[#212529]' >Project Management</h1>
              <p className='w-[672px] pt-6 h-[90px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-[#212529]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
            </div>
            
          </div>
        </div>
          <div className='w-[710px] h-[661px] gap-1 '>
            <Image src={shopping} alt={"picture"} />
          </div>
        </div>

    )
}
export default Contact