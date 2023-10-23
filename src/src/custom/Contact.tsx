import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("email is not valid"),
  contact: z.string().min(10, { message: "contact no is not correct" }),
});

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
    },
  });

  const onSubmit = () => {
    console.log("form submiteed");
    setOpenModal(true);
  };

  return (
    <div className="px-20 py-10 w-full flex flex-col items-center h-screen">
      <h2 className="text-6xl font-bold mb-20 text-center">Contact Us</h2>
      <div className="w-[50%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel>Full Name</FormLabel>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Input placeholder=" Rajiv Shrama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel>Email id</FormLabel>
                    <FormDescription>Enter your work email id.</FormDescription>
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
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormLabel>Contact no.</FormLabel>
                    <FormDescription>Whatsapp no</FormDescription>
                  </div>
                  <FormControl>
                    <Input placeholder="000-000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Dialog>
              <DialogTrigger className="w-[100%]">
                <Button className="w-[100%]" type="submit">
                  Submit
                </Button>
              </DialogTrigger>
              {openModal === true ? (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Successfull</DialogTitle>
                    <DialogDescription>
                      Thank you for submitting the form we will reach out to you
                      soon....
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              ) : null}
            </Dialog>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
