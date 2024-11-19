import { SettingItem } from "@components/SettingItem/SettingItem";

import { useState } from "react";
import { SettingsType } from "../../types/index";
import { Allocation } from "@components/Allocation/Allocation";

type MonthlyAllocationProps = {
  settings: SettingsType;
};

export const MonthlyAllocation = ({ settings }: MonthlyAllocationProps) => {
  const [amount, setAmount] = useState(0);

  const getAmount = (amount: number, settingValue: number) => {
    return (amount * settingValue) / 100;
  };

  return (
    <div className="monthly-allocation">
      <h2 className="title">Месячное распределение</h2>
      <div className="settings-wrapper settings-wrapper--bordered">
        <SettingItem title="Дипозит" adornment="$" value={amount} onInputChange={(value) => setAmount(value)} />
      </div>
      {amount > 0 && (
        <Allocation
          currencyAmount={getAmount(amount, settings.currency)}
          stocksAmount={getAmount(amount, settings.stocks)}
          cryptoAmount={getAmount(amount, settings.crypto)}
        />
      )}
    </div>
  );
};
