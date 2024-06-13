import React, { useEffect, useState } from 'react'
import { CgArrowRight } from "react-icons/cg";
import backimg from "./1st back.jpg"
import backfront from "./backtop.png"
import goonies from "./goonies.png"
import skull from "./skull.png"
import scrollimg from "./scroll.gif"
import img1 from './img/img-1.jpg'
import img2 from './img/img-2.jpg'
import img3 from './img/img-3.jpg'
import img4 from './img/img-4.jpg'
import coin from './credits/right-1.png'
import coin2 from './credits/right-2.png'
import coinmid from './credits/mid.png'
import coin4 from './credits/left-top.png'
import coin5 from './credits/left-bottom.png'
import audio from "./audio.png"
import bobby from './grid/bobby.jpg'
import kalia from './grid/kalia.png'
import wb from './grid/wb.png'
import bobby2 from './grid/bobby2.jpg'
import skullfront from './skullfront.png'

import gallery1 from './New folder/gallery1.jpg'
import gallery2 from './New folder/gallery2.jpg'
import gallery3 from './New folder/gallery3.jpg'
import gallery4 from './New folder/gallery34.jpg'
import gallery5 from './New folder/gallery4.jpg'
import gallery6 from './New folder/gallery5.jpg'
import gallery7 from './New folder/gallery6.jpg'
import gallery8 from './New folder/gallery7.jpg'
import gallery9 from './New folder/gallery8.jpg'
import "./Home.css"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollX, setScrollX] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.pageYOffset;
            const newScrollX = window.pageXOffset;
            setScrollY(newScrollY);
            setScrollX(newScrollX);
            console.log(newScrollY)
            console.log(newScrollX)

        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            // Global settings here...
        });
    }, []);



    // const calculateTopPosition = () => {
    //     if (scrollY >= 2250) {
    //         return '400px';
    //     } else if (scrollY >= 2200) {
    //         return '300px';
    //     } else if (scrollY >= 2150) {
    //         return '200px';
    //     } else if (scrollY >= 2100) {
    //         return '150px';
    //     } else {
    //         return '100px';
    //     }
    // };




    return (
        <div className='bg-black px-2 h-[885vh] overflow-x-hidden'>

            <div className="h-screen w-full relative ">

                <img className={`absolute  bg-cover bg-center  w-full   backfront transition-all duration-1000 transform-all ${scrollY >= 5 && "scale-110 h-[130vh]"} ${scrollY >= 15 && "scale-150"} ${scrollY >= 900 && "hidden"}`} src={backimg} alt="" />
                <div className='fixed w-full top-0 grid grid-cols-4 gap-[100px] text-center z-10 mt-5'>
                    <div className='text-white font-semibold'>
                        <button>Plot</button>
                    </div>
                    <div className='text-white font-semibold'>
                        <button>Goonies</button>
                    </div>
                    <div className='text-white font-semibold'>
                        <button>Credits</button>
                    </div>
                    <div className='text-white font-semibold'>
                        <button>Gallery</button>
                    </div>
                </div>
                <div className='w-full h-screen'>

                    <img className={`absolute top-0 bg-cover w-full bg-center  backfront transform transition-all duration-1000 ${scrollY >= 5 & scrollY <= 15 && "scale-125"} ${scrollY >= 15 && "scale-150"} ${scrollY >= 900 && "hidden"}`} src={backfront} alt="" />

                </div>
                <div className='fixed top-[250px] left-[500px] z-10'>
                    <h1 className='text-white text-center text-[24px] goonies' style={{ fontFamily: 'Abuget, sans-serif' }}>the story of</h1>
                    <img className='w-[428px] goonies' src={goonies} alt="" />
                </div>

                <div className='fixed bottom-10 grid grid-cols-3 w-full items-center justify-items-center gap-[150px] mt-10'>
                    <div>
                        <img className='h-[13px] w-[11px] hover:cursor-pointer ' src={skull} alt="" />
                    </div>
                    <div>
                        <img className={`h-[50px] w-[50px] ${scrollY >= 300 && "hidden"}`} src={scrollimg} alt="" />
                    </div>
                    <div>
                        <img className='h-[20px] w-[20px] hover:cursor-pointer ' src={audio} alt="" />
                    </div>
                </div>

                <div className={`fixed top-[250px] left-[700px] z-10  transform transition-all duration-[2000ms] ease-in-out text-center  ${scrollY >= 400 ? " opacity-100  scale-100 " : "opacity-0  scale-90"}   ${scrollY >= 800 && " hidden "} `}>
                    <h1 className={`text-[#939393] text-center text-[30px] `}>Plot</h1>

                </div>
                <div className={`fixed top-[290px] left-[500px] z-10   ${scrollY >= 400 ? " opacity-100  scale-100 " : "opacity-0  scale-90"}   ${scrollY >= 800 && " hidden "} ${scrollY < 400 && " hidden "} `} data-aos="fade-up" data-aos-duration="3000">
                    <p className={`text-[#939393] w-[500px] text-center`} data-aos="fade-up">Facing foreclosure of their homes in the Goon Docks area of Astoria, Oregon to an expanding country club, a group of children who call themselves "the Goonies" gather for a final weekend together.</p>
                    <div className='ml-[250px] border-l-2 border-[#939393] h-[200px]'></div>
                </div>

            </div>

            <div className={`grid grid-cols-4 absolute top-[1600px]  h-screen ${scrollY >= 2000 && "opacity-35"} ${scrollY >= 2200 && "opacity-20"}`}>
                <div className="h-screen relative overflow-hidden group">
                    <img
                        className="h-full w-full object-cover opacity-35 group-hover:opacity-100 transition-all ease-in-out duration-[3000ms] transform group-hover:scale-110 cursor-pointer"
                        src={img1}
                        alt="Descriptive text"
                    />
                    <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-[3000ms] cursor-pointer">
                        <h1 className="text-white text-[25px] font-semibold">Mikey</h1>
                        <div className="flex justify-center items-center gap-2">
                            <h1 className="text-white">More Info</h1>
                            <CgArrowRight className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="h-screen relative overflow-hidden group">
                    <img
                        className="h-full w-full object-cover opacity-35 group-hover:opacity-100 transition-all ease-in-out duration-[3000ms] transform group-hover:scale-110 cursor-pointer"
                        src={img2}
                        alt="Descriptive text"
                    />
                    <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-[3000ms] cursor-pointer">
                        <h1 className="text-white text-[25px] font-semibold">Chunk</h1>
                        <div className="flex justify-center items-center gap-2">
                            <h1 className="text-white">More Info</h1>
                            <CgArrowRight className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="h-screen relative overflow-hidden group">
                    <img
                        className="h-full w-full object-cover opacity-35 group-hover:opacity-100 transition-all ease-in-out duration-[3000ms] transform group-hover:scale-110 cursor-pointer"
                        src={img3}
                        alt="Descriptive text"
                    />
                    <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-[3000ms] cursor-pointer">
                        <h1 className="text-white text-[25px] font-semibold">Data</h1>
                        <div className="flex justify-center items-center gap-2">
                            <h1 className="text-white">More Info</h1>
                            <CgArrowRight className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="h-screen relative overflow-hidden group">
                    <img
                        className="h-full w-full object-cover opacity-35 group-hover:opacity-100 transition-all ease-in-out duration-[3000ms] transform group-hover:scale-110 cursor-pointer"
                        src={img4}
                        alt="Descriptive text"
                    />
                    <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-[3000ms] cursor-pointer">
                        <h1 className="text-white text-[25px] font-semibold">Mouth</h1>
                        <div className="flex justify-center items-center gap-2">
                            <h1 className="text-white">More Info</h1>
                            <CgArrowRight className="text-white" />
                        </div>
                    </div>
                </div>




            </div>
            <div className='relative top-[1600px] one'>

                <div className='h-screen flex justify-center items-center w-[98%] text-center absolute top-0'>
                    <h1 className={`text-[40px] text-center text-white  z-10 ${scrollY >= 2200 && "opacity-100"} ${scrollY <= 2199 && "opacity-30"} `}>Goonies Never say die</h1>
                </div>
                <div className='h-screen  w-[98%] text-center absolute top-0'>
                    <img src={coin4} className={`w-[100px] h-[100px] absolute top-10 left-[25%] opacity-35 transition-all duration-500 ${scrollY >= 2100 && scrollY <= 2199 ? 'top-[150px] rotate-45 ' : ''} ${scrollY >= 2200 && scrollY <= 2299 ? 'top-[200px] rotate-90 ' : ''} ${scrollY >= 2300 && scrollY <= 2399 ? 'top-[400px] rotate-45 ' : ''} ${scrollY >= 2400 ? 'top-[500px] rotate-180 ' : ''}`}
                        alt="" />

                    <img src={coin5} className={`w-[120px] h-[120px] absolute bottom-20 left-[30%] opacity-35 transition-all duration-500 ${scrollY >= 2100 && scrollY <= 2199 ? 'bottom-[150px] rotate-45 ' : ''} ${scrollY >= 2200 && scrollY <= 2299 ? 'bottom-[200px] rotate-90 ' : ''} ${scrollY >= 2300 && scrollY <= 2399 ? 'bottom-[400px] rotate-45 ' : ''} ${scrollY >= 2400 ? 'bottom-[500px] rotate-180 ' : ''}`} alt="" />

                    <img src={coinmid} className={`w-[200px] h-[500px] absolute top-10 left-[40%] opacity-35 transition-all duration-500 ${scrollY >= 2100 && scrollY <= 2199 ? ' rotate-6 ' : ''} ${scrollY >= 2200 && scrollY <= 2299 ? ' rotate-12 ' : ''} ${scrollY >= 2300 && scrollY <= 2399 ? ' rotate-45 ' : ''} ${scrollY >= 2400 ? ' rotate-90 ' : ''}`} alt="" />

                    <img src={coin} className={`w-[200px] h-[200px] absolute right-[20%] top-10 opacity-35 transition-all duration-500 ${scrollY >= 2100 && scrollY <= 2199 ? 'top-[150px] rotate-45 ' : ''} ${scrollY >= 2200 && scrollY <= 2299 ? 'top-[200px] rotate-90 ' : ''} ${scrollY >= 2300 && scrollY <= 2399 ? 'top-[400px] rotate-45 ' : ''} ${scrollY >= 2400 ? 'top-[500px] rotate-180 ' : ''}`} alt="" />

                    <img src={coin2} className={`w-[80px] h-[80px] absolute right-[20%] bottom-20 transition-all duration-500 ${scrollY >= 2100 && scrollY <= 2199 ? 'bottom-[150px] rotate-45 ' : ''} ${scrollY >= 2200 && scrollY <= 2299 ? 'bottom-[200px] rotate-90 ' : ''} ${scrollY >= 2300 && scrollY <= 2399 ? 'bottom-[400px] rotate-45 ' : ''} ${scrollY >= 2400 ? 'bottom-[500px] rotate-180 ' : ''}`} alt="" />
                </div>
            </div>
            <div className=' relative top-[2350px] h-screen'>
                <div className='grid grid-cols-4 grid-rows-2 h-full'>

                    <div className='flex justify-center items-center relative group  border-b border-t   border-[#ffffff33]'>
                        <h1 className='text-[40px]  text-white font-bold transition-transform duration-1000 transform-all  translate-y-0 opacity-100 group-hover:opacity-0  group-hover:-translate-y-5'>1985</h1>
                        <h1 className='text-[40px] text-white font-bold absolute transition-transform duration-1000 transform-all  translate-y-5 opacity-0  group-hover:opacity-100  group-hover:translate-y-0'>1985</h1>
                        <div className='absolute bottom-5 left-5 '>
                            <h1 className='text-[17px] text-white'>Release date</h1>
                            <h1 className='text-[14px] text-white'>June 7,1985</h1>
                        </div>
                    </div>

                    <div className='overflow-hidden relative border border-[#ffffff33]'>
                        <img src={bobby} alt="" className="w-full h-full object-cover opacity-35 hover:opacity-100 transition-all ease-in-out duration-[3000ms] transform hover:scale-110 cursor-pointer" />
                        <div className='absolute bottom-5 left-5 '>
                            <h1 className='text-[17px] text-white'>Story by</h1>
                            <h1 className='text-[14px] text-white'>Steven Spielberg</h1>
                        </div>
                    </div>


                    <div className='col-span-2 overflow-hidden  pl-20 hover:pl-80 group transtion-all duration-[2000ms]  border-t border-b border-[#ffffff33] '>
                        <img src={kalia} className=' h-[370px] object-center transtion-all duration-[2000ms]   opacity-35 group-hover:opacity-100  ' alt="" />
                    </div>

                    <div className='flex justify-center relative items-center border-b border-[#ffffff33]'>
                        <img src={wb} className='h-[80px]' alt="" />
                        <div className='absolute bottom-5 left-5 '>
                            <h1 className='text-[17px] text-white'>Distributed by</h1>
                            <h1 className='text-[14px] text-white'>Warner Bros</h1>
                        </div>
                    </div>

                    <div className='flex justify-center items-center relative group  border-b border-l border-r  border-[#ffffff33]'>
                        <h1 className='text-[40px]  text-white font-bold transition-transform duration-1000 transform-all  translate-y-0 opacity-100 group-hover:opacity-0  group-hover:-translate-y-5'>$19M</h1>
                        <h1 className='text-[40px] text-white font-bold absolute transition-transform duration-1000 transform-all  translate-y-5 opacity-0  group-hover:opacity-100  group-hover:translate-y-0'>$19M</h1>
                        <div className='absolute bottom-5 left-5 '>
                            <h1 className='text-[17px] text-white'>Budget</h1>
                            <h1 className='text-[14px] text-white'>$19 Million</h1>
                        </div>
                    </div>

                    <div className='relative flex pt-[40px] justify-center border-b border-r group border-[#ffffff33]'>
                        <img src={bobby2} className='w-[293px] h-[164px] transtion-all duration-[2000ms]  opacity-35 group-hover:opacity-100' alt="" />
                        <div className='absolute bottom-5 left-5 '>
                            <h1 className='text-[17px] text-white'>Music by</h1>
                            <h1 className='text-[14px] text-white'>Dave Grusin</h1>
                        </div>

                    </div>
                    <div className='flex justify-center items-center relative group  border-b   border-[#ffffff33]'>
                        <h1 className='text-[40px]  text-white font-bold transition-transform duration-1000 transform-all  translate-y-0 opacity-100 group-hover:opacity-0  group-hover:-translate-y-5'>$61M</h1>
                        <h1 className='text-[40px] text-white font-bold absolute transition-transform duration-1000 transform-all  translate-y-5 opacity-0  group-hover:opacity-100  group-hover:translate-y-0'>$61M</h1>

                        <div className='absolute bottom-5 left-5 '>
                            <h1 className='text-[17px] text-white'>Box Office</h1>
                            <h1 className='text-[14px] text-white'>$61 Million</h1>
                        </div>
                    </div>

                </div>

            </div>
            <div className='relative top-[2400px] h-screen flex justify-center items-center  '>
                <img src={skull} className={`h-[100px] opacity-25 transition-all duration-[2000ms] ${scrollY >= 3100 && scrollY <= 3399 ? "scale-[2]" : ""}  ${scrollY >= 3400 && scrollY <= 3699 ? "scale-[4]" : ""} ${scrollY >= 3700 && scrollY <= 3899 ? "scale-[5]" : ""} ${scrollY >= 3900 && "scale-[6]"}`} alt="" />
                <img src={skullfront} className={`h-[100px] z-10 opacity-45 transition-all duration-[2000ms] mt-[500px] ${scrollY >= 3100 && scrollY <= 3399 ? "scale-[2]" : ""}  ${scrollY >= 3400 && scrollY <= 3699 ? "scale-[3]" : ""} ${scrollY >= 3700 && scrollY <= 3899 ? "scale-[4]" : ""} ${scrollY >= 3900 && "scale-[5]"}`} alt="" />
            </div>

            <div className='relative top-[2700px] h-screen '>
                <div className='absolute top-[50%]  left-[45%] flex items-center justify-center flex-col cursor-pointer z-40'>
                    <h1 className='    text-[35px] text-white font-bold px-5 py-2 cursor-pointer'>Gallery</h1>
                    <button className='text-[12px] text-white font-semibold bg-black px-5 py-2 cursor-pointer'>View Gallery</button>

                </div>
                <button className='absolute bottom-[2%] left-[48%] text-[12px] text-white font-semibold bg-black px-5 py-5 cursor-pointer z-40'>share</button>
                <div className='relative grid grid-cols-4 h-full '>

                    <div className='relative   border-t border-b border-[#ffffff33]'>
                        <img src={gallery1} className='absolute top-24 right-10 w-[112px] h-[48px] object-cover object-center' alt="" />
                        <img src={gallery9} className='absolute bottom-10 right-28 w-[74px] h-[70px] object-cover object-center' alt="" />
                    </div>

                    <div className='relative border  border-[#ffffff33]'>
                        <img src={gallery2} className='absolute top-24 left-3 w-[74px] h-[75px] object-cover object-center' alt="" />
                        <img src={gallery3} className='absolute top-24 -right-32 w-[160px] h-[83px] object-cover object-center z-10' alt="" />
                        <img src={gallery4} className='absolute top-[250px] -left-16 w-[223px] h-[150px] object-cover object-center' alt="" />
                        <img src={gallery7} className='absolute top-[370px] -right-16 w-[283px] h-[260px] object-cover object-center' alt="" />
                    </div>

                    <div className='relative border-t border-b  border-r  border-[#ffffff33]'>
                        <img src={gallery5} className='absolute top-[173px] left-2 w-[183px] h-[120px] object-cover object-center' alt="" />
                    </div>

                    <div className='relative   border-t border-b border-[#ffffff33]'>
                        <img src={gallery6} className='absolute top-[200px] -left-24 w-[392px] h-[150px] object-cover object-center' alt="" />
                        <img src={gallery8} className='absolute top-[370px] -left-7 w-[225px] h-[200px] object-cover object-center' alt="" />
                    </div>

                </div>
            </div>

            <div className='relative top-[2800px] h-screen flex flex-col items-center justify-center '>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h1 className='text-[white] text-[14px]'>Share this experience</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <h1 className='text-[white] text-[35px] '>the-goonies.webflow.io</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <button className='text-[white] text-[12px]'>Back to top</button>
                </div>

                <div className='absolute bottom-10 left-[40%] text-[white]'>CREATED BY JOSEPH BERRY-WEBFLOW</div>
            </div>
        </div >
    )
}

export default Home
