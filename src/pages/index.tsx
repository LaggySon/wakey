import { useState } from "react";

export default function Testing() {
  const [items, setItems] = useState([
    "red sox",
    "orioles",
    "rays",
    "blue jays",
    "yankees",
  ]);
  const [userIndex, setUserIndex] = useState<number>();
  const [random, setRandom] = useState();

  function handleClick() {
    setItems(items.filter((item, i) => i !== userIndex));
    setRandom(getRandomElement(items));
  }

  function getRandomElement(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        {items.map((item, i) => (
          <div key={i}>{i + ": " + item}</div>
        ))}
      </div>
      <button onClick={() => handleClick()} className="mx-auto bg-red-700">
        AWOOOGA
      </button>
      <h1>Random number: {random}</h1>
      <input
        className="mx-auto w-32 rounded-lg border-2 border-solid border-slate-900 text-center"
        type="text"
        name="index"
        id="index"
        value={userIndex}
        onChange={(e) => setUserIndex(Number(e.target.value))}
      />
    </div>
  );
}
