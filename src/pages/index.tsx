import { useEffect, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "../styles/index.module.css";

type Ranking = {
  title: string;
  name: string;
  image: string;
};

type Option = {
  name: string;
  image: string;
};

export const getStaticProps = (async (context) => {
  const options: Option[] = [
    {
      name: "Merab Dvalishvili",
      image: "https://placehold.co/400x400?text=1",
    },
    {
      name: "Sean O'Malley",
      image: "https://placehold.co/400x400?text=2",
    },
    {
      name: "Aljamain Sterling",
      image: "https://placehold.co/400x400?text=3",
    },
    {
      name: "Cory Sandhagen",
      image: "https://placehold.co/400x400?text=4",
    },
    {
      name: "Petr Yan",
      image: "https://placehold.co/400x400?text=5",
    },
  ];
  return {
    props: { options },
  };
}) satisfies GetStaticProps<{
  options: Option[];
}>;

export default function Home({
  options,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [ranks, setRanks] = useState(
    options.map((option, index) => ({
      title: index,
      name: "",
      image: "",
    }))
  );
  const [nextRank, setNextRank] = useState<Option>();

  useEffect(() => {
    setNextRank(options[Math.floor(Math.random() * options.length)]);
  });

  function rankOption(index: number, nextRank: Option): void {
    if (!nextRank) return;
    const nextRankIndex = options.findIndex((option) => option == nextRank);
    console.log(nextRankIndex);
    options.splice(nextRankIndex, 1);
    console.log(options);
    ranks[index]!.name = nextRank.name;
    ranks[index]!.image = nextRank.image;
    setNextRank(options[Math.floor(Math.random() * options.length)]);
  }

  return (
    <main className={styles.main}>
      <div className={styles.rankBox}>
        {ranks.map((rank, index) => (
          <div
            className={styles.rank}
            onClick={() => rankOption(index, nextRank)}
          >
            <div className={styles.title}>{rank.title}</div>
            <div className={styles.name}>{rank.name}</div>
            <div className={styles.image}>{rank.image}</div>
          </div>
        ))}
      </div>
      <div className={styles.nextToRank}>
        <div className={styles.rank} id={styles.next}>
          <div className={styles.content}>{nextRank?.name || "DONE!!"}</div>
        </div>
      </div>
    </main>
  );
}
