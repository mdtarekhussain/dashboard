import { Calendar, ChevronUp, Home, Inbox, Search, Settings, User2 } from 'lucide-react';
import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from './ui/sidebar';
import Link from 'next/link';
import { url } from 'inspector';
import Image from 'next/image';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const items = [
    {
        title: "Home",
        url: '/',
        icon: <Home />,
    },
    {
        title: "Inbox",
        url: '/inbox',
        icon: <Inbox />,
    },
    {
        title: "Calendar",  // Fixed typo: 'Calender' → 'Calendar'
        url: '/calendar',
        icon: <Calendar />,
    },
    {
        title: "Search",
        url: '/search',
        icon: <Search />,
    },
    {
        title: "Settings",
        url: '/settings',
        icon: <Settings />,
    },
];

const AppSidebar = () => {
    return (
        <Sidebar collapsible='icon'>
            <SidebarHeader >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={'/'}>
                            <Image className='rounded-full' src={'/logo.jpg'} alt='logo' width={20} height={20}></Image>
                            <span>Lama Dev</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                 </SidebarHeader>
                 <SidebarSeparator></SidebarSeparator>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title} >
                                   <SidebarMenuButton asChild>
                                    <Link href={item.url}>{item.icon}
                                    <span>{item.title}</span></Link>
                                   </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2></User2> John Doe <ChevronUp className='ml-auto'></ChevronUp>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Setting</DropdownMenuItem>
                                <DropdownMenuItem>Sign Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
