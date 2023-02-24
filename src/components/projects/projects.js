import React, { useEffect, useState } from "react";
import people from "../../data/project.json";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from "./pagination";

export default function Projects({ posts }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.id === "btn") {
      navigate("AddProject");
    }
  };
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 pt-5 h-[80%]">
      <div className="flex flex-row ">
        <div className="flex w-full items-center justify-start">
          <h1 className="text-xl font-semibold text-gray-600">
            Projects Record
          </h1>
        </div>
        <div className="flex items-center justify-end mr-6">
          <div className="mr-2">
            <input
              id="search"
              name="seaarch"
              type="text"
              autoComplete=""
              onChange={(e) => setQuery(e.target.value)}
              className="border h-9 border-gray-300 rounded-md focus:outline-none focus:ring-0 ring-0 w-full  mr-2 text-gray-600 shadow-md"
              placeholder="Search..."
            />
          </div>

          <button
            id="btn"
            onClick={handleClick}
            className="bg-indigo-500 btn items-center rounded-md border border-transparent  px-5 py-1 text-base font-medium text-sm text-white shadow-md  focus:outline-none ring-0 "
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 ">
          <div className="  py-2 ">
            <div className="overflow-y-scroll overflow-x-scroll h-80  w-[100%] shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role No
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Section
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Project
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Supervisor
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Company Contact
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {posts
                    .filter(
                      (user) =>
                        user.section.toLowerCase().includes(query) ||
                        user.id.includes(query) ||
                        user.name.toLowerCase().includes(query) ||
                        user.supervisor.toLowerCase().includes(query) ||
                        user.email.toLowerCase().includes(query) ||
                        user.projectName.toLowerCase().includes(query)
                    )
                    .map((person) => (
                      <tr key={person.id} className="hover:bg-gray-100">
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.rollNo}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.section}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.contact}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.projectName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.supervisor}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 hover:text-indigo-500">
                          {person.companyName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.Ccontact}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.projectType}
                        </td>

                        <td className="relative text-gray-500 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className=" hover:text-indigo-900">
                            <BiEdit />
                          </a>
                        </td>
                        <td className="relative text-gray-500 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className=" hover:text-indigo-900">
                            <RiDeleteBinLine />
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
