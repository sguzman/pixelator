import { useRef, useEffect, useState } from "react";

export default function Home() {
  const [letter, setLetter] = useState("A");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  // Ensure that the canvas is not null
  const [gridSize, setGridSize] = useState(50);

  const canvasHeight = 500;
  const canvasWidth = 500;

  function drawGrid(ctx: CanvasRenderingContext2D) {
    // Given gridSize, divide canvas into gridSize equal parts
    const cellWidth = canvasWidth / gridSize;
    const cellHeight = canvasHeight / gridSize;

    // Draw horizontal lines first
    for (let i = 0; i < gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * cellHeight);
      ctx.lineTo(canvasWidth, i * cellHeight);
      ctx.stroke();
    }

    // Draw vertical lines
    for (let i = 0; i < gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellWidth, 0);
      ctx.lineTo(i * cellWidth, canvasHeight);
      ctx.stroke();
    }
  }

  function drawLetter(ctx: CanvasRenderingContext2D) {
    ctx.font = "bold 500px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(letter, canvasWidth / 2, canvasHeight / 2);
  }

  const drawSequence = [
    drawGrid,
    drawLetter
  ]

  // Set Gridsize on input change
  const onGrid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGridSize(parseInt(e.target.value));
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawSequence.forEach((draw) => draw(ctx));
  };

  // Set letter on input change
  const onLetter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLetter(e.target.value);
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawSequence.forEach((draw) => draw(ctx));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3 w-full">
          <h1 className="text-4xl font-bold mx-auto">My Website</h1>
        </header>
        <div className="flex-1 w-full flex">
          <header className="bg-gray-500 text-white flex items-center justify-between px-4 py-3 w-1/2">
            <h2 className="text-2xl font-bold mx-auto">Letter</h2>
            <input type="text" className="border border-gray-400" placeholder={letter} onInput={onLetter} maxLength={1} />
          </header>
          <header className="bg-gray-500 text-white flex items-center justify-between px-4 py-3 w-1/2">
            <h2 className="text-2xl font-bold mx-auto">Grid Size: {gridSize}</h2>
            <input type="range" className="border border-white-400" min="1" max="100" onInput={onGrid} placeholder={gridSize.toString()} />
          </header>
          <header className="bg-gray-600 text-white flex items-center justify-between px-4 py-3 w-1/2">
            <h2 className="text-2xl font-bold mx-auto">Font</h2>
          </header>
        </div>
        <div className="flex justify-center">
        <canvas className="border border-black-400 border-4" ref={canvasRef} width={canvasWidth} height={canvasHeight} />
        </div>
      </main>
      <footer className="text-lg bg-gray-800 text-white text-center py-3 fixed bottom-0 w-full">
        <p>Salvador Guzman <span className="copyleft">&copy;</span> 2023</p>
      </footer>
    </div>
  );
}