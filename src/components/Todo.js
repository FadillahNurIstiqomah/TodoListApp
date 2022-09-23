import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css"
import { TodoInput } from './Input'

export const Todo = (updateTodosToShow) => {
    return (
        <Fragment>
            <div className='card card-body'>
                <h4 className='text-capitalize text-center '><strong>TodoSearch</strong></h4>
                <div className='row'>
                    <div className='col-md-8'>
                        <form>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn text-white mt-2" type="submit" style={{width:'100%', backgroundColor:'#13a6ab'}}>Search</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                            <button 
                                className="btn text-white" 
                                style={{width: '70%', backgroundColor:'#13a6ab'}} 
                                type="button"
                                onClick="TodoInput(this)">Add New Task
                            </button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h4 className='text-capitalize text-center'><strong>TodoList</strong></h4>
                <div className='d-flex' style={{justifyContent:'space-between'}}>
                    <button 
                        className="btn text-white" 
                        type="button" 
                        onClick={() => updateTodosToShow('all')} 
                        style={{width: '30%', backgroundColor:'#13a6ab'}}
                    >
                        All
                    </button>
                    <button 
                        className="btn text-white" 
                        type="button" 
                        onClick={() => updateTodosToShow('done')} 
                        style={{width: '30%', backgroundColor:'#13a6ab'}}
                    >
                        Done
                    </button>
                    <button 
                        className="btn text-white" 
                        type="button" 
                        onClick={() => updateTodosToShow('todo')} 
                        style={{width: '30%', backgroundColor:'#13a6ab'}}
                    >
                        Todo
                    </button>
                </div>
                <TodoInput/>
            </div>
        </Fragment>
    )
}
