import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineMessage} from 'react-icons/ai'
import img from '../assets/images/logo.jpg';
import Dropdown from './dropdown';
function Header() {
  return (
    <div className='shadow-lg h-full'>
      <div className='flex'>
        <div className='w-[30%] items-center ml-[2rem] justify-items-center mt-2'>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search..."
              />
           </div>
        </div>
         <div className='w-[70%] items-center mx-8 mt-2'>
           <div className='flex justify-end items-center'>
             
             <AiOutlineMessage className="h-6 pt-1 w-5 mx-1 text-gray-400" aria-hidden="true" />
             <IoMdNotificationsOutline className="h-7 w-7 pt-1 mx-2 text-gray-400" aria-hidden="true" />
             <Dropdown />
         
           </div>
         </div>
      </div>
    </div>
  )
}

export default Header