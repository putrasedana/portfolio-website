"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact-page";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col xl:flex-row gap-7.5">
          {/* form */}
          <div className="xl:w-[63%] order-2 xl:order-0">
            <form className="flex flex-col gap-6 p-8 bg-slate-800 rounded-xl">
              <h3 className="text-4xl text-green-400">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                earum blanditiis quasi exercitationem cum neque!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}

              {/* textarea */}
              <Textarea
                className="h-20"
                placeholder="Type your message here."
              ></Textarea>

              {/* button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-13 h-13 xl:w-18 xl:h-18 bg-slate-800 text-green-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        <Icon />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
