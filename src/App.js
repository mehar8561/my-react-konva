import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect } from "react-konva";




let WIDTH = 1400;
let HEIGHT = 800;

const grid = [["white", "white"], ["white", "white"]];

console.log(process.env.REACT_APP_X);
const App = () => {

  

  WIDTH=1400/process.env.REACT_APP_X;
  HEIGHT=800/process.env.REACT_APP_Y;

  const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 });
  // const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * WIDTH;
  // const endX =
  //   Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * WIDTH;

  // const startY =
  //   Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * HEIGHT;
  // const endY =
  //   Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

 

  const startX = 0;
  const endX = 1400;

  const startY= 0;
  const endY = 800;

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
