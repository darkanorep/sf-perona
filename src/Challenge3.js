import React, {useState} from 'react'

function Challenge3() {
    let id = Math.random();
    let [list, setList] = useState([]);
    let [input, setInput] = useState('');
  
    let addTodo = (todo) => {
      let newTodo = {
        id: id,
        todo: todo,
      };
  
      setList([...list, newTodo]);  
      setInput(todo);
    };

  return (
    <div>
        <h1>3. Add to a list</h1>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add</button>
        <ul>
        {list.map((todo) => (
            <ol key={todo.id}>
                {todo.todo}
            </ol>
        ))}
        </ul>
    </div>
  )
}

export default Challenge3