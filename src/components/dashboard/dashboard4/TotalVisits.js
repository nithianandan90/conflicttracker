import React, { useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import DashCard from '../dashboardCards/DashCard';
import '../../../views/maps/VectorMap.css';
import MapChart from '../../../views/maps/MapChart';
import { worldMill } from '@react-jvectormap/world';
// const mapData = {
//   FR: 540,
//   AU: 360,
//   GB: 690,
//   GE: 200,
//   IN: 400,
//   RO: 600,
//   RU: 300,
//   US: 2920,
// };

const mapData2 = {
  // CN: 100000,
  // IN: 9900,
  // SA: 86,
  // EG: 70,
  // SE: 0,
  // FI: 0,
  // FR: 0,
  // US: 20,
  // BR: 20,
};

const TotalVisits = () => {
  const [content, setContent] = useState('');
  const [styleProps, setStyleProps] = useState('');
  return (
    <DashCard title="Total Visits" subtitle="January 2022">
      <div className="text-center mt-3 mb-3">
        {/* <VectorMap
          map="world_mill"
          backgroundColor="transparent"
          zoomOnScroll={false}
          containerStyle={{
            width: '100%',
            height: '375px',
          }}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: '#d5e4e4',
              'fill-opacity': 0.9,
              stroke: '1',
              'stroke-width': 1,
              'stroke-opacity': 0.5,
            },
          }}
          series={{
            regions: [
              {
                values: mapData,
                scale: ['#1e88e5'],
              },
            ],
          }}
        /> */}
        <VectorMap
          map={worldMill}
          backgroundColor="transparent" //change it to ocean blue: #0077be
          zoomAnimate={true}
          zoomOnScroll={false}
          style={{
            width: '100%',
            height: '480px',
          }}
          onRegionClick={(event, code) => {
            console.log(code);
          }} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: '#e4e4e4',
              'fill-opacity': 0.9,
              stroke: 'none',
              'stroke-width': 0,
              'stroke-opacity': 0,
            },
            hover: {
              'fill-opacity': 0.8,
              cursor: 'pointer',
            },
            selected: {
              fill: '#2938bc', //color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable={true}
          regionsSelectableOne={true}
          series={{
            regions: [
              {
                values: mapData2, //this is your data
                scale: ['#146804', '#ff0000'], //your color game's here
                normalizeFunction: 'polynomial',
              },
            ],
          }}
        />
        {/* <MapChart setTooltipContent={setContent} setStyleProps={setStyleProps} /> */}
      </div>
    </DashCard>
  );
};

export default TotalVisits;
