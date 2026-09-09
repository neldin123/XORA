import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-lg:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm ">
              Flexible Pricing For Teams of all sizes
            </h3>
            <div className="relative z-4 mx-auto flex w-93.75 rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-77.5">
              <button
                className={clsx(
                  "pricing-head_btn cursor-pointer",
                  monthly && "text-p4",
                )}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx(
                  "pricing-head_btn cursor-pointer",
                  !monthly && "text-p4",
                )}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full",
                )}
              />
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outlines"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* Start Pricing */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6 ">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_even pricing-plan_odd relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl w-[calc(33.33%+2px)] "
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl " />
                )}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11",
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-30" : "size-22",
                    )}
                    loading="lazy"
                  />
                </div>
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12",
                  )}
                ></div>
              </div>
            ))}
          </div>
          {/* End Pricing */}
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
