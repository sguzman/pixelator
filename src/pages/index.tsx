export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
      <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>
      <p>Hello</p>
    </main>
  )
}
