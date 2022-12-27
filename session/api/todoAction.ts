
export const addAction2: any = (t: string, l: number) => {
    console.log('action 2')
    return async(dispatch: any, getState: any) => {

        console.log('action 2', getState().todoReducer.todo)
        const res = await fetch("https://radiant-anchorage-95660.herokuapp.com/user/get-otp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mobile": t
            })
        })
        const resJson = await res.json()
        console.log(resJson)
        dispatch(addAction(resJson.email, l))
    }
}

export const getData: any = (t: string, l: number) => {
    console.log('action 2')
    return async(dispatch: any, getState: any) => {
        try{
            console.log('action 2', getState().todoReducer.todo)
            const res = await fetch("https://radiant-anchorage-95660.herokuapp.com/user/get-otp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "mobile": t
                })
            })
            const resJson = await res.json()
            console.log(resJson)
            dispatch(addAction(resJson.email, l))
        } catch(e) {
            dispatch(setError('S'))
        }
        
    }
}

export const addAction = (t: string, l: number) => {
    return {type: 'ADD_DATA', payload: { id: l, title: t }}
}


export const setError = (t: string) => {
    return {type: 'SET_ERROR', payload: { id: 5, title: t }}
}

export const editAction = (t: string, id: number) => {
    return {type: 'UPDATE', payload: { id: id, title: t }}
}
