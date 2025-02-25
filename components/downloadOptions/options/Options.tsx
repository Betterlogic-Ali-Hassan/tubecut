import React from "react";
import Option from "./option/Option";
import { options } from "@/constant/downloadOptions";
const Options = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 max-sm:px-6 w-full '>
      <Option label='Audio & MP3' size='~3-mb' />
      {options.map((item, i) => (
        <Option
          key={i}
          label={item.label}
          size={item.size}
          resolution={item.resolution}
        />
      ))}
    </div>
  );
};

export default Options;
