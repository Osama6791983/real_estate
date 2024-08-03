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

const rentalDashboardData = [
    { id: 1, icon: <MdOutlineDashboardCustomize />, name: "Dashboard", href: '/' },
    { id: 2, icon: <BsChatRightDots />, name: "Message", href: '/' },
    { id: 3, icon: <CiLocationOn />, name: "Rent", href: '/' },
    { id: 4, icon: <LuWallet />, name: "Money", href: '/' },
    { id: 5, icon: <LiaCertificateSolid />, name: "Document", href: '/rental/upload-document' },
    { id: 6, icon: <CiSaveDown2 />, name: "Saved", href: '/' },
    { id: 7, icon: <BiHistory />, name: "History", href: '/' },
    { id: 8, icon: <FcDebt />, name: "Loan & Mortgage", href: '/' },
    { id: 9, icon: <CiSettings />, name: "Setting", ddicon: <RiArrowDropDownLine />, submenu: [
        { id: 1, subname: 'Edit Profile', href: '/rental/settings/edit-profile' },
        { id: 2, subname: 'Address', href: '/rental/settings/address' },
        { id: 4, subname: 'Change Password', href: '/rental/settings/change-password' },
        { id: 5, subname: 'Notification Settings', href: '/rental/settings/notification' },
        { id: 7, subname: 'Saved Payment Cards', href: '/rental/settings/saved-payment-cards' }
    ] },
    { id: 10, icon: <IoCallOutline />, name: "Support", href: '/rental/support-page' }
];

export default rentalDashboardData;
