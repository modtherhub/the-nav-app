
import Navbar from './components/Navbar'
import bannar from './assets/bannar.svg'


function App() {


  return (
  <div className="relative w-full h-screen overflow-hidden">
  {/* Background Image (flipped vertically & pinned to bottom) */}
  <div
    className="absolute bottom-0 left-0 w-full h-full bg-cover bg-no-repeat scale-y-[-1] z-0"
    style={{ backgroundImage: `url(${bannar})` }}
  ></div>

  {/* Foreground content */}
  <div className="relative z-10">
    <Navbar />
  </div>
</div>

     
  )
}

export default App
