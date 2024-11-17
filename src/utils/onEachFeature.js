import getVoivodeshipName from "./getVoivodeshipName";

function onEachFeature(feature, layer) {
    const colors = {
        fillColor: feature.properties.color,
        color: feature.properties.color,
    };

    layer.setStyle(colors);

    layer.on("mouseover", function (e) {
        getVoivodeshipName(feature, layer);

        this.openPopup();
        if (window.screen.width < 576) {
            const location = e.latlng;
            layer._map.flyToBounds([location])
        }

        // style
        this.setStyle({
            fillColor: "#eb4034",
            color: "#ff0000",
            weight: 2,
            fillOpacity: 0.7,
        });
    });
    layer.on("mouseout", function () {
        this.closePopup();
        // style
        this.setStyle({
            ...colors,
            weight: 2,
            fillOpacity: 0.2,
        });
    });
}

export default onEachFeature