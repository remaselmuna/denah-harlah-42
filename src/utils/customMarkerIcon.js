import L from 'leaflet'
import { soundSvg } from '../svg'

export const soundsPoints = [
    {
        lat: -8.0654300,
        lng: 111.9007315,
        title: "NR Audio",
    },
    {
        lat: -8.065025,
        lng: 111.901194,
        title: "Kamila Audio",
    },
    {
        lat: -8.064090,
        lng: 111.900341,
        title: "BM Audio",
    },
    {
        lat: -8.064849,
        lng: 111.899567,
        title: "Alaina Audio (Parkiran Masjid)",
    },
    {
        lat: -8.064027,
        lng: 111.901132,
        title: "Mina Jaya Audio",
    },
    {
        lat: -8.066128,
        lng: 111.901003,
        title: "Pasti Jaya Audio",
    },
    {
        lat: -8.066437,
        lng: 111.900880,
        title: "AM Pro Audio",
    },
    {
        lat: -8.065008,
        lng: 111.898513,
        title: "AMA Audio",
    },
];

function customMarkerIcon() {
    const svgTemplate = soundSvg;

    return new L.DivIcon({
        className: "test",
        html: svgTemplate,
        iconSize: [40, 40],
        iconAnchor: [12, 24],
        popupAnchor: [7, -16],
    });
}

export default customMarkerIcon