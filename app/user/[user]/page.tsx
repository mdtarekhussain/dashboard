import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from '@/components/CardList';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EditUser from '@/components/EditUser';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import AppLineChart from '@/components/AppLineChart';
const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/user">User</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
{/* container */}
<div className='mt-4 flex flex-col lg:flex-row gap-8'>
     {/*Left  */}
     <div className='w-full xl:w-1/2 space-y-6'>
     {/* user badges content */}
     <div className='bg-primary-foreground p-4 rounded-lg'>
        <h1 className='text-lg font-medium'> User Badges</h1>
        <div className='flex gap-4 mt-4'>
            <HoverCard>
  <HoverCardTrigger><BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-blue-500/50 border-1 p-2'></BadgeCheck></HoverCardTrigger>
  <HoverCardContent>
   <h1 className='font-bold mb-2'> Verified User</h1>
   <p className='text-sm text-muted-foreground'> This user has been verified by the admin</p>
  </HoverCardContent>
</HoverCard>
  <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
        </div>
     </div>
     {/* Information content */}
     <div className='bg-primary-foreground p-4 rounded-lg'>
        <div className='flex items-center justify-between'>
         <h1 className='text-lg font-medium'> User Information</h1>
<Sheet>
  <SheetTrigger asChild><Button>Edit User</Button></SheetTrigger>
  <EditUser></EditUser>
</Sheet>
        </div>
         <div className='space-y-4 mt-4'>
            <div className=' flex flex-col gap-3 mb-8'>
                <p className='text-sm text-muted-foreground'>Profile Completion</p>
                <Progress value={65} />
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Username:</span>
                 <span>Tarek Hossain</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Email:</span>
                 <span>tarekhossainmd02@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Phone:</span>
                 <span>01928658800</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Location:</span>
                 <span>Pomgaon,Monohorgonj,Comill</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Role:</span>
                 <Badge>Admin</Badge>
            </div>
         </div>
         <p className='text-sm text-muted-foreground mt-3'>Joined on 2025.01.02</p>
     </div>
     {/* Card List content */}
     <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title='Recent Transactions'></CardList>
     </div>
     
     </div>
     {/* Right */}
     <div className='w-full xl:w-2/3 space-y-6'>
      {/* user Card content */}
     <div className='bg-primary-foreground p-4 rounded-lg space-y-4'>
        <div className='flex items-center gap-2'>
            <Avatar className='size-12'>
                <AvatarImage src={'https://i.ibb.co./1Y2MgjJK/tarek.jpg'}/>
                <AvatarFallback >Ts</AvatarFallback>
            </Avatar>
            <h1 className='text-xl font-semibold'> Tarek Hossain</h1>
        </div>
        <p className='text-sm text-muted-foreground '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil, accusamus, </p>
        </div>
         {/* Chart content */}
     <div className='bg-primary-foreground p-4 rounded-lg'>
      <h1 className='text-xl font-semibold'>User Activity</h1><AppLineChart></AppLineChart></div></div>

</div>
        </div>
    );
};

export default SingleUserPage;