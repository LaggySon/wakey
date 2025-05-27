import { useEffect, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "../styles/index.module.css";

type Ranking = {
  title: string;
  content: string;
  image: string;
};

export const getStaticProps = (async (context) => {
  const initialRankings: Ranking[] = [
    {
      title: "1",
      content: "Merab Dvalishvili",
      image: "https://placehold.co/400x400?text=1",
    },
    {
      title: "2",
      content: "Sean O'Malley",
      image: "https://placehold.co/400x400?text=2",
    },
    {
      title: "3",
      content: "Aljamain Sterling",
      image: "https://placehold.co/400x400?text=3",
    },
    {
      title: "4",
      content: "Cory Sandhagen",
      image: "https://placehold.co/400x400?text=4",
    },
    {
      title: "5",
      content: "Petr Yan",
      image: "https://placehold.co/400x400?text=5",
    },
  ];
  return {
    props: { initialRankings },
  };
}) satisfies GetStaticProps<{
  initialRankings: Ranking[];
}>;

export default function Home({
  initialRankings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [rankings, setRankings] = useState(initialRankings);
  const [nextRank, setNextRank] = useState({});

  useEffect(() => {
    setNextRank(initialRankings[Math.random() * initialRankings.length]);
  });

  return (
    <main className={styles.main}>
      <div className={styles.rankBox}>
        {rankings.map((ranking, index) => (
          <div className={styles.rank} id={styles[index]}>
            <div className={styles.title}>{ranking.title}</div>
            <div className={styles.content}>{ranking.content}</div>
          </div>
        ))}
      </div>
      <div className={styles.nextToRank}>
        <div className={styles.rank} id={styles.next}>
          <div className={styles.title}>{nextRank!.title}</div>
          <div className={styles.content}>{nextRank!.content}</div>
        </div>
      </div>
    </main>
  );
}
