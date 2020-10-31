const localStorage = store => {

    store.subscribe((mutation, state) => {
  
      if (mutation.type === 'data/addItemToData') {
        console.log('saving added item to storage')
        window.localStorage.setItem('data', JSON.stringify(state.data.data))
      }
  
    })
  
    // called when the store is initialized
    if (typeof window !== 'undefined') {
        if (window.localStorage.data) {
          setTimeout(() => {
              store.commit('data/setData', JSON.parse(window.localStorage.getItem('data')))
        }, 500)
      }
    }
  }
  
  export default localStorage