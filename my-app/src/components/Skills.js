import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
<section id="skills">
<div className="AAA">
<div className="BBB">
<ChipIcon className="CCC" />
<h1 className="DDD">
Skills &amp; Technologies
</h1>
<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
ipsa delectus eum quo voluptas aspernatur accusantium distinctio
possimus est.
</p>
</div>
<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
{skills.map((skill) => (
<div key={skill} className="p-2 sm:w-1/2 w-full">
<div className="bg-gray-800 rounded flex p-4 h-full items-center">
<BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
<span className="title-font font-medium text-white">
{skill}
</span>
</div>
</div>
)
)
}
</div>
</div>
</section>
);
}