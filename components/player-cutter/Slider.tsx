import React from "react";
import { Slider } from "../ui/slider";

const DualSlider = () => {
  return (
    <div className='mt-6'>
      <Slider
        defaultValue={[25, 75]}
        step={1}
        aria-label='Dual range slider'
        className=' rounded-lg'
      />
    </div>
  );
};

export default DualSlider;
