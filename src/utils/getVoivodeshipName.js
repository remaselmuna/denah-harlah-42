function getVoivodeshipName(feature, layer) {
  if (feature.properties && feature.properties.nazwa) {
      layer.bindPopup(feature.properties.nazwa);
  }
}

export default getVoivodeshipName