"use client";

import { Button, Navbar } from "flowbite-react";
import { BenniLogo } from "./logo";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://albertobenatti.com">
        <BenniLogo className="w-64 lg:w-64" alt="Benni Logo" />
        <span className="ml-8 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Next e-Ncommerce
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
