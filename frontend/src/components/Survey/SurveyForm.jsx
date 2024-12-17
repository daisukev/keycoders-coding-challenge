const SurveyForm = ({ children, ...props }) => {
  /* 
  
      Let's assume that a form is going to be sent to a user. formatted how?}
      {
      Section: [{},{},{}] // would be its own Component. The response from server should send sections based on the user requesting the survey.
      }

      sections have sets of questions.

      questions have their text, then their input fields, of varying types
      {
        question: "What did you accomplish?",
        responseType: 1, // Text
      }
      */
  return <form {...props}>{children}</form>;
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
