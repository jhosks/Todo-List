import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [valor, setValor] = useState('');

    const enviarSubmit = (e) => {
        e.preventDefault();

        if (valor) {
          addTodo(valor);
          setValor('');
        } else {
            alert('Insira a tarefa antes de adicionar!'); //não pode faltar, né
        };
      };

  return (
    <form onSubmit={enviarSubmit} className="TodoForm">
        <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} className="todo-input" placeholder='Digite a sua tarefa' />
        <button type="submit" className='todo-btn'>Adicionar Tarefa</button>
    </form>
  )
}

export default TodoForm