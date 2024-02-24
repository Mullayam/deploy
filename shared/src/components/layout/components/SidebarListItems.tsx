"use client"
import { Icons } from '@deploy/shared/components/icons'
import { MenuItemsGroup, SidebarMenuItems } from '@deploy/shared/lib/MenuItems'
import React from 'react'

import { snakeCase } from 'change-case'
import { XTooltip } from '@deploy/shared/components/common/xtooltip'
import Link from 'next/link'
const SidebarListItems = () => {

  return (
    <React.Fragment>
      <ul className="space-y-2">
        {
          SidebarMenuItems.map((item, i) => {
            return (
              <li key={i}>
                {!item.child ?
                  (

                    <Link href={item.path}
                      className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <XTooltip text={item.name}> <span className="">{<item.icon />}</span></XTooltip>
                      <span className="flex-1 ml-5 text-left whitespace-nowrap">{item.name}</span>
                    </Link>
                  )
                  :
                  <button
                    type="button"
                    className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls={`dropdown-pages-${snakeCase(item.name)}`}
                    data-collapse-toggle={`dropdown-pages-${snakeCase(item.name)}`}
                  >
                    <span className="">{<item.icon />}</span>
                    <span className="flex-1 ml-5 text-left whitespace-nowrap">{item.name}</span>
                    <Icons.MenuDropdown />
                  </button>

                }
                {item.child && (
                  <ul id={`dropdown-pages-${snakeCase(item.name)}`} className="hidden py-2 space-y-2">
                    {
                      item.child.map((child, _i) => {
                        return (
                          <li key={_i}>
                            <Link
                              href={child.path}
                              className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                              {child?.icon && <XTooltip text={child.name}> <span>{<child.icon />}</span></XTooltip>}
                              {child.name}
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                )}
              </li>
            )
          })
        }

        <li>
          <Link
            href="#"
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <XTooltip text="Messages" children={<svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>} />

            <span className="flex-1 ml-5 whitespace-nowrap">Messages</span>
            <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-blue-600 text-white ">
              4
            </span>
          </Link>
        </li>

      </ul>
      <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
        {
          MenuItemsGroup.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.path}
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  {<XTooltip text={item.name}> <span>{<item.icon />}</span></XTooltip>}
                  <span className="ml-5">{item.name}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}

export default SidebarListItems