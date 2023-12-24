import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="my-2 ml-8 sm:ml-20  xl:ml-18 2xl:ml-20 flex flex-col sm:flex-row lg:justify-between xl:justify-between items-center ">
      <div className='flex items-center flex-wrap'>

        <div className="border-2 mx-3 flex justify-center items-center min-w-[46px] h-[46px] sm:w-[46px] sm:h-[46px] bg-opacity black-4 rounded-[23px]">
          <Image
            width={24}
            height={24}
            alt="Properx menu"
            src="/static/img/properx-menu-24-black20.svg"
          />
        </div>
        <Image
          width={97}
          height={46}
          alt="Logotype creator"
          src="/static/img/logotype-creator-studio.png"
        />
      </div>



      {/* middle section */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-0.25 md:gap-5 mt-4 sm:mt-0">

        <div className="flex justify-center items-center ">
          <input
            className="w-[270px] sm:w-[270px] mr-16 bg-defaultwhite rounded-[10px] border border-solid border-opacity black-6 shadow-drop-shadow-normal relative h-[40px] font-paragraph-p3-semi-bold  text-neutral-700   whitespace-nowrap  p-4 pl-[19px]"
            placeholder="Search Academy ..."
            type="text"
          />

          <div className="relative bg-slate-100 rounded-[23px] w-[48px] h-[48px] top-0 sm:w-[48px] sm:h-[48px] mx-3 ">
            <div className="w-[50px]  h-[48px] bg-opacityblack-4 rounded-[23px] flex justify-center items-center">
              <Image
                width={24}
                height={24}
                alt="Properchat"
                src="/static/img/properchat-24-black20.png"
              />
              <div className="absolute   flex justify-center items-center w-[46px] h-[46px] top-[2px] left-0 bg-opacityblack-4 rounded-[23px]" />

              <div className="absolute  left-[35px] w-[18px] h-[18px] flex justify-center items-center top-0">
                <div className="absolute bg-8958E1   w-[20px] h-[20px]   bg-opacity primary-100 rounded-[10px]  ">
                  <div className="w-[18px] text-white  ml-0.5 pr-0.5 mt-[-2px]  font-paragraph-p5-semi-bold paragraph-p3-semi-bold text-defaultwhite text-paragraph-p4-semi-bold flex justify-center">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-slate-100 w-[50px] h-[46px] top-[2px] justify-center bg-opacityblack-4 rounded-[23px]">
            <Image className="w-[24px] h-[24px] top-[11px] left-[11px]" width={24}
              height={24} alt="Inbox" src="/static/img/inbox-24-black20.png" />
          </div>
        </div>


        <div className="border-1 border-solid border-gray-200 h-10"></div>

        {/* right section */}

        <div>

          <div className="flex w-[240px] h-[46px] top-[2px] left-[10px]">
            <div className=" w-[46px]  h-[46px] top-0 left-0 bg-[url(/static/img/avatar-6.png)] bg-cover bg-[50%_50%]">
              <div className="relative flex items-center justify-center w-[24px] h-[24px] top-[22px] left-[23px] bg-opacitywhite-100 rounded-[12px] shadow-drop-shadow-main">
                <Image

                  width={16}
                  height={16}
                  alt="Downward"
                  src="/static/img/downward-24-black20-4.png"
                />
              </div>
            </div>

            <div>


              <div className="top-0 left-[60px] h-[24px] mx-3 font-paragraph-p3-semi-bold font-semibold text-black text-16 tracking-0 leading-24 whitespace-nowrap">
                Connor Ericsson
                <Image
                  className="mx-2 inline-block"
                  width={24}
                  height={24}
                  alt="Creator badge"
                  src="/static/img/creator-badge-1.png"
                />
              </div>
              <p className="flex mx-3 font-medium w-[157px] h-[21px] top-[24px] left-[60px] text-neutral-400  tracking-0 leading-21">
                <span className="font-paragraph-p4-regular font-normal text-#999999">
                  via
                </span>&nbsp;
                <span className="font-paragraph-p4-semi-bold text-#333333">
                  connor@shopbut
                </span>
                <span className="font-paragraph-p4-regular text-#999999">
                  {" "}
                  ...
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}



export default Header;
