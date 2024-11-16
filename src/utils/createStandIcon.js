import { DivIcon } from "leaflet"
import standIcon from '../assets/stand.svg'

const createStandIcon = () => {
  const svgIcon = `
    <div class="stand-icon">
      <img src="${standIcon}" alt="Stand Icon" width="32" height="32"/>
    </div>
  `
  return new DivIcon({
    html: svgIcon,
    iconSize: [40, 40],
    className: 'stand-icon',
    iconAnchor: [20, 20]
  })
}

export default createStandIcon