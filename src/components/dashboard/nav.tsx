import Link from "next/link";
import AuthButton from "../auth/auth-button";
import { Button } from "../ui/button";
import CreditDisplay from "./credit-display";
import NavItems from "./nav-items";
import { currentUser } from "@clerk/nextjs/server";

const DashboardNav = async () => {
  const user = await currentUser();

  return (
    <nav className="grid gap-2 items-start">
      <NavItems />

      <div className="my-4 px-4 md:hidden">
        <AuthButton />
      </div>

      <div className="p-4">
        <CreditDisplay />
        {user && (
          <Button
            asChild
            className="w-full mt-4 text-white"
            variant={"premium"}
          >
            <Link href={"/dashboard/plan"}>アップグレード</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
