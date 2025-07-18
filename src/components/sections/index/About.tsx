import AboutCard from "@/components/AboutCard";
import { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import PresenceCard from "@/components/PresenceCard";
import { useEffect, useState } from "react";
import TechBadge from "@/components/TechBadge";

export default function About() {
  let frontendTech: Tech[] = [
    { title: "React", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />, link: "https://react.dev/" },
    { title: "Vue", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />, link: "https://vuejs.org/" },
    { title: "Svelte", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" />, link: "https://svelte.dev/" },
    { title: "TypeScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />, link: "https://www.typescriptlang.org" },
    { title: "TailwindCSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />, link: "https://tailwindcss.com/" },
    { title: "Three.js", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" />, link: "https://threejs.org/" },
    { title: "Framer Motion", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png" />, link: "https://www.framer.com/motion/" },
    { title: "GSAP", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/zkji5ma1.png" />, link: "https://gsap.com/" },
    { title: "Figma", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />, link: "https://figma.com" },
    { title: "Webflow", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" />, link: "https://webflow.com/" },
    { title: "Vite", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />, link: "https://vitejs.dev/" }
  ]

  let backendTech: Tech[] = [
    { title: "Node.js", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />, link: "https://nodejs.org/" },
    { title: "Python", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://python.org/" },
    { title: "Express", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />, link: "https://expressjs.com/" },
    { title: "MongoDB", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "PostgreSQL", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />, link: "https://postgresql.org/" },
    { title: "Firebase", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />, link: "https://firebase.google.com/" },
    { title: "Supabase", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />, link: "https://supabase.com/" },
    { title: "GraphQL", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />, link: "https://graphql.org/" },
    { title: "Prisma", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />, link: "https://prisma.io/" }
  ]

  let otherTech: Tech[] = [
    { title: "Adobe Creative Suite", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />, link: "https://adobe.com" },
    { title: "Blender", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" />, link: "https://blender.org/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />, link: "https://docker.com/" },
    { title: "AWS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />, link: "https://aws.amazon.com/" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Netlify", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" />, link: "https://netlify.com/" },
    { title: "VS Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Notion", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />, link: "https://notion.so/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" }
  ]

  const [presence, setPresence] = useState<Presence | null>(null);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'other'>('frontend');

  useEffect(() => {
    const socket = new WebSocket(`wss://api.neyo.dev/presence`)

    const handleOpen = () => {
      socket.send("Connection established")
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "connected") return
      if (event.data === "pong") return
      setPresence(JSON.parse(event.data))
    }

    let ping = setInterval(() => {
      socket.send("ping")
    }, 10000)

    socket.addEventListener("open", handleOpen)
    socket.addEventListener("message", handleMessage)

    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      socket.removeEventListener("open", handleOpen)
      socket.removeEventListener("message", handleMessage)
      socket.close()
      clearInterval(ping)
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <div className="flex flex-col gap-4 mt-4">
          {/* Keep the Overall card */}
          <motion.div
            className="w-full"
            initial={{ transform: 'translateY(-30px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
            viewport={{ amount: 0.1, once: true }}
          >
            <AboutCard
              title="My Journey"
              description="My passion for technology began at age 10 when I started modding games on Xbox, creating cheats and hacks for Black Ops 2. This early curiosity led me to PlayStation, where I developed GTA mod menus and discovered my love for software development. Four years ago, when asked about my future aspirations, I shared my dream of joining the military to develop missile control software - a goal that still drives me today. Over the past 7 months as a full-stack developer, I've been mastering the fundamentals and pushing myself to grow every day. While I'm still learning and far from perfect, I'm committed to becoming someone others can depend on. Thank you for taking the time to learn about my story."
              direction="top"
              span={2}
              delay={0.1}
              gradient="bg-gradient-to-tl"
            />
          </motion.div>

          {/* Cool new tabbed tech section */}
          <motion.div
            className="relative sm:p-8 p-6 w-full bg-gradient-to-br from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
            initial={{ transform: 'translateY(30px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.39, 0.21, 0.12, 0.96], }}
            viewport={{ amount: 0.1, once: true }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6 p-1 bg-black/20 rounded-lg backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('frontend')}
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 flex-1 sm:flex-none ${activeTab === 'frontend'
                  ? 'bg-white/20 text-white shadow-lg transform scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                🎨 Frontend
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 flex-1 sm:flex-none ${activeTab === 'backend'
                  ? 'bg-white/20 text-white shadow-lg transform scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                ⚡ Backend
              </button>
              <button
                onClick={() => setActiveTab('other')}
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 flex-1 sm:flex-none ${activeTab === 'other'
                  ? 'bg-white/20 text-white shadow-lg transform scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
              >
                🛠️ Tools
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px]"
            >
              {activeTab === 'frontend' && (
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Frontend Development</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    I create engaging user interfaces with modern frameworks and creative technologies. My frontend work focuses on interactive experiences, smooth animations, and responsive design that works beautifully across all devices.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {frontendTech.map((tech, index) => (
                      <motion.a
                        key={tech.title}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex-shrink-0">{tech.icon}</div>
                        <span className="text-sm font-medium text-white group-hover:text-white/90 truncate">
                          {tech.title}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'backend' && (
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Backend Development</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    I build robust server-side solutions and APIs that power creative applications. My backend experience includes databases, cloud services, and scalable architectures for digital products.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {backendTech.map((tech, index) => (
                      <motion.a
                        key={tech.title}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex-shrink-0">{tech.icon}</div>
                        <span className="text-sm font-medium text-white group-hover:text-white/90 truncate">
                          {tech.title}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'other' && (
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Tools & Technologies</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    My creative toolkit includes design software, development tools, cloud platforms, and emerging technologies that help bring innovative ideas to life.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {otherTech.map((tech, index) => (
                      <motion.a
                        key={tech.title}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex-shrink-0">{tech.icon}</div>
                        <span className="text-sm font-medium text-white group-hover:text-white/90 truncate">
                          {tech.title}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Presence card if available */}
          {presence && presence.activities.length > 0 && (
            <motion.div
              initial={{ transform: 'translateY(30px)', opacity: 0 }}
              whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.39, 0.21, 0.12, 0.96], }}
              viewport={{ amount: 0.1, once: true }}
            >
              <PresenceCard
                presence={presence}
                date={date}
                direction="bottom"
                span={1}
                delay={0.1}
                gradient="bg-gradient-to-tl"
              />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
