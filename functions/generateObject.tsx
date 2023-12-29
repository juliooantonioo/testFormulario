import { FormItem } from "../slices/formularioSlice";

export const generateObject= (items: FormItem[]): Record<string, {} | null> => {
  return items.reduce((result, item) => {
    result[item.name] = {
      value: item.value ? item.value : "",
      error: !item.disabled,
      label: item.label,
      valueLabel: "",
      disabled: item.disabled
    };
    return result;
  }, {} as Record<string, {}>);
}