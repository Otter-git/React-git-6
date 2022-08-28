import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../redux/chatReducer/selectors";


function App() {

  const chats = useSelector(getChats);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const doDelete = (id) => {
    dispatch({type: 'delete', payload: id, meta: {
      delay: 3000
    }})
  };

  const doAdd = () => {
    const newChat = {
      id: Math.random(),
      name: name,
    }
    dispatch({type: 'add', payload: newChat})
  };

  const doChange = (event) => {
    setName(event.target.value)
  };

  return (
    <div>
      {
        chats.map((chat) => {
          return(
            <div key={chat.id}>
              {chat.name}
              <button onClick={() => doDelete(chat.id)}>
                Delete this chat
              </button>
            </div>
          )
        })
      }
      <input value={name} onChange={doChange}></input>
      <button onClick={doAdd}>Add chat</button>
    </div>
  );
}

export default App;
