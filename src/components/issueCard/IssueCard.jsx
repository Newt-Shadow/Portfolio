import React from "react";
import "./IssueCard.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";

const IssueCard = ({ issue }) => {
  let iconPR;
  let bgColor;

  if (issue.closed === false) {
    iconPR = {
      iconifyClass: "octicon:issue-opened",
      style: { color: "#28a745" },
    };
    bgColor = "#dcffe4";
  } else {
    iconPR = {
      iconifyClass: "octicon:issue-closed",
      style: { color: "#d73a49" },
    };
    bgColor = "#ffdce0";
  }

  const subtitleString = `#${issue.number} opened on ${issue.createdAt.split("T")[0]}`;

  let assignee = <noscript></noscript>;

  if (issue.assignees.nodes.length > 0) {
    const name = issue.assignees.nodes[0].name;
    assignee = (
      <OverlayTrigger
        key={name}
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top`}>
            <strong>{`Assigned to ${name}`}</strong>
          </Tooltip>
        }
      >
        <a
          href={issue.assignees.nodes[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="assigned-to-img"
            src={issue.assignees.nodes[0].avatarUrl}
            alt=""
          />
        </a>
      </OverlayTrigger>
    );
  }

  return (
    <motion.div
      className="issue-card"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${iconPR.style.color}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="issue-top">
        <div className="issue-header">
          <span
            className="iconify issue-icons"
            data-icon={iconPR.iconifyClass}
            style={iconPR.style}
            data-inline="false"
          ></span>
          <div className="issue-title-header">
            <p className="issue-title">
              <a
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {issue.title}
              </a>
            </p>
            <p className="issue-subtitle">{subtitleString}</p>
          </div>
        </div>
      </div>
      <div className="issue-down">
        <div className="assignee-repo">
          <p className="parent-repo">
            Repository:{" "}
            <a
              style={{ color: iconPR.style.color }}
              href={issue.repository.url}
            >
              {issue.repository.owner.login}/{issue.repository.name}
            </a>
          </p>
          <div className="assignee-info">
            {assignee}
          </div>
        </div>
        <div className="owner-img-div">
          <a
            href={issue.repository.owner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="owner-img"
              src={issue.repository.owner.avatarUrl}
              alt=""
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default IssueCard;
