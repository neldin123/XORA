import clsx from "clsx";
import Inner from "./Inner";

const Button = ({ icon, href, containerClassName, children, markerFill }) => {
  return href ? (
    <a
      href=""
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
    >
      <Inner icon={icon} text={children} markerFill={markerFill} />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
    >
      <Inner icon={icon} text={children} />
    </button>
  );
};

export default Button;
