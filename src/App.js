import {
  faCaretDown,
  faCaretUp,
  faChartLine,
  faCoins,
  faDollar,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { linearProgressClasses } from "@mui/material/LinearProgress";

import "./App.css";
import { green } from "@mui/material/colors";
import { StackChart } from "./StackChart";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      <SummaryBoxList />
      <OverView />
    </div>
  );
}
function OverView() {
  return (
    <div className="overview-container">
      <StackChart />
    </div>
  );
}
function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
    },
  ];

  return (
    <div className="summary-box-list">
      {dataList.map((data) => {
        return <SummaryBar data={data} />;
      })}
    </div>
  );
}

function SummaryBar({ data }) {
  const CustomProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: data.iconColor,
    },
  }));
  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : ""}
        {data.number}
      </h2>
      <CustomProgress variant="determinate" value={50} color="primary" />
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p className="ptag">
          <FontAwesomeIcon
            style={{ color: data.performance === "up" ? "green" : "red" }}
            icon={data.performance === "up" ? faCaretUp : faCaretDown}
          />{" "}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}
