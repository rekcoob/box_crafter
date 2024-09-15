import './App.css'
import { DimensionsProvider } from './context/DimensionsContext'
import { ThicknessProvider } from './context/ThicknessContext'
import { BoxStyleProvider } from './context/BoxStyleContext'
import { FormValidProvider } from './context/FormValidContext'
import MaterialButtons from './components/MaterialButtons/MaterialButtons'
import DimensionsInput from './components/DimensionsInput/DimensionsInput'
import BoxStyles from './components/BoxStyles/BoxStyles'
import BoxResults from './components/BoxResults/BoxResults'
import DownloadBtn from './components/DownloadBtn/DownloadBtn'

const BoxCrafter: React.FC = () => {
  return (
    <ThicknessProvider>
      <DimensionsProvider>
        <BoxStyleProvider>
          <FormValidProvider>
            <div className='container'>
              <h2>Box Crafter</h2>
              <p>Converting Box Dimensions into a DXF Design</p>
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
          </FormValidProvider>
        </BoxStyleProvider>
      </DimensionsProvider>
    </ThicknessProvider>
  )
}

export default BoxCrafter
