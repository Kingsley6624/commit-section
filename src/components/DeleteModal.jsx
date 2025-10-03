import React from 'react'
import { useModal } from '../Context/ModalContext';

const DeleteModal = () => {
  const { hideModal, onConfirm } = useModal();

  return (

        <div className='fixed bg-black/50 inset-0 w-full min-h-screen flex justify-center items-center z-50 '>
      <div className='bg-white w-[90%] max-w-xs p-6 rounded-lg shadow-lg flex flex-col gap-4'>
        <h3 className='text-lg font-semibold text-[#324152ff]'>Delete comment</h3>
        <p className='text-base text-[#324152ff]'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className='flex justify-between items-center gap-1'>
          <button className='bg-[#324152ff] hover:bg-gray-400 text-white font-semibold py-2 px-4 border border-[#324152ff] rounded shadow'
          onClick={hideModal}
          >NO, CANCEL</button>
          <button className='bg-[#ed6468ff] hover:bg-red-600 text-white font-semibold py-2 px-4 border border-[#ed6468ff] rounded shadow'
          onClick={onConfirm}
          >YES, DELETE</button>  
        </div>
      </div>
    </div> 
      
   
     
  )
}

export default DeleteModal;