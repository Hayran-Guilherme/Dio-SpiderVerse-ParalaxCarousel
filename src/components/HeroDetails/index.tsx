import Image from "next/image";
import { Quicksand } from "next/font/google";

import styles from "./heroDetails.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: IHeroData;
}

export default function HeroDetails({ data }: IProps) {
  const { id, name, universe, details } = data;

  return (
    <div className={quicksand.className}>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        {name} (Universe-{universe})
      </h1>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informations</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Complete name</td>
              <td>{details.fullName}</td>
            </tr>
            <tr>
              <td className={styles.label}>Birthday</td>
              <td>{new Date(details.birthday).toLocaleDateString("pt-BR")}</td>
            </tr>
            <tr>
              <td className={styles.label}>Homeland</td>
              <td>{details.homeland}</td>
            </tr>
            <tr>
              <td className={styles.label}>Height</td>
              <td>{details.height.toFixed(2)}m</td>
            </tr>
            <tr>
              <td className={styles.label}>Wheight</td>
              <td>{details.weight.toFixed(2)}kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>First Apparition</h2>
        <Image
          src={`/spiders/${id}-comic-book.png`}
          alt={`Primeira aparição nos quadrinhos de ${name} no universo ${universe}`}
          width={80}
          height={122}
        />
      </div>
    </div>
  );
}
