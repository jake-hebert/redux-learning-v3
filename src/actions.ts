// action doesn't know about store

// adds a drink to a vessel
export const addContents = (vesselId: string, drinkId: string) => {
    const payload = {vesselId : vesselId, drinkId : drinkId};
    return {
        type: 'addContents',
        payload
    } as const
}
export type AddContentsAction = ReturnType<typeof addContents>

export const clearDrinks = () => {
    return {
        type: 'clearDrinks'
    } as const
}

export type ClearDrinksAction = ReturnType<typeof clearDrinks>

export const addVessel = (name : string) => {
    return {
        type: 'addVessel',
        payload: name
    } as const
}
export type AddVesselAction = ReturnType<typeof addVessel>


export type AllActions = ClearDrinksAction | AddContentsAction | AddVesselAction