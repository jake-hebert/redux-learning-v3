export interface Drink {
    category : string;
    name : string;
}

export interface Vessel {
    key : string; // keys will be generated based on the number of entries in the object
    name : string;
}

export type ContentsMap = {[key:string] : string} // map of the vessel numeric index to the drink string index

export type DrinkMap = {[key:string] : Drink};
export type VesselMap = {[key:number] : Vessel};