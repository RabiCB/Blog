"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


type formdata = {
  email: string;
  contact: number;
  feedback: string | null | undefined;
};



const Page = () => {
  const onSubmit = async (data: any) => {
     alert("working on it")

    // await fetch("/api/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   if (res?.ok || res?.status === 200) {
    //     form.reset({})
    //     toast.success("Success");
    //   } else {
    //     toast.error("something went wrong");
    //   }
    // });
  };

  const form = useForm();
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[500px] border-[1px] p-4 rounded-md shadow  min-w-[400px] max-sm:w-[340px] flex gap-4 flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: {
                message: "Please enter your email",
                value: true,
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="mb-10">
                  <Input placeholder="rollinrabin@gmail.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            rules={{
              required: {
                message: "Please enter your contact detail",
                value: true,
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="9834265373" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback</FormLabel>
                <FormControl>
                  <Input placeholder="write something..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
