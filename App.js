import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개 (주체, 사진정보, 결과값)
// 2. 가위바위보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4 결과를 가지고 승패를 따진다.
// 6. 테두리 색 (승-초록, 패-빨강, 비김-검정)


const choice = {
  rock:{name:"Rock", img:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/everything-everywhere-all-at-once-rock.jpg"},
  scissors:{name:"Scissors", img:"https://image.homeplus.kr/td/089320e3-56b8-4947-b659-2976d515ee6e"},
  paper:{name:"Paper", img:"https://m.media-amazon.com/images/I/517T6y3N5HL._AC_UF894,1000_QL80_.jpg"}
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [pcSelect, setPcSelect] = useState(null)
  const [result, setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let pcChoice = randomChoice();
    setPcSelect(pcChoice);
    setResult(judgement(choice[userChoice], pcChoice));
  };

  const judgement = (user, pc) => {

    if(user.name === pc.name) {
      return "tie"
    }else if(user.name === 'Rock')return pc.name==="Scissors"?"win":"lose"
    else if(user.name === "Scissors")return pc.name==="Paper"?"win":"lose"
    else if(user.name === "Paper")return pc.name==="Rock"?"win":"lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만드는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (

    <div>
      <div className='main'>
        <Box title='You' item = {userSelect} result={result}/>
        <Box title='PC' item={pcSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
    //온클릭 쓸 때는 콜백함수 형태로 매개를 전달해야함
  );
}

export default App;
