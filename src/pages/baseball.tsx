import { ReactNode, useEffect, useState } from "react";

export default function Ranker() {
  const [names, setNames] = useState(["one", "two", "three","four","five"]);
  const [currentName, setCurrentName] = useState<string>("");

  useEffect(() => {
    const firstName = names[Math.floor(Math.random() * names.length)];
    setCurrentName(String(firstName));
  }, []);

  type Rank = {
    value: string;
    name: string;
  };

  const [ranks, setRanks] = useState<Rank[]>([
    { value: "SP1", name: "" }, // Starter 1
    { value: "SP2", name: "" }, // Starter 2
    { value: "SP3", name: "" }, // Starter 3
    { value: "SP4", name: "" }, // Starter 4
    { value: "SP5", name: "" }, // Starter 5
    { value: "RP1", name: "" }, // Reliever 1
    { value: "RP2", name: "" }, // Reliever 2
    { value: "RP3", name: "" }, // Reliever 3
    { value: "RP4", name: "" }, // Reliever 4
    { value: "RP5", name: "" }, // Reliever 5
    { value: "RP6", name: "" }, // Reliever 6
    { value: "RP7", name: "" }, // Reliever 7
    { value: "CL", name: "" },  // Closer
    { value: "C", name: "" },    // Catcher
    { value: "1B", name: "" },   // First Base
    { value: "2B", name: "" },   // Second Base
    { value: "3B", name: "" },   // Third Base
    { value: "SS", name: "" },   // Shortstop
    { value: "LF", name: "" },   // Left Field
    { value: "CF", name: "" },   // Center Field
    { value: "RF", name: "" },   // Right Field
    { value: "DH", name: "" },   // Designated Hitter
  ]);

  function updateName(index: number) {
    const newNames = names.filter((item, i) => item !== currentName)
    const newRanks = ranks;
    newRanks[index]!.name = currentName;
    setRanks(newRanks);
    if (names.length > 1) {
      setNames(newNames);
    } else {
      setNames([]);
    }
    setCurrentName(getRandomElement(newNames));
  }

  function getRandomElement(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function RankBlock({ rank, index }: { rank: Rank; index: number }) {
    return (
      <div
        className={`${rank.color} flex`}
        onClick={() => {
          updateName(index);
        }}
      >
        {rank.value}: {rank.name}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col p-5">
        {ranks.map((rank: Rank, i: number) => (
          <RankBlock rank={rank} index={i} key={i} />
        ))}
      </div>
      <div className="text-center font-sans text-3xl">{currentName}</div>
      {/* <div className="flex justify-center">
        [
        {names.map((name) => (
          <div className="mx-2">{name}</div>
        ))}
        ]
      </div> */}
    </>
  );
}
