import classes from "./Modal.module.css";

export default function Modal({ children, modalHandler }) {
  return (
    <>
      <div className={classes.backdrop} onClick={modalHandler}></div>
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
