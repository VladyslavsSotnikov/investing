import { SettingItem } from "@components/SettingItem/SettingItem";
import { SettingsType } from "../../types/index";

type SettingsProps = {
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
};

export const Settings = ({ settings, setSettings }: SettingsProps) => {
  return (
    <div className="settings-wrapper">
      <h2 className="title">Настройки</h2>
      <div className="settings-container">
        <SettingItem title="Валюта" value={settings.currency} onInputChange={(value) => setSettings({ ...settings, currency: value })} />
        <SettingItem title="Акции" value={settings.stocks} onInputChange={(value) => setSettings({ ...settings, stocks: value })} />
        <SettingItem title="Крипта" value={settings.crypto} onInputChange={(value) => setSettings({ ...settings, crypto: value })} />
        <SettingItem
          title="Тип расчета"
          value={settings.type}
          onRadioChange={(value) => setSettings({ ...settings, type: value })}
          type="radio"
        />
      </div>
    </div>
  );
};
