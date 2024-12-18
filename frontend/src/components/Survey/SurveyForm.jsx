import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./SurveyForm.module.css";

const SurveyForm = ({ children, ...props }) => {
  const fetchSurvey = (surveyId) => {
    const surveys = [
      {
        id: 1,
        title: "Survey 1",
        requester: "PM Name One",
        sections: [
          {
            sectionId: 1,
            sectionTitle: "Section 1",
            questions: [
              {
                title: "What did you accomplish this month?",
                inputTypeId: 1, //indicates the type of form element this is using.
              },
              {
                title: "Which teammate would you like to highlight?",
                inputTypeId: 1, //indicates the type of form element this is using.
              },
            ],
          },
          {
            sectionId: 2,
            sectionTitle: "Workplace",
            questions: [
              {
                title: "Total Travel Expenses?",
                inputTypeId: 2, //indicates the type of form element this is using.
              },
            ],
          },
        ],
      },
      { id: 2, title: "Survey 2", requester: "Candace O'neil" },
      { id: 3, title: "Survey 3", requester: "Jerry Garcia" },
      { id: 4, title: "Survey 4", requester: "Jerry Rice" },
      { id: 5, title: "Survey 5", requester: "Jerry Manitoba" },
    ];
    // const res = await fetch();
    const result = surveys.filter((survey) => {
      return survey.id == surveyId;
    });
    return result[0];
  };

  const { surveyId } = useParams();
  const [currentSurvey, setCurrentSurvey] = useState(fetchSurvey(surveyId));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCurrentSurvey(fetchSurvey(surveyId));
  }, [surveyId]);

  return (
    <article className={styles.survey}>
      <h2>{currentSurvey.title}</h2>
      <p>Requested by: {currentSurvey.requester}</p>
      <form {...props}>
        {currentSurvey.sections?.map((section) => {
          return (
            <section key={section.surveyId} className={styles.surveySection}>
              <h3 className={styles.sectionTitle}>{section.sectionTitle}</h3>
              {section.questions.map((question) => {
                return (
                  <div key="" className={styles.question}>
                    <label htmlFor={question.name}>{question.title}</label>
                    <input
                      type="text"
                      name={question.name}
                      id={question.name}
                    />
                  </div>
                );
              })}
            </section>
          );
        })}
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </article>
  );
};

export default SurveyForm;

/* 
1	Text	Text	Enter a text in a box or multi-line box.
2	Numeric-Integer	Numeric as Integer	Enter a numeric value as integer.
3	Numeric-Decimal	Numeric as Decimal	Enter a numeric value to be formatted as decimal (#,##0.00).
4	Numeric-Currency	Numeric as Currency	Enter a numeric value to be formatted as currency ($#,##0.00).
5	Multi-Choice-Radio	Multi-Choice as Radio	Select an option from two or more choices.
6	Multi-Choise-Checkbox	Multi-Choice as Checkbox	Select one or multiple options from two or more choices.

*/
