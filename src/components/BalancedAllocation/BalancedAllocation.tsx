import { Allocation } from "@components/Allocation/Allocation";
import { SettingItem } from "@components/SettingItem/SettingItem";
import { useEffect, useState } from "react";
import { SettingsType } from "types";

type BalancedAllocationProps = {
  settings: SettingsType;
};

type BalanceType = {
  currency: number;
  stocks: number;
  crypto: number;
};

export const BalancedAllocation = ({ settings }: BalancedAllocationProps) => {
  const [capital, setCapital] = useState(0);
  const [balance, setBalance] = useState<BalanceType>({
    currency: 0,
    stocks: 0,
    crypto: 0,
  });
  const [allocationBalance, setAllocationBalance] = useState<BalanceType>({
    currency: 0,
    stocks: 0,
    crypto: 0,
  });

  const isValuesFilled = balance.currency > 0 && balance.stocks > 0 && balance.crypto > 0 && capital > 0;

  useEffect(() => {
    if (isValuesFilled) {
      const initialInfo = {
        currency: [balance.currency, settings.currency],
        stocks: [balance.stocks, settings.stocks],
        crypto: [balance.crypto, settings.crypto],
      };

      const initialInfoArray = Object.values(initialInfo);

      let newCapitalValue = 0;

      initialInfoArray.forEach((value) => {
        const investmentInstrumentValue = value[0];
        const settingValue = value[1] / 100;

        if (investmentInstrumentValue / capital > settingValue) {
          newCapitalValue = investmentInstrumentValue / settingValue;
          console.log("newCapitalValue", newCapitalValue);
        }
      });

      if (newCapitalValue > 0) {
        const deltaStoks = parseFloat(((newCapitalValue * settings.stocks) / 100 - balance.stocks).toFixed(2));
        const deltaCrypto = parseFloat(((newCapitalValue * settings.crypto) / 100 - balance.crypto).toFixed(2));
        const deltaCurrency = parseFloat(((newCapitalValue * settings.currency) / 100 - balance.currency).toFixed(2));

        setAllocationBalance({
          currency: deltaCurrency,
          stocks: deltaStoks,
          crypto: deltaCrypto,
        });
      }
    }
  }, [isValuesFilled, balance, settings, capital]);

  return (
    <div className="balanced-allocation">
      <h2 className="title">Балансирующее распределение</h2>
      <div className="settings-wrapper settings-wrapper--bordered">
        <SettingItem title="Капитал" adornment="$" value={capital} onInputChange={(value) => setCapital(value)} />
      </div>
      <div className="balance settings-wrapper">
        <SettingItem
          title="Валюта"
          adornment="$"
          value={balance.currency}
          onInputChange={(value) => setBalance({ ...balance, currency: value })}
        />
        <SettingItem
          title="Акции"
          adornment="$"
          value={balance.stocks}
          onInputChange={(value) => setBalance({ ...balance, stocks: value })}
        />
        <SettingItem
          title="Криптовалюта"
          adornment="$"
          value={balance.crypto}
          onInputChange={(value) => setBalance({ ...balance, crypto: value })}
        />
      </div>
      {isValuesFilled && (
        <Allocation
          currencyAmount={allocationBalance.currency}
          stocksAmount={allocationBalance.stocks}
          cryptoAmount={allocationBalance.crypto}
        />
      )}
      <h3 className="title">
        Нужно добавить:
        <strong>{parseFloat((allocationBalance.crypto + allocationBalance.currency + allocationBalance.stocks).toFixed(2))}$</strong>
      </h3>
    </div>
  );
};
