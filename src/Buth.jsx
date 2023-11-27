  import React, { useState, useEffect } from 'react';

  const Buth = () => {
    const [up, setUp] = useState(0);
    const [test, settest] = useState(0);
    const [trigger, setTrigger] = useState(false);
    
    const styles = { height: `${up}px` };
    
    useEffect(() => {
      if (trigger === true && test === 1) {
        let timer = setTimeout(updateUp, 80);
        return () => clearTimeout(timer);
      }
  
      function updateUp() {
        if (up <= 99) {
        let NewA = up + 1
        setUp(NewA);
    } 
      }}, [up]);
  
    useEffect(() => {
      if (trigger === false && test === -1) {
        let timer = setTimeout(updateDown, 80);
        return () => clearTimeout(timer);
      }
  
      function updateDown() {
        if ( up > 0) {
        let NewA = up - 1
        setUp(NewA);
      }
    }}, [up]);

  
    const triggerForCounterDown = () => {
      if (up >= 5) {
      setUp(up - 1)
      setTrigger(false);
      settest(-1);
    }}
    
    const triggerForCounterUp = () => {
     if(trigger === true) {
        return false
      }
      if (up <= 99) {
      setUp(up + 1)
      setTrigger(true);
      settest(1);
    }}
  
    return (
      <div className="box">
        <div className='obertka'>
          <button className='up'value={up} disabled={trigger} onClick={triggerForCounterUp}>up</button>
          <button className='down' disabled={!trigger} onClick={triggerForCounterDown}>down</button>
        </div>
            <p className='level'>Уровень воды {up}%</p>
              <div className='vanna'>
                <div style={styles} className='voda'></div>
             </div>
          </div>
    );
  }

    export default Buth;