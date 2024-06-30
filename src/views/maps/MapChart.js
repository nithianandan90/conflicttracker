import React, { memo, useEffect } from 'react';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from 'react-simple-maps';
import chroma from 'chroma-js';
import mapData from './features.json';

const data = [
  {
    name: 'Australia',
    projects: 1,
  },
  {
    name: 'Egypt',
    projects: 5,
  },
  {
    name: 'United Arab Emirates',
    projects: 10,
  },
  {
    name: 'Sweden',
    projects: 15,
  },
  {
    name: 'Brazil',
    projects: 25,
  },

  {
    name: 'United States',
    projects: 30,
  },
];

function getDarkenedColor(projects) {
  const level = projects / 30;
  const darkenedColor = chroma('#7dd3fc').darken(level);

  // Convert the darkened color to RGB format
  const rgbColor = darkenedColor.hex().toString();

  return rgbColor;
}

const fillColor = (geo) => {
  const country = data.find((d) => d.name === geo.properties.name);

  if (country) {
    return getDarkenedColor(country.projects);
  }

  return '#D6D6DA';
};

const MapChart = ({ setTooltipContent, setStyleProps }) => {
  return (
    <div data-tip="">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 140,
          center: [0, -30],
        }}
      >
        <ZoomableGroup>
          <Geographies geography={mapData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={(hello) => {
                    setStyleProps(hello);
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {
                    // setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: fillColor(geo),
                      outline: 'none',
                    },
                    hover: {
                      fill: '#0EA5E9',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
