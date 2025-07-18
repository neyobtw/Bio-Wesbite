import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16 -mb-2"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Other Projects
        </motion.h1>
        <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-4 overflow-hidden`}>
          {!showAll &&
            <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
              <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
            </div>
          }
          <ProjectCard
            url="this does nothing"
            title="Failed Stages Of The Clown Wars"
            fullDescription={[
              "In the final stages and years leading up to what Ocean is today, there were many brands that came before it—Pyra, Vision.GG, Vatality, and so many more.",
              "During those long nights fighting to build a successful brand, I learned a tough truth: no matter how hard you try, you’ll never make everyone happy.",
              "That realization led me to create my final brand—Ocean.",
              "These attempts go years back, but despite everything, I’m proud to be where I am now."
            ]}
            cardImage="https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/7mqjdqjt.webp"
            cardDescription="In the final stages and years leading up to what Ocean is today, there were many brands that came before it Pyra, Vision.GG, Vatality, and so many more. During those long nights fighting to build a successful brand, I learned a tough truth: no matter how hard you try, you’ll never make everyone happy. That realization led me to create my final brand Ocean. These attempts go years back, but despite everything, I’m proud to be where I am now."
            media={[
              "https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/d0vnyxbl.png",
            ]}
            myRole="Creator"
            timeline="Unknown - Present"
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
