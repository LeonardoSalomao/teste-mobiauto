import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface SelectComponentProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  options: { codigo: string; nome: string }[];
  disabled?: boolean;
}

export default function SelectComponent({ label, value, onChange, options, disabled = false }: SelectComponentProps) {
  return (
    <FormControl
      fullWidth
      sx={{
        mb: 2,
        textAlign: "left",
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
        },
        "& .MuiSelect-select": {
          color: "black !important",
        },
        "& .MuiInputLabel-root": {
          color: "black !important",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black !important",
        },
      }}
      disabled={disabled}
    >
      <InputLabel sx={{ color: "black", backgroundColor: "white" }}>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.codigo} value={option.codigo}>
            {option.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
