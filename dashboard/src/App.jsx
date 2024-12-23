import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SmsAlert from "./components/sms/SmsAlert";
import Settings from "./components/settings/Settings";
import IncomeLayout from "./layouts/IncomeLayout";
import FiatIncome from "./components/income/FiatIncome";
import CryptoIncome from "./components/income/CryptoIncome";
import TotalIncome from "./components/income/TotalIncome";
import {
  incomeLoader,
  expensesLoader,
  investmentLoader,
  SMSNotificationLoader,
} from "./dataLoaders";
import ExpensesLayout from "./layouts/ExpensesLayout";
import FiatExpenses from "./components/expenses/FiatExpenses";
import CryptoExpenses from "./components/expenses/CryptoExpenses";
import TotalExpenses from "./components/expenses/TotalExpenses";
import InvesmentsLayout from "./layouts/InvestmentsLayout";
import FiatInvestments from "./components/investments/FiatInvestments";
import CryptoInvestments from "./components/investments/CryptoInvestments";
import TotalInvestments from "./components/investments/TotalInvestments";
import SettingsLayout from "./layouts/SettingsLayout";
import Profile from "./components/settings/Profile";
import Notification from "./components/settings/Notification";
import Integrations from "./components/settings/Integrations";
import Preference from "./components/settings/Preference";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Redirect from "/" to "/income" */}
        <Route index element={<Navigate to="income" />} />

        {/* Income Route */}
        <Route path="income" element={<IncomeLayout />}>
          <Route index element={<FiatIncome />} loader={incomeLoader} />
          <Route path="fiat" element={<FiatIncome />} loader={incomeLoader} />
          <Route path="crypto" element={<CryptoIncome />} loader={incomeLoader} />
          <Route path="total" element={<TotalIncome />} loader={incomeLoader} />
        </Route>

        {/* Expenses Route */}
        <Route path="expenses" element={<ExpensesLayout />}>
          <Route index element={<FiatExpenses />} loader={expensesLoader} />
          <Route path="fiat" element={<FiatExpenses />} loader={expensesLoader} />
          <Route path="crypto" element={<CryptoExpenses />} loader={expensesLoader} />
          <Route path="total" element={<TotalExpenses />} loader={expensesLoader} />
        </Route>

        {/* SMS Route */}
        <Route path="sms" element={<SmsAlert />} loader={SMSNotificationLoader} />

        {/* Investments Route */}
        <Route path="investments" element={<InvesmentsLayout />}>
          <Route index element={<FiatInvestments />} loader={investmentLoader} />
          <Route path="fiat" element={<FiatInvestments />} loader={investmentLoader} />
          <Route path="crypto" element={<CryptoInvestments />} loader={investmentLoader} />
          <Route path="total" element={<TotalInvestments />} loader={investmentLoader} />
        </Route>

        {/* Settings Route */}
        <Route path="settings" element={<SettingsLayout />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notification" element={<Notification />} />
          <Route path="preference" element={<Preference />} />
          <Route path="integration" element={<Integrations />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
