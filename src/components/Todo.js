import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({ tarefa, deleteTodo }) {
  return (
    <div className="Todo">
             <p>{tarefa.tarefa}</p>
      <div>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(tarefa.id)} />
      </div>
    </div>
  );
}

export default Todo;