import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsChatRightDots } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { CiSaveDown2 } from "react-icons/ci";
import { BiHistory } from "react-icons/bi";
import { FcDebt } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";

const fsboDashboardData = [
    { id: 1, icon: <MdOutlineDashboardCustomize />, name: "Dashboard", href: '/' },
    { id: 2, icon: <BsChatRightDots />, name: "Message", href: '/' },
    { id: 3, icon: <LiaCertificateSolid />, name: "Listings", href: '/' },
    { id: 4, icon: <LuWallet />, name: "Money", href: '/' },
    { id: 5, icon: <LiaCertificateSolid />, name: "Document", href: '/fsbo/upload-document' },
    { id: 6, icon: <CiSaveDown2 />, name: "Saved", href: '/' },
    { id: 7, icon: <BiHistory />, name: "History", href: '/' },
    { id: 8, icon: <IoMdAnalytics />, name: "Analytics", href: '/' },
    { id: 9, icon: <CiSettings />, name: "Setting", ddicon: <RiArrowDropDownLine />, submenu: [
        { id: 1, subname: 'Edit Profile', href: '/fsbo/settings/edit-profile' },
        { id: 2, subname: 'Address', href: '/fsbo/settings/address' },
        { id: 4, subname: 'Change Password', href: '/fsbo/settings/change-password' },
        { id: 5, subname: 'Notification Settings', href: '/fsbo/settings/notification' },
        { id: 7, subname: 'Saved Payment Cards', href: '/fsbo/settings/saved-payment-cards' }
    ] },
    { id: 10, icon: <IoCallOutline />, name: "Support", href: '/fsbo/support-page' }
];

export default fsboDashboardData;
