import Head from "next/head";
import Link from "next/link";
import { DropZone, Text } from "react-aria-components";
import { useDrag } from "react-aria";
import { useState } from "react";

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [
        {
          "text/plain": "hello world",
          "my-app-custom-type": JSON.stringify({ message: "hello world" }),
        },
      ];
    },
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? "dragging" : ""}`}
    >
      Drag me
    </div>
  );
}

export default function Example() {
  let [dropped, setDropped] = useState(null);

  return (
    <>
      <div className="h-52 w-52 bg-red-500">
        <Draggable />
      </div>
      <DropZone
        onDrop={async (e) => {
          let items = await Promise.all(
            e.items
              .filter(
                (item) => item.kind === "text" && item.types.has("text/plain"),
              )
              .map((item) => item.getText("text/plain")),
          );
          setDropped(items.join("\n"));
        }}
      >
        <Text slot="label">{dropped || "Drop here"}</Text>
      </DropZone>
    </>
  );
}
