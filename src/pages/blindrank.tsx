import { ReactNode, useEffect, useState } from "react";

export default function Ranker() {
  let names = ["one", "two", "three"];
  const [currentName, setCurrentName] = useState<string>("");

  useEffect(() => {
    const firstName = names[Math.floor(Math.random() * names.length)];
    setCurrentName(String(firstName));
  }, []);

  type Rank = {
    value: number;
    color: string;
    name: string;
  };

  const [ranks, setRanks] = useState<Rank[]>([
    {
      value: 1,
      color: "bg-red-500",
      name: "",
    },
    {
      value: 2,
      color: "bg-orange-500",
      name: "",
    },
    {
      value: 1,
      color: "bg-yellow-500",
      name: "",
    },
    {
      value: 1,
      color: "bg-green-500",
      name: "",
    },
    {
      value: 1,
      color: "bg-blue-500",
      name: "",
    },
  ]);

  function updateName(index: number, newName: string) {
    names = names.filter((name, i) => name !== currentName);
    setRanks((prevRanks) =>
      prevRanks.map((prevRank, i) => {
        console.log(names);
        setCurrentName(String(names[Math.floor(Math.random() * names.length)]));
        return i === index ? { ...prevRank, name: newName } : prevRank;
      }),
    );
  }

  function RankBlock({ rank, index }: { rank: Rank; index: number }) {
    const [name, setName] = useState("");
    return (
      <div
        className={`${rank.color} flex aspect-square items-center justify-center`}
        onClick={() => {
          updateName(index, String(currentName));
        }}
      >
        {rank.name}
      </div>
    );
  }

  return (
    <>
      <div className="grid w-full grid-cols-5 gap-5 p-5">
        {ranks.map((rank: Rank, i: number) => (
          <RankBlock rank={rank} index={i} key={i} />
        ))}
      </div>
      <div className="text-center font-sans text-3xl">{currentName}</div>
    </>
  );
}
