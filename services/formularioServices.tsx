
export const getFormulario = async() => {
  const response = await fetch('https://run.mocky.io/v3/c7a96306-c122-4037-8b27-a2120b9e6f04');
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}