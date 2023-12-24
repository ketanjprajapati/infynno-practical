import Image from 'next/image';
import React from 'react'

function RightSection() {
    return (
        <div className='flex-col'>
            <div className=" h-[48px] mt-8 ml-12 pl-3 flex justify-between">
                <div className=" top-[7px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-neutral-900 text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                    Messages
                </div>
                <div className='flex'>

                    <div className=" w-80">
                        <div className="relative h-[48px]">
                            <div className=" w-[190px] h-[46px] top-[2px] ml-24 bg-defaultwhite rounded-[10px] border border-solid border-opacity black-6 shadow-drop-shadow-normal" />
                            <Image
                                className="absolute w-[20px] h-[20px] top-[15px] left-[260px]"
                                width={20}
                                height={20}
                                alt="Expand more"
                                src="/static/img/expand-more.png"
                            />
                            <div className="absolute h-[24px] top-[13px] left-[110px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-700 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                See all
                            </div>
                            <div className="top-0 left-[330px] absolute w-[20px] h-[18px]">
                                <div className="relative w-[22px] h-[22px] top-[-8px] left-[-55px] bg-8958E1 text-white rounded-[18px] border-2 border-solid border-opacity-white-100">
                                    <div className="absolute w-[18px] top-[-4px] left-0 font-paragraph-p5-semi-bold font-[number:var(--paragraph-p5-semi-bold-font-weight)] text-defaultwhite text-[length:var(--paragraph-p5-semi-bold-font-size)] text-center tracking-[var(--paragraph-p5-semi-bold-letter-spacing)] leading-[var(--paragraph-p5-semi-bold-line-height)] [font-style:var(--paragraph-p5-semi-bold-font-style)]">
                                        3
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="w-[119px] top-[2px] pl-0 relative h-[46px] all-[unset] box-border">
                        <div className="w-[117px] rounded-[40px] shadow-drop-shadow-main [background:linear-gradient(180deg,rgb(253,141,221)_0%,rgb(137,88,225)_100%)] relative h-[46px]">
                            <Image
                                className="absolute w-[24px] h-[24px] top-[11px] left-[26px]"
                                width={24}
                                height={24}
                                alt="New message"
                                src="/static/img/new-message.svg"
                            />
                            <div className="absolute h-[24px] top-[11px] left-[56px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-defaultwhite text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                New
                            </div>
                        </div>
                    </button>
                </div>
            </div>


            <div className="mt-5 ml-14 bg-defaultwhite rounded-[10px] border border-solid border-opacity black-10 shadow-drop-shadow-normal-focus flex ">
                <div className='relative'>

                    <div className='flex gap-5 ml-4 mt-3'>
                        <div className='text-center'>
                            <div className='relative cursor-pointer' >
                                <Image className="w-[60px] h-[60px]" width={270} height={105} alt="Avatar" src="/static/img/avatar.png" />
                                <Image className="absolute w-[15px] h-[20px] top-[40px] left-[46px]" width={270} height={105} alt="Online" src="/static/img/online.svg" />
                            </div>
                            <span className='font-inter text-center text-neutral-700 text-[length:12px] leading-[18px] font-medium '> Casey N...</span>
                        </div>
                        <div className='text-center '>
                            <div className='relative cursor-pointer'>
                                <Image className="w-[60px] h-[60px] " width={270} height={105} alt="Avatar" src="/static/img/avatar-2.png" />
                                <Image className="absolute w-[15px] h-[20px] top-[40px] left-[46px]" width={270} height={105} alt="Online" src="/static/img/online.svg" />
                            </div>
                            <span className='font-inter text-center text-neutral-700 text-[length:12px] leading-[18px] font-medium '> Shane D...</span>

                        </div>
                        <div className='text-center '>
                            <div className='relative cursor-pointer'>
                                <Image className="w-[60px] h-[60px] " width={270} height={105} alt="Avatar" src="/static/img/avatar-1.png" />
                                <Image className="absolute w-[15px] h-[20px] top-[40px] left-[46px]" width={270} height={105} alt="Online" src="/static/img/online.svg" />
                            </div>
                            <span className='font-inter text-center text-neutral-700 text-[length:12px] leading-[18px] font-medium '> Shane D...</span>
                        </div>
                        <div className='text-center '>
                            <div className=' relative cursor-pointer'>
                                <Image className="w-[60px] h-[60px] " width={270} height={105} alt="Avatar" src="/static/img/avatar-4.png" />
                                <Image className="absolute w-[15px] h-[20px] top-[40px] left-[46px]" width={270} height={105} alt="Online" src="/static/img/online.svg" />
                            </div>
                            <span className='font-inter text-center text-neutral-700 text-[length:12px] leading-[18px] font-medium '> Shane D...</span>
                        </div>
                    </div>
                    <div className="w-[280px] h-[46px] mt-5 ml-6">
                        <div className="absolute w-[285px] h-[46px] bg-defaultwhite rounded-[10px] border border-solid border-opacity black-6 shadow-drop-shadow-normal">
                            <input
                                className="absolute h-[24px] top-[10px] left-[19px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-700 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)] [background:transparent] border-[none] p-0"
                                placeholder="Search ..."
                                type="text"
                            />
                            <Image className="absolute w-[20px] h-[20px] top-[12px] left-[229px] cursor-pointer" alt="Search" width={20}
                                height={20} src="/static/img/search.png" />
                        </div>
                    </div>
                    <div className="absolute w-[285px] h-[444px] mt-4 left-[12px]">
                        <div className="w-[286px] h-[74px] top-0 absolute left-0 cursor-pointer">
                            <div className="relative w-[300px] h-[74px] bg-slate-100 rounded-[10px]">
                                <div className="top-[14px] left-[70px] absolute h-[24px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                    Casey Neistat
                                </div>
                                <div className="absolute top-[17px] left-[217px] font-paragraph-p5-medium font-[number:var(--paragraph-p5-medium-font-weight)] text-neutral-500 text-[length:var(--paragraph-p5-medium-font-size)] text-right tracking-[var(--paragraph-p5-medium-letter-spacing)] leading-[var(--paragraph-p5-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p5-medium-font-style)]">
                                    11:08 AM
                                </div>
                                <Image
                                    className="top-[16px] left-[182px] absolute w-[20px] h-[20px]"
                                    width={20}
                                    height={20}
                                    alt="Creator badge"
                                    src="/static/img/creator-badge-1.png"
                                />
                                <Image
                                    className="w-[46px] h-[46px] top-[14px] absolute left-[10px] object-cover"
                                    width={46}
                                    height={46}
                                    alt="Avatar"
                                    src="/static/img/avatar.png"
                                />
                                <div className="absolute h-[21px] top-[38px] left-[72px] font-paragraph-p4-medium font-[number:var(--paragraph-p4-medium-font-weight)] text-neutral-700 text-[length:var(--paragraph-p4-medium-font-size)] tracking-[var(--paragraph-p4-medium-letter-spacing)] leading-[var(--paragraph-p4-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p4-medium-font-style)] flex justify-center items-center">
                                    <Image src='/static/img/Typing.svg' width={22} height={19} alt='typing' />
                                    <span className='mx-2'>
                                        Typing
                                    </span>
                                </div>
                                <div className="absolute w-[16px] h-[4px] top-[46px] left-[70px]">
                                    <div className="left-0 absolute w-[4px] h-[4px] top-0 bg-opacityblack-20 rounded-[2px]" />
                                    <div className="left-[6px] absolute w-[4px] h-[4px] top-0 bg-opacityblack-20 rounded-[2px]" />
                                    <div className="left-[12px] absolute w-[4px] h-[4px] top-0 bg-opacityblack-20 rounded-[2px]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[290px] h-[74px] top-[74px] absolute left-0 cursor-pointer">
                            <div className="top-[14px] left-[70px] absolute h-[24px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                Jakob Mango
                            </div>
                            <div className="absolute top-[17px] left-[217px] font-paragraph-p5-medium font-[number:var(--paragraph-p5-medium-font-weight)] text-neutral-500 text-[length:var(--paragraph-p5-medium-font-size)] text-right tracking-[var(--paragraph-p5-medium-letter-spacing)] leading-[var(--paragraph-p5-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p5-medium-font-style)]">
                                10:19 AM
                            </div>
                            <Image
                                className="w-[46px] h-[46px] top-[14px] absolute left-[10px] object-cover"
                                width={46}
                                height={46}
                                alt="Avatar"
                                src={`/static/img/Avatar_2.svg`}
                            />
                            <div className="absolute h-[21px] top-[38px] left-[70px] font-paragraph-p4-medium font-[number:var(--paragraph-p4-medium-font-weight)] text-neutral-700 text-[length:var(--paragraph-p4-medium-font-size)] tracking-[var(--paragraph-p4-medium-letter-spacing)] leading-[var(--paragraph-p4-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p4-medium-font-style)]">
                                Yoo, thx for accepting
                            </div>
                            <div className="top-[40px] left-[262px] absolute w-[20px] h-[18px]">
                                <div className="relative w-[18px] h-[18px] bg-purple-500 rounded-[9px] text-center flex justify-center items-center ">
                                    <div className=" w-[18px]  font-paragraph-p5-semi-bold text-white flex justify-center">
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[286px] h-[74px] top-[148px] absolute left-0 cursor-pointer">
                            <div className="top-[14px] left-[70px] absolute h-[24px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                Shane Davis
                            </div>
                            <div className="absolute top-[17px] left-[223px] font-paragraph-p5-medium font-[number:var(--paragraph-p5-medium-font-weight)] text-neutral-500 text-[length:var(--paragraph-p5-medium-font-size)] text-right tracking-[var(--paragraph-p5-medium-letter-spacing)] leading-[var(--paragraph-p5-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p5-medium-font-style)]">
                                1:52 AM
                            </div>
                            <div className="top-[40px] left-[262px] absolute w-[20px] h-[18px]">
                                <div className="relative w-[18px] h-[18px] bg-purple-500 rounded-[9px] text-center flex justify-center items-center ">
                                    <div className=" w-[18px]  font-paragraph-p5-semi-bold text-white flex justify-center">
                                        1
                                    </div>
                                </div>
                            </div>
                            <Image
                                className="w-[46px] h-[46px] top-[14px] absolute left-[10px] object-cover"
                                width={46}
                                height={46}
                                alt="Avatar"
                                src="/static/img/avatar-2.png"
                            />
                            <div className="absolute h-[21px] top-[38px] left-[94px] font-paragraph-p4-medium font-[number:var(--paragraph-p4-medium-font-weight)] text-neutral-700 text-[length:var(--paragraph-p4-medium-font-size)] tracking-[var(--paragraph-p4-medium-letter-spacing)] leading-[var(--paragraph-p4-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p4-medium-font-style)]">
                                Audio message
                            </div>
                            <Image
                                className="absolute w-[20px] h-[20px] top-[38px] left-[70px]"
                                width={20}
                                height={20}
                                alt="Graphic eq"
                                src="/static/img/graphic-eq.png"
                            />
                        </div>
                        <div className="w-[286px] h-[74px] top-[222px] relative left-0 cursor-pointer">
                            <div className="top-[14px] left-[70px] absolute h-[24px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                Lindsey Carder
                            </div>
                            <div className="absolute top-[17px] left-[247px] font-paragraph-p5-medium font-[number:var(--paragraph-p5-medium-font-weight)] text-neutral-500 text-[length:var(--paragraph-p5-medium-font-size)] text-right tracking-[var(--paragraph-p5-medium-letter-spacing)] leading-[var(--paragraph-p5-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p5-medium-font-style)]">
                                Thu
                            </div>
                            <Image
                                className="absolute w-[46px] h-[46px] top-[14px] left-[10px]"
                                width={46}
                                height={46}
                                alt="Default avatar light"
                                src="/static/img/default-avatar-light-46.svg"
                            />
                            <p className="absolute w-[210px] h-[21px] top-[38px] left-[70px] font-paragraph-p4-medium font-[number:var(--paragraph-p4-medium-font-weight)] text-neutral-700 text-[length:var(--paragraph-p4-medium-font-size)] tracking-[var(--paragraph-p4-medium-letter-spacing)] leading-[var(--paragraph-p4-medium-line-height)] [font-style:var(--paragraph-p4-medium-font-style)]">
                                Dope content bro, do you w...
                            </p>
                        </div>
                        <div className="w-[286px] h-[74px] top-[296px] absolute left-0 cursor-pointer">
                            <div className="top-[14px] left-[70px] absolute h-[24px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                Colby Raha
                            </div>
                            <div className="absolute top-[17px] left-[247px] font-paragraph-p5-medium font-[number:var(--paragraph-p5-medium-font-weight)] text-neutral-500 text-[length:var(--paragraph-p5-medium-font-size)] text-right tracking-[var(--paragraph-p5-medium-letter-spacing)] leading-[var(--paragraph-p5-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p5-medium-font-style)]">
                                Thu
                            </div>
                            <Image
                                className="w-[46px] h-[46px] top-[14px] absolute left-[10px] object-cover"
                                width={46}
                                height={46}
                                alt="Avatar"
                                src="/static/img/avatar-3.png"
                            />
                            <div className="absolute h-[21px] top-[38px] left-[70px] font-paragraph-p4-medium font-[number:var(--paragraph-p4-medium-font-weight)] text-neutral-700 text-[length:var(--paragraph-p4-medium-font-size)] tracking-[var(--paragraph-p4-medium-letter-spacing)] leading-[var(--paragraph-p4-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p4-medium-font-style)]">
                                Ayo, text me back
                            </div>
                        </div>
                        <div className="w-[286px] h-[74px] top-[370px] absolute left-0 cursor-pointer">
                            <div className="top-[14px] left-[70px] absolute h-[24px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                Cheyenne Saris
                            </div>
                            <div className="absolute top-[17px] left-[244px] font-paragraph-p5-medium font-[number:var(--paragraph-p5-medium-font-weight)] text-neutral-500 text-[length:var(--paragraph-p5-medium-font-size)] text-right tracking-[var(--paragraph-p5-medium-letter-spacing)] leading-[var(--paragraph-p5-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p5-medium-font-style)]">
                                Mon
                            </div>
                            <Image
                                className="w-[46px] h-[46px] top-[14px] absolute left-[10px] object-cover"
                                width={46}
                                height={46}
                                alt="Avatar"
                                src="/static/img/avatar-4.png"
                            />
                            <div className="absolute h-[21px] top-[38px] left-[70px] font-paragraph-p4-medium font-[number:var(--paragraph-p4-medium-font-weight)] text-neutral-700 text-[length:var(--paragraph-p4-medium-font-size)] tracking-[var(--paragraph-p4-medium-letter-spacing)] leading-[var(--paragraph-p4-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p4-medium-font-style)]">
                                Hi
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-col'>
                    <div className="relative  top-[20px] ml-8 ">
                        <div className="top-0 ">

                            <div className="flex justify-start h-[46px] ml-20  ">
                                <div className="flex justify-start mt-1 ml-16">
                                    <div className=" h-[24px] top-[11px]  font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-700 text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                                        @casey
                                    </div>
                                    <Image
                                        className="w-[40px] h-[24px] top-[11px] "
                                        width={24}
                                        height={24}
                                        alt="Creator badge"
                                        src="/static/img/creator-badge-24.svg"
                                    />
                                </div>
                                <div className=" w-[34px] h-[34px] ml-24 flex justify-center items-center  bg-slate-100  bg-opacity black-4 rounded-[23px]">
                                    <Image
                                        className=" w-[24px] h-[24px] left-[11px]"
                                        width={24}
                                        height={24}
                                        alt="More vert"
                                        src="/static/img/more-vert.png"
                                    />
                                </div>
                            </div>
                            <div className="w-[300px] h-[32px] mt-2">
                                <div className="relative w-[370px] h-[32px] bg-[#00b6740f] rounded-[10px] border border-solid border-[#00b67433] shadow-drop-shadow-normal-focus">
                                    <div className="text-center font-paragraph-p4-semi-bold font-[number:var(--paragraph-p4-semi-bold-font-weight)] text-success700-main text-[length:var(--paragraph-p4-semi-bold-font-size)] tracking-[var(--paragraph-p4-semi-bold-letter-spacing)] leading-[var(--paragraph-p4-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p4-semi-bold-font-style)]">
                                        Online
                                    </div>
                                    <div className="absolute w-[10px] h-[10px] top-[8px] left-[145px] bg-00B674
 -main rounded-[5px]" />
                                </div>
                            </div>



                            {/* messages */}
                            <div className="flex p-1">
                                {/* Left Side: Small Profile Picture */}


                                {/* Right Side: Message Container */}
                                <div className="flex-1 ">
                                    <div className="max-h-screen overflow-y-auto ">
                                        {/* Receiver's Message */}
                                        <div className="flex items-center mb-2">
                                            <div className="flex-shrink-0 mr-4">
                                                <Image
                                                    src="/static/img/avatar.png"
                                                    alt="Profile Picture"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="bg-8958E1 p-2 max-w-64 rounded-md rounded-bl-none text-white ">
                                                Hi, would you be down to record video together?
                                            </div>
                                        </div>
                                        {/* Sender's Message */}
                                        <div className="flex items-center justify-end mb-2">
                                            <div className="bg-gray-300 text-black  p-2 rounded-md rounded-br-none max-w-xs">
                                                For sure
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end mb-2">
                                            <div className="bg-gray-300 text-black  p-2 rounded-md rounded-br-none max-w-xs">
                                                You are legend bro
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-2 mx-14">
                                            <div className="bg-8958E1 p-2 rounded-md rounded-bl-none text-white max-w-64">
                                                I already have ideas for the video
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-2">
                                            <div className="flex-shrink-0">
                                                <Image
                                                    src="/static/img/avatar.png"
                                                    alt="Profile Picture"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="bg-8958E1  mx-4 p-2 rounded-md rounded-bl-none text-white max-w-64">
                                                The other day I have seen some MX edit
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-end mb-2">
                                            <div className="bg-gray-300 text-black  p-2 rounded-md rounded-br-none max-w-xs">
                                                Date?
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end mb-2">
                                            <div className="bg-gray-300 text-black  p-2 rounded-md rounded-br-none max-w-xs">
                                                Place?
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end mb-2">
                                            <div className="bg-gray-300 text-black  p-2 rounded-md rounded-br-none max-w-xs">
                                                We can meet at your place
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end mb-2">
                                            <div className="bg-gray-300 text-black  p-2 rounded-md rounded-br-none max-w-xs">
                                                Just navigate me there
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-2 mx-14">
                                            <div className="bg-8958E1 p-2 rounded-md rounded-bl-none text-white max-w-64 flex">
                                                <Image
                                                    src="/static/img/movie.svg"
                                                    alt="Profile Picture"
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full"
                                                /> Video
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-2">
                                            <div className="flex-shrink-0 ">
                                                <Image
                                                    src="/static/img/avatar.png"
                                                    alt="Profile Picture"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="bg-8958E1 rounded-bl-none mx-4 p-2 rounded-md text-white max-w-64">
                                                ...
                                            </div>
                                        </div>

                                        {/* Add more message components as needed */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" w-[4px] h-[20px] top-[246px] left-[386px] bg-opacityblack-10 rounded-[10px]" />
                    </div>





                    <div className=" flex gap-6 items-center w-[370px] h-[46px]  ml-8">
                        <div className=" w-[204px] h-[56px] flex justify-center items-center top-0 left-0">
                            <input
                                className=" w-[212px] h-[40px] bg-defaultwhite rounded-[100px] border border-solid border-opacity black-6 shadow-drop-shadow-normal font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-700 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)] p-0 pl-[19px]"
                                placeholder="Send message ..."
                                type="text"
                            />
                        </div>
                        <div className=" bg-opacityblack-4 rounded-[23px]">
                            <Image
                                width={24}
                                height={24}
                                alt="Call"
                                src="/static/img/call-24-black20.png"
                            />
                        </div>
                        <div className="bg-opacityblack-4 rounded-[23px]">
                            <Image
                                width={24}
                                height={24}
                                alt="Videocam"
                                src="/static/img/videocam-24-black20.png"
                            />
                        </div>
                        <div className="rounded-[23px] shadow-drop-shadow-main [background:linear-gradient(180deg,rgb(253,141,221)_0%,rgb(137,88,225)_100%)]">
                            <div className="relative w-[24px] h-[24px] top-[11px] left-[11px]">
                                <div className="absolute w-[20px] h-[10px] top-[12px] left-[2px] bg-[url(/static/img/subtract.svg)] bg-[100%_100%]">
                                    <Image className="absolute w-[10px] h-[10px] top-0 left-[5px]" width={20}
                                        height={20} alt="Path" src="/static/img/path-14.svg" />
                                </div>
                                <Image className="absolute w-[10px] h-[10px] top-[2px] left-[12px]" width={20}
                                    height={20} alt="Path" src="/static/img/path-16.svg" />
                                <Image className="absolute w-[20px] h-[20px] top-[-9px] right-[12px]" width={40}
                                    height={40} alt="Path" src="/static/img/gift.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RightSection