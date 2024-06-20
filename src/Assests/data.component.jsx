import React from "react";
import data from "./data.json";

const options = { maximumFractionDigits: 2 };

export const GetTotalEarning = () => {
  let totalEarning = 0;
  data.earnings.yearly.forEach((item) => {
    totalEarning += item.revenue;
  });

  return Intl.NumberFormat("en-IN", options).format(totalEarning);
};

export const GetMonthlyEarning = () => {
  let totalEarning = 0;
  let count = 0;
  data.earnings.yearly.forEach((item) => {
    totalEarning += item.revenue;
    count++;
  });
  let num = totalEarning / count;
  return Intl.NumberFormat("en-IN", options).format(num);
};

export const GetTotalCustomers = () => {
  return Intl.NumberFormat("en-IN", options).format(data.customers.length);
};

export const GetTotalProduct = () => {
  return Intl.NumberFormat("en-IN", options).format(data.products.length);
};

export const GetTotalSales = () => {
  let totalSales = 0;
  Object.values(data.salesOverview).forEach((item) => {
    totalSales += item.totalSales;
  });

  return Intl.NumberFormat("en-IN", options).format(totalSales);
};

export const GetTotalRefunds = () => {
  return Intl.NumberFormat("en-IN", options).format(data.Refunds[0].total);
};

export const getTotalRevenue = () => {
  let totalRevenue = 0;
  Object.values(data.salesOverview).forEach((item) => {
    totalRevenue += item.totalRevenue;
  });

  return Intl.NumberFormat("en-IN", options).format(totalRevenue);
};

export const GetBudget = () => {
  let num = data.revenue.Budget;
  return Intl.NumberFormat("en-IN", options).format(num);
};
export const GetExpense = () => {
  let num = data.revenue.expense;
  return Intl.NumberFormat("en-IN", options).format(num);
};
