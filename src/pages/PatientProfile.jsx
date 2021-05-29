// @ts-check
import MoreInfoComponent from "../components/MoreInfoComponent";
import InfoTable from "../components/InfoTable";
import AddInfoTable from "../components/AddInfoTable";

const PatientProfile = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <MoreInfoComponent />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AddInfoTable />
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <InfoTable />
      </div>
    </div>
  );
};

export default PatientProfile;
