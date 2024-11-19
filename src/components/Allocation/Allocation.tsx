type AllocationProps = {
  currencyAmount: number;
  stocksAmount: number;
  cryptoAmount: number;
};

export const Allocation = ({ currencyAmount, stocksAmount, cryptoAmount }: AllocationProps) => {
  return (
    <div className="allocation-wrapper">
      <h3 className="title">Распределение</h3>
      <div className="allocation-result">
        <div className="allocation-item">
          <h4>Валюта</h4>
          <div>{currencyAmount}$</div>
        </div>
        <div className="allocation-item">
          <h4>Акции</h4>
          <div>{stocksAmount}$</div>
        </div>
        <div className="allocation-item">
          <h4>Криптовалюты</h4>
          <div>{cryptoAmount}$</div>
        </div>
      </div>
    </div>
  );
};
