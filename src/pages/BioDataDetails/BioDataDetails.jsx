import { useLoaderData } from "react-router-dom";

const BioDataDetails = () => {
    const bioData = useLoaderData();
    console.log(bioData);
    return (
        <div>
            details of {bioData.name}
        </div>
    );
};

export default BioDataDetails;