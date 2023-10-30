import {Board} from "./components/Board/Board"
import {Header} from "./components/Header/Header"
import React, { useEffect, useState } from 'react';



function App() {
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');
  useEffect(() => {
  }, [grouping,ordering])
  
  return (
   <>
   <Header grouping={grouping} setGrouping={setGrouping} ordering={ordering}setOrdering={setOrdering}/>
   <Board grouping={grouping} ordering={ordering}/>
   </>
  );
}

export default App;
