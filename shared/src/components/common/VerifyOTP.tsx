import React from 'react'

const VerifyOTP = () => {
  return (
    <div className="mx-auto my-10 flex max-w-md flex-col rounded-lg border px-8 py-10 shadow-lg">
      <p className="text-xl font-medium">Please check your email</p>
      <p className="mb-4 text-lg text-gray-500">
        We've sent a code to jim@gmail.com
      </p>
      <div className="mb-2 flex space-x-4">
        <p className="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">
          3
        </p>
        <p className="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">
          0
        </p>
        <p className="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">
          9
        </p>
        <p className="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">
          7
        </p>
      </div>
      <p className="mb-4 text-gray-500">
        Didn't get a code? <button className="underline">Click to resend</button>
      </p>
      <div className="flex flex-col sm:flex-row">
        <button className="mb-2 w-full rounded-md border px-8 py-2 font-medium sm:mr-4 sm:mb-0 hover:bg-gray-100">
          Cancel
        </button>
        <button className="w-full rounded-md border bg-gray-700 px-8 py-2 font-medium text-white hover:bg-gray-800">
          Verify
        </button>
      </div>
    </div>


  )
}

export default VerifyOTP