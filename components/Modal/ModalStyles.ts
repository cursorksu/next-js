import styled from 'styled-components';

export const Backdrop = styled.div `
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(243, 150, 154, 0.3) ;
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
`;

export const Wrapper = styled.div `
        min-width: 400px;
        padding-top: 16px;
        position: relative;
        background:  #f3969a;
    
        @media (max-width: 600px) {
          min-width: 100%;
        }
    `;

export const BtnClose = styled.button `
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: $main-light;
        border-radius: 50%;
        border: 2px solid #f3969a;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease-in-out;
        
        & svg {
            transition: fill 0.3s ease-in-out;
            fill: #f3969a;
            width: 22px;
            height: 22px;
        }
        
    
        &:hover {
          background: #f3969a;
    
          & svg {
            fill: #fff;
            width: 22px;
            height: 22px;
          }
        }
    `;

export const Content = styled.div `
        padding: 0;
    `;