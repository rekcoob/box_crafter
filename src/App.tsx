import './App.css'
import ContextProvider from './context/ContextProvider' // Import the combined ContextProvider
import MaterialButtons from './components/MaterialButtons/MaterialButtons'
import DimensionsInput from './components/DimensionsInput/DimensionsInput'
import BoxStyles from './components/BoxStyles/BoxStyles'
import BoxResults from './components/BoxResults/BoxResults'
import DownloadBtn from './components/DownloadBtn/DownloadBtn'
import NavBar from './components/NavBar/NavBar'
import './i18n' // pridaj tento riadok

const BoxCrafter: React.FC = () => {
  return (
    <ContextProvider>
      <div className='container'>
        <NavBar />
        <div className='flex center selfcenter'>
          <div className='flex-col'>
            <MaterialButtons />
            <DimensionsInput />
          </div>
          <BoxStyles />
        </div>
        <DownloadBtn />
        <BoxResults />
      </div>
    </ContextProvider>
  )
}

export default BoxCrafter
