import styled from 'styled-components'

export const UniverseContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const UniverseWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`

export const UniverseCard = styled.div`
    background: #1b144b;
   
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
    max-height: 220px;
    padding: 30px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const UniverseIcon = styled.img`
    height:200px;
    width: 200px;
    margin-bottom: 10px;
`

export const UniverseH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const UniverseH2 = styled.h2`
    font-size: 1.0rem;
    color: #fff;
    text-align: center;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const UniverseP = styled.p`
    font-size: 0.75rem;
    color: #fff;
    text-align: center;
`