import React from 'react'

const PostCard = () => {
  return (
    <article className="mb-4 break-inside rounded-xl bg-gray-500   flex flex-col backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex p-6 items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <img
              className="rounded-full max-w-none w-14 h-14"
              src="https://randomuser.me/api/portraits/women/67.jpg"
            />
          </a>
          <div className="flex flex-col">
            <div className="flex items-center">
              <a className="inline-block text-lg font-bold mr-2" href="#">
                Marylin B. Bechtol
              </a>
              <span className="text-slate-500 dark:text-slate-300">
                3 minutes ago
              </span>
            </div>
            <div className="text-slate-500 dark:text-slate-300">
              Marketing Coordinator
            </div>
          </div>
        </div>
      </div>
      <p className="pr-6 pl-6 pb-6 break-words">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodelit
        sed do eiusmodelit sed do eiusmodelit sed do eiusmod
        <a href="#" className="font-medium text-blue-700 dark:text-blue-500">
          #ui
        </a>
        <a href="#" className="font-medium text-blue-700 dark:text-blue-500">
          #uxui
        </a>
        <a href="#" className="font-medium text-blue-700 dark:text-blue-500">
          #userinterface
        </a>
        <a href="#" className="font-medium text-blue-700 dark:text-blue-500">
          #webdeveloper
        </a>
        <a href="#" className="font-medium text-blue-700 dark:text-blue-500">
          #card
        </a>
      </p>
      <div className="p-6 bg-yellow-500">
        <h2 className="text-3xl font-extrabold text-black">
          Web Design templates Selection
        </h2>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <a className="inline-flex items-center" href="#">
            <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
              <img
                className="w-6"
                src="https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png"
              />
            </span>
            <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
              <img
                className="w-6"
                src="https://cdn.iconscout.com/icon/free/png-256/angry-2387661-1991061.png"
              />
            </span>
            <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
              <img
                className="w-6"
                src="https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png"
              />
            </span>
            <span className="text-lg font-bold ml-3">237</span>
          </a>
          <a className="ml-auto" href="#">
            23 Comments
          </a>
        </div>
        <div className="mt-6 mb-6 h-px bg-slate-200" />
        <div className="flex items-center justify-between mb-6">
          <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-3xl">
            Like
          </button>
          <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-3xl">
            Comment
          </button>
          <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-3xl">
            Share
          </button>
          <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-3xl">
            ...
          </button>
         
           
        </div>
        <div className="relative">
          <input
            className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-300/20 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
            type="text"
            placeholder="Write a comment"
          />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg
              className="mr-2"
              style={{ width: 26, height: 26 }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
              ></path>
            </svg>
            <svg
              className="fill-blue-500 dark:fill-slate-50"
              style={{ width: 24, height: 24 }}
              viewBox="0 0 24 24"
            >
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
          </span>
        </div>
        {/* Comments content */}
        <div className="pt-6">
          {/* Comment row */}
          <div className="media flex pb-4">
            <a className="mr-4" href="#">
              <img
                className="rounded-full max-w-none w-12 h-12"
                src="https://randomuser.me/api/portraits/men/54.jpg"
              />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">
                  Shawn
                </a>
                <span className="text-slate-500 dark:text-slate-300">2 days ago</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="#">
                  <span className="mr-2">
                    <svg
                      className="fill-rose-600 dark:fill-rose-400"
                      style={{ width: 22, height: 22 }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">2</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                  Repply
                </button>
              </div>
            </div>
          </div>
          {/* End comments row */}
          {/* comments row */}
          <div className="media flex pb-4">
            <a className="inline-block mr-4" href="#">
              <img
                className="rounded-full max-w-none w-12 h-12"
                src="https://randomuser.me/api/portraits/women/54.jpg"
              />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">
                  Dianne Russell
                </a>
                <span className="text-slate-500 dark:text-slate-300">
                  3 minutes ago
                </span>
              </div>
              <p>
                Dolor sit ameteiusmod Dolor sit ameteiusmod 😍😍✌🤪consectetur
                adipiscing elitconsectetur adipiscing elit.
              </p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="#">
                  <span className="mr-2">
                    <svg
                      className="fill-rose-600 dark:fill-rose-400"
                      style={{ width: 22, height: 22 }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">2</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                  Repply
                </button>
              </div>
            </div>
          </div>
          {/* End comments row */}
          {/* More comments */}
          <div className="w-full">
            <a
              href="#"
              className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
            >
              Show more comments
            </a>
          </div>
          {/* End More comments */}
        </div>
        {/* End Comments content */}
      </div>
    </article>

  )
}

export default PostCard