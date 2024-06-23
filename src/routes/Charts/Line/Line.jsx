import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import "./Line.css";
import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";

const Line = () => {
  const data = [
    { month: "Jan", sales: 35 },
    { month: "Feb", sales: 28 },
    { month: "Mar", sales: 34 },
    { month: "Apr", sales: 32 },
    { month: "May", sales: 40 },
    { month: "Jun", sales: 32 },
    { month: "Jul", sales: 35 },
    { month: "Aug", sales: 55 },
    { month: "Sep", sales: 38 },
    { month: "Oct", sales: 30 },
    { month: "Nov", sales: 25 },
    { month: "Dec", sales: 32 },
  ];

  const data2 = [
    { month: "Jan", sales: 65 },
    { month: "Feb", sales: 48 },
    { month: "Mar", sales: 34 },
    { month: "Apr", sales: 12 },
    { month: "May", sales: 10 },
    { month: "Jun", sales: 32 },
    { month: "Jul", sales: 75 },
    { month: "Aug", sales: 35 },
    { month: "Sep", sales: 55 },
    { month: "Oct", sales: 90 },
    { month: "Nov", sales: 15 },
    { month: "Dec", sales: 72 },
  ];
  const primaryxAxis = { valueType: "Category" };
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Chart" title="Line Chart" />
      <ChartComponent
        id="charts"
        primaryXAxis={primaryxAxis}
        height="470px"
        tooltip={{ enable: true }}
        legendSettings={{
          visible: true,
          position: "Top",
        }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, LineSeries, Category]}
        />
        <SeriesCollectionDirective xName="month" yName="sales">
          <SeriesDirective
            dataSource={data}
            xName="month"
            yName="sales"
            name="Sales A"
          />
          <SeriesDirective
            dataSource={data2}
            xName="month"
            yName="sales"
            name="Sales B"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
export default Line;
