import React from 'react'

import {ButtonNFT, CreateNFTContainer, CreateNFTWrapper, CreateNFTrow, CreateNFTColumn, Form, FormHeading, FormLabel, FormInput} from './CreateNFTElements'



const CreateNFT = () => {
    return (
        <CreateNFTContainer id="nft">
            <CreateNFTWrapper>
                <CreateNFTrow>
                    <CreateNFTColumn>
                        <Form>
                            <FormHeading>
                                Create Planet
                            </FormHeading>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormInput>
                                {/* User Input */}
                                </FormInput>
                                <FormLabel>
                                    Price
                                </FormLabel>
                                <FormInput>
                                {/* User Input */}
                                </FormInput>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormInput>
                                {/* User Input */}
                                </FormInput>
                                <FormLabel>
                                    Description
                                </FormLabel>
                                <FormInput>
                                </FormInput>
                                <FormLabel>
                                    Upload Image
                                </FormLabel>
                                <FormInput>
                                {/* User Upload Image */}
                                </FormInput>
                          <ButtonNFT> Submit</ButtonNFT>
                          <ButtonNFT> Cancel </ButtonNFT>
                        </Form>
                    </CreateNFTColumn>
                </CreateNFTrow>
            </CreateNFTWrapper>
        </CreateNFTContainer>
    )
}

export default CreateNFT
