
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt, FaThList } from "react-icons/fa";
import { MdBroadcastOnHome, MdMedicalServices, MdOutlineMiscellaneousServices, MdMiscellaneousServices, MdCategory, MdFolderShared, MdContactPhone } from "react-icons/md";
import { GiLifeBar, GiNewspaper, GiChoice } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { LuUsersRound } from 'react-icons/lu';
import { CiBoxList, CiViewList } from 'react-icons/ci';
import { FcBusinessContact } from 'react-icons/fc';



function Sidebar() {
  const pathname = usePathname();

  // Separate dropdown states
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [AllUsersdropDown, setAllUsers] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [processDropdown, setProcessDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [blogsDropdown, setBlogsDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [SharedFile, setSharedFile] = useState(false);
  const [contactus, setContactus] = useState(false);
  const [Donation, setDonation] = useState(false);


  const isActive = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const menuItemClass = (active) =>
    `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;

  const renderDropdownIcon = (open) =>
    <IoIosArrowDown className={`text-2xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />;

  return (
    <div className="bg-[#191919] h-full ">
      <div className="max-w-[1596px] ">

        {/* Login logout users */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAllUsers(!AllUsersdropDown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaUsers /></span>
              <span>All User Information</span>
            </div>
            {renderDropdownIcon(AllUsersdropDown)}
          </div>
          {AllUsersdropDown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><LuUsersRound /></span>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers">All Users</Link>
              </li>

            </ul>
          )}
        </li>


        {/* Home */}
        <li className={`${menuItemClass(isActive("/"))} flex-col gap-3 py-2  px-5`}>
          <div className="flex items-center  justify-between cursor-pointer w-full" onClick={() => setHomeDropdown(!homeDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaHome /></span>
              <span>Home</span>
            </div>
            <div>
              {renderDropdownIcon(homeDropdown)}
            </div>
          </div>
          {homeDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-600 pl-4">
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Banner_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Banner_List">Banner List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Banner_Second_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Banner_Second_List">Banner Image 2 List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Mission_Vission_Ovject_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Mission_Vission_Ovject_List">Mission Vission Objective List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Three_Banner_LIst"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Three_Banner_LIst">Home 3 Banner List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Popular_Desis_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Popular_Desis_List">Home Popular Medical Desis Data List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Communication_HelthCare_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Communication_HelthCare_List">Home Communication HelthCare Data List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Communiction_Hearing_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Communiction_Hearing_List">Communiction Hearing Data List</Link>
              </li>


              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Founding_Member_Data_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Founding_Member_Data_List">Founding Mermber List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Community_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Community_List">Community Data List</Link>
              </li>

              {/* form data  */}


              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Banner_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Banner_Form">Banner Form  </Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Banner_Second"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Banner_Second">Banner Teacher Data Form  </Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Mission_Vission_Ovject_Image_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Mission_Vission_Ovject_Image_Form">Mission Vission Objective Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Three_Banner"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Three_Banner">Three Banner Data Post Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Popular_Desis_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Popular_Desis_Form">Popular Medical Desis Data Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Communication_HelthCare"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Communication_HelthCare">Communication And Helthcare Data Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Communiction_Hearing"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Communiction_Hearing">Communication And hearing Data Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Founding_member_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Founding_member_Form">Founding Member Data Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardHome/Home_Community_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardHome/Home_Community_Form">Community Event Data Form</Link>
              </li>


            </ul>
          )}
        </li>


        {/* Resourse */}
        {/* <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setServiceDropdown(!serviceDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
              <span>Resourse</span>
            </div>
            {renderDropdownIcon(serviceDropdown)}
          </div>
          {serviceDropdown && (
            <ul className=" mt-2  border-gray-500 pl-4">
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">All News Category List</Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">All News Title List</Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">All News List</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardResourse/DeshboardResourseCategoryOneForm"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardResourse/DeshboardResourseCategoryOneForm"> All News Category Form One  </Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardResourse/DeshboardResourseCategoryForm"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardResourse/DeshboardResourseCategoryForm"> All News Category Form Second  </Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DeshboardServices/AllServiceList">All News Title Form </Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardResourse/DeshboardResourseNewsForm"> All News Form  </Link>
              </li>
            </ul>
          )}
        </li> */}

        {/* News */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setWorkDropdown(!workDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNetworkWired /></span>
              <span>News</span>
            </div>
            {renderDropdownIcon(workDropdown)}
          </div>
          {workDropdown && (
            <ul className=" mt-2  ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardNews/DeshboardNewsAllDataList">All News Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/Deshboard/DeshboardNews/DeshboardNewsAllDataForm">All News Data From</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Gallary */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setProcessDropdown(!processDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><VscServerProcess /></span>
              <span>Gallary</span>
            </div>
            {renderDropdownIcon(processDropdown)}
          </div>
          {processDropdown && (
            <ul className=" mt-2  border-gray-500 ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardGallary/DeshboardGallaryDataList">Gallary All Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardGallary/DeshboardGallaryDataForm">Gallary Post Form </Link>
              </li>

            </ul>
          )}
        </li>



        {/* About */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setCareersDropdown(!careersDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><GiLifeBar /></span>
              <span>About</span>
            </div>
            {renderDropdownIcon(careersDropdown)}
          </div>
          {careersDropdown && (
            <ul className="ml-6 mt-2   pl-4">

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Title_Text_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Title_Text_List">Title Text List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Card_Data_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Card_Data_List">About All Image List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Three_Banner_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Three_Banner_List">Three Banner Data List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_List">Banner Last Image List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Last_Banner_Text_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Last_Banner_Text_List"> Last Banner Data List</Link>
              </li>


              {/* form */}

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Title_Text_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Title_Text_Form">Title Text Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Image_Data"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Image_Data"> Banner All Image Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Three_Banner_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Three_Banner_Form">Three Banner Data Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_Form">Last Banner Image Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Last_Banner_Text_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Last_Banner_Text_Form"> Last Banner Text Form</Link>
              </li>


            </ul>
          )}
        </li>

        {/* Contact us */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setContactus(!contactus)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdContactPhone /></span>
              <span>Contact</span>
            </div>
            {renderDropdownIcon(contactus)}
          </div>
          {contactus && (
            <ul className="ml-6 mt-2   pl-4">


              <li className={menuItemClass(isActive("/Deshboard/DeshboardContact/DeshboardContactList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardContact/DeshboardContactList"> Contact All Data List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardContact/DeshboardContactForm"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardContact/DeshboardContactForm"> Contact All Data Form</Link>
              </li>

            </ul>
          )}
        </li>


        {/* Donation files */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setDonation(!Donation)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdFolderShared /></span>
              <span>Donation </span>
            </div>
            {renderDropdownIcon(Donation)}
          </div>
          {Donation && (
            <ul className="ml-6 mt-2   pl-4">

              <li className={menuItemClass(isActive("/Deshboard/DashboardDonation/Dashboard_Donation_amount_text_List"))}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DashboardDonation/Dashboard_Donation_amount_text_List">Donation Text And Amount List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DashboardDonation/Donation_Medium_Deshboard_List"))}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DashboardDonation/Donation_Medium_Deshboard_List">Donation Medium All Data List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DashboardDonation/Donation_Question__Dashboard_List"))}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DashboardDonation/Donation_Question__Dashboard_List">Frequently Asked Questions List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DashboardDonation/Dashboard_Donation_amount_text_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DashboardDonation/Dashboard_Donation_amount_text_Form">Donation Text And Amount Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DashboardDonation/Donation_Medium_Deshboard_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DashboardDonation/Donation_Medium_Deshboard_Form">Donation Medium Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DashboardDonation/Donation_Question_Deshboard"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DashboardDonation/Donation_Question_Deshboard">Frequently Asked Questions</Link>
              </li>

            </ul>
          )}
        </li>


        {/* shared files */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setSharedFile(!SharedFile)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdFolderShared /></span>
              <span>Shared Files</span>
            </div>
            {renderDropdownIcon(SharedFile)}
          </div>
          {SharedFile && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardCareer/CareerFirstTitleFormList"> Shared Footer Hero All Data</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DashboardFooter/Social_Deshboard_List"> Footer Social Link List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DashboardFooter/Social_Deshboard"> Footer Social Link Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardShared/SharedFooterHero">Shared Footer Hero All Data Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardShared/Frequently_Asked_Questions_Form">Frequently Asked Questions</Link>
              </li>
            </ul>
          )}
        </li>



      </div>
    </div>
  );
}

export default Sidebar;