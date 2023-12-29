
export const labelTargetValue = (value, items) => {
  const item = items.find(item => item.id == value);
  return item.value;
}