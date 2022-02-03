import { useState } from 'react';
import items from '../Data';
import Menu from './Menu';
import Button from './Button';



var R=items.reduce((x,y) => x.concat(y.categories) , []);

const allCategories=['All',...new Set(R)]

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.categories.includes(button));
    setMenuItem(filteredData)
  }


  return (
    <div className="App">
       
       <div className="title">
         <h1>
           Portfolio 
           <span> Filter</span>
         </h1>
       </div>


      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

    </div>
  );
}

export default App;