import React from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.jsx";
import IssueChart from "../../components/issueChart/IssueChart.jsx";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

function OpensourceCharts(props) {
  const { theme } = props;

  return (
    <div className="main-div">
      <div className="os-charts-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="os-charts-header" style={{ color: theme.text }}>
            Contributions
          </h1>
        </Fade>
      </div>
      <div className="os-charts-body-div">
        <PullRequestChart />
        <IssueChart />
      </div>
    </div>
  );
}

export default OpensourceCharts;
