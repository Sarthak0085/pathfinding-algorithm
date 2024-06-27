import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

const Tile = ({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed: boolean;
        handleMouseDown: (row: number, col: number) => void;
        handleMouseUp: (row: number, col: number) => void;
        handleMouseEnter: (row: number, col: number) => void;
}) => {
  let tileStyle;

  if (isStart) {
    tileStyle = START_TILE_STYLE;
  } else if (isEnd) {
    tileStyle = END_TILE_STYLE;
  } else if (isWall) {
    tileStyle = WALL_TILE_STYLE;
  } else if (isPath) {
    tileStyle = PATH_TILE_STYLE;
  } else if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE;
  } else {
    tileStyle = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={`${tileStyle} ${borderStyle} ${edgeStyle}`}
          id={`${row} - ${col}`}
          onMouseDown={() => handleMouseDown(row, col)}
          onMouseUp={() => handleMouseUp(row, col)}
          onMouseEnter={()=>handleMouseEnter(row, col)}
    />
  );
};

export default Tile;
