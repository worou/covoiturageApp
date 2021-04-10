import React, {FunctionComponent, useState} from 'react';
import Home from './pages/Home';
  
const App: FunctionComponent = () => {
const [age, setAge] = useState<Number>(24);    
 return (
  <>
    <Home/>
  </>
 )
}
  
export default App;