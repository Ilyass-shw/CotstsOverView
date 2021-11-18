import { useEffect } from "react";
import AddItemForm from "../addItemForm/AddItemForm";
import { getCosts } from "../costsSlice/costsSlice";
import Navigation from "../navigation/Navigation";
import { useAppDispatch } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());
  }, []);
  return (
    <>
      <Navigation />
      <AddItemForm/>
    </>
  );
};

export default App;
