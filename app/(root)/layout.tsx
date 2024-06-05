import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
// import RightSidebar from "@/components/rightSidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NewMobileNav from "@/components/NewMobileNav";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-4">
        <LeftSidebar />

        <section className=" flex min-h-screen flex-1 flex-col  px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max:px-4">
            <div className=" flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="menu-icon"  width={30} height={30} />
<NewMobileNav/>
            </div>

            <div className=" flex flex-col md:pb-14"> toster {children}</div>
          </div>
        </section>
        <RightSidebar/>
      </main>
    </div>
  );
}