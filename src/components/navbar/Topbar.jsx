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
import { useNavigate } from "react-router-dom";



export default function Topbar({ setdark, isdark }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const home = useNavigate();
   const services = useNavigate();
   const contact = useNavigate();

  const menuItems = [
    "About",
    "Services",
    "Contact "
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
          <p className="font-bold text-inherit">WebMaker</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden cursor-pointer sm:flex gap-4" justify="center">
      
        <div onClick={()=>{home("/home")}}>About</div>
        <div onClick={()=>{services('/services')}}>Services</div>
        <div onClick={()=>{contact("/contact")}}>Contact</div>
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
