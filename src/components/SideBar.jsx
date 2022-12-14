import React from 'react'
import { BsPlus, BsFillLightbulbFill, BsGearFill} from 'react-icons/bs'
import { FaFire, FaPoo, FaAddressBook } from 'react-icons/fa'

export default function SideBar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg'>
        <SideBarIcon icon={<FaFire size='28'/>}/>
        <SideBarIcon icon={<BsPlus size='32'/>}/>
        <SideBarIcon icon={<BsFillLightbulbFill size='20'/>}/>
        <SideBarIcon icon={<FaPoo size='20'/>}/>
        <SideBarIcon icon={<BsGearFill size='20'/>}/>
        <SideBarIcon icon={<FaAddressBook size='20'/>}/>
    </div>
  )
};

const SideBarIcon = ({icon, text='tooltip'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)