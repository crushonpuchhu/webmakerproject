import {
  Card,
  CardBody,
  Image,
  CardFooter,
  CardHeader,
  Divider,
  Button,
} from "@nextui-org/react";
import react from "react";
import { TiPointOfInterest } from "react-icons/ti";
import { services } from "../../asset/serivecsdata";
export default function Services() {
  return (
    <>
      <div id="abc1" className="  text-foreground p-8 flex flex-wrap justify-start max-lg:justify-center gap-10 items-center  ">
        {services.map((e, i) => {
          return (
            <>
              
              <Card className="py-4 w-[300px] h-[300px]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{e.title}</p>
                  <small className="text-default-500">{e.price}</small>
                  <h4 className="font-bold h-[30px]  overflow-scroll text-large">{e.description[0]}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={e.coverImage}
                    width={270}
                    height={190}
                  />
                </CardBody>
              </Card>
            </>
          );
        })}
        
      
      </div>
    </>
  );
}
