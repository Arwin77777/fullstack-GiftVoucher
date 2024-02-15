
import Chart from "react-apexcharts";
import './CustomerReview.css'

const SalesHourly = () => {
  const data = {
    series: [
      {
        name: "Sold Items",
        data: [40,30,10,60,50,70,76,55],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div style={{background:'white'}} className="CustomerReview">
    <h3 style={{color:'gray'}}>Sales Hourly</h3>
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default SalesHourly;
