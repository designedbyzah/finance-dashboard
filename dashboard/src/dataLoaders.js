// Fetch Income History
export async function incomeLoader() {
  try {
    const response = await fetch("http://localhost:5000/incomeHistory");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to load income history:", error);
  }
}

// Fetch Expenses History
export async function expensesLoader() {
  try {
    const response = await fetch("http://localhost:5000/expensesHistory");
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Failed to load expenses history", error);
  }
}

// Fetch Investments History
export async function investmentLoader() {
  try {
    const response = await fetch("http://localhost:5000/investmentsHistory");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Failed to load investment history", error);
  }
}

// Fetch SMS Notification
export async function SMSNotificationLoader() {
  try {
    const response = await fetch("http://localhost:5000/SMSNotification");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log("Failed to load SMS notification", error);
  }
}

//Fetch Exchange rate from Exchangerate API
export async function exchangeRates() {
  const apiKey = "2cd857177a858a7008551d57"; //API KEY
  const endpoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const exchangeRates = data.conversion_rates;

    return exchangeRates;

    // console.log(exchangeRates);
  } catch (error) {
    console.log("Failed to load data from API", error);
  }
}

// exchangeRates();
