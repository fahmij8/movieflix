import SelectMUI, { SelectProps as SelectPropsMUI } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface SelectProps {
  selectProps?: SelectPropsMUI;
  selectItems: Array<{ value: string; label: string }>;
}

export const Select = ({ selectProps, selectItems }: SelectProps) => {
  return (
    <>
      {selectProps?.label != null && (
        <InputLabel id={selectProps?.id}>{selectProps.label}</InputLabel>
      )}
      <SelectMUI {...selectProps}>
        {selectItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </SelectMUI>
    </>
  );
};
