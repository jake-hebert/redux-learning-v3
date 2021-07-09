import { FunctionComponent } from "react";
import { Drink } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import React from "react";
import VesselList from "./vesselList";

const DrinkDisp: FunctionComponent<any> = () => {
  const drinks: { [key: string]: Drink } = useSelector(
    (state: RootState) => state.drinks
  );
  return (
    <React.Fragment>
      {Object.values(drinks).map((d) => (
        <div id={d.name} key={d.name}>
          {d.name} ({d.category})
          <br />
          {<VesselList drinkId={d.name} />}
        </div>
      ))}
    </React.Fragment>
  );
};

export default DrinkDisp;
