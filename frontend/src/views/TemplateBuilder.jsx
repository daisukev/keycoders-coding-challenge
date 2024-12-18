import { useState } from "react";
import { useParams } from "react-router";
import ArrowRightCircleSVG from "../components/icons/ArrowRightCircledSVG";
import styles from "./TemplateBuilder.module.css";
import WorkList from "../components/WorkList";
import WorkListItem from "../components/WorkListItem";
import uuidv4 from "../utils/uuidv4";

const templates = [
  { id: 1, title: "Monthly MSR AMP" },
  { id: 2, title: "Weekly Report NP2" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
  { id: 3, title: "Employee Questionnaire" },
];
const TemplateBuilder = () => {
  return (
    <div className={styles.container}>
      <h2>Template Builder</h2>
      <WorkList>
        <WorkListItem to={"/templates/new"}>
          <div className={styles.templateItem}>
            <div>Create New Template</div>
            <ArrowRightCircleSVG
              width={25}
              height={25}
              className={styles.arrowRight}
            />
          </div>
        </WorkListItem>
        <hr className={styles.bigSeparator} />
        <strong>Template Repository</strong>
        {templates.map((template) => {
          return (
            <WorkListItem to={`/templates/${template.id}`} key={uuidv4()}>
              <div className={styles.templateItem} key={template.id}>
                <div>{template.title}</div>
                <ArrowRightCircleSVG
                  width={25}
                  height={25}
                  className={styles.arrowRight}
                />
              </div>
            </WorkListItem>
          );
        })}
      </WorkList>
    </div>
  );
};

export default TemplateBuilder;
