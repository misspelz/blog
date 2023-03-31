import React from 'react'
import StoreHero from './StoreHero'
import AddBook from "./AddBook"
import BookCard from './BookCard'
import SideBar from '../Layout/SideBar'

const Storepage = () => {
  return (
    <div className='mt-[80px]'>
      <StoreHero />
      <AddBook />
      <div className="w-full flex">
      <BookCard />
      <SideBar />
      </div>
    </div>
  )
}

export default Storepage
