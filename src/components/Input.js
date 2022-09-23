import React, {useState, useEffect} from 'react'
import Alert from './Alert';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css'
import dataTasks from '../data.json'
import {FaEdit, FaTrash} from 'react-icons/fa'

export const TodoInput = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIdEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg:"", type: ""});
    const [data] = useState(dataTasks);

    const getLocalStorage = () => {
        let list = localStorage.getItem("list");
        if(list){
          return (list = JSON.parse(localStorage.getItem("list")))
        } else {
          return [];
        }
      }
    const [local] = useState(getLocalStorage());

      useEffect(() => {
        localStorage.setItem("list", JSON.stringify(local));
      }, [local])

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name) {
        showAlert(true, "danger", "Please Enter Value");
      } else if (name && isEditing){
        setList(
          list.map((item) => {
            if(item.id === editID) {
              return {...item, title: name}
            }
            return item
          })
        );
        setName('');
        setEditID(null);
        setIdEditing(false);
      } else {
        const newItem = {id: new Date().getTime().toString(), title: name};
        setList([...list, newItem]);
        setName("")
      }
    };

    const showAlert = (show = false, type="", msg="") => {
      setAlert({show, type, msg});
    };

    const deleteItem = (id) => {
      setList(list.filter((item) => item.id !== id));
    };

    const deleteDoneTask = () => {
      setList(this.state.items.filter(item => item.completed === false))

      this.setList({
        items: setList()
      })
    };

    const editItem = (id) => {
      const editItem = list.find((item) => item.id === id);
      setIdEditing(true);
      setEditID(id);
      setName(editItem.title);
    };
    
    const clearList = () => {
      setList([]);
    };
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
        <div className="card card-body my-3">
            {alert.show && <Alert {... alert} removeAlert={showAlert} list={list}/>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text text-white" style={{height:'2.5rem', backgroundColor:'#13a6ab'}}>
                    <i className="fas fa-book"></i>
                    </div>
                </div>
                <input 
                type='text' 
                className='form-control'
                placeholder='Input/Edit Todo'
                onChange={(e) => setName(e.target.value)}
                value={name}/>
                <button type="submit" className="btn mt-3 text-white" style={{width:'100%', backgroundColor:'#13a6ab'}}>{isEditing ? 'Edit' : 'Submit'}</button>
                </div>
            </form>
            {data &&
                data.map((item) => (
                    <ul className='list-group list-group-flush' key={item.id}>
                        <li className='list-group-item d-flex justify-content-between mt-2'>
                          <h6>{item.task} </h6>
                            <div style={{float: 'right'}}>
                              <input
                                name={item.task}
                                checked={item.complete}
                                type='checkbox'
                                onClick={handleDoneTask}
                              />
                              <button type='button' className='edit-btn list-right' onClick={() => editItem(<TodoInput/>)}>
                                <FaEdit/>
                              </button>
                              <button type='button' className='delete-btn list-right' onClick={() => deleteItem(item.id)}>
                                <FaTrash/>
                              </button>
                            </div>
                        </li>
                    </ul>
                ))}
            {list.length > 0 && (
            <div>
              <List items={list} removeItem={deleteItem} editItem={editItem}/>
              <div className='text-center d-flex justify-content-center gap-3'>
                <button className='btn btn-danger' onClick={deleteDoneTask}>Delete Done Tasks</button>
                <button className='btn btn-danger' onClick={clearList}>Delete All Tasks</button>
              </div>
            </div>
            )}       
        </div> 
    )
  }

  export default TodoInput;