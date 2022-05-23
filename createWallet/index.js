import Create from "./create";
function CreateWallet() {
  return (
    <>
      <div className="flex justify-between p-12">
        <h1 className="flex  items-center text-2xl font-bold">
          Good Evening
          <svg
            className="ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              transform="matrix(-1 0 0 1 24 0)"
              fill="white"
              fill-opacity="0.01"
            />
            <mask
              id="mask0_19571_10571"
              maskUnits="userSpaceOnUse"
              x="1"
              y="2"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 9C11 7.02543 10.1795 5.18477 8.76019 3.86765L7.28261 2.49647L9.26832 2.14956C9.83656 2.05029 10.4153 2 11 2C16.5228 2 21 6.47715 21 12C21 17.5228 16.5228 22 11 22C7.61462 22 4.51572 20.3039 2.67338 17.5396L1.55684 15.8643L3.56637 15.9868C3.71024 15.9956 3.85482 16 4 16C7.86599 16 11 12.866 11 9ZM11.0002 20C15.4185 20 19.0002 16.4183 19.0002 12C19.0002 7.74791 15.6828 4.27062 11.4951 4.01506C12.4635 5.46848 13.0002 7.19183 13.0002 9C13.0002 13.439 9.78649 17.1274 5.55878 17.8655C7.01236 19.2153 8.93922 20 11.0002 20Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_19571_10571)">
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#3754A5"
              />
            </g>
          </svg>
        </h1>
        <Create />
      </div>

      {/*  Balance */}
      <div className="flex justify-center   p-8">
        <div className="   p-12 text-center rounded shadow">
          <h1 className="text-2xl flex items-center justify-between">
            Total Balance{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#3754a5] ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <h1 className="text-4xl mt-4 font-bold">N0.00</h1>
        </div>
      </div>
      <div className="p-12">
        <div className="relative overflow-x-auto  w-fill">
          <div className="pb-4 flex items-center">
            <h1 className="grow font-bold text-1xl">Transactional History</h1>
            <button
              className="border flex  items-center border-[#3754a5] text-gray-700 py-2 px-8 rounded tracking-wide mr-4
                            font-semibold font-display focus:outline-none focus:shadow-outline  
                             "
            >
              <svg
                className="mr-4"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8.40282 13.2988H2.92322C2.22971 13.2988 1.66675 13.8519 1.66675 14.5333C1.66675 15.2137 2.22971 15.7677 2.92322 15.7677H8.40282C9.09634 15.7677 9.6593 15.2137 9.6593 14.5333C9.6593 13.8519 9.09634 13.2988 8.40282 13.2988Z"
                  fill="#3754A5"
                />
                <path
                  opacity="0.4"
                  d="M18.3334 5.31556C18.3334 4.63512 17.7705 4.08203 17.0779 4.08203H11.5983C10.9048 4.08203 10.3418 4.63512 10.3418 5.31556C10.3418 5.99691 10.9048 6.55 11.5983 6.55H17.0779C17.7705 6.55 18.3334 5.99691 18.3334 5.31556Z"
                  fill="#3754A5"
                />
                <path
                  d="M7.3982 5.31547C7.3982 6.87102 6.1158 8.13184 4.53247 8.13184C2.95007 8.13184 1.66675 6.87102 1.66675 5.31547C1.66675 3.76082 2.95007 2.5 4.53247 2.5C6.1158 2.5 7.3982 3.76082 7.3982 5.31547Z"
                  fill="#3754A5"
                />
                <path
                  d="M18.3335 14.499C18.3335 16.0536 17.0511 17.3145 15.4678 17.3145C13.8854 17.3145 12.6021 16.0536 12.6021 14.499C12.6021 12.9434 13.8854 11.6826 15.4678 11.6826C17.0511 11.6826 18.3335 12.9434 18.3335 14.499Z"
                  fill="#3754A5"
                />
              </svg>
              Filter
            </button>

            <div className="relative my-1 mx-4 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2  "
                placeholder="Search for items"
              />
            </div>
            <button
              className="border flex  items-center border-[#3754a5] text-gray-700 py-2 px-4 rounded 
                            font-semibold font-display focus:outline-none focus:shadow-outline  
                             "
            >
              <svg
                className="mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M16.6643 21.9897H7.33488C5.88835 22.0796 4.46781 21.5781 3.3989 20.6011C2.4219 19.5312 1.92041 18.1107 2.01032 16.6652V7.33482C1.92041 5.88932 2.4209 4.46878 3.3979 3.39889C4.46781 2.42189 5.88835 1.92041 7.33488 2.01032H16.6643C18.1089 1.92041 19.5284 2.4209 20.5973 3.39789C21.5733 4.46878 22.0758 5.88832 21.9899 7.33482V16.6652C22.0788 18.1107 21.5783 19.5312 20.6013 20.6011C19.5314 21.5781 18.1109 22.0796 16.6643 21.9897Z"
                  fill="#3754A5"
                />
                <path
                  d="M17.0545 10.3976L10.5018 16.9829C10.161 17.3146 9.7131 17.5 9.24574 17.5H6.95762C6.83105 17.5 6.71421 17.4512 6.62658 17.3634C6.53895 17.2756 6.5 17.1585 6.5 17.0317L6.55842 14.7195C6.56816 14.261 6.75315 13.8317 7.07446 13.5098L11.7189 8.8561C11.7967 8.77805 11.9331 8.77805 12.011 8.8561L13.6399 10.4785C13.747 10.5849 13.9028 10.6541 14.0683 10.6541C14.4286 10.6541 14.7109 10.3615 14.7109 10.0102C14.7109 9.83463 14.6428 9.67854 14.5357 9.56146C14.5065 9.52244 12.9554 7.97805 12.9554 7.97805C12.858 7.88049 12.858 7.71463 12.9554 7.61707L13.6078 6.95366C14.2114 6.34878 15.1851 6.34878 15.7888 6.95366L17.0545 8.22195C17.6485 8.81707 17.6485 9.79268 17.0545 10.3976Z"
                  fill="#3754A5"
                />
              </svg>
              Edit
            </button>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Amount Added
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount Spent
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Method
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                >
                  N0.00
                </th>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4">N0.00</td>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4  ">Visa</td>
              </tr>
              <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                >
                  N0.00
                </th>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4">N0.00</td>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4  ">Visa</td>
              </tr>
              <tr className="bg-white border-b  ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                >
                  N0.00
                </th>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4">N0.00</td>
                <td className="px-6 py-4">30/2/2022</td>
                <td className="px-6 py-4  ">Visa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CreateWallet;
