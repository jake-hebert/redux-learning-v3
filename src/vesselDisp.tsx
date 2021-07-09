import { FunctionComponent } from "react";
import { Vessel } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import React from "react";

const VesselDisp: FunctionComponent = () => {
  const vessels: { [key: string]: Vessel } = useSelector(
    (state: RootState) => state.vessels
  );
  const contents: { [key: string]: string } = useSelector(
    (state: RootState) => state.contents
  );

  if (Object.keys(contents).length === 0) {
    return (
      <div>
        <br /> It's true...
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          for example you could put:
          {Object.keys(contents).map((vesselKey) => (
            <pre key={vessels[vesselKey].key}>
              <div style={{ border: "2px solid white" }}>
                {contents[vesselKey]}
                <br /> -- inside of --
                <br /> {vessels[vesselKey].name}
              </div>
            </pre>
          ))}
        </div>
      </React.Fragment>
    );
  }
};

export default VesselDisp;
