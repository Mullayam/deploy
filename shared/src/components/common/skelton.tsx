import React from 'react'

const PostSkelton = () => {
  return (
    <div className="flex animate-pulse my-4">
      <div className="flex-shrink-0">
        <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700" />
      </div>
      <div className="ms-4 mt-2 w-full">
        <div className="flex flex-row items-center gap-2">
          <h3
            className="h-4 w-28 bg-gray-200 rounded-full dark:bg-gray-700"

          />           
          <h3
            className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
            style={{ width: "10%" }}
          />
         
        </div>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
        </ul>
        <div className='mt-4 flex flex-row gap-2'>
        <p className="h-4 w-10 bg-gray-200 rounded-full dark:bg-gray-700" />
        <p className="h-4 w-10 bg-gray-200 rounded-full dark:bg-gray-700" />
        <p className="h-4 w-10 bg-gray-200 rounded-full dark:bg-gray-700" />
      </div>
      </div>
     
    </div>
  )
}

export default PostSkelton