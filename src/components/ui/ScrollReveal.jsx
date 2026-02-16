// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, width = "100%" }) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
