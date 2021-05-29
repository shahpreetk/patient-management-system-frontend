// @ts-check
import { useContext, useEffect } from "react";
import MoreInfoComponent from "../components/MoreInfoComponent";
import InfoTable from "../components/InfoTable";
import AddInfoTable from "../components/AddInfoTable";
import AuthContext from "../context/auth/authContext";

const PatientProfile = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    document.title = "Patient Management System";
    document.head.lang = "en";
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
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
