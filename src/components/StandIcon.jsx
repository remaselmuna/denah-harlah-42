import { Marker, Popup } from 'react-leaflet'
import createStandIcon from '../utils/createStandIcon'

const StandIcon = () => {
  return (
    <Marker position={[-8.064633, 111.900080]} icon={createStandIcon()}>
      <Popup>
        Panggung Utama
      </Popup>
    </Marker>
  )
}

export default StandIcon