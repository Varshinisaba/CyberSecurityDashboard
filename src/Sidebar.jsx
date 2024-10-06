import React from 'react'
import { BsShieldLock, BsFillBugFill, BsFileLockFill, BsClipboardData, BsFillGearFill } from 'react-icons/bs'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsShieldLock  className='icon_header'/> SECURITY
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsClipboardData className='icon'/> CyberSecurity Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFileLockFill className='icon'/> SECURITY
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsClipboardData className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFileLockFill className='icon'/> Threat Logs
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillBugFill className='icon'/> Vulnerabilities
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsShieldLock className='icon'/> Incidents
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar