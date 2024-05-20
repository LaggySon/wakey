import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { Draggable } from "~/components/Draggable";
import Droppable from "~/components/Droppable";

export default function Dnd() {
  const [items, setItems] = useState([
    {
      name: "Shohei Ohtani",
      team: "Los Angeles Angels",
      position: "Pitcher/Designated Hitter",
    },
    {
      name: "Aaron Judge",
      team: "New York Yankees",
      position: "Outfielder",
    },
    {
      name: "Mookie Betts",
      team: "Los Angeles Dodgers",
      position: "Outfielder",
    },
    {
      name: "Ronald Acuña Jr.",
      team: "Atlanta Braves",
      position: "Outfielder",
    },
    {
      name: "Fernando Tatis Jr.",
      team: "San Diego Padres",
      position: "Shortstop/Outfielder",
    },
    {
      name: "Juan Soto",
      team: "San Diego Padres",
      position: "Outfielder",
    },
    {
      name: "Vladimir Guerrero Jr.",
      team: "Toronto Blue Jays",
      position: "First Baseman",
    },
    {
      name: "Jacob deGrom",
      team: "Texas Rangers",
      position: "Pitcher",
    },
    {
      name: "Mike Trout",
      team: "Los Angeles Angels",
      position: "Outfielder",
    },
    {
      name: "Trea Turner",
      team: "Philadelphia Phillies",
      position: "Shortstop",
    },
  ]);
  return (
    <DndContext>
      <div className="flex flex-col">
        {items.map((player) => (
          <Draggable>
            <div className="flex h-32 w-32 bg-slate-400 justify-center items-center">{player.name}</div>
          </Draggable>
        ))}
      </div>

      <Droppable>Drop</Droppable>
    </DndContext>
  );
}
