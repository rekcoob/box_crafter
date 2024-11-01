import './App.css'
import ContextProvider from './context/ContextProvider'
import MaterialButtons from './components/MaterialButtons/MaterialButtons'
import DimensionsInput from './components/DimensionsInput/DimensionsInput'
import BoxStyles from './components/BoxStyles/BoxStyles'
import BoxResults from './components/BoxResults/BoxResults'
import DownloadBtn from './components/DownloadBtn/DownloadBtn'
import NavBar from './components/NavBar/NavBar'
import './services/i18n'

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
