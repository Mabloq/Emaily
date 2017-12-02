export default function (
  state = {
    emaily: 'is-showing',
    is: 'is-hiding',
    shit: 'is-hiding',
    displayed: 'emaily',
  },
  action
) {
  switch (action.payload) {
    case 'emaily':
      return {
        ...state,
        emaily: 'is-showing',
        shit: 'is-hiding',
        is: 'is-hiding',
        displayed: 'is',
      };
    case 'is':
      return {
        ...state,
        is: 'is-showing',
        emaily: 'is-hiding',
        shit: 'is-hiding',
        displayed: 'shit',
      };
    case 'shit':
      return {
        ...state,
        shit: 'is-showing',
        is: 'is-hiding',
        emaily: 'is-hiding',
        displayed: 'emaily',
      };
    default:
      return state;
  }
}
