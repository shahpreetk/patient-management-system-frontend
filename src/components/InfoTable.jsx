// @ts-check
const InfoTable = () => {
  // changer personIdx to index of map, so that it will be alternate colors
  let personIdx = 0;
  let id = 0;

  const handleDeleteDiagnosis = (id) => {
    const userFeedback = window.confirm(
      "Are you sure you want to delete this diagnosis?"
    );
    if (userFeedback) {
      console.log(id, "Deleted!");
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                  </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Diagnosis
                  </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Prescription
                  </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Comments
                  </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">28 May, 2021
                    </td>
                    <td className="px-6 py-4 text-md text-gray-700">Headache</td>
                    <td className="px-6 py-4 text-md text-gray-700">Crocin Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quo. </td>
                    <td className="px-6 py-4 text-md text-gray-700">Constant headache over a week. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iure. </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-md font-medium">
                      <button
                        onClick={() => handleDeleteDiagnosis(id)} className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoTable;
