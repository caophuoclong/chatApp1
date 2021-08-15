import { configureStore } from "@reduxjs/toolkit";
import listLinkReducer from "../reduxSlice/listLinkSlice";
import listInforReducer from "../reduxSlice/listInforMusic";
import inforUserReducer from "../reduxSlice/inforUserSlice";
const rootReducer = {
  listLink: listLinkReducer,
  listInfor: listInforReducer,
  userInfor: inforUserReducer,
};
export default configureStore({
  reducer: rootReducer,
});
