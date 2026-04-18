import React, { useState } from 'react';

function App() {
  // ToDoList変数
  const [toDoList, setToDoList] = useState([]);
  //　input変数
  const [input, setInput] = useState('');
    
  //　入力をToDoListに追加する関数
  const addToDo = () => {
    if(input === ""){
      alert("入力してください");
      return;
    }

    // 入力をToDoListに追加
    setToDoList([...toDoList, input]);
    // 入力欄をリセット
    setInput("");
  }

  //　削除する関数
  const deleteToDo = (index) => {
    const newList = toDoList.filter((_, i) => i !== index);
    setToDoList(newList);  
  };

  //　入力値を管理して返還する関数
  return(
   
   <div>
      <h1>ToDo List</h1>
      <input 
      type="text"
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder='やることを入力してください'
        />
      <button onClick={addToDo}>追加</button>

      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>{item}
            <button onClick={() => deleteToDo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  
  );


}
export default App;

