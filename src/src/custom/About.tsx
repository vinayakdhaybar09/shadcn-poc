import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const About = () => {
  return (
    <div className="px-20 py-10 w-full h-[80vh] flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-20">About Us</h2>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <h1 className="text-2xl mb-3">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quibusdam dolores, culpa corporis libero, repellendus illo soluta
            dignissimos laboriosam voluptates itaque qui modi facere vel.
            Aperiam vero perferendis pariatur dolores!
          </p>
        </div>
        <div className="w-[50%] ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Lorem ipsum dolor sit, amet consectetur adipisicing elit.?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque fugit cumque necessitatibus? Maxime, labore maiores? Mollitia ex molestias laborum obcaecati.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis.?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Lorem ipsum dolor sit amet.?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni iste illo ut iure debitis maiores expedita, assumenda, aspernatur, totam quidem minus molestiae eaque harum qui facere sint sit id doloremque.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
