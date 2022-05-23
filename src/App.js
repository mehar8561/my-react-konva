import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect } from "react-konva";

const WIDTH = 50;
const HEIGHT = 50;

const grid = [["blue", "blue"], ["blue", "blue"]];

const App = () => {
  const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 });
  const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * WIDTH;
  const endX =
    Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * WIDTH;

  const startY =
    Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * HEIGHT;
  const endY =
    Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

  const gridComponents = [];
  var i = 0;
  for (var x = startX; x < endX; x += WIDTH) {
    for (var y = startY; y < endY; y += HEIGHT) {
      if (i === 4) {
        i = 0;
      }

      const indexX = Math.abs(x / WIDTH) % grid.length;
      const indexY = Math.abs(y / HEIGHT) % grid[0].length;

      gridComponents.push(
        <Rect
          x={x}
          y={y}
          width={WIDTH}
          height={HEIGHT}
          fill={grid[indexX][indexY]}
          stroke="black"
        />
      );
    }
  }
  return (
    <Stage
      x={stagePos.x}
      y={stagePos.y}
      width={window.innerWidth}
      height={window.innerHeight}
      draggable
      onDragEnd={e => {
        setStagePos(e.currentTarget.position());
      }}
    >
      <Layer>{gridComponents}</Layer>
    </Stage>
  );
};

render(<App />, document.getElementById("root"));

export default App;
