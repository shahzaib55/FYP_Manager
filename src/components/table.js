import React from 'react';
import posts from '../data/main.json';

export const Table = () => {
  return (
    <>
    <div className='flex justify-start w-[70%]'>



    <div className="mt-8 flex flex-col w-full pl-10 ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2  md:px-6 lg:px-8">
            <div className="overflow-y-scroll  h-80  min-w-full shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 ">
                  <tr>
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
                      Supervisor
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                   
                   
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {posts
                    .map((person) => (
                      <tr key={person.projectName} className="hover:bg-gray-100">
                        <td className="md:text-left whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                          {person.name}
                        </td>
                        <td className="md:text-left whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                          {person.section}
                        </td>
                        <td className="md:text-left whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                          {person.projectName}
                        </td>
                        <td className="md:text-left whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                          {person.supervisor}
                        </td>
                        <td className="md:text-left whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                          {person.projectType}
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
    
    </>
  )
}
