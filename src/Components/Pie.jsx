import React, { useContext } from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { appContext } from '../Context/appContext.js';


const Doughnut = ({ id, data, legendVisiblity }) => {
  const {darkthem} = useContext(appContext)
   return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: darkthem? "rgba(0, 0, 0,0)":'#fff',textStyle: {color: darkthem? "#fff":'#141B41'}}}
      background={ darkthem? "rgba(0, 0, 0,0)":'#fff'}
      tooltip={{ enable: true }}
      height="240px"
      width="240px"
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Average Vists"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
          palettes={["#141B41", "#3F8EFC","#E08E45","rgb(147, 197, 253)"]}

        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;