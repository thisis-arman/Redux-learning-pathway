
const logger = store => next => action =>{
 const currentState = store.getState();
 console.log('currentState', currentState)
 console.log('action dispatched', action)
 next(action)
 console.log('updated state', store.getState())

}


export default logger;