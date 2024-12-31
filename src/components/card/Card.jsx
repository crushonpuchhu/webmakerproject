import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { TiPointOfInterest } from "react-icons/ti";
import { Button } from "@nextui-org/react";
export default function Cardd() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <TiPointOfInterest size={"2em"} />
        <div className="flex flex-col">
          <p className="text-md">Webmaker</p>
          <p className="text-small text-default-500">webmaker.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Welcome to WebMaker At WebMaker, we transform ideas into exceptional
          digital experiences. As a premier web development company, we
          specialize in crafting tailored websites and applications that are not
          only visually stunning but also robust and scalable. With a deep
          passion for innovation and technology, our team at WebMaker thrives on
          turning challenges into opportunities. From startups to enterprises,
          we partner with businesses to build modern, user-friendly, and secure
          solutions that drive growth and success. Whether you need a sleek
          e-commerce platform, a dynamic web application, or a cutting-edge
          redesign, WebMaker is here to bring your vision to life—one line of
          code at a time.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button color="primary" variant="flat">
          Contact Us
          <Link
            isExternal
            showAnchorIcon
            href="https://wa.me/7488453170"
          ></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
