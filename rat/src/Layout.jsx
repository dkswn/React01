import "./App.css";
import {useState} from "react";

function App(){
   const [id, setid] = useState("");
   const [pwd, setpwd] = useState("");
   console.log(id);
   console.log(pwd);
    const onIdChangeHandler = (event) => {
         setid(event.target.value);
    }
    const onPwdChangeHandler = (event) => {
           setpwd(event.target.value);
    }
    return (
        <div>
        <div>
            아이디 : <input type="text" value = {id} onChange={onIdChangeHandler}/>
        </div>
            <div>
                비밀번호: <input type="password" value={pwd} onChange={onPwdChangeHandler}/>
            </div>
      <div>
            <button onClick={() => {
                alert(`고객님이 입려하신 아이디는 ${id}입력아이디이며 비밀번호는 ${pwd}입니다.`);
                //초기화
                 setid('');
                 setpwd('');
            }}
            >로그인</button>
          </div>
        </div>
    );
}
export default App;
// hook