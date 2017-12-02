export default function (state = 'is_loading', action) {
  switch (action.payload) {
    case 'is_loading':
      return 'not_loading';
    case 'not_loading':
      return 'is_loading';
    default:
      return state;
  }
}
