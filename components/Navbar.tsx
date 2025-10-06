"use client"
import { icons, LogOut, Moon, Settings, Sidebar, SquareMenu, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {  Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar';
const Navbar = () => {
    const { setTheme } = useTheme()
    return (
      <nav className='p-4 flex items-center justify-between'>
       <SidebarTrigger></SidebarTrigger>
        <div className='flex items-center gap-4'>
            <Link href={'/'}>Dashboard</Link>
             <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
 
<DropdownMenu>
  <DropdownMenuTrigger>
               <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User className='h-[1.2rem] w-[1.2rem] mr-2'></User> Profile</DropdownMenuItem>
    <DropdownMenuItem><Settings className='h-[1.2rem] w-[1.2rem] mr-2'></Settings> Setting</DropdownMenuItem>
    <DropdownMenuItem variant='destructive'><LogOut className='h-[1.2rem] w-[1.2rem] mr-2'></LogOut> Logout</DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>

{/* <DropdownMenu>
  <DropdownMenuTrigger asChild>
<Button variant={'outline'} size={'icon'}>
    <SquareMenu></SquareMenu>
    <span className='sr-only'>Open Menu</span>
</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    
    <DropdownMenuItem> Profile</DropdownMenuItem>
    <DropdownMenuItem>Setting</DropdownMenuItem>
    <DropdownMenuItem variant='destructive'>Logout</DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu> */}
        </div>
      </nav>
    );
};

export default Navbar;