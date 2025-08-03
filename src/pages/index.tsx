import { useEffect, useRef, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "../styles/index.module.css";
import downloadjs from 'downloadjs';
import html2canvas from "html2canvas";
// import { exportComponentAsPNG } from "react-component-export-image";
/* eslint-disable @typescript-eslint/no-floating-promises */
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
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3948572.png",
    },
    {
      name: "Sean O'Malley",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4205093.png",
    },
    {
      name: "Aljamain Sterling",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3031559.png",
    },
    {
      name: "Cory Sandhagen",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4294504.png",
    },
    {
      name: "Petr Yan",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4293517.png",
    },
    {
      name: "Marlon Vera",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3155424.png",
    },
    {
      name: "Dominick Cruz",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2335888.png",
    },
    {
      name: "Rob Font",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3090451.png",
    },
    {
      name: "Ricky Simon",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3922491.png",
    },
    {
      name: "Song Yadong",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3151289.png",
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
  const numRanks = 5;
  const [ranks, setRanks] = useState(
    Array.from({ length: numRanks }, (_, index) => ({
      title: index + 1,
      name: "",
      image: "",
    }))
  );
  const [nextRank, setNextRank] = useState<Option>();
  const [numRanked, setNumRanked] = useState(0);

  useEffect(() => {
    setNextRank(options[Math.floor(Math.random() * options.length)]);
  });

  function rankOption(index: number, nextRank: Option | undefined): void {
    if (numRanked >= numRanks) return;
    if (!nextRank) return;
    const nextRankIndex = options.findIndex((option) => option == nextRank);
    console.log(nextRankIndex);
    options.splice(nextRankIndex, 1);
    console.log(options);
    ranks[index]!.name = nextRank.name;
    ranks[index]!.image = nextRank.image;
    setNextRank(options[Math.floor(Math.random() * options.length)]);
    setNumRanked(numRanked + 1);
  }

  const rankBoxRef = useRef<HTMLDivElement>(null);
  return (
    <main className={styles.main}>
        <div className={styles.rankBox} ref={rankBoxRef}>
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
                <div className={styles.details}>
                  {rank.image && (
                    <img className={styles.image} src={rank.image} alt="" />
                  )}
                  <div className={styles.name}>{rank.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      <div className={styles.nextToRank}>
        {numRanked < numRanks ? (
          <div className={styles.rank} id={styles.next}>
            {nextRank?.image && (
              <div className={styles.imageContainer}>
                <img className={styles.image} src={nextRank.image} alt="" />
              </div>
            )}
            <div className={styles.name}>{nextRank?.name ?? "DONE!!"}</div>
          </div>
        ) : (
          <div className={styles.doneSteps}>
            <h1>DONE!</h1>
            <button
              onClick={() => {
                void (async () => {
                  const rankBoxElement = document.querySelector<HTMLElement>('.'+styles.rankBox)
                  if (!rankBoxElement) return;

                  const copiedRankBoxElement = rankBoxElement.cloneNode(true) as HTMLElement
                  copiedRankBoxElement.style.width = 'fit-content'

                  document.body.append(copiedRankBoxElement)
                  const canvas = await html2canvas(copiedRankBoxElement ?? document.body,
                {
                  useCORS: true
                })
                  copiedRankBoxElement.remove()
                  const dataURL = canvas.toDataURL('image/png');
                  downloadjs(dataURL,'rankings.png','image/png')
                })().catch(console.error);
              }}
            >
              Export as image!
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
