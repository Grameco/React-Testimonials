import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Testimonials({reviews}) {
    const [current, setCurrent] = useState(0)

    function leftShiftHandler() {
        if(current == 0) {
            setCurrent(reviews.length - 1);
        }
        else {
            setCurrent(current - 1)
        }
    }

    function rightShiftHandler() {
        if(current == reviews.length - 1) {
            setCurrent(0);
        }
        else {
            setCurrent(current + 1)
        }
    }

    function surpriseHandler() {
        setCurrent(Math.floor(Math.random() * reviews.length))
    }

    return (
        <div className="w-[85vw] md:w-[700px] lg:w-[760px] h-fit md:h-[500px] mt-10 pt-10 transition-all duration-200 hover:shadow-2xl rounded-sm bg-white flex flex-col gap-6 justify-center items-center">
            <Card review={reviews[current]}/>

            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold self-center'>
                <button onClick={leftShiftHandler} className='hover:text-violet-500 transition-all duration-200'><FiChevronLeft/></button>
                <button onClick={rightShiftHandler} className='hover:text-violet-500 transition-all duration-200'><FiChevronRight/></button>
            </div>

            <div>
                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 mb-10 rounded-md font-bold text-white text-lg'>Surprise Me</button>
            </div>
        </div>
    )
}