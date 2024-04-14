import React from 'react';

import Task3 from './Task3';

const App = () => {
  return (
    <div style={{height:"400px",width :"50%", textAlign:"center", backgroundColor:"darkred", marginLeft:"25%", fontSize:"50px", borderRadius:"200px", boxShadow:"20px,20px,10px,10px" }}>
      <h1>Emojis Task </h1>
      <Task3  var1={false} var2={true} var3={true} /> 
    </div>  
  );
};

export default App; 
