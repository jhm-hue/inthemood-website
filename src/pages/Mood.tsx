import React from "react";
import { Button } from "@/components/ui/button";
import moodSvg from "@/assets/mood.svg";

const Mood = () => {
  return (
    <div>
      <img src={moodSvg} alt="Mood" className="mx-auto mb-4" />
    </div>
  );
};

export default Mood;
