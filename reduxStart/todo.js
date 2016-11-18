import {createStore}  from 'redux';

const st = {
    id:0,
    name:'candy',
    cat:'edible',
    quan:3
};

const todoReducer = (state = [],action) => {
  //console.log(state,action);

   switch(action.type){
       case 'ADD_PRODUCT':
          return  [...state,Object.assign({},st,
                    {name:action.name,quan:action.quan,id:action.id})];
        case 'ADD_ITEM':
          return state.map(e => {
              if(e.id != action.id) return e;
              return Object.assign({},e,{quan:e.quan + action.quan})
          })
        case 'REM_ITEM':
          return state.map( (e) => {
               if(e.id != action.id) return e;
               return Object.assign({},e,{quan:e.quan - action.quan})
           } )   
   }
} 

const store = createStore(todoReducer);
const target = document.getElementById('target');
const render = () => {
    let s = store.getState() ? store.getState() : [];
    console.log(s);
    target.innerHTML = JSON.stringify(s);
//  target.innerHTML = `Product:${s.name} , Quantity:${s.quan} <br>
//                      Category:${s.cat} , Product Number:${s.id}<br><hr><br>`
 console.log(target.innerHTML)
}


document.getElementById('add').addEventListener('click', () => {
    const _id = prompt("Enter the id of elem", "0");
    store.dispatch({type:'ADD_PRODUCT',quan:1,name:'new',id:_id});
})

document.getElementById('btnAdd').addEventListener('click', () => {
    const _id = prompt("Enter the id of elem", "0");
    store.dispatch({type:'ADD_ITEM',id:_id,quan:1})
})

document.getElementById('btnSub').addEventListener('click', () => {
    const _id = prompt("Enter the id of elem", "0");
    store.dispatch({type:'REM_ITEM',id:_id,quan:1})
})

render();
store.subscribe(render);

