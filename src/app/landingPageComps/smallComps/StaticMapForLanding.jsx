import React from "react";
import { Map, Marker, NavigationControl, ScaleControl } from "react-map-gl";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import DeckGL from "@deck.gl/react";
import { PolygonLayer } from "@deck.gl/layers";
const StaticMapForLanding = () => {
  // Map

  const INITIAL_VIEW_STATE = {
    latitude: 51.5072,
    longitude: 0.1276,
    zoom: 10,
    pitch: 45,
    bearing: 0,
  };

  const ambientLight = new AmbientLight({
    color: [0, 132, 255],
    intensity: 1.0,
  });

  const pointLight = new PointLight({
    color: [0, 132, 255],
    intensity: 2.0,
    position: [-74.05, 40.7, 8000],
  });

  const lightingEffect = new LightingEffect({ ambientLight, pointLight });

  const material = {
    ambient: 0.1,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [60, 64, 70],
  };

  const theme = {
    buildingColor: [0, 94, 255],
    material,
    effects: [lightingEffect],
  };

  const MAP_STYLE = "mapbox://styles/mapbox/streets-v11";
  return (
    <div className="h-full">
      {/* <DeckGL
        effects={theme.effects}
        viewState={INITIAL_VIEW_STATE}
        controller={true}
      > */}
      <Map
        viewState={INITIAL_VIEW_STATE}
        mapboxAccessToken="pk.eyJ1Ijoic2FuZHktNzciLCJhIjoiY2wwajI3MmNwMDFsbjNlcnY0bjJtdXJtdCJ9.yDqEh7ba7bWcDlSn3Dx87Q"
        mapStyle={MAP_STYLE}
      >
        {/* <NavigationControl /> */}
      </Map>
      {/* </DeckGL> */}
    </div>
  );
};

export default StaticMapForLanding;
