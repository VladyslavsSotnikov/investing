import { FormControl, FormControlLabel, Input, InputAdornment, Radio, RadioGroup } from "@mui/material";
import { AllocationType } from "types";

type SettingItemProps = {
  title: string;
  adornment?: string;
  value: number | AllocationType;
  onInputChange?: (value: number) => void;
  onRadioChange?: (value: AllocationType) => void;
  type?: "input" | "radio";
};

export const SettingItem = ({ title, value, onInputChange, onRadioChange, adornment = "%", type = "input" }: SettingItemProps) => {
  const renderInputComponent = (type: "input" | "radio") => {
    if (type === "input" && onInputChange) {
      return (
        <Input
          value={value}
          onChange={(e) => onInputChange(Number(e.target.value))}
          className="settings-input"
          type="number"
          size="small"
          endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
        />
      );
    }

    if (type === "radio" && onRadioChange) {
      return (
        <FormControl>
          <RadioGroup defaultValue={value} onChange={(e) => onRadioChange(e.target.value as AllocationType)} name="radio-buttons-group">
            <FormControlLabel value="month" control={<Radio size="small" />} label="Месячный" />
            <FormControlLabel value="balanced" control={<Radio size="small" />} label="Балансирующий" />
          </RadioGroup>
        </FormControl>
      );
    }
  };

  return (
    <div className="settings-item">
      <h4>{title}:</h4>
      {renderInputComponent(type)}
    </div>
  );
};
