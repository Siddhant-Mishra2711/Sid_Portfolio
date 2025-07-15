import { Briefcase, Code, User } from "lucide-react";
import siddhantImg from "../assets/Siddhant.png";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Avatar & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start">
              <img
                src={siddhantImg}
                alt="Siddhant Mishra"
                width={160}
                height={160}
                className="rounded-full shadow-md border-2 border-primary object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I’m an aspiring web developer with a strong foundation in building responsive and accessible websites. I’m committed to learning modern web technologies and continuously improving my skills to create high-quality digital experiences.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about solving real-world problems through clean and efficient code. I actively seek opportunities to learn and grow, staying updated with the latest trends in the ever-evolving world of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Siddhant_Mishra_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                description:
                  "Building responsive and user-friendly websites using modern web technologies and frameworks.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                description:
                  "Designing intuitive user interfaces and seamless user experiences.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.073 3.157 9.39 7.623 11.086.557.102.758-.242.758-.538 0-.266-.01-1.145-.015-2.247-3.1.673-3.754-1.494-3.754-1.494-.506-1.287-1.237-1.63-1.237-1.63-1.012-.692.077-.678.077-.678 1.119.078 1.708 1.148 1.708 1.148.994 1.701 2.61 1.21 3.244.926.1-.72.39-1.21.709-1.49-2.47-.281-5.063-1.236-5.063-5.5 0-1.213.433-2.206 1.143-2.984-.114-.28-.496-1.41.109-2.94 0 0 .934-.299 3.06 1.14.887-.247 1.838-.37 2.784-.375.945.005 1.896.128 2.784.375 2.124-1.439 3.056-1.14 3.056-1.14.607 1.53.224 2.66.11 2.94.713.778 1.14 1.77 1.14 2.984 0 4.274-2.598 5.214-5.07 5.49.4.346.755 1.027.755 2.07 0 1.494-.014 2.7-.014 3.068 0 .3.198.645.766.536C20.845 21.39 24 17.07 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                title: "Python",
                description: "Backend development, automation, and data processing using Python.",
              },
                          {
                            icon: <Briefcase className="h-6 w-6 text-primary" />,
                            title: "Project Management",
                            description:
                              "Coordinating projects from start to finish while following agile practices to ensure timely and efficient delivery.",
                          },
            ].map(({ icon, title, description }, i) => (
              <motion.div
                key={i}
                className="gradient-border p-6 card-hover transition duration-300 hover:scale-[1.02]"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

