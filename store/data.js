export const state = () => ({
    data: []
})

export const getters = {
    getAllData(state) {
        return state.data
    }
}

export const mutations = {
    addItemToData (state, item) {
        state.data.push(item)
    },
    setData (state, data) {
        state.data = data
        console.log('setData', state.data)
    },
}