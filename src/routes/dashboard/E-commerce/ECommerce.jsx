import React, { useState } from "react";
import "./Ecommerce.styles.css";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { TbCreditCardRefund } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import data from "../../../Assests/data.json";

import {
  GetBudget,
  GetMonthlyEarning,
  GetExpense,
  GetTotalCustomers,
  GetTotalEarning,
  GetTotalProduct,
  GetTotalRefunds,
  GetTotalSales,
  GetRecentTransaction,
} from "../../../Assests/data.component";
import SparkLine from "../../../Components/SparkLine/SparkLine";
import Stacked from "../../../Components/Stacked/Stacked";
import Button from "../../../Components/Button/Button";
import { useTheme } from "../../../Context/themeContext";

const ECommerce = () => {
  const iconMapping = {
    TbCreditCardRefund: TbCreditCardRefund,
    CiWallet: CiWallet,
    MdPayments: MdPayments,
  };

  const [themeButton] = useState("#7352FF");

  const { theme } = useTheme();

  // console.log(data);
  return (
    <div className="e-commerce-page-container">
      <div className="earning-and-greeting-Section">
        <div className="earning-section">
          <span>
            Earnings{" "}
            <HiOutlineCurrencyRupee
              style={{
                color: themeButton,
                borderRadius: "20px",
              }}
            />{" "}
          </span>
          Rs.{<GetTotalEarning />}
          <Button color={themeButton} text="Download" />
        </div>
        <div className="greeting-section"></div>
      </div>

      <div className="stats-section">
        <div
          className={
            theme === "light"
              ? "ecommerce-stats-item"
              : "ecommerce-stats-item-dark"
          }
        >
          <IoPeopleOutline
            style={{ backgroundColor: "rgb(234, 234, 54)" }}
            className="stats-icon"
          />
          <span className="bold-600-text">{<GetTotalCustomers />}</span>
          <span className="gray-text">Customers</span>
        </div>
        <div
          className={
            theme === "light"
              ? "ecommerce-stats-item"
              : "ecommerce-stats-item-dark"
          }
        >
          <AiOutlineProduct
            style={{ backgroundColor: "rgb(130, 130, 232)" }}
            className="stats-icon"
          />
          <span className="bold-600-text">{<GetTotalProduct />}</span>
          <span className="gray-text">Products</span>
        </div>

        <div
          className={
            theme === "light"
              ? "ecommerce-stats-item"
              : "ecommerce-stats-item-dark"
          }
        >
          <FaRegChartBar
            style={{ backgroundColor: "rgb(243, 187, 187)" }}
            className="stats-icon"
          />
          <span className="bold-600-text">{<GetTotalSales />}</span>
          <span className="gray-text">Sales</span>
        </div>
        <div
          className={
            theme === "light"
              ? "ecommerce-stats-item"
              : "ecommerce-stats-item-dark"
          }
        >
          <TbCreditCardRefund
            style={{ backgroundColor: "rgb(179, 241, 179)" }}
            className="stats-icon"
          />
          <span className="bold-600-text">{<GetTotalRefunds />}</span>
          <span className="gray-text">Refunds</span>
        </div>
      </div>

      <div
        className={
          theme === "light" ? "revenue-section" : "revenue-section-dark"
        }
      >
        <div className="revenue-section-headers">
          <span className="bold-600-text">Revenue Updates</span>
          <span className="revenueUpdates-graph-legend">
            <span style={{ marginRight: "0.5rem", color: "#404041" }}>
              <GoDotFill style={{ fontSize: "15px" }} /> Expense
            </span>
            <span style={{ color: "#00BDAE" }}>
              <GoDotFill style={{ fontSize: "15px" }} /> Budget
            </span>
          </span>
        </div>

        <div className="revenue-stat-section">
          <div className="revenue-stat-left">
            <div
              className={
                theme === "light"
                  ? "ecommerce-stats-item"
                  : "ecommerce-stats-item-dark"
              }
            >
              <span className="revenue-figures">
                Rs.
                <GetBudget />
              </span>
              <span className="gray-text revenue-figure-text">Budget</span>
            </div>
            <div
              className={
                theme === "light"
                  ? "ecommerce-stats-item"
                  : "ecommerce-stats-item-dark"
              }
            >
              <span className="revenue-figures">
                Rs.
                <GetExpense />
              </span>
              <span className="gray-text revenue-figure-text">Expense</span>
            </div>
            <div
              className={
                theme === "light"
                  ? "ecommerce-stats-item"
                  : "ecommerce-stats-item-dark"
              }
            >
              <SparkLine
                currentColor="blue"
                id="line-sparkline"
                type="Line"
                height="80px"
                width="100px"
                // data={}
                color={themeButton}
              />
              <Button color={themeButton} text="Add" width="150px" />
            </div>
          </div>
          <div
            className={
              theme === "light"
                ? "ecommerce-stats-item"
                : "ecommerce-stats-item-dark"
            }
          >
            <Stacked width="330px" height="360px" />
          </div>
        </div>
        <div className="revenue-graph-section">
          <div></div>
        </div>
      </div>

      {/* <div className="more-revenue-graph-section">
        <div>
          Earning Montly : {<GetMonthlyEarning />}
          {/* <Barchart />}
        </div>
        <div>Earning Yearly : {<GetTotalEarning />} followed by graph</div>
      </div> */}

      <div
        className={
          theme === "light"
            ? "recent-transaction-section"
            : "recent-transaction-section-dark"
        }
      >
        <span className="bold-600-text">Recent Transaction</span>
        {data.recentTransactions.map((item) => {
          const Icon = iconMapping[item.icon];
          const Color = item.backgroundColor;
          return (
            <div key={item.id} className="recent-transaction-items">
              <span>
                <Icon
                  style={{
                    fontSize: "2.4rem",
                    padding: "10px",
                    backgroundColor: Color,
                    borderRadius: "10px",
                    marginRight: "0.5rem",
                  }}
                />
              </span>
              <span className="recent-transaction-type">
                <span>{item.type}</span>
                <span>{item.description}</span>
              </span>
              <span>{item.amount}</span>
            </div>
          );
        })}
      </div>

      {/* <div className="sales-overview-section">sales overview</div>

      <div className="extra-information">
        <div className="weekly-information-section">weekly information</div>
        <div className="brand-section">brands</div>
      </div>

      <div className="developer-details-section">developer</div> */}
    </div>
  );
};

export default ECommerce;
