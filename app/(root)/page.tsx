
"use client";


import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

// export default function Home() {
//   const tasks = useQuery(api.tasks.get);
//   return (

//   );
// }



//this is the home components


const page = () => {
  const tasks = useQuery(api.tasks.get);
  //   return (
console.log(tasks);

  return (
    <div className="mt-9 flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending prodcasts</h1>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-red-600">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
        <div className="podcast_grid">
          {" "}
          {podcastData?.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              imgURL={podcast.imgURL}
              title={podcast.title}
              description={podcast.description}
              podcastId={podcast.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
