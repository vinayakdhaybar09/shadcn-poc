import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { AspectRatio } from "../components/ui/aspect-ratio";

const formSchema = z.object({
  email: z.string().email("email is not valid"),
  password: z.string().min(8, { message: "minimum 8 correct" }),
});

const Signin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("form submiteed");
  };

  return (
    <div className=" flex flex-col items-center h-screen">
      {/* <h2 className="text-6xl font-bold mb-20 text-center">Sign in</h2> */}

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        alt=""
      />
      <div className="w-full ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel>Email id</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder="abcd@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel>Password</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder="**** ****" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-[100%]" type="submit">
              Sign in
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
