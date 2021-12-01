import styles from "./Comments.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useRef } from "react";
const comments = [
  {
    img: "safadf",
    name: "Diego Morata",
    position: "| Costumer",
    text: "Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along with material..",
  },
  {
    img: "safadf",
    name: "Kurt Mayert",
    position: "| Costumer",
    text: "Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along with material..",
  },
  {
    img: "safadf",
    name: "Arthur Morgan",
    position: "| Costumer",
    text: "Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along with material..",
  },
  {
    img: "safadf",
    name: "Jeffrey Epstein",
    position: "| Costumer",
    text: "Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along with material..",
  },
];

const Comments = () => {
  // const commentRefs = [];

  const commentRefs = useRef([]);
  commentRefs.current = [];
  const addCommentRef = (element) => {
    if (element && !commentRefs.current.includes(element)) {
      commentRefs.current.push(element);
    }
  };
  const rightButtonHandler = () => {
    commentRefs.current.forEach((element) => {
      element.classList.replace(styles.commentBox, styles.commentBoxActivated);
    });
  };
  const leftButtonHandler = () => {
    commentRefs.current.forEach((element) => {
      element.classList.replace(styles.commentBoxActivated, styles.commentBox);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.headerTextPrimary}>Müştəri rəyləri</div>
          <div className={styles.headerTextSecondary}>
            Rəyləri aşağıdan oxuya bilərsiniz
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.smallButton} onClick={leftButtonHandler}>
            <BsArrowLeft color={"inherit"} style={{ fontSize: "2.4rem" }} />
          </div>
          <div className={styles.smallButton} onClick={rightButtonHandler}>
            <BsArrowRight color={"inherit"} style={{ fontSize: "2.4rem" }} />
          </div>
        </div>
      </div>

      <div className={styles.commentContainer}>
        <div className={styles.hiddenWrapper}>
          <div className={styles.commentsWrapper}>
            {comments.map((comment, index) => {
              // commentRefs[index] = commentRef;
              // const refArray = [commentRef, ...refArray];
              return (
                <div
                  key={index}
                  className={styles.commentBox}
                  ref={addCommentRef}
                >
                  <div className={styles.boxContent}>
                    <div className={styles.commentImg} />
                    <div className={styles.title}>
                      <div className={styles.commentName}>{comment.name}</div>
                      <div className={styles.commentPosition}>
                        {comment.position}
                      </div>
                    </div>
                    <div className={styles.text}>{comment.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
