// 버튼 눌러서 카운터 1씩 늘리고 줄이기 (state 활용)
import {useState} from "react";

function App() {
 const [counter,setcounter] = useState(0);
const PlusButtonHandler = () =>{
    const PlusConst = counter + 1;
    setcounter(PlusConst);
}
  return(
    <div>
      <div>
          {counter}
      </div>
    <div>
        <button onClick={()=>{
            const plusCounter = counter -1;
            setcounter(plusCounter);
        }}>-</button>
        <button onClick={PlusButtonHandler}>+</button>
    </div>
    </div>
  );
}

export default App;
