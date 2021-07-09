import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addVessel } from "./actions";
const AddVessel: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [vesselName, setVesselName] = useState(""); // '' is the initial state value
  return (
    <div>
      <label>New Vessel:</label>
      <input
        value={vesselName}
        onChange={(e) => setVesselName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addVessel(vesselName));
          setVesselName("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddVessel;
