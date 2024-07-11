import React from "react";
import styles from "@/styles/landing.module.css";

const Landing = () => {
  return (
    <div className="space-y-12 pt-[12rem] text-center">
      <div className="text-center text-5xl font-bold">
        Services offered
        <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
          <span
            className={`${styles.animate_word} col-span-full row-span-full`}
          >
            Subscription Funds
          </span>
          <span
            className={`${styles.animate_word_delay_1} col-span-full row-span-full`}
          >
            Automated Payments
          </span>
          <span
            className={`${styles.animate_word_delay_2} col-span-full row-span-full`}
          >
            Tokenized Payments
          </span>
          <span
            className={`${styles.animate_word_delay_3} col-span-full row-span-full`}
          >
            Recurring Payments
          </span>
          <span
            className={`${styles.animate_word_delay_4} col-span-full row-span-full`}
          >
            Invoice Management
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
