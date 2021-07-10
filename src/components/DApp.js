import PlanetToken from "../abis/PlanetToken.json";
import { Component } from "react";
import Web3 from "web3";

import React from "react";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import About from "../components/About";
import ComponentDivider from "../components/ComponentDivider";
import Footer from "../components/Footer";
import Universe from "../components/Universe";
import CreateNFT from "../components/CreateNFT";
// import Main from './Main'
// import Navbar from './Navbar'
import Spinner from "react-spinkit";
import { AppLoading, AppLoadingContents } from "./Loading";

//Declare IPFS
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

class DApp extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    //Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    //console.log(accounts);
    //Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = PlanetToken.networks[networkId];
    if (networkData) {
      const abi = PlanetToken.abi;
      const address = networkData.address;
      // contract = planet
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract });
      const planetCount = await contract.methods.planetCount().call();
      this.setState({ planetCount });
      // Load planets
      for (var i = 1; i <= planetCount; i++) {
        const planet = await contract.methods.planets(i).call();
        this.setState({
          planets: [...this.state.planets, planet],
        });
      }
      this.setState({ loading: false });
    } else {
      window.alert("Planet contract not deployed to detected network");
    }
  }

  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
  };

  createPlanet = (price, planet_name) => {
    console.log("Submitting file to ipfs...");

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log("Ipfs result", result);
      if (error) {
        console.error(error);
        return;
      }

      this.setState({ loading: true });
      this.state.contract.methods
        .createPlanet(result[0].hash, price, planet_name)
        .send({ from: this.state.account })
        .on("transactionHash", (hash) => {
          this.setState({ loading: false });

          window.location.reload(false);
        });
    });
  };

  buyNFT(id, price) {
    this.setState({ loading: true });
    this.state.contract.methods
      .transferPlanet(id)
      .send({ from: this.state.account, value: price })
      .on("transactionHash", () => {
        this.setState({ loading: false });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      accountStatus: false,
      contract: null,
      planets: [],
      loading: true,
    };

    this.createPlanet = this.createPlanet.bind(this);
    this.captureFile = this.captureFile.bind(this);
    this.buyNFT = this.buyNFT.bind(this);
  }

  render() {
    return (
      <>
        <NavBar
          account={this.state.account}
          accountStatus={this.state.accountStatus}
          loading={this.state.loading}
        />
        {this.state.loading ? (
          <AppLoading>
            <AppLoadingContents>
              <img src="../images/background.png" alt="" />
              <Spinner
                name="ball-spin-fade-loader"
                color="#3f25a9"
                fadeIn="none"
              />
              <h1 style={{ color: "white", marginTop: "40px" }}>
                Please connect to Meta Mask to continue to the DApp
              </h1>
            </AppLoadingContents>
          </AppLoading>
        ) : (
          <>
            <Landing />
            <ComponentDivider />
            <About />
            <ComponentDivider />
            <CreateNFT
              planets={this.state.planets}
              captureFile={this.captureFile}
              createPlanet={this.createPlanet}
              getValueInput={this.getValueInput}
              buyNFT={this.buyNFT}
            />
          </>
        )}

        {/* <Universe /> */}
        <Footer />
      </>
    );
  }

  //   render() {
  //     return (
  //       <div>
  //         <Navbar account={this.state.account} />
  //         { this.state.loading
  //           ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
  //           : <Main
  //               planets={this.state.planets}
  //               captureFile={this.captureFile}
  //               createPlanet={this.createPlanet}
  //               getValueInput={this.getValueInput}
  //               buyNFT = {this.buyNFT}
  //             />
  //         }
  //       </div>
  //     );
  //   }
}

export default DApp;
