import FilterBtn from "../FilterBtn";
import TitleTotalAmount from "../TitleTotalAmount";
import filterIcon from "../../assets/filter-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import { useLoaderData } from "react-router-dom";
import TransactionHistory from "../TransactionHistory";
import MsgInput from "../MsgInput";
import { useEffect, useMemo, useState } from "react";
import { exchangeRates } from "../../dataLoaders";

export default function FiatIncome() {
  const [currencyValue, setCurrencyValue] = useState("USD");
  const [rates, setRates] = useState({});
  const transactionDatas = useLoaderData();

  const handleCurrencyChange = (event) => {
    const { value } = event.target;

    setCurrencyValue(value);
    // setCurrencyValue(event.target.value);
  };

  // console.log(currencyValue);
  // console.log("This is the data rendered from rates", rates);
  // console.log("This component is running");

  // Fecth Exchange rates from import
  useEffect(() => {
    async function fetchRates() {
      const ratesData = await exchangeRates();

      setRates(ratesData || {});
    }
    fetchRates();
  }, []);

  const currencyOption = (
    <select
      name="currency"
      className="select-dropdown"
      value={currencyValue}
      onChange={handleCurrencyChange}
    >
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
      <option value="NGN">NGN</option>
    </select>
  );

  // useMemo to optimize calculation
  const totalFiatIncome = useMemo(
    () =>
      transactionDatas.reduce(
        (sum, transactionData) => sum + Number(transactionData.amountFiat),
        0
      ),
    [transactionDatas.map((data) => data.amountFiat)]
  );

  //useMemo for Total income conversion based on currency type selected by users
  const convertedTotalFiatIncome = useMemo(() => {
    const currencyExchangeRate = rates[currencyValue];

    if (!currencyExchangeRate) return totalFiatIncome.toLocaleString();

    const convertedAmount = totalFiatIncome * currencyExchangeRate;

    return Math.floor(convertedAmount).toLocaleString();
  }, [currencyValue, totalFiatIncome]);

  return (
    <div className="content-chatbox-container">
      <div className="fiat-income-content-container">
        <FilterBtn buttonText={`Filter Applied: ${2}`} icon={filterIcon} alt="filter" />

        <div className="total-fiat-history-items-container">
          <TitleTotalAmount
            title="Total Fiat Income"
            amount={convertedTotalFiatIncome}
            selectOptions={currencyOption}
          />

          <div className="history-items-container">
            {transactionDatas.map((transactionData, index) => (
              <TransactionHistory
                key={index}
                amount={`$${Number(transactionData.amountFiat).toLocaleString()}`}
                date={transactionData.date}
              />
            ))}
          </div>
        </div>

        <FilterBtn buttonText="Download Report" icon={downloadIcon} alt="download" />
      </div>
      <MsgInput placeholder="Talk to our AI finance expert" alt="send buton" icon={sendIcon} />
    </div>
  );
}
