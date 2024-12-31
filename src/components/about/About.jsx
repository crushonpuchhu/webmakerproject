import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { TiPointOfInterest } from "react-icons/ti";
export default function About() {
  return (
    <div className="max-w-[900px]  gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Website development
          </p>
          <h4 className="text-white font-medium text-large">
            Custom web development
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/006/849/029/small_2x/abstract-background-with-soft-gradient-color-and-dynamic-shadow-on-background-background-for-wallpaper-eps-10-free-vector.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">E-world</p>
          <h4 className="text-white font-medium text-large">
            E-commerce solutions
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXpEO9hTbehDs3yL5bpBRVXNX4m_4I8mPdA&s"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">design</p>
          <h4 className="text-white font-medium text-large">UI/UX design</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            development
          </p>
          <h4 className="text-white font-medium text-2xl">
            Full-stack development
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://plus.unsplash.com/premium_photo-1671192373368-10a54b7cd19e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29saWQlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            contact us
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            remove work stress
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Maintenance & support
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYZMEMaO8U9_rUEtjppnd4UbDTFHo7fDw2A&s"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <TiPointOfInterest size={"2em"} />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">24 x 7</p>
              <p className="text-tiny text-white/60">Support Available.</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
