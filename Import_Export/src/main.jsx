import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App,{ Content,title} from './App.jsx'
import Images from './Components/Images.jsx'
import Videos from './Components/Videos.jsx'
import Audio from './Components/Audio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{textAlign:"center"}}>{title}</h1>
    <App />
    < Content />
    <Images />
    <Videos />
    <Audio />
  </StrictMode>,
)
