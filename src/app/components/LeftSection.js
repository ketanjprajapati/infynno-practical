'use client';
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation'

function LeftSection() {
    const router = useRouter();
    const navigateTo = (path) => {
        router.push(path);
    };
    return (<div className=" ml-6  w-[284px] h-[642px] top-[212px]">
        <div className="relative pl-12 top-8">
            <button className=" w-[282px] top-[126px] left-[324px]  h-[46px] all-[unset] box-border">
                <div className="relative w-[280px] h-[46px] bg-opacitywhite-100 rounded-[40px] border border-solid border-opacity black-6 shadow-drop-shadow-main">
                    <Image
                        className="absolute w-[24px] h-[24px] top-[10px] left-[235px]"
                        alt="Arrow forward"
                        width={24}
                        height={24}
                        src="/static/img/arrow-forward.png"
                    />
                    <div className="absolute w-[181px] h-[24px] top-[10px] left-[44px] font-paragraph-p3-semi-bold font-bold text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                        Create
                    </div>
                    <Image
                        className="w-[24px] h-[24px] top-[10px] absolute left-[10px] object-cover"
                        width={24}
                        height={24}
                        alt="Avatar"
                        src="/static/img/avatar-5.png"
                    />
                </div>
            </button>
            <div className='w-full'>

                <div className="w-240 h-21 top-0 mt-4 left-20 mx-5 font-paragraph-p4-regular font-medium text-neutral-400 text-14 tracking-0 leading-21">
                    Menu
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/home')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Properx logo"
                        src="/static/img/properx-logo.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Home
                    </div>
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/content')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Post" src="/static/img/post-24-black20.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Content
                    </div>
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/earnings')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Credit card"
                        src="/static/img/credit-card.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Earnings
                    </div>
                </div>

                <div className="flex mx-5 my-7" onClick={() => navigateTo('/statistics')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Downward"
                        src="/static/img/stats-24-black20.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Statistics
                    </div>
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/community')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Downward"
                        src="/static/img/star.svg"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Community
                    </div>
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/accountpanel')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Open in new"
                        src="/static/img/open-in-new-1.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Account Panel
                    </div>
                </div>

                <div className="w-240 h-21 mt-16 left-20 mx-5 font-paragraph-p4-regular font-medium text-neutral-400 text-14 tracking-0 leading-21">
                    Manage
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/profiles')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Downward"
                        src="/static/img/user-24-black20.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        profiles
                    </div>
                </div>
                <div className="flex mx-5 my-7">
                    <Image
                        width={24}
                        height={24}
                        alt="Downward"
                        src="/static/img/settings.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6" onClick={() => navigateTo('/settings')}>
                        Settings
                    </div>
                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/live-stream')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Downward"
                        src="/static/img/live-24-black20.svg"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Live Stream
                    </div>

                </div>
                <div className="flex mx-5 my-7" onClick={() => navigateTo('/live-studio')}>
                    <Image
                        width={24}
                        height={24}
                        alt="Downward"
                        src="/static/img/open-in-new-1.png"
                    />
                    <div className="cursor-pointer pl-4 left-58 font-inter font-semibold text-lg leading-6">
                        Live Studio
                    </div>

                    <label className="ml-1 relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-8958E1 peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>


                </div>

            </div>
        </div>

    </div>
    );
}

export default LeftSection