import {createStore,combineReducers} from 'redux';
import React    from 'react';
import ReactDOM from  'react-dom'

const todo = (state,action) =>{
    switch (action.type){
        case 'ADD':
            return {name:action.name,id:action.id,completed:false};
        case 'TOGGLE':
           if(action.id != state.id)
            return state;

            return Object.assign({},state,{completed:!state.completed})    
    }
}

const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, todo(undefined, action)];
        case 'TOGGLE':
            return state.map((t) => todo(t, action));
        default:
            return state;    
    }
}

const visibilityFilter = (state='ALL',action) => {
   switch (action.type) {
       case 'SET_VISIBILITY_FILTER':
            return action.filter;
       default:
            return state;     
   }
}

const setVisibilityFilter = (todos=[],filter) => {
    switch(filter){
        case 'ALL':
            return todos;
        case 'COMPLETED':
            return todos.filter( (t) => t.completed );
        case 'ACTIVE':
            return todos.filter( (t) => !t.completed );
         default: 
            return todos;        
    }
}

const Link = ({filter,currentFilterState,children}) => {
    if(currentFilterState === filter){
        return <span>{children}</span>
    }
    return(
        <a href="#" onClick={e=>{
            e.preventDefault();
            store.dispatch({type:'SET_VISIBILITY_FILTER',filter});
        }}>{children}</a>
    )
}

const todosApp = combineReducers({
    todos,
    visibilityFilter
})

var newID = 0;
const store = createStore(todosApp);

class TodoComp extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
     const visibleTodos = setVisibilityFilter(this.props.todos,this.props.visibilityFilter);

       return(<div>
       <input type="text" ref={node => {this.input = node}} />
         <ul>
             {visibleTodos.map( (todo) =>
                 <li 
                   onClick={() => { store.dispatch({type:'TOGGLE',id:todo.id});}} 
                   key={todo.id}
                   style={{textDecoration:todo.completed?'line-through':'none'}}>
                   {todo.name} 
                </li>
             )}
         </ul>
         <button type="button" onClick={ () => {
             store.dispatch({type:'ADD',id:newID++,name:this.input.value});
             this.input.value = '';    
         }} >
             Add</button>
         <button type="button" onClick={ () => store.dispatch({type:'TOGGLE',id:0})}>
             Toggle</button> 

        <p>
         Show: <Link filter='ALL' currentFilterState={this.props.visibilityFilter}>All </Link>
         <Link filter='COMPLETED' currentFilterState={this.props.visibilityFilter}>Completed </Link>
         <Link filter='ACTIVE' currentFilterState={this.props.visibilityFilter}>Active</Link>
        </p>
       </div>)
   }
}

const target = document.getElementById('target');

const render = () => {
    //ReactDOM.render(<TodoComp  { ...store.getState()} />,target);
     //OR
    ReactDOM.render(<TodoComp  todos={store.getState().todos} visibilityFilter={store.getState().visibilityFilter} />,target);
}
render();
store.subscribe(render);