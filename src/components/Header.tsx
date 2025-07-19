import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-[#101014]/90 backdrop-blur-md shadow-lg">
      <div className="container flex h-20 items-center justify-between px-6">
        <h1 
          className="text-2xl font-extrabold tracking-wider text-white drop-shadow-lg cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={() => navigate('/')}
        >
          JSON Schema Builder
        </h1>
        <Button
          className="rounded-lg bg-transparent border-2 border-cyan-400/80 text-white font-semibold ring-2 ring-cyan-400/80 animate-pulse hover:bg-cyan-400/10 hover:text-white focus:ring-4 focus:ring-cyan-400 transition-all px-6 py-2"
          onClick={() => navigate('/aboutme')}
        >
          About Me
        </Button>
      </div>
    </header>
  )
} 