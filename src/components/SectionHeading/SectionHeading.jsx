const SectionHeading = (props) => {
  const { headings, highlight } = props;
  const heading = headings.split(" ");
  const heading1 = heading[0];
  const heading2 = heading.slice(1).join(" ");
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">
        <span className={`${highlight === "first" && "text-[#F1494C]"}`}>
          {heading1}
        </span>{" "}
        <span className={`${highlight === "second" && "text-[#F1494C]"}`}>
          {heading2}
        </span>
      </h2>
    </div>
  );
};

export default SectionHeading;
