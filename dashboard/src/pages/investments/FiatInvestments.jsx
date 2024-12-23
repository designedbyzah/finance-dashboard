import FilterBtn from "../../components/FilterBtn";
import TitleTotalAmount from "../../TitleTotalAmount";
import filterIcon from "../../assets/filter-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import { useLoaderData } from "react-router-dom";
import TransactionHistory from "../../TransactionHistory";
import MsgInput from "../../MsgInput";
import { useMemo } from "react";

export default function FiatInvestments() {
  const transactionDatas = useLoaderData();

  const currencyOption = (
    <select name="currency" className="select-dropdown">
      <option value="usd">USD</option>
      <option value="gbp">GBP</option>
      <option value="eur">EUR</option>
      <option value="ngn">NGN</option>
    </select>
  );

  // useMemo to optimize calculation
  const totalFiatInvestments = useMemo(
    () =>
      transactionDatas
        .reduce((sum, transactionData) => sum + Number(transactionData.amountFiat), 0)
        .toLocaleString(),
    [transactionDatas.map((data) => data.amountFiat)]
  );

  return (
    <div className="content-chatbox-container">
      <div className="fiat-income-content-container">
        <FilterBtn buttonText={`Filter Applied: ${1}`} icon={filterIcon} alt="filter" />

        <div className="total-fiat-history-items-container">
          <TitleTotalAmount
            title="Total Fiat Investments"
            amount={totalFiatInvestments}
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
