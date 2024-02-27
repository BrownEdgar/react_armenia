 export default function reducer(state,action){
    switch (action.type) {
        case 'sort_array': 
        const sortedArr = [...state.arr].sort((a, b) => a - b);
      return { ...state,  arr:sortedArr };



        case 'shuffle_array':
            const shuffledArr = [...state.arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return {...state , arr:shuffledArr}


    case 'random_number':
         const random = Math.floor(Math.random() * 900) + 100;
      return { ...state, arr: [...state.arr, random] };



case 'total_sum':
      let sum = 0;
      for (let i = 0; i < state.arr.length; i++) {
        sum += state.arr[i];
      }
      return { ...state, sum};


      case 'change_name':
      return { ...state, user: { ...state.user, name: 'Bghdo' } }; 


       case 'increment_action':
      return { ...state, actions: state.actions + 1 };

        default: return state
    }
 }