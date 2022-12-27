

export const addAction = (t: string, l: number) => {
    return {type: 'ADD_DATA', payload: { id: l, title: t }}
}

export const editAction = (t: string, id: number) => {
    return {type: 'UPDATE', payload: { id: id, title: t }}
}
