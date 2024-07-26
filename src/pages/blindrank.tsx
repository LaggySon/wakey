import { ReactNode, useEffect, useState } from "react";

export default function Ranker() {
  const [names,setNames] = useState(["one", "two", "three"]);
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

  function updateName(index:number) {
    if(names.length > 1){
      setNames(names.filter((item, i) => i !== index));
    } else {
      setNames([])
    }
    const newRanks = ranks;
    newRanks[index]!.name = currentName;
    setRanks(newRanks);
    setCurrentName(getRandomElement(names.filter((item, i) => i !== index)));
  }

  function getRandomElement(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function RankBlock({ rank, index }: { rank: Rank; index: number }) {
    return (
      <div
        className={`${rank.color} flex aspect-square items-center justify-center`}
        onClick={() => {
          updateName(index);
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
      <div className="flex justify-center">
        [
        {names.map((name)=>
        <div className="mx-2">{name}</div>
        )}
        ]
      </div>
    </>
  );
}
