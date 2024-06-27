import { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

const Grid = ({
  isVisualizationRunning,
}: {
  isVisualizationRunning: MutableRefObject<boolean>;
}) => {
  const { grid, setGrid } = usePathfinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  };
  return (
    <div
      className={`flex flex-col items-center justify-center border-sky-300 lg:min-h-[${
        MAX_ROWS * 17
      }px] 
        lg:w-[${MAX_COLS * 17}px] md:min-h-[${MAX_ROWS * 15}px] md:w-[${
        MAX_COLS * 15
      }px] xs:min-h-[${MAX_ROWS * 8}px] 
        xs:w-[${MAX_COLS * 8}px] min-h-[${MAX_ROWS * 7}px] w-[${
        MAX_COLS * 7
      }px]`}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => (
            <Tile
              key={tileIndex}
              row={tile.row}
              col={tile.col}
              isStart={tile.isStart}
              isEnd={tile.isEnd}
              isPath={tile.isPath}
              isTraversed={tile.isTraversed}
              isWall={tile.isWall}
              handleMouseDown={() => handleMouseDown(tile.row, tile.col)}
              handleMouseUp={() => handleMouseUp(tile.row, tile.col)}
              handleMouseEnter={() => handleMouseEnter(tile.row, tile.col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
