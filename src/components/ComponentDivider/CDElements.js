import styled from 'styled-components'

export const DividerWrapper = styled.div`
    display: flex;
    z-index: 1;
    width: 100%; 
    max-width: 750px; 

    position: absolute;

    

    @keyframes animateglow {
        0%{
            background-position: 0% 100%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
    }

    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        height: 20px;
        max-width: 100%;
        padding: 0px 10px;
        margin: auto;
        filter: blur(20px);
        transform: scale(2.3);
        background: linear-gradient(90deg, #0fffc1, #7e0fff);
        background-size: 200% 200%;
        animation: animateglow 4s ease infinite;
    }

`