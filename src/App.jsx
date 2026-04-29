import React, { useState } from 'react';

function App() {

  // ===============================
  // 状態（データを保存する場所）
  // ===============================

  // ToDoの一覧（配列）
  const [toDoList, setToDoList] = useState([]);

  // 入力欄の文字
  const [input, setInput] = useState('');

  // 今どのToDoを編集中か（番号）
  const [editIndex, setEditIndex] = useState(null);

  // 編集中の文字
  const [editText, setEditText] = useState('');



  // ===============================
  // 追加処理
  // ===============================
  const addToDo = () => {

    // 空だったら止める
    if (input === '') {
      alert('入力してください');
      return;
    }

    // 既存の配列に新しい要素を追加
    setToDoList([...toDoList, input]);

    // 入力欄をリセット
    setInput('');
  };



  // ===============================
  // 削除処理
  // ===============================
  const deleteToDo = (index) => {

    // 指定したindex以外を残す
    const newList = toDoList.filter((_, i) => i !== index);

    setToDoList(newList);
  };



  // ===============================
  // 編集開始
  // ===============================
  const startEdit = (index) => {

    // 今どれを編集しているか記録
    setEditIndex(index);

    // 編集用の入力欄に現在の文字を入れる
    setEditText(toDoList[index]);
  };



  // ===============================
  // 編集保存
  // ===============================
  const saveEdit = (index) => {

    // 空だったら止める
    if (editText === '') {
      alert('入力してください');
      return;
    }

    // 配列をコピー
    const newList = [...toDoList];

    // 該当の場所を書き換え
    newList[index] = editText;

    // 更新
    setToDoList(newList);

    // 編集状態リセット
    setEditIndex(null);
    setEditText('');
  };


  // ===============================
  //  画面（JSX）
  // ===============================
  return (
    <div>

      <h1>ToDo List</h1>

      {/* 入力欄 */}
      <input
        type="text"
        value={input} // inputの中身を表示
        onChange={(e) => setInput(e.target.value)} 
        // 入力されるたびにinputを更新
        placeholder="やることを入力してください"
      />

      {/* 追加ボタン */}
      <button onClick={addToDo}>追加</button>


      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>

            {/* 編集中かどうかで表示を分ける */}
            {editIndex === index ? (

              // 編集中の表示
              <>
                <input
                  type="text"
                  value={editText} // 編集中の文字を表示
                  onChange={(e) => setEditText(e.target.value)}
                  // 入力したらeditText更新
                />

                <button onClick={() => saveEdit(index)}>
                  保存
                </button>
              </>

            ) : (

              // 通常表示
              <>
                {item}

                <button onClick={() => startEdit(index)}>
                  編集
                </button>

                <button onClick={() => deleteToDo(index)}>
                  削除
                </button>
              </>
            )}

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;