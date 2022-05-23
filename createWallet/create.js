import React, { Component } from "react";
import Modal from "react-awesome-modal";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <input
          type="button"
          className="bg-[#3754a5] text-gray-100 py-4 px-8 rounded tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline  hover:cursor-pointer hover:bg-[#3754a5]
                                                "
          value="Create Wallet"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          width="700"
          height="800"
          effect="fadeInLeft"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <form className="px-12 py-8 text-left">
              <h1 className="py-4 text-[#3755a5] text-2xl font-bold">
                Create Wallet
              </h1>
              <p className="text-gray-500 font-light border-b pb-6">
                New payment methods do not automatically pay for your
                subscriptions. After you add a new one, assign it to the the
                subscription you want to pay for.
              </p>
              <p className="text-[#3755a5] mb-6 pt-2">
                We accept the following cards:
              </p>
              <div className="flex items-center">
                <svg
                  className="mr-4"
                  width="52"
                  height="17"
                  viewBox="0 0 52 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.8931 5.41309C26.8635 7.77179 28.9778 9.08796 30.5705 9.87057C32.2069 10.6735 32.7565 11.1884 32.75 11.9065C32.7379 13.0053 31.4448 13.4903 30.2348 13.5092C28.1237 13.5422 26.8962 12.9345 25.9204 12.4749L25.1599 16.0631C26.1389 16.518 27.9518 16.9147 29.8317 16.9321C34.2446 16.9321 37.1317 14.7356 37.1473 11.3301C37.1646 7.00802 31.2185 6.76879 31.2591 4.83694C31.2731 4.25115 31.8275 3.62605 33.0421 3.46711C33.6434 3.38682 35.3031 3.32537 37.1849 4.19913L37.9234 0.727444C36.9115 0.355902 35.6109 0.000130303 33.9915 0.000130303C29.838 0.000130303 26.9167 2.22652 26.8931 5.41309V5.41309ZM45.0202 0.299166C44.2144 0.299166 43.5354 0.773118 43.2323 1.50043L36.9287 16.6771H41.3384L42.2159 14.2318H47.6044L48.1134 16.6771H52L48.6084 0.299166H45.0202V0.299166ZM45.6371 4.72347L46.9097 10.8736H43.4245L45.6371 4.72347V4.72347ZM21.5467 0.299371L18.0708 16.6769H22.2729L25.7471 0.298962H21.5467V0.299371ZM15.3305 0.298962L10.9568 11.4467L9.18755 1.96824C8.97995 0.910143 8.16014 0.299166 7.24973 0.299166H0.100141L0 0.774756C1.46778 1.09591 3.13544 1.6139 4.14578 2.16814C4.76409 2.50671 4.94041 2.80267 5.14353 3.6072L8.49448 16.6771H12.935L19.7429 0.299166H15.3305"
                    fill="url(#paint0_linear_17754_8007)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_17754_8007"
                      x1="-17.2973"
                      y1="22.5649"
                      x2="-7.17815"
                      y2="-8.50877"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#007EC4" />
                      <stop offset="0.83" stop-color="#3350A3" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Master Card */}
                <svg
                  width="49"
                  height="38"
                  viewBox="0 0 49 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90796 37.811V35.2959C8.90796 34.3316 8.31957 33.703 7.31105 33.703C6.80689 33.703 6.26062 33.8706 5.8824 34.4156C5.5884 33.9544 5.16826 33.703 4.53796 33.703C4.11763 33.703 3.69769 33.8286 3.36139 34.2898V33.7868H2.479V37.811H3.36139V35.5892C3.36139 34.8768 3.73961 34.5413 4.32799 34.5413C4.91599 34.5413 5.21037 34.9186 5.21037 35.5892V37.811H6.09275V35.5892C6.09275 34.8768 6.5127 34.5413 7.05897 34.5413C7.64736 34.5413 7.94136 34.9186 7.94136 35.5892V37.811H8.90796ZM21.9755 33.7868H20.547V32.5712H19.6646V33.7868H18.8662V34.5831H19.6644V36.4277C19.6644 37.35 20.0426 37.8948 21.0512 37.8948C21.4294 37.8948 21.8493 37.7692 22.1437 37.6015L21.8914 36.8468C21.6393 37.0145 21.3453 37.0565 21.1352 37.0565C20.715 37.0565 20.547 36.805 20.547 36.3857V34.5831H21.9755V33.7868ZM29.4548 33.7028C28.9507 33.7028 28.6146 33.9545 28.4044 34.2898V33.7868H27.522V37.811H28.4044V35.5474C28.4044 34.8768 28.6984 34.4994 29.2447 34.4994C29.4127 34.4994 29.6229 34.5414 29.791 34.5833L30.043 33.745C29.875 33.703 29.6229 33.703 29.4548 33.703V33.7028ZM18.1519 34.1221C17.7316 33.8286 17.1434 33.703 16.5131 33.703C15.5048 33.703 14.8326 34.2059 14.8326 35.0024C14.8326 35.6732 15.3367 36.0504 16.2191 36.1762L16.6392 36.2182C17.1015 36.3019 17.3536 36.4277 17.3536 36.6374C17.3536 36.9307 17.0175 37.1403 16.4291 37.1403C15.8409 37.1403 15.3786 36.9307 15.0844 36.7212L14.6643 37.3918C15.1266 37.7271 15.7569 37.8948 16.387 37.8948C17.5635 37.8948 18.2359 37.35 18.2359 36.5954C18.2359 35.8827 17.6897 35.5054 16.8492 35.3797L16.4291 35.3377C16.0509 35.2957 15.7569 35.2121 15.7569 34.9606C15.7569 34.6671 16.0509 34.4994 16.5131 34.4994C17.0175 34.4994 17.5216 34.7089 17.7737 34.8348L18.1519 34.1221ZM41.5982 33.703C41.0939 33.703 40.7578 33.9545 40.5476 34.2898V33.7868H39.6652V37.811H40.5476V35.5474C40.5476 34.8768 40.8418 34.4994 41.3879 34.4994C41.5561 34.4994 41.7663 34.5414 41.9343 34.5833L42.1864 33.745C42.0184 33.703 41.7663 33.703 41.5982 33.703ZM30.3372 35.7989C30.3372 37.0145 31.1775 37.8948 32.4802 37.8948C33.0684 37.8948 33.4885 37.7692 33.9087 37.4338L33.4885 36.7212C33.1524 36.9727 32.8163 37.0983 32.4381 37.0983C31.7238 37.0983 31.2196 36.5954 31.2196 35.7989C31.2196 35.0444 31.7238 34.5413 32.4381 34.4994C32.8163 34.4994 33.1524 34.6251 33.4885 34.8768L33.9087 34.1641C33.4885 33.8286 33.0684 33.703 32.4802 33.703C31.1775 33.703 30.3372 34.5833 30.3372 35.7989ZM38.4888 35.7989V33.7868H37.6065V34.2898C37.3123 33.9126 36.8921 33.703 36.3459 33.703C35.2114 33.703 34.329 34.5833 34.329 35.7989C34.329 37.0145 35.2114 37.8948 36.3459 37.8948C36.934 37.8948 37.3544 37.6853 37.6065 37.308V37.811H38.4888V35.7989ZM35.2533 35.7989C35.2533 35.0862 35.7155 34.4994 36.4718 34.4994C37.1861 34.4994 37.6905 35.0444 37.6905 35.7989C37.6905 36.5115 37.1861 37.0983 36.4718 37.0983C35.7155 37.0563 35.2533 36.5115 35.2533 35.7989ZM24.7068 33.703C23.5302 33.703 22.6898 34.5413 22.6898 35.7989C22.6898 37.0565 23.5301 37.8948 24.7487 37.8948C25.3369 37.8948 25.9253 37.7271 26.3876 37.35L25.9672 36.7212C25.6311 36.9727 25.211 37.1403 24.7908 37.1403C24.2446 37.1403 23.6983 36.8889 23.5722 36.176H26.5556V35.8409C26.5977 34.5413 25.8413 33.703 24.7066 33.703H24.7068ZM24.7068 34.4574C25.2529 34.4574 25.6313 34.7929 25.7151 35.4217H23.6143C23.6983 34.8768 24.0765 34.4574 24.7068 34.4574ZM46.5983 35.7989V32.1938H45.716V34.2898C45.4218 33.9126 45.0016 33.703 44.4553 33.703C43.3209 33.703 42.4385 34.5833 42.4385 35.7989C42.4385 37.0145 43.3209 37.8948 44.4553 37.8948C45.0437 37.8948 45.4639 37.6853 45.716 37.308V37.811H46.5983V35.7989ZM43.363 35.7989C43.363 35.0862 43.825 34.4994 44.5815 34.4994C45.2958 34.4994 45.8 35.0444 45.8 35.7989C45.8 36.5115 45.2958 37.0983 44.5815 37.0983C43.825 37.0563 43.363 36.5115 43.363 35.7989ZM13.866 35.7989V33.7868H12.9836V34.2898C12.6894 33.9126 12.2692 33.703 11.723 33.703C10.5885 33.703 9.70612 34.5833 9.70612 35.7989C9.70612 37.0145 10.5885 37.8948 11.723 37.8948C12.3114 37.8948 12.7315 37.6853 12.9836 37.308V37.811H13.866V35.7989ZM10.5885 35.7989C10.5885 35.0862 11.0507 34.4994 11.807 34.4994C12.5213 34.4994 13.0257 35.0444 13.0257 35.7989C13.0257 36.5115 12.5213 37.0983 11.807 37.0983C11.0507 37.0563 10.5885 36.5115 10.5885 35.7989Z"
                    fill="black"
                  />
                  <path
                    d="M17.8578 3.22754H31.0935V26.9539H17.8578V3.22754Z"
                    fill="#FF5F00"
                  />
                  <path
                    d="M18.6983 15.091C18.6983 10.2703 20.9672 5.99445 24.4546 3.22771C21.8917 1.21562 18.6564 0 15.1268 0C6.76487 0 0 6.74891 0 15.091C0 23.4328 6.76487 30.1819 15.1266 30.1819C18.6562 30.1819 21.8915 28.9663 24.4546 26.954C20.9672 24.2293 18.6983 19.9116 18.6983 15.091Z"
                    fill="#EB001B"
                  />
                  <path
                    d="M48.9513 15.091C48.9513 23.4328 42.1865 30.1819 33.8247 30.1819C30.2952 30.1819 27.0598 28.9663 24.4967 26.954C28.0262 24.1875 30.2532 19.9116 30.2532 15.091C30.2532 10.2703 27.9841 5.99445 24.4967 3.22771C27.0596 1.21562 30.2952 0 33.8247 0C42.1865 0 48.9515 6.79092 48.9515 15.091H48.9513Z"
                    fill="#F79E1B"
                  />
                </svg>
              </div>
              <div className="mb-6 pt-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-light text-gray-500"
                >
                  Enter Amount
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border rounded text-gray-900 text-lg font-light focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter text here"
                  required=""
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-light text-gray-500"
                >
                  Security Code
                </label>
                <input
                  type="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-lg font-light rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter text here"
                  required=""
                />
              </div>
              {/* Date flex */}
              <div className="flex justify-between">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-light text-gray-500"
                  >
                    Expiration Month
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" border border-gray-300 text-gray-900 text-lg font-light rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter text here"
                    required=""
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-light text-gray-500"
                  >
                    Expiration Year
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" border border-gray-300 text-gray-900 text-lg font-light rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter text here"
                    required=""
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-light text-gray-500"
                >
                  Amount to Fund
                </label>
                <input
                  type="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-lg font-light rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter text here"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="mr-4 text-white bg-[#3755a5]  hover:bg-[#3755a5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Pay Subscription
              </button>

              <button
                onClick={() => this.closeModal()}
                type="button"
                className="text-white bg-[#3755a5]  hover:bg-[#3755a5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
            </form>
            {/* <button onClick={() => this.closeModal()}>Close</button> */}
          </div>
        </Modal>
      </section>
    );
  }
}
