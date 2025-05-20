"use client";;
import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub } from "react-icons/fa";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setExpanded(false);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setExpanded(false);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  // Set the max height for collapsed description
  const COLLAPSED_HEIGHT = 120;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-contain object-center bg-white"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col justify-between py-4 h-[370px] md:h-[370px]">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 inline-block text-transparent bg-clip-text dark:text-white">
              {testimonials[active].title}
            </h3>
            <div className="relative mt-8 text-lg text-gray-500 dark:text-neutral-300 text-justify">
              <motion.p
                className={`transition-all duration-300 ${expanded ? '' : 'overflow-hidden'}`}
                style={
                  expanded
                    ? { maxHeight: "1000px" }
                    : { maxHeight: `${COLLAPSED_HEIGHT}px` }
                }
              >
                {testimonials[active].description}
              </motion.p>
              {/* Gradient fade when collapsed */}
              {!expanded && (
                <div
                  className="absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
                  style={{ borderRadius: "0 0 12px 12px" }}
                />
              )}
              {/* Read More / Show Less button */}
              {testimonials[active].description.length > 180 && (
                <button
                  className="mt-2 text-xs text-rose-400 font-semibold underline focus:outline-none relative z-10"
                  onClick={() => setExpanded((prev) => !prev)}
                  type="button"
                >
                  {expanded ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
            {/* Technologies */}
            <div className="flex flex-wrap justify-center mt-4">
              {testimonials[active].Technologies &&
                testimonials[active].Technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
            </div>
            {/* GitHub Link */}
            {testimonials[active].link && (
              <div className="mt-4">
                <a
                  href={testimonials[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-gray-200 transition"
                >
                  <FaGithub className="mr-1" size={22} />
                  <span className="underline text-xs">View on GitHub</span>
                </a>
              </div>
            )}
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 mt-5">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
