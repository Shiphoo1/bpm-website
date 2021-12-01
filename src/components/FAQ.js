import styles from "./FAQ.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useRef } from "react";
import QuestionForm from "./QuestionForm";
// import { motion } from "framer-motion";
const questions = [
  {
    number: "01",
    title: "Xərcim nə qədər olacaq?",
    text: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
    active: false,
  },
  {
    number: "02",
    title: "Xüsusi təlim keçməliyəm?",
    text: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
    active: false,
  },
  {
    number: "03",
    title: "Bu proqram təminatı mənim işimə uyğundurmu?",
    text: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
    active: false,
  },

  {
    number: "04",
    title: "Özümə uyğun paket və funksionallığı necə seçim?",
    text: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
    active: false,
  },
  {
    number: "05",
    title: "Özümə uyğun paket və funksionallığı necə seçim?",
    text: `The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."`,
    active: false,
  },
];

const Component = ({ question, index }) => {
  const [activeStatus, setStatus] = useState(question.active);
  const questionRef = useRef(null);
  const questionButtonHandler = () => {
    setStatus((prev) => !prev);
    // console.log(index);
    if (questionRef.current.classList.contains(styles.questionWrapper)) {
      questionRef.current.classList.replace(
        styles.questionWrapper,
        styles.questionWrapperActivated
      );
    } else if (
      questionRef.current.classList.contains(styles.questionWrapperActivated)
    ) {
      questionRef.current.classList.replace(
        styles.questionWrapperActivated,
        styles.questionWrapper
      );
    }
    // console.log(questionRef.current.classList);
  };

  return (
    <div className={styles.questionWrapper} ref={questionRef}>
      <div className={styles.boxWrapper}>
        <div className={styles.questionBox}>
          <div
            style={
              activeStatus
                ? { color: "#3B71FE", transition: "all 200ms" }
                : null
            }
            className={styles.number}
          >
            {question.number}
          </div>
          <div className={styles.title}>{question.title}</div>
          <div
            className={styles.button}
            onClick={() => questionButtonHandler(question)}
          >
            <MdKeyboardArrowDown
              className={activeStatus ? styles.logo : styles.logoActivated}
              size={"2rem"}
            />
          </div>
        </div>
        <div className={styles.text}>{question.text}</div>
      </div>
    </div>
  );
};
const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Tez-tez verilən suallar</div>
      {questions.map((question, index) => {
        return <Component question={question} index={index} />;
      })}
      <div className={styles.questionFormWrapper}>
        <div
          className={styles.image}
          style={{ background: "url(/question.svg)" }}
        ></div>
        <div className={styles.questionForm}>
          <div className={styles.formText}>Bizə sual verin</div>
          <div className={styles.formP}>
            Maecenas eu massa dolor fermentum quis dictum etiam nisi. In ac
            dolor etiam congue vestibulum quam eget congue ut. Cras adipiscing
            mauris aliquet in. Elit eget{" "}
          </div>

          <QuestionForm></QuestionForm>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
