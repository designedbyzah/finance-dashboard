import FilterBtn from "../FilterBtn";
import SMSItem from "./SMSItem";
import { IoTrendingUpOutline, IoTrendingDownOutline, IoBusinessOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

export default function SmsAlert() {
  const SMSNotifications = useLoaderData();

  const dropdownOption = (
    <select name="currency" className="select-dropdown">
      <option value="all">All</option>
      <option value="income">Income</option>
      <option value="expenses">Expenses</option>
      <option value="investments">Investments</option>
    </select>
  );

  // Dynamic Property Access for SMSItem component
  const categoryIcons = {
    income: {
      icon: <IoTrendingUpOutline color="#17A34A" />,
      color: "iconContainerIsIncome",
    },
    expenses: {
      icon: <IoTrendingDownOutline color="#F04438" />,
      color: "iconContainerIsExpenses",
    },
    investments: {
      icon: <IoBusinessOutline color="#2563EB" />,
      color: "iconContainerIsInvestments",
    },
  };

  return (
    <div className="sms-alert-content">
      <h1>SMS Notifications</h1>

      <div className="filter-sms-item-container">
        <FilterBtn buttonText={dropdownOption} />

        <div className="sms-item-container">
          {SMSNotifications.map((SMSNotification, index) => (
            <SMSItem
              key={index}
              smsTitle={SMSNotification.title}
              smsDescription={SMSNotification.message}
              smsTimeStamp={SMSNotification.timestamp}
              alt={SMSNotification.category}
              icon={categoryIcons[SMSNotification.category].icon || ""}
              iconContainerStyle={categoryIcons[SMSNotification.category].color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
