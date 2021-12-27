/* eslint react/jsx-handler-names: "off" */
import React, { useState } from 'react';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { Zoom } from '@vx/zoom';
import { localPoint } from '@vx/event';
import { RectClipPath } from '@vx/clip-path';
import genPhyllotaxis, {
  GenPhyllotaxisFunction,
  PhyllotaxisPoint,
} from '@vx/mock-data/lib/generators/genPhyllotaxis';
import { scaleLinear } from '@vx/scale';

const bg = '#0a0a0a';
const points = [...new Array(1000)];

// var colorScale
var colorScale = scaleLinear<number>({ range: [0, 1], domain: [0, 1000] });
console.log(colorScale)

const sizeScale = scaleLinear<number>({ domain: [0, 600], range: [0.5, 8] });

const initialTransform = {
  scaleX: 1.27,
  scaleY: 1.27,
  translateX: -211.62,
  translateY: 162.59,
  skewX: 0,
  skewY: 0,
};

export type ZoomIProps = {
  width: number;
  height: number;
};

export default function ZoomI({ width, height }: ZoomIProps) {
  const [showMiniMap, setShowMiniMap] = useState<boolean>(true);

  const genenerator: GenPhyllotaxisFunction = genPhyllotaxis({ radius: 10, width, height });
  const phyllotaxis: PhyllotaxisPoint[] = points.map((d, i) => genenerator(i));

  return (
    <>
      <Zoom
        width={width}
        height={height}
        scaleXMin={1 / 2}
        scaleXMax={4}
        scaleYMin={1 / 2}
        scaleYMax={4}
        transformMatrix={initialTransform}
      >
        {zoom => (
          <div className="relative">
          
          <svg
              width={width}
              height={height}
              style={{ cursor: zoom.isDragging ? 'grabbing' : 'grab' }}
            >
              <RectClipPath id="zoom-clip" width={width} height={height} />
              <rect width={width} height={height} rx={14} fill={bg} />
              <g transform={zoom.toString()}>
                {phyllotaxis.map(({ x, y }, i) => (
                  <React.Fragment key={`dot-${i}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r={i > 500 ? sizeScale(1000 - i) : sizeScale(i)}
                    
                      fill={interpolateRainbow(0.2)}
                    />
                  </React.Fragment>
                ))}
              </g>
            </svg>

           
             
            
            <div className="controls">
              <button
                className="btn btn-zoom"
                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
              >
                +
              </button>
              <button
                className="btn btn-zoom btn-bottom"
                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
              >
                -
              </button>
              <button className="btn btn-lg" onClick={zoom.center}>
                Center
              </button>
              <button className="btn btn-lg" onClick={zoom.reset}>
                Reset
              </button>
              <button className="btn btn-lg" onClick={zoom.clear}>
                Clear
              </button>
            </div>
            <div className="mini-map">
              <button className="btn btn-lg" onClick={() => setShowMiniMap(!showMiniMap)}>
                {showMiniMap ? 'Hide' : 'Show'} Mini Map
              </button>
            </div>
          </div>
        )}
      </Zoom>
      <div className="description">
        Based on Mike Bostock's{' '}
        <a href="https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45">Pan & Zoom III</a>
      </div>



      <style >{`
        .btn {
          margin: 0;
          text-align: center;
          border: none;
          background: #2f2f2f;
          color: #888;
          padding: 0 4px;
          border-top: 1px solid #0a0a0a;
        }
        .btn-lg {
          font-size: 12px;
          line-height: 1;
          padding: 4px;
        }
        .body{
          width: 300px,
          height: 300px,
          background-color: 'red'

        },
        .btn-zoom {
          width: 26px;
          font-size: 22px;
        }
        .btn-bottom {
          margin-bottom: 1rem;
        }
        .description {
          font-size: 12px;
          margin-right: 0.25rem;
        }
        .controls {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .mini-map {
          position: absolute;
          bottom: 25px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .relative {
          position: relative;
        }
      `}</style>

    </>
  );
}