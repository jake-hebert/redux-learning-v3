import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { AllActions } from './actions';
import { Drink, Vessel } from './types';
import { vessels, drinks } from './data';

const drinksById  = drinks.reduce(
    ( res: {[key:string]: Drink},
      currentVal : Drink
      ) => {
        res[currentVal.name] = currentVal;
        return res
      }
    ,{}
  );

const vesselsById  = vessels.reduce(
  ( res: {[key:string]: Vessel},
    currentVal,
    currentIndex: number
    ) => {
      res[`${currentIndex}`] = {
        name: currentVal.name,
        key: `${currentIndex}`
      };
      return res
    }
  ,{}
)

export const store = configureStore({
  reducer: combineReducers(
    {
      contents: (state = {}, action: AllActions) => {
        switch(action.type){
          case 'addContents':
            const newState = {...state};
            newState[action.payload.vesselId] = action.payload.drinkId;
            console.log(newState);
            return newState;
          case 'clearDrinks':
            return {}
        }
        return state;
      },
      vessels: (state = vesselsById, action : AllActions) => {
        switch(action.type){
          case 'addVessel':
            {
              const nextIndex = Object.keys(state).length;
              const newState = {...state};
              newState[nextIndex] = {
                name: action.payload,
                key: `${nextIndex}`
              }
              return newState;
            }
          }
        return state
      },
      drinks: (state = drinksById, action : AllActions) => {
        return state
      }
    }
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch