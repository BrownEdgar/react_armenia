import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    shuffle
  },
})



// - Խառնել arr զանգվածը(shuffle)
// - arr զանգվածի մեջ ավելացնել պատահական եռանիշ թիվ
// - փոխել user օբյեկտի name հատկությունը
// - arr զանգվածը սորտավորել
// - arr զանգվածի գումարը հաշվել պահել total-հատկության մեջ