import { useParams } from "react-router";
import { useState } from "react";
import styles from "./TemplateEditor.module.css";

/* Sections and questions should be made into their own
   Components, but we are short for time. Adding additional field types would also need refactoring. */
/* This could also probably use React Memo so it's no rerendering the entire thing. would need to refactor into distinct components, though. */
const TemplateEditor = ({ isNew = false }) => {
  const createQuestion = () => {
    return { value: "" };
  };

  const createQuestions = () => {
    return [createQuestion()];
  };

  const createSection = () => {
    return {
      sectionTitle: "",
      questions: createQuestions(),
    };
  };

  const createTemplate = () => {
    return {
      title: "",
      description: "",
      date: "",
      sections: [createSection()],
    };
  };
  const [template, setTemplate] = useState(createTemplate());

  const clearForm = (e) => {
    e.preventDefault();
    setTemplate({
      title: "",
      description: "",
      date: "",
      sections: [{ questions: [{ value: "" }] }],
    });
  };

  const updateQuestion = (sectionIndex, questionIndex, updates) => {
    setTemplate((prevState) => {
      const updatedSections = prevState.sections.map((section, sectionIdx) => {
        if (sectionIdx !== sectionIndex) {
          return section;
        }

        const updatedQuestions = section.questions.map(
          (question, questionIdx) => {
            if (questionIdx !== questionIndex) return question;

            return { ...question, ...updates };
          }
        );

        return { ...section, questions: updatedQuestions };
      });
      return {
        ...prevState,
        sections: updatedSections,
      };
    });
  };

  const addSection = (e) => {
    e.preventDefault();
    setTemplate((prevState) => ({
      ...prevState,
      sections: [...prevState.sections, { questions: [{ value: "" }] }],
    }));
  };
  //   const addSectionAtIndex = (e, index) => {
  //     e.preventDefault();
  //     setTemplate((prevState) => ({
  //       ...prevState,
  //       sections: [
  //         ...prevState.sections.slice(0, index),
  //         createSection(),
  //         ...prevState.sections.slice(index, +1),
  //       ],
  //     }));
  //   };
  const removeSection = (e, index) => {
    e.preventDefault();
    setTemplate((prevState) => ({
      ...prevState,
      sections: [
        ...prevState.sections.slice(0, index),
        ...prevState.sections.slice(index + 1),
      ],
    }));
  };

  const removeQuestion = (e, sectionIndex, questionIndex) => {
    e.preventDefault();
    setTemplate((prevState) => {
      const updatedSections = [...prevState.sections];

      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        questions: [
          ...updatedSections[sectionIndex].questions.filter(
            //return all but the question
            (_, index) => index !== questionIndex
          ),
        ],
      };

      return {
        ...prevState,
        sections: updatedSections,
      };
    });
  };

  const addQuestion = (e, sectionIndex) => {
    e.preventDefault();
    setTemplate((prevState) => {
      const updatedSections = [...prevState.sections];

      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        questions: [...updatedSections[sectionIndex].questions, { value: "" }],
      };

      return {
        ...prevState,
        sections: updatedSections,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateTemplateTitle = (e) => {
    e.preventDefault();
    setTemplate((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const updateTemplateDescription = (e) => {
    e.preventDefault();
    setTemplate((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };
  const updateTemplateDate = (e) => {
    e.preventDefault();
    setTemplate((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const saveLocal = () => {
    localStorage.setItem("template", JSON.stringify(template));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{isNew ? "Create New Template" : "Template Editor"}</h2>
        <div className={styles.headerActions}>
          <button onClick={saveLocal}>Save</button>
          <button onClick={clearForm}>New Template</button>
        </div>
        <div className={styles.templateData}>
          <label htmlFor="templateTitle">
            <input
              type="text"
              name="templateTitle"
              placeholder="Template Title"
              onChange={updateTemplateTitle}
            />
          </label>
          <label htmlFor="templateDescription">
            <input
              type="text"
              name="templateDescription"
              placeholder="Template Description"
              onChange={updateTemplateDescription}
            />
          </label>
          <label htmlFor="templateDate">
            <input
              type="date"
              name="templateDate"
              id=""
              onChange={updateTemplateDate}
            />
          </label>
        </div>
        <div className={styles.editor}>
          {template.sections?.map((section, sectionIndex) => {
            return (
              <section key={`s-${sectionIndex}`} className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h3 className={styles.headerActions}>
                    section {sectionIndex + 1}
                    <button
                      onClick={(e) => {
                        removeSection(e, sectionIndex);
                      }}
                    >
                      Remove Section
                    </button>
                    {/* <button
                      onClick={(e) => {
                        addSectionAtIndex(e, sectionIndex);
                      }}
                    >
                      Add Section
                    </button> */}
                  </h3>
                </div>
                <div>
                  {section.questions?.map((question, questionIndex) => {
                    return (
                      <div key={questionIndex} className={styles.question}>
                        <label htmlFor="">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Question"
                            onChange={(e) => {
                              updateQuestion(sectionIndex, questionIndex, {
                                value: e.target.value,
                              });
                            }}
                          />
                        </label>
                        <button
                          onClick={(e) => {
                            removeQuestion(e, sectionIndex, questionIndex);
                          }}
                        >
                          Remove Question
                        </button>
                      </div>
                    );
                  })}
                  <button
                    onClick={(e) => {
                      addQuestion(e, sectionIndex);
                    }}
                  >
                    Add Question
                  </button>
                </div>
              </section>
            );
          })}
          <button onClick={addSection}>Add Section</button>
          <button>Submit</button>
        </div>
      </form>
      {/* <div>
        <code>{JSON.stringify(template)}</code>
      </div> */}
    </div>
  );
};

export default TemplateEditor;
