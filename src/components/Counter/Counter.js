"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CountUp from "react-countup";
import styles from "./Counters.module.css";

export default function Counters() {
  const counters = [
    { id: 1, label: "Shoots Completed", value: 200 },
    { id: 2, label: "Happy Clients", value: 150 },
    { id: 3, label: "Awards Won", value: 12 },
    { id: 4, label: "Years of Experience", value: 5 },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={styles.counters} ref={ref}>
      {counters.map(({ id, label, value }) => (
        <motion.div
          key={id}
          className={styles.counter}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: id * 0.2 },
            },
          }}
        >
          <span className={styles.number}>
            <CountUp end={value} duration={2} />+
          </span>
          <p className={styles.label}>{label}</p>
        </motion.div>
      ))}
    </section>
  );
}
