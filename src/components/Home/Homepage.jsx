import React, {useState} from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos  } from 'react-icons/md';
import { RxDotFilled  } from 'react-icons/rx';

const Homepage = () => {
  const [imageIndex, setImageIndex] = useState(0)

  const slides = [
    { url: "./images/bg.webp" },
    { url: "./images/bg2.jpg" },
    { url: "./images/tech.webp" }
  ]

  const prevSlide = ()=>{
    const isFirstSlide = imageIndex === 0
    const isNextSlide = isFirstSlide ? slides.length - 1 : imageIndex - 1
    setImageIndex(isNextSlide)
  }

  const nextSlide = ()=>{
    const isLastSlide = imageIndex === slides.length - 1
    const isNextSlide = isLastSlide ? 0 : imageIndex + 1
    setImageIndex(isNextSlide)
  }

  const goToSlide = (i)=>{
    setImageIndex(i)
  }

  return (
    <div className='group relative'>
      <div className='w-full'>
        <img className='w-full brightness-50 duration-500' src={slides[imageIndex].url} alt="" />
      </div>
      {/* left arrow */}
      <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer'>
        <MdArrowBackIosNew size={30} />
      </div>
      {/* right arrow */}
      <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer'>
        <MdArrowForwardIos size={30}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, i)=>(
          <div key={i} onClick={()=>goToSlide(i)} className='text-2xl cursor-pointer text-[#023047]'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage
