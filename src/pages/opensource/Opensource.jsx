import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

const Opensource = ({ theme, onToggle }) => {
  return (
    <div className="opensource-main">
      <Header theme={theme} />
      <Organizations theme={theme} />
      <OpensourceCharts theme={theme} />
      <PullRequests theme={theme} />
      <Issues theme={theme} />
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Opensource;
