import React, {useState, useEffect} from 'react'
import Alert from './components/Alert';
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import list from './data.json'

const App = () => {
  return (
    <section className='section-center'>
      <TodoInput/>
    </section>
  )
}

export const TodoInput = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIdEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:"", type: ""});
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
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
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
          {list.length > 0 && (
          <div style={{marginTop: '2rem'}}>
            <List items={list} removeItem={removeItem} editItem={editItem}/>
            <div className='text-center d-flex justify-content-center gap-3'>
              <button className='btn btn-danger' onClick={clearList}>Delete Done Tasks</button>
              <button className='btn btn-danger' onClick={clearList}>Delete All Tasks</button>
            </div>
          </div>
        )}
        </form>       
    </div> 
  )
}
export default App;
