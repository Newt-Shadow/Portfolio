import React from "react";
<<<<<<< Updated upstream
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart";
import IssueChart from "../../components/issueChart/IssueChart";
import { motion } from "framer-motion";
import "./OpensourceCharts.css";

const OpensourceCharts = ({ theme }) => {
  return (
    <div className="main-div">
      <motion.div
        className="os-charts-header-div"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="os-charts-header" style={{ color: theme.text }}>
          Contributions
        </h1>
      </motion.div>
      <div className="os-charts-body-div">
        <PullRequestChart />
        <IssueChart />
      </div>
    </div>
  );
};
=======
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
>>>>>>> Stashed changes

export default OpensourceCharts;
