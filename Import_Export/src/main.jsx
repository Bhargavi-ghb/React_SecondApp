import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App,{ Content} from './App.jsx'
import Images from './Components/Images.jsx'
import Videos from './Components/Videos.jsx'
import Audio from './Components/Audio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    < Content />
    <Images />
    <Videos />
    <Audio />
  </StrictMode>,
)
