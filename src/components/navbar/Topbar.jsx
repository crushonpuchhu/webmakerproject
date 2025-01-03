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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";
import { TfiLineDouble } from "react-icons/tfi";

import handleScrollToTop from "../../asset/scrolltop";

export default function Topbar({ setdark, isdark }) {
  const home = useNavigate();
  const services = useNavigate();
  const contact = useNavigate();

  return (
    <Navbar>
      <NavbarContent>
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <TfiLineDouble className="sm:hidden" size={"2em"} />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              onPress={() => {
                home("/home");
                handleScrollToTop();
              }}
              key="about"
            >
              About
            </DropdownItem>
            <DropdownItem
              onPress={() => {
                services("/services");
                handleScrollToTop();
              }}
              key="services"
            >
              Services
            </DropdownItem>
            <DropdownItem
              onPress={() => {
                contact("/contact");
                handleScrollToTop();
              }}
              key="contact"
            >
              Contact
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarBrand>
          <TiPointOfInterest size={"2em"} />
          <p className="font-bold text-inherit">WebMaker</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden cursor-pointer sm:flex gap-4"
        justify="center"
      >
        <div
          onClick={() => {
            home("/home");
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            services("/services");
          }}
        >
          Services
        </div>
        <div
          onClick={() => {
            contact("/contact");
          }}
        >
          Contact
        </div>
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
    </Navbar>
  );
}
