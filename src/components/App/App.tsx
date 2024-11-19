import "./App.css";
import { MonthlyAllocation } from "@components/MonthlyAllocation/MonthlyAllocation";
import { BalancedAllocation } from "@components/BalancedAllocation/BalancedAllocation";
import { Settings } from "@components/Settings/Settings";
import { useState } from "react";
import { AllocationType, SettingsType } from "../../types/index";

function App() {
  const [settings, setSettings] = useState<SettingsType>({
    currency: 5,
    stocks: 65,
    crypto: 30,
    type: AllocationType.MONTH,
  });

  return (
    <div className="app">
      <div>
        <h1>Капитал</h1>
      </div>
      <Settings settings={settings} setSettings={setSettings} />
      <br />
      {settings.type === AllocationType.MONTH && <MonthlyAllocation settings={settings} />}
      {settings.type === AllocationType.BALANCED && <BalancedAllocation settings={settings} />}
    </div>
  );
}

export default App;
