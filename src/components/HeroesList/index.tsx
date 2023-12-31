"use client";

import Link from "next/link";

import HeroPicture from "../HeroPicture";

import styles from "./heroesList.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import { motion } from "framer-motion";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <motion.h1 className={`${spidermanFont.className} ${styles.title}`} 
      initial = {{opacity: 0, y: -100}}
      animate = {{opacity: 1, y: 0}}
      transition= {{duration: 3, delay: 0.8}}>
        Characters
      </motion.h1>
      <motion.section className={styles.heroes}
        initial = {{opacity: 0, y: 100}}
        animate = {{opacity: 1, y: 0}}
        transition= {{duration: 3}}
      >
        {heroes.map((hero) => (
          <motion.div
            key={hero.id}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
          >
            <Link href={`/hero/${hero.id}`}>
              <HeroPicture hero={hero} />
            </Link>
          </motion.div> 
        ))}
      </motion.section>
    </>
  );
}
