const SectionHeading = (props) => {
  const { headings, desc, highlight } = props;
  const heading = headings.split(" ");
  const heading1 = heading[0];
  const heading2 = heading.slice(1).join(" ");
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold">
        <span className={`${highlight === "first" && "text-[#F1494C]"}`}>
          {heading1}
        </span>{" "}
        <span className={`${highlight === "second" && "text-[#F1494C]"}`}>
          {heading2}
        </span>
      </h2>
      <p className="text-gray-600 mt-1">
          {desc}
        </p>
    </div>
  );
};

export default SectionHeading;
