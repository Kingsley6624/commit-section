import React from 'react'

const DeleteModal = () => {
  return (
    <div className='bg-black/15 w-full min-h-screen flex justify-center items-center relative z-50 '>
      <div className='bg-white w-[90%] max-w-xs p-6 rounded-lg shadow-lg flex flex-col gap-4'>
        <h3 className='text-lg font-semibold text-[#324152ff]'>Delete comment</h3>
        <p className='text-base text-[#324152ff]'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className='flex justify-between items-center gap-1'>
          <button className='bg-[#324152ff] hover:bg-gray-400 text-white font-semibold py-2 px-4 border border-[#324152ff] rounded shadow'>NO, CANCEL</button>
          <button className='bg-[#ed6468ff] hover:bg-red-600 text-white font-semibold py-2 px-4 border border-[#ed6468ff] rounded shadow'>YES, DELETE</button>  
        </div>
      </div>
    </div>  
  )
}

export default DeleteModal;