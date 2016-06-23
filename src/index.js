export function getScreenSize (width, { small, medium, large }) {
  if (width <= small) {
    return 'small'
  }
  if (width <= medium) {
    return 'medium'
  }
  if (width <= large) {
    return 'large'
  }
  if (width > large) {
    return 'xlarge'
  }
  return 'small'
}
