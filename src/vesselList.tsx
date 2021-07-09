import { FunctionComponent } from "react";
import { Vessel } from "./types";
import { addContents } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const VesselList: FunctionComponent<{ drinkId: string }> = ({ drinkId }) => {
  const vessels: { [key: string]: Vessel } = useSelector(
    (state: RootState) => state.vessels
  );
  const contents: { [key: string]: string } = useSelector(
    (state: RootState) => state.contents
  );
  const getVesselOptions = (): Vessel[] => {
    const keys: string[] = Object.keys(contents);
    return Object.values(vessels).filter((v) => !keys.includes(v.key));
  };
  const options = getVesselOptions();
  const dispatch = useDispatch();
  if (options.length === 0) {
    return <div> ---- </div>;
  } else {
    return (
      <pre>
        {options.map((v) => (
          <button
            key={v.name + drinkId}
            onClick={() => dispatch(addContents(v.key, drinkId))}
          >
            {v.name}
          </button>
        ))}
      </pre>
    );
  }
};

export default VesselList;
