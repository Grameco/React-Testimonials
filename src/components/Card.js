import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Card({review}) {
    return (
        <div className='flex flex-col h-fit relative'>
            <div className='md:absolute top-[-7rem] z-[20] mx-auto'>
                <img className='aspect-square rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] z-[25]' src={review.img}/>
                <div className='w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-violet-500 rounded-full absolute top-[-6px] md:left-[5px] z-[-10]'></div>
            </div>

            <div className='text-center mt-7 flex flex-col gap-2'>
                <h1 className='font-bold text-2xl capitalize'>{review.name}</h1>
                <h3 className='text-violet-300 uppercase text-sm'>{review.job}</h3>
            </div>

            <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft/></div>
            <div className='text-center mt-4 text-slate-500 px-10'>{review.text}</div>
            <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight/></div>

        </div>
    )
}