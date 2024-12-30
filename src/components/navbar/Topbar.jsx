import { TiPointOfInterest } from "react-icons/ti";
import React from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Tabs, Tab } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Switchh from "../switch/Switch";



export default function Topbar({ setdark, isdark }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TiPointOfInterest size={"2em"} />
          <p className="font-bold text-inherit">Webmaker</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Tabs
          key={"underlined"}
          aria-label="Tabs variants"
          variant={"underlined"}
        >
          <Tab key="About" title="About" />
          <Tab key="Services" title="Services" />
          <Tab key="Contact" title="Contact" />
        </Tabs>
      </NavbarContent>

      <NavbarContent>
        <NavbarContent justify="end">
          <div
           className=" cursor-pointer"
            onClick={() => {
              setdark((p) => !p);
            }}
          >
            {isdark ? <CiLight size={"2em"} /> : <MdDarkMode size={"2em"} />}
          </div>
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
