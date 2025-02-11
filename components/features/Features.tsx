import React from "react";
import FeatureCards from "./featureCards/FeatureCards";
import Heading from "@/components/Heading";
const Features = () => {
  return (
    <section className='max-[809px]:flex flex-col items-center gap-6 '>
      <Heading
        title='The things that make us unique'
        des='There are key features that set us apart from other Youtube
          downloaders.'
      />
      <FeatureCards />
    </section>
  );
};

export default Features;
