import { configureStore } from "@reduxjs/toolkit";
import listLinkReducer from "../reduxSlice/listLinkSlice";
import listInforReducer from "../reduxSlice/listInforMusic";
import inforUserReducer from "../reduxSlice/inforUserSlice";
import currentUserReducer from "../reduxSlice/userCurrentSlice";

const rootReducer = {
  listLink: listLinkReducer,
  listInfor: listInforReducer,
  userInfor: inforUserReducer,
  currentUser: currentUserReducer,
};
export default configureStore({
  reducer: rootReducer,
});
