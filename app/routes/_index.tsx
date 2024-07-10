import type { MetaFunction } from "@remix-run/node";
import { LampContainer } from "~/components/ui/Lamp";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "IRL Quest" },
    { name: "IRL Quest", content: "Welcome to IRL Quest" },
  ];
};

export default function Index() {
  return (
    <div className="home-container-main font-primary">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent "
        >
          <div className="flex flex-col gap-4 items-center">
            <p className="text-4xl md:text-7xl">IRL Quest</p>
            <div className="flex flex-row items-center gap-2">
              <Link
                to="/play"
                className="text-2xl bg-[#0ca2bc] py-2 px-4 text-[#020617] rounded-xl hover:text-white hover:bg-[#03384c] transition-all duration-300 shadow-xl"
              >
                Create an account
              </Link>
              <Link
                to="/play"
                className="text-2xl bg-[#0ca2bc] py-2 px-4 text-[#020617] rounded-xl hover:text-white hover:bg-[#03384c] transition-all duration-300 shadow-xl"
              >
                Hop back in
              </Link>
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
