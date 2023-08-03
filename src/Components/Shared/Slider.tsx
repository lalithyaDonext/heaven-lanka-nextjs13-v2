'use client'
import React, { useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



interface Props {
    children: React.ReactNode
    padding?: string,
    gap?: string
}

const Slider: React.FC<Props> = ({children, padding, gap}) => {

    const rowRef = useRef<HTMLDivElement>(null)
    // const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction: string) => {
        // setIsMoved(true)
        if (rowRef.current) {
        const { scrollLeft, clientWidth } = rowRef.current

        const scrollTo =
            direction === 'left'
            ? scrollLeft - clientWidth / 2
            : scrollLeft + clientWidth / 2

        rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

  return (
    <div  className='px-6 py-4 rounded-md relative'>
        
        <div ref={rowRef}
        className={`w-full grid grid-flow-col-dense overflow-x-hidden scrollbar-hide ${gap ? gap : 'gap-4'}`}>
            { children} 
        
        </div>

        <button 
        className='absolute -left-4 top-0 bottom-0 h-9 w-9 
        grid place-items-center my-auto z-10 rounded-full'
        onClick={() => handleClick('left')}>
            <FiChevronLeft className='w-8 h-8 text-[#077B83]'/>
        </button>

        <button 
        className='absolute -right-4 top-0 bottom-0 h-9 w-9 
        grid place-items-center my-auto z-10 rounded-full'
        onClick={() => handleClick('right')}>
            <FiChevronRight className='w-8 h-8 text-[#077B83]'/>
        </button>

    </div>
  )
}

export default Slider