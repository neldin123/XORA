import Marker from "./Marker";

const Inner = ({ icon, text }) => {
  return (
    <>
      <span className="relative flex items-center min-h-15 px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-px">
          <Marker />
        </span>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {text}
        </span>
      </span>
      <span className="glow-before"/>
    </>
  );
};

export default Inner;
