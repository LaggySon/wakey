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
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3948572.png&w=400&h=400",
    },
    {
      name: "Sean O'Malley",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4205093.png&w=400&h=400",
    },
    {
      name: "Aljamain Sterling",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3031559.png&w=400&h=400",
    },
    {
      name: "Cory Sandhagen",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4294504.png&w=400&h=400",
    },
    {
      name: "Petr Yan",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4293517.png&w=400&h=400",
    },
    {
      name: "Marlon Vera",
      image: "https://static.ufcstats.com/images/marlon-vera.png",
    },
    {
      name: "Dominick Cruz",
      image: "https://static.ufcstats.com/images/dominick-cruz.png",
    },
    {
      name: "Rob Font",
      image: "https://static.ufcstats.com/images/rob-font.png",
    },
    {
      name: "Ricky Simon",
      image: "https://static.ufcstats.com/images/ricky-simon.png",
    },
    {
      name: "Song Yadong",
      image: "https://static.ufcstats.com/images/song-yadong.png",
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
    Array.from({ length: 3 }, (_, index) => ({
      title: index + 1,
      name: "",
      image: "",
    }))
  );
  const [nextRank, setNextRank] = useState<Option>();

  useEffect(() => {
    setNextRank(options[Math.floor(Math.random() * options.length)]);
  });

  function rankOption(index: number, nextRank: Option | undefined): void {
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
        {ranks.map((rank, index) => {
          // Generate a color in HSL space for a smooth gradient
          const hue = Math.round((index / (ranks.length * 2)) * 360);
          const backgroundColor = `hsl(${hue}, 70%, 60%)`;
          return (
            <div key={index} className={styles.rank}>
              <div
                onClick={() => rankOption(index, nextRank)}
                className={styles.title}
                style={{ backgroundColor }}
              >
                {rank.title}
              </div>
              {rank.image && (
                <img className={styles.image} src={rank.image} alt="" />
              )}

              <div className={styles.name}>{rank.name}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.nextToRank}>
        <div className={styles.rank} id={styles.next}>
          {nextRank?.image && (
            <img className={styles.image} src={nextRank.image} alt="" />
          )}
          <div className={styles.name}>{nextRank?.name || "DONE!!"}</div>
        </div>
      </div>
    </main>
  );
}
