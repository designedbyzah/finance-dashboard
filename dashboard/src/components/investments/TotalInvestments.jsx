import FilterBtn from "../FilterBtn";
import TitleTotalAmount from "../TitleTotalAmount";
import filterIcon from "../../assets/filter-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import { useLoaderData } from "react-router-dom";
import TransactionHistory from "../TransactionHistory";
import MsgInput from "../MsgInput";

export default function TotalInvestments() {
  const transactionDatas = useLoaderData();

  const currencyOption = (
    <select name="currency" className="select-dropdown">
      <option value="usd">USD</option>
      <option value="gbp">GBP</option>
      <option value="eur">EUR</option>
      <option value="ngn">NGN</option>
    </select>
  );

  return (
    <div className="content-chatbox-container">
      <div className="fiat-income-content-container">
        <FilterBtn buttonText={`Filter Applied: ${3}`} icon={filterIcon} alt="filter" />

        <div className="total-fiat-history-items-container">
          <TitleTotalAmount
            title="Total Investments"
            amount="125,020,000"
            selectOptions={currencyOption}
          />

          <div className="history-items-container">
            {transactionDatas.map((transactionData, index) => (
              <TransactionHistory
                key={index}
                amount={
                  transactionData.totalIsFiat
                    ? `$${transactionData.amountFiat}`
                    : `${transactionData.amountCrypto} BTC`
                }
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
