import { configureStore } from '@reduxjs/toolkit'
import listLinkReducer from "../reduxSlice/listLinkSlice"
import listInforReducer from "../reduxSlice/listInforMusic";
const rootReducer = {
    listLink : listLinkReducer,
    listInfor: listInforReducer,
}
export default configureStore({
    reducer: rootReducer,
})