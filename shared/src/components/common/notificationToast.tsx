import React from 'react'

const NotificationToast = () => {
  return (
    <>
  {/* Toast */}
  <div
    className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
    role="alert"
  >
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-gray-600 mt-1 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      </div>
      <div className="ms-4">
        <h3 className="text-gray-800 font-semibold dark:text-white">
          App notifications
        </h3>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Notifications may include alerts, sounds and icon badges.
        </div>
        <div className="mt-4">
          <div className="flex space-x-3">
            <button
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400"
            >
              Don't allow
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400"
            >
              Allow
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Toast */}
  {/* Toast */}
  <div
    className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
    role="alert"
  >
    <div className="flex p-4">
      <div className="flex-shrink-0">
        <svg
          className="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </div>
      <div className="ms-3">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Successfully updated!
        </p>
      </div>
    </div>
  </div>
  {/* End Toast */}
   {/* Toast */}
   <div
    className="max-w-xs relative bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
    role="alert"
  >
    <div className="flex p-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <button
          type="button"
          className="absolute top-3 end-3 inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
        >
          <span className="sr-only">Close</span>
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div className="ms-4 me-5">
        <h3 className="text-gray-800 font-medium text-sm dark:text-white">
          <span className="font-semibold">James</span> mentioned you in a
          comment
        </h3>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Nice work! Keep it up!
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* End Toast */}
</>

  )
}

export default NotificationToast