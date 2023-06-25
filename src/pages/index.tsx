import { useRef, useEffect } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Ensure that the canvas is not null
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(10, 10, 50, 50);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3 w-full">
          <h1 className="text-2xl font-bold mx-auto">My Website</h1>
        </header>
        <div className="flex-1 w-full flex">
          <header className="bg-gray-500 text-white flex items-center justify-between px-4 py-3 w-1/2">
            <h2 className="text-lg font-bold mx-auto">Letter</h2>
            <input type="text" className="border border-gray-400" />
          </header>
          <header className="bg-gray-600 text-white flex items-center justify-between px-4 py-3 w-1/2">
            <h2 className="text-lg font-bold mx-auto">Font</h2>
          </header>
        </div>
        <div className="flex justify-center">
          <canvas className="border border-black-400 border-4" ref={canvasRef} width={400} height={400} />
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-3 fixed bottom-0 w-full">
        <p>Salvador Guzman <span className="copyleft">&copy;</span> 2023</p>
      </footer>
    </div>
  );
}