import { FC } from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout: FC<layoutProps> = ({ children }) => {
  return <main> {children} </main>;
};

export default layout;
