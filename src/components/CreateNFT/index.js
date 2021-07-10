import React, { Component } from "react";
import {
  UniverseCard,
  UniverseContainer,
  UniverseH1,
  UniverseIcon,
  UniverseWrapper,
  UniverseH2,
  UniverseP,
  UniverseOwner,
} from "../Universe/UniverseElements";
import Identicon from "identicon.js";
import { Button } from "../ButtonElement";
import { FaEthereum } from "react-icons/fa";
import { BiPlanet } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import ComponentDivider from "../ComponentDivider";

import {
  ButtonNFT,
  CreateNFTContainer,
  CreateNFTWrapper,
  CreateNFTrow,
  CreateNFTColumn,
  Form,
  FormHeading,
  FormLabel,
  FormInput,
} from "./CreateNFTElements";

class CreateNFT extends Component {
  render() {
    return (
      <>
        <CreateNFTContainer id="nft">
          <CreateNFTWrapper>
            <CreateNFTrow>
              <CreateNFTColumn>
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const price = this.priceInput.value;
                    const planet_name = this.planetNameInput.value;
                    this.props.createPlanet(price, planet_name);
                  }}
                >
                  <FormHeading>Create Planet NFT</FormHeading>
                  <BiPlanet />
                  <FormInput
                    id="planetNameInput"
                    type="text"
                    ref={(input) => {
                      this.planetNameInput = input;
                    }}
                    placeholder="Enter planet name"
                    required
                  />
                  <FaEthereum />
                  <FormInput
                    type="text"
                    placeholder="Enter price in ETH"
                    required
                    id="priceInput"
                    ref={(input) => {
                      this.priceInput = input;
                    }}
                  />
                  <IoRocketOutline />

                  <FormLabel>
                    Choose your NFT
                    <FormInput
                      type="file"
                      hidden
                      accept=".jpeg, .jpg, .png, .gif, .bmp"
                      onChange={this.props.captureFile}
                    />
                  </FormLabel>
                  <ButtonNFT type="submit">Enter Galaxy</ButtonNFT>
                </Form>
              </CreateNFTColumn>
            </CreateNFTrow>
          </CreateNFTWrapper>
        </CreateNFTContainer>

        <ComponentDivider />
        {/* Collection of Tokens  */}
        <UniverseContainer id="collection">
          <UniverseH1>Your Decentralized Universe</UniverseH1>

          <UniverseWrapper>
            {this.props.planets.map((planet, key) => (
              <UniverseCard key={key}>
                <UniverseIcon
                  src={`https://ipfs.infura.io/ipfs/${planet.hash}`}
                  width="65%"
                />
                {/* H2 is the planet_name */}
                <UniverseOwner>{planet.owner}</UniverseOwner>
                <UniverseH2>{planet.planet_name}</UniverseH2>

                {/* Button to purchase NFT */}
                <Button
                  name={planet.id}
                  onClick={(event) => {
                    let toWeiPrice = window.web3.utils.toWei(
                      planet.price,
                      "Ether"
                    );
                    console.log(event.target.name, toWeiPrice);
                    this.props.buyNFT(event.target.name, toWeiPrice);
                  }}
                >
                  <FaEthereum /> <span>{planet.price}</span>
                </Button>
              </UniverseCard>
            ))}
          </UniverseWrapper>
        </UniverseContainer>
      </>
    );
  }
}
export default CreateNFT;
