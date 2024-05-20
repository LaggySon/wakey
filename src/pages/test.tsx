import { useState, DragEvent } from 'react';
import styles from '../styles/Rank.module.css';

const Rank: React.FC = () => {
  const [boxes, setBoxes] = useState<(string | null)[]>(Array(5).fill(null));
  const [dragging, setDragging] = useState<boolean>(false);

  const handleDragStart = (e: DragEvent<HTMLImageElement>) => {
    setDragging(true);
    e.dataTransfer.setData('text/plain', 'dragged-image');
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (dragging) {
      const newBoxes = [...boxes];
      newBoxes[index] = 'dragged-image';
      setBoxes(newBoxes);
      setDragging(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/image-to-drag.jpg" // Replace with your image source
          alt="Drag me"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={styles.draggableImage}
        />
      </div>
      <div className={styles.boxContainer}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className={styles.box}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {box && <img src="/image-to-drag.jpg" alt="Ranked" className={styles.rankedImage} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rank;
