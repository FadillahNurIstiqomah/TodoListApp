import React, {useState, useEffect, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Todo } from './components/Todo';

export default class App extends Component {
  updateTodosToShow = String => {
    this.setState({
      itemsToShow: String
    });
  }
  
  render (){
    // let {items} = this.state;

    // if (this.state.itemsToShow === 'all') {
    //   items = this.state.items
    // } else if (this.state.itemsToShow === 'todo'){
    //   items = this.state.items.filter(item => !item.completed)
    // } else if (this.state.itemsToShow === 'done'){
    //   items = this.state.items.filter(item => item.completed)
    // }

    return (
      <section className='section-center'>
        <Todo/>
      </section>
    )
  }
}