import React from "react";
import "./Issues.css";
import { motion } from "framer-motion";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

const Issues = ({ theme }) => {
  return (
    <div>
      <motion.div
        className="issues-header-div"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="issues-header" style={{ color: theme.text }}>
          Issues
        </h1>
      </motion.div>
      <div className="issues-body-div">
        {issuesData["data"].map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default Issues;
