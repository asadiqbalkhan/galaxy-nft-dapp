import React, { Component } from "react";
import {
  UniverseCard,
  UniverseContainer,
  UniverseH1,
  UniverseIcon,
  UniverseWrapper,
  UniverseH2,
  UniverseP,
} from "../Universe/UniverseElements";
import Identicon from "identicon.js";
import { Button } from "../ButtonElement";

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
                  <FormHeading>Create Planet</FormHeading>
                  <FormLabel>Name</FormLabel>
                  <FormInput
                    id="planetNameInput"
                    type="text"
                    ref={(input) => {
                      this.planetNameInput = input;
                    }}
                    placeholder="Enter planet 🪐name"
                    required
                  >
                    {/* User Input */}
                  </FormInput>
                  <FormLabel>Price</FormLabel>
                  <FormInput
                    type="number"
                    placeholder="Enter price in ETH.."
                    required
                    id="priceInput"
                    ref={(input) => {
                      this.priceInput = input;
                    }}
                  >
                    {/* User Input */}
                  </FormInput>
                  <FormLabel>Upload Image</FormLabel>
                  <FormInput
                    type="file"
                    accept=".jpeg, .jpg, .png, .gif, .bmp"
                    onChange={this.props.captureFile}
                  >
                    {/* User Upload Image */}
                  </FormInput>
                  <ButtonNFT type="submit">Submit</ButtonNFT>
                  <ButtonNFT> Cancel </ButtonNFT>
                </Form>
              </CreateNFTColumn>
            </CreateNFTrow>
          </CreateNFTWrapper>
        </CreateNFTContainer>

        <ComponentDivider />
        {/* Collection of Tokens  */}
        {this.props.planets.map((planet, key) => (
          <UniverseContainer id="collection" key={key}>
            <UniverseH1>Your Galaxies</UniverseH1>
            <UniverseWrapper>
              <UniverseCard>
                <UniverseIcon
                  src={`https://ipfs.infura.io/ipfs/${planet.hash}`}
                  width="65%"
                />
                {/* H2 is the planet_name */}
                <UniverseH2>{planet.owner}</UniverseH2>
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
                  Buy for {planet.price}
                </Button>
              </UniverseCard>
            </UniverseWrapper>
          </UniverseContainer>
        ))}
      </>
    );
  }
}
export default CreateNFT;
