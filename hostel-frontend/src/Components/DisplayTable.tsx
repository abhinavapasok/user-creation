import { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type FormValues = {
  name: string;
  admi_no: string;
  admi_year: number;
  admi_type: string;
  admi_category: string;
  mobile_no: string;
  email: string;
  income: number;
  parent_name: string;
  parent_mobile: string;
  distance: string;
  gender: string;
  e_grants_category: string;
};

function DisplayTable() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {

      console.log("hi ds table get details");
      const response = await fetch(`${baseUrl}/get-details`);
      const jsondata = await response.json();
      setData(jsondata);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const deleteUser = async (e:any,id: any) => {
    e.stopPropagation();
    console.log("hi ds table get details");
    try {
      const res = await fetch(`${baseUrl}/remove-user/${id}`, {
        method: "DELETE",
      });
      console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
    getData()
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="relative overflow-x-auto m-2">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-l text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Admission No
            </th>
            <th scope="col" className="px-6 py-3">
              Admission Year
            </th>
            <th scope="col" className="px-6 py-3">
              Admission Type
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              E-Grants Category
            </th>
            <th scope="col" className="px-6 py-3">
              Anual Income
            </th>
            <th scope="col" className="px-6 py-3">
              Parent Name
            </th>
            <th scope="col" className="px-6 py-3">
              Distance
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: FormValues) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item.admi_no}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.admi_no}</td>
                <td className="px-6 py-4">{item.admi_year}</td>
                <td className="px-6 py-4">{item.admi_type}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item.admi_category}</td>
                <td className="px-6 py-4">{item.e_grants_category}</td>
                <td className="px-6 py-4">{item.income}</td>
                <td className="px-6 py-4">{item.parent_name}</td>
                <td className="px-6 py-4">{item.distance}</td>
                <td className="px-6 py-4">
                  <button onClick={(e) => deleteUser(e,item.admi_no)}>
                  <DeleteOutlineIcon/>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
