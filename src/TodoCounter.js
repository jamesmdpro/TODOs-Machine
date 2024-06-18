import React from 'react'
import './TodoCounter.css'
// const estilos = {
//     backgroundColor: 'red'
// } de esta forma se pueden manejar estilos  y luego se llaman en dode se requieran  <h1 style={estilos}>
// FORMA 2
// style={{
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48px',
// }}>
function TodoCounter({total, completed}) {
    return (
    <h1 className='todo-counter'>
        Has completado {completed} de {total} TO-DOs
    </h1>
    );
  }

export { TodoCounter }
