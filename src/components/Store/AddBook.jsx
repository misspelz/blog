import React, {useContext} from 'react'
import { GlobalContext } from '../../context'
import Modal from "../Modal"
import BookForm from "./BookForm"

const AddBook = () => {
  
 const {bookModal, setBookModal} = useContext(GlobalContext)

  return (
    <>
      <div className='flex justify-center items-center mt-6'> 
        <button onClick={()=>setBookModal(true)} className='bg-[#023047] py-2 px-4 rounded t mb-4 text-white font-semibold hover:bg-[#ffa500]'>Add New Book
        </button>
      </div>

      {bookModal && <Modal><BookForm /></Modal> }
    </> 
  )
}

export default AddBook
