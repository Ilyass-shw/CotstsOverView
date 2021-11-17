import { useEffect } from "react";
import { getCosts } from "../costsSlice/costsSlice";
import { useAppDispatch } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());

  }, []);
  return <div>byeee</div>;
};

export default App;
