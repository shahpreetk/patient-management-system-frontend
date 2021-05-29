// @ts-check
import { useContext, useEffect } from "react";
import MoreInfoComponent from "../components/MoreInfoComponent";
import InfoTable from "../components/InfoTable";
import AddInfoTable from "../components/AddInfoTable";
import AuthContext from "../context/auth/authContext";
import DetailContext from "../context/detail/detailContext";

const PatientProfile = () => {
  const authContext = useContext(AuthContext);
  const detailContext = useContext(DetailContext);
  const { current, loading } = detailContext;

  useEffect(() => {
    document.title = "Patient Management System";
    document.head.lang = "en";
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  console.log(current);
  return (
    <div className="bg-gray-100">
      {loading ? (
        <section>
          <div className="flex">
            <div className="m-auto">
              <img
                className=""
                width="128px"
                height="128px"
                src="/images/loader.gif"
                alt="loader"
              />
            </div>
          </div>
        </section>
      ) : (
        <>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <MoreInfoComponent
              name={current.name}
              caseNumber={current.caseNumber}
              height={current.height}
              weight={current.weight}
              gender={current.gender}
              mobileNumber={current.mobileNumber}
              bloodGroup={current.bloodGroup}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AddInfoTable />
          </div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <InfoTable medicals={current.medicals} />
          </div>
        </>
      )}
    </div>
  );
};

export default PatientProfile;
