import React from 'react'

const Newsletter = () => {
    return (
        <div className='text-[#023047] h-[180px] flex flex-col justify-center items-center bg-[#023047]'>
            <h2 className='text-white text-2xl md:text-3xl mb-4'>Newsletter</h2>
            <div className='flex justify-center items-center text-white'>
                <input type="text" placeholder='   Email address' className='w-[300px] py-2 rounded-l border-0' />
                <button className='bg-[#023047] py-2 text-white border rounded-r px-4 font-semibold hover:bg-[white] hover:text-[#023047] hover:border-[#023047]'>Subscribe</button>
            </div>
            <h3 className='text-white text-[14px] md:text-xl mt-4'>Stay up-to-date with new technologies emerging every day.</h3>
        </div>
    )
}

export default Newsletter
