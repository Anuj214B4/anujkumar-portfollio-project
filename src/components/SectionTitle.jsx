import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-14 text-center">
      <h2
        className="text-4xl md:text-5xl font-bold text-sky-400"
        style={{ fontFamily: "Poppins" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
