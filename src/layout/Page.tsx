import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
interface PageProps {
  children?: any;
}
const Page: FC<PageProps> = ({ children }) => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={backToHome}> Back to home page</button>
      <main>{children}</main>
    </div>
  );
};

export default Page;
