import co from 'co'
import promise from 'promise'
export const testFirst = (params) => async (dispatch) => {
    const res = await promise.resolve(2);
    await dispatch({
        type: 'add'
    })
}

export const add = () => ({
    type: 'add',
})

export const getData = () => async dispatch => {
    const res = await fetch('/api');
    const r = await res.json();
    await dispatch({
        type: 'cheerioSuccess',
        payload: r.result
    })
}

