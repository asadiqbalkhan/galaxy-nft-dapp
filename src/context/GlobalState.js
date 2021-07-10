// import React, { createContext, useReducer, useEffect } from "react";
// import AppReducer from "./AppReducer";
// import Web3 from "web3";
// import PlanetToken from "../abis/PlanetToken.json";

// // Initial state
// const initialState = {
//   account: "",
//   planets: [],
//   web3: null,
//   contract: null,
// };

// // Create context
// export const GlobalContext = createContext(initialState);
// // IPFS
// //Declare IPFS
// const ipfsClient = require("ipfs-http-client");
// const ipfs = ipfsClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
// });

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   useEffect(() => {
//     loadWeb3();
//     loadBlockchainData();
//   }, []);

//   const loadWeb3 = async () => {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     } else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//       window.alert(
//         "Non-Ethereum browser detected. You should consider trying MetaMask!"
//       );
//     }
//   };

//   const loadBlockchainData = async () => {
//     const web3 = window.web3;
//     //Load account
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts);
//     //this.setState({ account: accounts[0] });
//     accountsSetup({ account: accounts[0] });
//     //Network ID
//     const networkId = await web3.eth.net.getId();
//     const networkData = PlanetToken.networks[networkId];
//     if (networkData) {
//       const abi = PlanetToken.abi;
//       const address = networkData.address;
//       // contract = planet
//       const contract = new web3.eth.Contract(abi, address);
//       this.setState({ contract });
//       const planetCount = await contract.methods.planetCount().call();
//       this.setState({ planetCount });
//       // Load planets
//       for (var i = 1; i <= planetCount; i++) {
//         const planet = await contract.methods.planets(i).call();
//         this.setState({
//           planets: [...this.state.planets, planet],
//         });
//       }
//       this.setState({ loading: false });
//     } else {
//       window.alert("Planet contract not deployed to detected network");
//     }
//   };

//   // actions go here
//   function web3Setup(web3) {
//     dispatch({
//       type: "SETUP_WEB3",
//       payload: web3,
//     });
//   }

//   function accountsSetup(accounts) {
//     dispatch({
//       type: "SETUP_ACCOUNT",
//       payload: accounts,
//     });
//   }

//   function contractSetup(contract) {
//     dispatch({
//       type: "SETUP_CONTRACT",
//       payload: contract,
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         // BUY NFT function
//         // IPFS Capture file function
//         //
//         planets: state.planets,
//         web3: state.web3,
//         contract: state.contract,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
