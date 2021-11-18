import { useState } from "react";
import { Form } from "react-bootstrap";
import AddItemBtns from "../addItemBnts/AddItemBtns";
import { useAppDispatch } from "../app/hooks";
import { addItem } from "../costsSlice/costsSlice";

const AddItemForm = () => {
  const [userName, setUserName] = useState("");
  const [Net, setNet] = useState("");

  const dispatch = useAppDispatch();
  const reset = () => {
    if (userName || Net) {
      console.log("ami");
      setNet("");
      setUserName("");
      //   console.log(useName);
    }
  };
  const dispatchItem = () => {
    console.log(Net);
    if (userName && Net) {
      dispatch(addItem({ name: userName, net: Net }));
      reset();
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="itemName">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter a name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="itemNet">
        <Form.Label>Net *</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Enter an amount"
          value={Net}
          onChange={(e) => setNet(e.target.value)}
        />
      </Form.Group>
      <AddItemBtns
        dispatchItem={dispatchItem}
        reset={reset}
        canSubmit={Boolean(userName && Net)}
      />
    </Form>
  );
};

export default AddItemForm;
