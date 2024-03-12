export const initialState = {
  actions: 0,
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "STIR_DATA":
      return shuffledArray(state);
    default:
      state;
  }
}
function shuffledArray(state) {
  for (let i = state.arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [array[j], array[i]];
  }
}
