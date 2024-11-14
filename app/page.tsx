// import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/Dashboard/DashboardCards";
import { CreditCard, Newspaper } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title='Posts'
          count={100}
          icon={<Newspaper className="text-slate-500" size='72'></Newspaper>}
        />
        <DashboardCard
          title='Categories'
          count={12}
          icon={<CreditCard className="text-slate-500" size='72'></CreditCard>}
        />
      </div>
      {/* <h1 className="text-2xl">Dashboard</h1> */}
      {/* <Button variant='destructive' size='sm'>Click Me</Button> */}
    </>
  );
}
