import styles from "./Survey.module.css";
import { NavLink, Outlet } from "react-router";
import WorkList from "../components/WorkList";
const Survey = () => {
  const surveys = [
    { id: 1, title: "Survey 1", requester: "PM Name One" },
    { id: 2, title: "Survey 2", requester: "Candace O'neil" },
    { id: 3, title: "Survey 3", requester: "Jerry Garcia" },
    { id: 4, title: "Survey 4", requester: "Jerry Rice" },
    { id: 5, title: "Survey 5", requester: "Jerry Manitoba" },
  ];

  /* each work list item should return another component */
  return (
    <div className={styles.container}>
      <WorkList>
        {surveys.map((survey, index) => (
          <NavLink
            to={`/surveys/${survey.id}`}
            key={survey.id}
            className={styles.workListItem}
          >
            <div>
              {survey.title}
              <div>Requested by {survey.requester}</div>
            </div>
          </NavLink>
        ))}
      </WorkList>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Survey;
