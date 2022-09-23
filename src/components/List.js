import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

export const List = ({items, removeItem, editItem}) => {
  
  const handleDoneTask = (id, completed) =>{
    const filteredItems = this.state.item.map(item => {
      item.id === id && (item.completed = !item.completed)
      return item
    })

    this.setState({
      items: filteredItems,
    })
  }
  return (
    <div>
        {items.map((item, completed) => {
            const {id, title} = item;
            return (
              <ul className='list-group list-group-flush' key={id}>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <h6>
                    {title}
                  </h6>
                  <div style={{float: 'right'}}>
                    <input
                      onClick={handleDoneTask}
                      type='checkbox'
                    />
                    <button type='button' className='edit-btn list-right' onClick={() => editItem(item.id)}>
                      <FaEdit/>
                    </button>
                    <button type='button' className='delete-btn list-right' onClick={() => removeItem(item.id)}>
                      <FaTrash/>
                    </button>
                  </div>
                </li>
              </ul>
            )
        })}
    </div>
  )
}

export default List;
