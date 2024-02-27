 export default function reducer(state,action){
    switch (action.type) {
        case 'sort_array': 
        const sortedArr = [...state.arr].sort((a, b) => a - b);
      return { ...state,  arr:sortedArr  ,  actions: state.actions + 1};



        case 'shuffle_array':

    const array=[...state.arr]

for (let i = 0; i < array.length; i++) {
    const random = Math.floor(Math.random() * array.length);
    [array[random], array[i]] = [array[i], array[random]];
}

    return {...state , arr:array , actions: state.actions + 1}


    case 'random_number':
         const random = Math.floor(Math.random() * 900) + 100;
      return { ...state, arr: [...state.arr, random], actions: state.actions + 1 };



case 'total_sum':
      let sum = 0;
      for (let i = 0; i < state.arr.length; i++) {
        sum += state.arr[i];
      }
      return { ...state, sum ,  actions: state.actions + 1};


      case 'change_name':
      return { ...state, user: { ...state.user, name: 'Bghdo' }, actions: state.actions + 1}; 


        default: return state
    }
 }