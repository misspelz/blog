import React, {useContext} from 'react'
import { GlobalContext } from '../../context'
import NewPostForm from './NewPostForm'
import Modal from '../Modal'
// import Spinner from "../Spinner/Spinner"

const NewPost = () => {
  const {openModal, setOpenModal} = useContext(GlobalContext)

  return (
    <>
      <div className='flex justify-center items-center mt-6'> 
        <button onClick={()=>setOpenModal(true)} className='bg-[#023047] py-2 px-4 rounded t mb-4 text-white font-semibold hover:bg-[#ffa500]'>Add New Post
        </button>
      </div>

      {openModal && <Modal><NewPostForm /></Modal> }
    </> 
  )
}

export default NewPost
