import React, { FC } from "react";
import Balancer from "react-wrap-balancer";

type TitleSectionProps = {
  title: string;
  subheading?: string;
  pill: string;
};

const TitleSection: FC<TitleSectionProps> = ({ title, subheading, pill }) => {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center">
        <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple">
          <div className="rounded-full px-3 py-1 dark:bg-black">{pill}</div>
        </article>
        {subheading ? (
          <>
            <Balancer className="text-3xl sm:text-5xl sm:max-3-[750px] md:text-center font-semibold">
              {title}
            </Balancer>
            <p className="dark:text-washed-purple-700 sm:max-w-[450] md:text-center">
              {subheading}
            </p>
          </>
        ) : (
          <Balancer className="text-left text-4xl sm:text-6xl sm:max-2-[850px] md:text-center font-semibold">
            {title}
          </Balancer>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;
