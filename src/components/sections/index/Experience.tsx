import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://sirensoftware.xyz/"
                        title="Siren Software"
                        fullDescription={[
                            "After realizing Ocean Cheats wasn’t the brand I wanted to carry on—mainly because of the constant lack of updates and my inability to stay active—I decided to give up on Ocean completely. Honestly, I’m not sure why, but I did.",
                            "Now, with Siren, things are different. I’ve been making constant updates and improvements, and I’m determined to grow Siren as much as I can.",
                            "This feels like a fresh start and the right direction, and I’m really excited to see where Siren goes from here."
                          ]}
                        cardImage="https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/iboo4ic8.png"
                        cardDescription="After stepping away from Ocean Cheats due to a lack of updates and my inability to stay active, I’ve fully committed to building Siren. I’ve been pushing constant updates and improvements, and I’m excited to grow this brand as much as possible. Siren feels like a fresh start and the right direction for me, and I’m eager to see where it takes us."
                        media={[
                            "https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/opa4406u.gif",
                        ]}
                        myRole="Developer"
                        timeline="August 2025 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        url="No Longer Updated"
                        title="Ocean Cheats"
                        fullDescription={[
                            "While Ocean Cheats is a new project, it’s something I’ve really been trying to build after going through brand after brand. Ocean finally feels like a stable, working platform.",
                            "In under two months, we’ve gained over 700 members, and I’ve had the chance to work with some amazing people while building it up.",
                            "Ocean was my last attempt to stay involved in the cheat community, and for me—it’s actually working. It’s starting to feel like a real home.",
                            "I’ve learned so many new things from this community, and I genuinely couldn’t be more grateful."
                        ]}
                        cardImage="https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/htkysgjx.png"
                        cardDescription="While Ocean Cheats is a new project, it’s something I’ve really been trying to build after going through brand after brand. Ocean finally feels like a stable, working platform. In under two months, we’ve gained over 700 members, and I’ve had the chance to work with some amazing people while building it up. Ocean was my last attempt to stay involved in the cheat community, and for me—it’s actually working. I’ve learned so many new things from this community, and I genuinely couldn’t be more grateful."
                        media={[
                            "https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/opa4406u.gif",
                        ]}
                        myRole="Founder/Head Developer"
                        timeline="January 2025 - July 2025"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                    <ExperienceCard
                        url="https://fallen.reselling.pro/"
                        title="Fallen Panel"
                        fullDescription={[
                            "After facing major setbacks, I’ve now partnered with some amazing people to create our own authentication system and API, as well as a premade setup for piggybacking and reselling.",
                            "Fallen was created with security and stability in mind, since other providers failed to hold up their end of the deal.",
                            "While working on Fallen, we’ve implemented changes that actively improve and evolve the system as it runs.",
                            "We just launched this month and already have 10+ active sellers using it with no issues.",
                            "While I’ve developed many things, this is simply a product I own I don’t want to take credit for work that isn’t mine."
                        ]}
                        cardImage="https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/kw3pyy5w.png"
                        cardDescription="After facing major setbacks, I’ve now partnered with some amazing people to create our own authentication system and API, as well as a premade setup for piggybacking and reselling. Fallen was created with security and stability in mind, since other providers failed to hold up their end of the deal. While working on Fallen, we’ve implemented changes that actively improve and evolve the system as it runs. We just launched this month and already have 10+ active sellers using it with no issues. While I’ve developed many things, this is simply a product I own—I don’t want to take credit for work that isn’t mine."
                        media={["https://r2.e-z.host/223a47e8-a56e-4a6d-a5a7-09d7420d7ac2/57u7vg59.png"]}
                        myRole="Founder"
                        timeline="July 2025 - Present"
                        delay={0.2}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
