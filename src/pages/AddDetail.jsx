//@ts-check
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import DetailContext from "../context/detail/detailContext";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";
import CustomDropdown from "../components/CustomTable/customDropdown";

const gender_list = ["Male", "Female", "Other"];
const bloodgroup_list = [
  "A+ve",
  "A-ve",
  "B+ve",
  "B-ve",
  "AB+ve",
  "AB-ve",
  "O+ve",
  "O-ve",
];

const DateStyled = styled.div`
  .SingleDatePickerInput__withBorder {
    border: none !important;
  }

  .DateInput {
    border-color: rgba(209, 213, 219, 1);
    border-radius: 0.375rem; /* 6px */
    border-width: 1px;
    border-top-right-radius: 0.375rem /* 6px */;
    border-bottom-right-radius: 0.375rem /* 6px */;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    display: block;
    width: 100%;
    flex: 1 1 0%;
    appearance: none;
  }
  .DateInput_input,
  .DateInput_input_1 {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    appearance: none;
    color: #000;
    font-weight: 400;
    border: none !important;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    padding-left: 0.75rem /* 12px */;
    padding-right: 0.75rem /* 12px */;
    border-color: rgba(209, 213, 219, 1);
    border-radius: 0.375rem; /* 6px */
    border-width: 1px;
    border-top-right-radius: 0.375rem /* 6px */;
    border-bottom-right-radius: 0.375rem /* 6px */;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    display: block;
    width: 100%;
    flex: 1 1 0%;

    appearance: none;
  }
`;

const AddShare = () => {
  const { createDetail, error, clearErrors } = useContext(DetailContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState(null);
  const [date1, setDate1] = useState(null);
  const [date1focused, setDate1focused] = useState(null);
  const [diagnosis1, setDiagnosis1] = useState("");
  const [prescription1, setPrescription1] = useState("");
  const [gender, GenderDropdown] = CustomDropdown(
    "Gender",
    "Male",
    gender_list
  );
  const [bloodGroup, BloodGroupDropdown] = CustomDropdown(
    "Blood Group",
    "A+ve",
    bloodgroup_list
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const details = {
      name,
      caseNumber,
      date1,
      gender,
      bloodGroup,
      mobileNumber,
      diagnosis1,
      prescription1,
    };
    // console.log(details);
    await createDetail(details);
    setIsLoading(false);
    if (error) {
      console.log(error);
      clearErrors();
    } else {
      history.push(ROUTES.DASHBOARD);
    }
  };

  useEffect(() => {
    document.title = "Add Detail | Patient Management";
  }, [clearErrors, error]);

  return (
    <>
      <DateStyled>
        <div className="" style={{}}>
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-8 divide-y divide-gray-200">
                    <div className="pt-8">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Add Patient Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Please add one patient at a time with proper details.
                          More appointments information can be added during a
                          new appointment.
                        </p>
                      </div>
                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        {/* Input for patient name */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Patient Name
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: Jane Doe
                          </p>
                          <div className="mt-1">
                            <input
                              type="text"
                              required
                              onChange={(e) => setName(e.target.value)}
                              name="name"
                              id="name"
                              autoComplete="patient_name"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none border  py-2 px-3 flex-1 min-w-0  rounded-r-md"
                            />
                          </div>
                        </div>
                        {/* Input for caseNumber */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="caseNumber"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Case Number
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: fadvn23e423kn
                          </p>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="caseNumber"
                              required
                              id="caseNumber"
                              onChange={(e) => setCaseNumber(e.target.value)}
                              autoComplete="caseNumber"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none border  py-2 px-3 flex-1 min-w-0  rounded-r-md"
                            />
                          </div>
                        </div>
                        {/* Input for date of appointment 1 */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="date1"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Appointment Date
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: 18/04/2021
                          </p>
                          <div className="mt-1">
                            <SingleDatePicker
                              date={date1}
                              placeholder="DD/MM/YYYY"
                              required
                              onDateChange={(date) => {
                                setDate1(date);
                              }}
                              focused={date1focused}
                              onFocusChange={({ focused }) =>
                                setDate1focused(focused)
                              }
                              displayFormat="DD/MM/YYYY"
                              id="buyingDate"
                              numberOfMonths={1}
                            />
                          </div>
                        </div>
                        {/* Input for gender  */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Gender
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: Female
                          </p>
                          <div className="mt-1">
                            <GenderDropdown />
                          </div>
                        </div>
                        {/* Input for blood group */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="bloodGroup"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Blood Group
                          </label>
                          <p className="mt-1 text-sm text-gray-500">Eg: B+ve</p>
                          <div className="mt-1">
                            <BloodGroupDropdown />
                          </div>
                        </div>
                        {/* Input mobileNumber */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="mobileNumber"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Mobile Number
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: 9823853942
                          </p>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="mobileNumber"
                              required
                              onChange={(e) => setMobileNumber(e.target.value)}
                              minLength={10}
                              id="mobileNumber"
                              autoComplete="mobileNumber"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none border  py-2 px-3 flex-1 min-w-0  rounded-r-md"
                            />
                          </div>
                        </div>
                        {/* Input for diagnosis 1 */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="diagnosis1"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Diagnosis 1
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: Fever
                          </p>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="diagnosis1"
                              required
                              onChange={(e) => setDiagnosis1(e.target.value)}
                              id="diagnosis1"
                              autoComplete="postal-code"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none border  py-2 px-3 flex-1 min-w-0  rounded-r-md"
                            />
                          </div>
                        </div>

                        {/* Input for prescription 1 */}
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="prescription1"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Prescription 1
                          </label>
                          <p className="mt-1 text-sm text-gray-500">
                            Eg: Paracetamol
                          </p>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="prescription1"
                              required
                              onChange={(e) => setPrescription1(e.target.value)}
                              id="prescription1"
                              autoComplete="prescription1"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md appearance-none border  py-2 px-3 flex-1 min-w-0  rounded-r-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end">
                      <Link to={ROUTES.DASHBOARD}>
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {isLoading ? "Processing..." : "Save"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DateStyled>
    </>
  );
};

export default AddShare;
