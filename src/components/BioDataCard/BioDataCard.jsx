
const BioDataCard = (props) => {
  const { bioData } = props;
  const {
    biodataType,
    name,
    profileImage,
    age,
    occupation,
    permanentDivision,
  } = bioData;
  return (
    <div className="overflow-hidden shadow hover:shadow-md">
      <div>
        <img className="w-full h-56 object-cover" src={profileImage} alt="profile image" />
      </div>
      <div className="text-sm text-gray-600 p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p><span className="font-semibold">Gender:</span> {biodataType}</p>
        <p><span className="font-semibold">Age:</span> {age}</p>
        <p><span className="font-semibold">Occupation:</span> {occupation}</p>
        <p><span className="font-semibold">Permanent Division:</span> {permanentDivision}</p>
      <div className="mt-4">
      <button className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold p-2 w-full rounded cursor-pointer">View Profile</button>
      </div>
      </div>

    </div>
  );
};

export default BioDataCard;
