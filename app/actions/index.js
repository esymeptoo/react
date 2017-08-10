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

