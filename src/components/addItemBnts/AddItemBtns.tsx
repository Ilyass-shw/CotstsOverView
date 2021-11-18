import React from "react";
import Button from "react-bootstrap/Button";

interface AddItemBtnsProps {
  reset: () => void;
  dispatchItem: () => void;
  canSubmit: boolean;
}
const AddItemBtns: React.FC<AddItemBtnsProps> = ({
  reset,
  dispatchItem,
  canSubmit,
}) => {
  return (
    <>
      <Button variant="outline-info" onClick={reset}>
        Reset
      </Button>
      <Button
        variant="info"
        type={"submit"}
        onClick={(event) => {
          event.preventDefault();
          dispatchItem();
        }}
        disabled={!canSubmit}
      >
        Add
      </Button>
    </>
  );
};

export default AddItemBtns;
