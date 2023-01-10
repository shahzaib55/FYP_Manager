import React, { useEffect, useState } from "react";
import people from "../../data/project.json";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from "../projects/pagination";

export default function Groups({ posts }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.id === "btn") {
      navigate("/form");
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
              className="border border-gray-300 rounded-md focus:outline-none focus:ring-0 ring-0 w-full  mr-2 text-gray-600 "
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
                      Section
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
                      Leader
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
                      Student 1
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Student 2
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Student 3
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
                        user.section.includes(query) ||
                        user.id.includes(query) ||
                        user.name.includes(query) ||
                        user.supervisor.includes(query) ||
                        user.leader.includes(query) 
                       
                    )
                    .map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.section}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.project}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.leader}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.supervisor}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.member1}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.member2}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 hover:text-indigo-500">
                          {person.member3}
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
