import { AspectRatio } from "../components/ui/aspect-ratio";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import Signin from "./Signin";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 px-5">
      <div className="w-[80px]">
        <AspectRatio ratio={1 / 1}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/826/851/small/abstract-initial-letter-mz-logo-in-black-color-isolated-in-white-background-applied-for-clothing-brand-logo-also-suitable-for-the-brands-or-companies-that-have-an-initial-name-zm-vector.jpg"
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="flex gap-10 items-center">
        <p className="text-foreground text-bold">Home</p>
        <p>About us</p>
        <p>Services</p>
        <p>Contact us</p>
        <Sheet>
          <SheetTrigger><Button>Sign in</Button></SheetTrigger>
          {/* <Button>Sign in</Button> */}
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sign in</SheetTitle>
              <SheetDescription>
                <Signin />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
