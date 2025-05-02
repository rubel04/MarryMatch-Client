const SectionHeading = (props) => {
  const { heading1, heading2, desc, highlight } = props;
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold">
        <span className={`${highlight === "first" && "text-[#F1494C]"}`}>
          {heading1}
        </span>
        <span className={`${highlight === "second" && "text-[#F1494C]"} ml-2`}>
          {heading2}
        </span>
      </h2>
      <p className="text-gray-600 mt-1">{desc}</p>
    </div>
  );
};

export default SectionHeading;
