import React from "react";
import Dashboard from "../pages/dashboard";
import "../App.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
const project = [
  {
    id: "1",
    name: "Spartans",
    supervisor: "Sir Jawad",
    projectName: "Game",
    section: "7C",
    contact: "03000000000",
    edit: <BiEdit />,
    delete: <RiDeleteBinLine />,
  },
  {
    id: "1",
    name: "Spartans",
    supervisor: "Sir Jawad",
    projectName: "Game",
    section: "7C",
    contact: "03000000000",
    edit: <BiEdit />,
    delete: <RiDeleteBinLine />,
  },
  {
    id: "1",
    name: "Spartans",
    supervisor: "Sir Jawad",
    projectName: "Game",
    section: "7C",
    contact: "03000000000",
    edit: <BiEdit />,
    delete: <RiDeleteBinLine />,
  },
  {
    id: "1",
    name: "Spartans",
    supervisor: "Sir Jawad",
    projectName: "Game",
    section: "7C",
    contact: "03000000000",
    edit: <BiEdit />,
    delete: <RiDeleteBinLine />,
  },
  {
    id: "1",
    name: "Spartans",
    supervisor: "Sir Jawad",
    projectName: "Game",
    section: "7C",
    contact: "03000000000",
    edit: <BiEdit />,
    delete: <RiDeleteBinLine />,
  },
  
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-col pt-5 mx-5 space-y-6">
        <div className="flex flex-row h-10">
          <div className="flex w-[50%] items-center justify-start">
            <h1 className="text-xl font-semibold text-gray-600">
              Projects Record
            </h1>
          </div>
          <div className="flex w-[50%]  items-center justify-end mr-6">
            <button className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-5  text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 ">
              Add
            </button>
          </div>
        </div>
        <div className="w-full overflow-y-auto shadow-lg rounded-sm">
          <table className="w-full divide-y divide-gray-300 table-auto border-collapse">
            <thead className="bg-gray-50 sticky">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  Group Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  supervisor
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  project
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  Section
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  Section
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  Edit
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200 bg-white overflow-y-auto ">
              {project.map((items, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <a href="#" className="hover:text-indigo-500">
                      {items.id}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-5  py-4 text-sm text-gray-500 content-start">
                    {items.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {items.supervisor}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {items.projectName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {items.section}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {items.contact}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 hover:text-indigo-500">
                    {items.edit}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 hover:text-indigo-500">
                    {items.delete}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
