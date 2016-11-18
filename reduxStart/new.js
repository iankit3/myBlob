import {createStore} from 'redux';

const arrayReducer = (state =[9,8,7,3],action) => {
    console.log(action);

    switch(action.type){
        case "ADD_ELEM":
          return [...state,parseInt(action.value)];
        case "SUB_ELEM":
          return state.filter( (e) => {
              return e != parseInt(action.value);
          });  
        default:
           return state;  
    }
}

const store = createStore(arrayReducer);

const render = () => {
  //console.log(`Current state is ${store.getState()}`);
  document.getElementById('target').innerText = store.getState();
  console.log(store.getState())
}

document.getElementById('btnAdd').addEventListener('click', () => {
    var add = prompt("Enter the elem to be added from the array ", "12");
    store.dispatch({type:'ADD_ELEM',value:add})
})
document.getElementById('btnSub').addEventListener('click', () => {
    var sub = prompt("Enter the elem to be removed from the array ", "21");
    store.dispatch({type:'SUB_ELEM',value:sub})
})

render();
store.subscribe(render);