import AppBarChart from "@/components/AppBarChart";
import AppAreaChart from "@/components/AppAreaChart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
  <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-4 gap-4" >

    
 <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart></AppBarChart></div>
 <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Latest Transactions"></CardList> </div>
 <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart></AppPieChart></div>
 <div className="bg-primary-foreground p-4 rounded-lg  "><TodoList></TodoList></div>
 <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaChart></AppAreaChart></div>
 <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"></CardList></div>
  </div>
  );
}
