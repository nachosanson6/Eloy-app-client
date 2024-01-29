import './App.css'
import Claim from './components/Claim/Claim'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Navigation />
      <Claim />
      <div className='pt-5 '>
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
