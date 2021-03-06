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
  const { detail, getOneDetail } = detailContext;
  const _id = document.location.pathname.split("/")[2];

  useEffect(() => {
    document.title = "Patient Management System";
    document.head.lang = "en";
    authContext.loadUser();
    getOneDetail(_id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-gray-100">
      {!detail ? (
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
              name={detail.name}
              caseNumber={detail.caseNumber}
              height={detail.height}
              weight={detail.weight}
              gender={detail.gender}
              mobileNumber={detail.mobileNumber}
              bloodGroup={detail.bloodGroup}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AddInfoTable />
          </div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <InfoTable id1={detail._id} medicals={detail.medicals} />
          </div>
        </>
      )}
    </div>
  );
};

export default PatientProfile;
