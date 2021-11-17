import { useEffect } from "react";
import { getCosts } from "../costsSlice/costsSlice";
import Navigation from "../navigation/navigation";
import { useAppDispatch } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCosts());
  }, []);
  return (
    <>
      <Navigation />
      <div>byeee</div>
    </>
  );
};

export default App;
