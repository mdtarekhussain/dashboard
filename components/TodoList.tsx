"use client"
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';


const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open ,setOpen] = useState(false)
    return (
        <div>
            <h1 className='text-lg font-medium mb-5'>Todo List</h1>
         <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className='w-full'>
        <CalendarIcon></CalendarIcon>
        {date? format(date,'PPP'): <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className='p-0 w-auto'> 
    <Calendar
    mode="single"
    selected={date}
    onSelect={date=>{
        setDate(date)
        setOpen(false)
    }}
   
  /></PopoverContent>
</Popover>
            <ScrollArea className="h-[400px] mt-4 overflow-auto">
                <div className='flex flex-col gap-3'>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1'/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' />
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' />
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' />
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' />
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' />
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             <Card className='p-4 '>
                  <div className='flex items-center gap-4'>
                
                 <Checkbox id='item1' checked/>
                 <label className='text-sm text-accent-foreground' htmlFor='item1'>Lorem ipsum dolor sit amet consectetur, </label>
               </div>
             </Card>
             </div>
            </ScrollArea>

        </div>
    );
};

export default TodoList;