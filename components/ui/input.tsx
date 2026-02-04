import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 rounded-md border border-white/10 focus:border-green-500 font-light bg-slate-950 px-4 py-5 text-base placeholder:text-white/60 outline-none",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
