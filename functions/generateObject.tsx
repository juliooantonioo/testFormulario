import { FormItem } from "../slices/formularioSlice";

export const generateObject= (items: FormItem[]): Record<string, {} | null> => {
  return items.reduce((result, item) => {
    result[item.name] = {
      value: item.value ? item.value : "",
      error: true,
      label: item.label,
      valueLabel: "",
    };
    return result;
  }, {} as Record<string, {}>);
}