import { Calendar, ChevronsUpDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from 'lucide-react';
import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from './ui/sidebar';
import Link from 'next/link';
import { url } from 'inspector';
import Image from 'next/image';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';

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
                                   {item.title==="Inbox" && (
                                    <SidebarMenuBadge>24</SidebarMenuBadge>
                                   )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Project */}
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus></Plus><span className='sr-only'> Add Project sdd</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/#'}> <Projector></Projector> See All Project</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/#'}> <Plus/>Add Project</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Collapsable */}
                <Collapsible  defaultOpen className='group/collapsible'>
                <SidebarGroup>
                    <SidebarGroupLabel asChild> 
                         <CollapsibleTrigger >
          
            Collapsible Group
           <ChevronsUpDown  className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'/>
         
        </CollapsibleTrigger>
        </SidebarGroupLabel>
                      <CollapsibleContent >
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/#'}> <Projector></Projector> See All Project</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/#'}> <Plus/>A Project</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                    </CollapsibleContent>
                </SidebarGroup>
                </Collapsible>
                {/* Nested */}
                 
                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                   
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/#'}> <Projector></Projector> See All Project</Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href={'/#'}>
                                    <Plus></Plus>
                                    Add Project
                                    </Link>
                                </SidebarMenuSubButton>

                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href={'/#'}>
                                    <Plus></Plus>
                                    Add Category
                                    </Link>
                                </SidebarMenuSubButton>

                                </SidebarMenuSubItem>

                                </SidebarMenuSub>
                            </SidebarMenuItem>
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
