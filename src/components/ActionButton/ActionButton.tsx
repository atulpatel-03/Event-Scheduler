import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  label: string;
  onClick: () => void;

  className?: string;
}

/**
 * ActionButton Component:
 * - A reusable button component with dynamic label, click handler, and styles.
 */

const ActionButton = ({
  label,
  onClick,
  className = "",
}: ActionButtonProps) => (
  <button
    className={`${styles.btn} ${styles[className]}`}
    onClick={onClick}
    aria-label={label}
  >
    {label}
  </button>
);

export default ActionButton;
