import FilterBtn from "../FilterBtn";
import TitleTotalAmount from "../TitleTotalAmount";
import filterIcon from "../../assets/filter-icon.svg";
import sendIcon from "../../assets/send-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import { useLoaderData } from "react-router-dom";
import TransactionHistory from "../TransactionHistory";
import MsgInput from "../MsgInput";
import { useMemo } from "react";

export default function CryptoIncome() {
  const transactionDatas = useLoaderData();

  const cryptoOption = (
    <select name="crypto" className="select-dropdown">
      <option value="btc">BTC</option>
      <option value="eth">ETH</option>
      <option value="doge">DOGE</option>
      <option value="ltc">LTC</option>
    </select>
  );

  // useMemo to optimize calculation
  const totalCryptoIncome = useMemo(
    () =>
      transactionDatas.reduce(
        (sum, transactionData) => sum + Number(transactionData.amountCrypto),
        0
      ),
    [transactionDatas.map((data) => data.amountCrypto)]
  );

  return (
    <div className="content-chatbox-container">
      <div className="fiat-income-content-container">
        <FilterBtn buttonText={`Filter Applied: ${2}`} icon={filterIcon} alt="filter" />

        <div className="total-fiat-history-items-container">
          <TitleTotalAmount
            title="Total Crypto Income"
            amount={totalCryptoIncome}
            selectOptions={cryptoOption}
            amountStyles={{ color: "#9747FF" }}
          />

          <div className="history-items-container">
            {transactionDatas.map((transactionData, index) => (
              <TransactionHistory
                key={index}
                amount={`${transactionData.amountCrypto} BTC`}
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
