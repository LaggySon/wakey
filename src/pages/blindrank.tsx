import { ReactNode, useState } from "react";

export default function Ranker() {
  const names = ["one", "two", "three"];
  const firstName = names[Math.floor(Math.random() * names.length)];
  const [currentName, setCurrentName] = useState(firstName);

  type Rank = {
    value:number;
    color:string;
    name:string;
  }

  const [ranks, setRanks] = useState<Rank[]>([
    {
      value: 1,
      color: "bg-red-500",
      name: ""
    },
    {
      value: 2,
      color: "bg-orange-500",
      name: ""
    },
    {
      value: 1,
      color: "bg-yellow-500",
      name: ""
    },
    {
      value: 1,
      color: "bg-green-500",
      name: ""
    },
    {
      value: 1,
      color: "bg-blue-500",
      name: ""
    },
  ]);

  function RankBlock({rank}:{rank:Rank}) {
    const [name, setName] = useState("");
    return (
      <div
        className={`${rank.color} flex aspect-square items-center justify-center`}
      >
        {name}
      </div>
    );
  }

  return (
    <>
      <div className="grid w-full grid-cols-5 gap-5 p-5">
        {ranks.map((rank:Rank)=><RankBlock rank={rank}/>)}
      </div>
      <div className="text-center font-sans text-3xl">{currentName}</div>
    </>
  );
}
