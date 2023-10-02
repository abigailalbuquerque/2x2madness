import React from 'react';
import './App.css';
import Model from './model/Model.js'
import redrawCanvas from './boundary/Boundary.js';
import processClick from './controller/Controller.js';
import reset from './controller/ResetController.js';
import chooseConfig from './controller/ChooseConfigController';
import rotate from './controller/RotateController';

function App() {
  const [model, setModel] = React.useState(new Model())
  const [redraw, forceRedraw] = React.useState(0);

  const appRef = React.useRef(null);      // to be able to access "top level" app object
  const canvasRef = React.useRef(null);   // need to be able to refer to Canvas

  // identify WHAT STATE you monitor
  React.useEffect (() => {
    redrawCanvas(model, canvasRef.current, appRef.current)
  }, [model, redraw])

  const handleClick = (e) => {
    const canvasRect = canvasRef.current.getBoundingClientRect();

    // normalizing RAW point into localized canvas coordinates.
    let x = e.clientX - canvasRect.left
    let y = e.clientY - canvasRect.top

    processClick(model, canvasRef.current, x, y);
    forceRedraw(redraw+1)
  }

  const configHandler = (config) => {
    chooseConfig(model, config);
    forceRedraw(redraw+1) // react to changes, if model has changed.
  }

  const resetHandler = (model) => {
    reset(model);
    forceRedraw(redraw+1) // react to changes, if model has changed.
  }

  const turnHandler = (model, direction) => {
    rotate(model, direction);
    forceRedraw(redraw+1) // react to changes, if model has changed.
  }


  return (
      
    <div className="App">
     2X2 Madness 
     <canvas tabIndex="1"  
        className="App-canvas"
        ref={canvasRef}
        width="600"
        height="600"
        onClick={handleClick}
      />
       <button className="reset_button" onClick={(e) => resetHandler(model)} >Reset</button>
       <label className='choose_config'>Choose your Configuration:</label>
       <button className="fourconfig" onClick={(e) => configHandler(4)} >4x4</button>
       <button className="fiveconfig" onClick={(e) => configHandler(5)} >5x5</button>
       <button className="sixconfig" onClick={(e) => configHandler(6)} >6x6</button>
       <label className='turn_buttons'>Turn your 2x2's:</label>
       <button className="clockwise_button" onClick={(e) => turnHandler(model, 'clockwise')} >Clockwise</button>
       <button className="counter_clockwise_button" onClick={(e) => turnHandler(model, 'counterclockwise')} >Counter Clockwise</button>
       <label className="moves">{"Moves: " + model.moveCount}</label>
    </div>
  );
}

export default App;
