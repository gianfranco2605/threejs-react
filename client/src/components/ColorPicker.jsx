import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';
// color picker tab
const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#003399', // Dark Blue
          '#0099cc', // Blue
          '#00ccff', // Light Blue
          '#6699ff', // Sky Blue
          '#006666', // Teal
          '#00cccc', // Cyan
          '#336699', // Steel Blue
          '#66cc99', // Sea Green
          '#336666', // Dark Teal
          '#3399cc', // Ocean Blue
          '#9966cc', // Purple
          '#cc99ff', // Lavender
          '#660066', // Dark Purple
          '#993333', // Maroon
          '#cc3333', // Red
          '#ff6600', // Orange
          '#66ccff', // Light Sky Blue
          '#0066cc'  // Royal Blue
        ]}
        onChange={(color) => state.color = color.hex}       
      />
    </div>
  )
}

export default ColorPicker;