import { ADD_RANDOM_THREEDIGITS, CHANGE_NAME_PROPETY, COUNT_IN_TOTAL, SHUFFLE_ARRAY, SORT } from "./actionTypes";

export const initialState = {
  actions: 0,
  user: {
    id: 1,
    name: "Armen"
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export default function reducer(state, action) {
  switch (action.type) {
    case SHUFFLE_ARRAY: return shuffleArrayFunc(state)
    case ADD_RANDOM_THREEDIGITS: return addRandomThreeDigitsFunc(state)
    case CHANGE_NAME_PROPETY: return changeName(state)
    case SORT: return sortFunc(state)
    case COUNT_IN_TOTAL: return countInTotalFunc(state)

    default: return state;
  }
}

function shuffleArrayFunc(state) {
  const indexArr = []
  const count = []

  for (let i = 0; i < state.arr.length; i++) {
    count.push(i)
  }

  while (count.length) {//քանի դատարկ չի
    const num = Math.round(Math.random() * (count.length - 1))
    count.splice(num, 1)//8 անդամը հանել
    indexArr.push(state.arr[num])//8րդ ինդեքս
    
    console.log(state.arr[num]);
  }
  return {
    ...state,
    arr : indexArr,
    actions: state.actions + 1,
  }
}

function sortFunc(state) {
  return {
    ...state,
    actions: state.actions + 1,
    arr: state.arr.toSorted((a, b) => a - b)
  }
}

function changeName(state) {
  state.user.name = 'Barsegh'
  console.log(state.name);
  return {
    ...state,
    actions: state.actions + 1,
  }
}

function addRandomThreeDigitsFunc(state) {
  const str = `${Math.round(Math.random() * 10)}${Math.round(Math.random() * 10)}${Math.round(Math.random() * 10)}`
  const randomNumber = JSON.parse(str)
  return {
    ...state,
    actions: state.actions + 1,
    arr: [...state.arr, randomNumber]
  }
}


function countInTotalFunc(state) {
  return {
    ...state,
    actions: state.actions + 1,
    total: state.arr.reduce((acc, elm) => {
      return acc + elm
    })
  }
}
