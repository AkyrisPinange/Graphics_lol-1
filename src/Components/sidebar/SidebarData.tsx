import { AiFillCaretDown, AiFillCaretUp, AiFillSignal, AiOutlineHome, AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaLevelUpAlt } from 'react-icons/fa'
import { SidebarItem } from "./models/SidebarItem";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiOutlineHome/>,
        iconClosed: <AiFillCaretDown/>,
        iconOpend: <AiFillCaretUp/>,
        subnav:[
           
        ]
        
    },
    {
        title: 'Graphs',
        path: '/graphs',
        icon: <AiFillSignal/>,
        iconClosed: <AiFillCaretDown/>,
        iconOpend: <AiFillCaretUp/>,
        subnav:[
            {
                title: 'Nivel',
                path: '/graphs/level',
                icon: <FaLevelUpAlt/>
            },
            {
                title: 'Summoners',
                path: '/graphs/summoners',
                icon: <AiOutlineUsergroupDelete/>
            }
        ]
        
    }
] 