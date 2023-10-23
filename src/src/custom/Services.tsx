
import {
  Card,
  CardContent,
//   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

const ServiceCard = () => {
  return (
    <Card className="w-[30%] min-h-[400px] flex flex-col gap-4">
      <CardHeader className="">
        <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
        {/* <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam
          reprehenderit animi laborum ipsa aperiam.
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptate totam voluptates fuga distinctio dolorum ex impedit quaerat
          delectus nisi molestias omnis repellat voluptatem ratione odit
          provident, eaque tempora assumenda...
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button>Learn more</Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-between gap-y-16">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
