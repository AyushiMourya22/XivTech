import React, { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
export const Card = (props) => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div bottom className='react-reveal mb-[5%] ' data-aos="fade-up" >
            <div className="main-card flex w-full pt-3 text-[#252129] ">
                <div className="left w-1/2 mr-3 pr-[15%] flex-col">
                    <h2 className='text-6xl font-light font-serif leading-[1.2]'>
                        {props.title}
                    </h2>
                    <p className="text-2xl font-light font-serif pt-[9%] pb-[20%] mb-[3%]">
                        {props.desc}
                    </p>
                    <div>
                        <a href={props.link} target='_blank' rel="noreferrer" className='text-xl flex font-bold font-serif'>
                            {props.button}
                            <BsArrowRight className='ml-4' size={'2rem'} />
                        </a>
                    </div>
                </div>
                <div className="right w-1/2">
                    <img src={props.image} alt={props.title} className='w-full h-full ' />
                    <p className="invisible text-2xl font-light font-serif pt-[9%] pb-[20%] mb-[3%]">
                        {props.desc}
                    </p>
                    <div>
                        <a href={props.link} target='_blank' rel="noreferrer" className='invisible text-xl flex font-bold font-serif'>
                            {props.button}
                            <BsArrowRight className='icon ml-4 invisible' size={'2rem'} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
