import bg from '/background/home-background.png'
import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Text/Welcome'

function App() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center relative bg-cover" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg})`}}>
        <Navigation />
        <Welcome />
      </main>
    </>
  )
}

export default App