import React from "react";

interface WhiteSpaceProps {
  height?: string; // optional custom height
}

const WhiteSpace: React.FC<WhiteSpaceProps> = ({ height = "py-[6.3rem]" }) => {
  return <div className={`bg-white w-full ${height}`} />;
};

export default WhiteSpace;
