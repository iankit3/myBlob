//import {createStore} from 'redux';

//A react principal :below
  // # If you don't use something in render(), it shouldn't be in the state.

const count = (state = 0,action) => {
    if(action.type == 'ADD') return state + 1;
    else if(action.type == 'SUB') return state - 1;
    else return state; 
} 

const createStore = (reducer) => {
  let state;
  let events = [];

  const subscribe = (ev) => {
     events.push(ev);
     return () => {
         events.filter( e => e !== ev )
     }
  }
  const getState  = () => {
      return state;
  }
  const dispatch  = (action) => {
     state = reducer(state,action);
     events.forEach( ev => ev() )
  }

 return { getState , dispatch , subscribe} 
}

const store = createStore(count);
console.log(store)
store.dispatch({type:'ADD'})

const render = () => {
  //console.log(`Current state is ${store.getState()}`);
  document.getElementById('target').innerText = store.getState();
}

render();
store.subscribe(render);
document.getElementById('btnAdd').addEventListener('click', () => {
    store.dispatch({type:'ADD'})
})
document.getElementById('btnSub').addEventListener('click', () => {
    store.dispatch({type:'SUB'})
})


