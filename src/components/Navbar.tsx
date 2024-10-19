import owl from "../assets/owl.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

import { Button } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";

export function NavbarComp() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [publicAddress, setPublicAddress] = useState();

  return (
    <NavigationMenu
      className=" flex justify-between w-fit  items-center  mb-16  px-1 sm:px-4 lg:px-12   py-4"
      style={{ width: "100%" }}
    >
      <NavigationMenuList>
        <div className=" items-center space-x-2">
          <Link to="/">
            <span>
              <img width={50} height={50} src={owl} alt="owl_logo" />
            </span>
          </Link>
        </div>

        {sessionStorage.getItem("publicKey") === null ? (
          <div></div>
        ) : (
          <NavigationMenuItem>
            <Link to="/profile">
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
      <NavigationMenuList>
        <div className="flex w-full justify-between ">
          {sessionStorage.getItem("publicKey") === null ? (
            <div className="flex ml-12">
              <Button
                variant="solid"
                className="p-2 flex  h-fit w-50 md:w-fit font-extrabold font-jura text-lg text-white bg-neutral-800 hover:shadow-md hover: shadow-white "
              >
                <p className="font-extrabold text-xs md:text-xl">
                  Download App
                </p>
                <p className="text-xs italic font-extralight">coming soon...</p>
              </Button>
            </div>
          ) : (
            <Dropdown className="bg-black text-white">
              <DropdownTrigger>
                <Button className="flex p-3 bg-inherit hover:bg-[rgba(255,255,255,0.09)]">
                  <span className="font-urbanist tracking-wider font-bold text-white  rounded-md"></span>
                  <RiAccountCircleFill className="text-3xl text-white rounded-lg" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="disconnect"
                  className="font-urbanist  text-xl tracking-wider hover:bg-[rgba(255,255,255,0.3)] hover:text-white"
                >
                  Disconnect
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
