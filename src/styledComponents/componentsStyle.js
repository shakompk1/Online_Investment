import styled from 'styled-components';

export const NotFnd = styled.h3`
    font-size: 22px;
    margin-top: 45px;
    text-align: center;
    font-weight: normal;
`;

export const BorderDiv = styled.div`
    border-bottom: 1px dashed #E0E0E0;
    &:nth-last-child(2) {
        border-bottom: none;
      }
`;

export const AccountContainer = styled.div`
    width: 760px;
    margin: 0 auto;;
    min-height: 420px;
    position: relative;
    padding-top: 5px;
`;

export const StockContainer = styled.div`
    width: 760px;
    margin: 0 auto;
    min-height: 530px;
    padding-top: 35px;
    position: relative;
`;
export const AlignCenterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const AlignPaginator = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
`;

export const PriceP = styled.div`
    font-size: 64px;
    color: #000000;
`

export const PriceSpan = styled.span`
    font-size: 36px`

export const AccountListItem = styled.div`
    width: 759px;
    height: 85px;
    display: grid;
    grid-template-columns: 9.09% 22% 6% 21.60% 41.31%;
    &:hover {
        background: rgba(131, 58, 224, 0.05);
        cursor: pointer;
      }
`;

export const StockListItem = styled.div`
    width: 759px;
    height: 85px;
    display: grid;
    grid-template-columns: 9.09% 22% 62%;
    &:hover {
        background: rgba(131, 58, 224, 0.05);
        cursor: pointer;
      }
`;

export const SmallText = styled.p`
    font-family: Space Mono;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    align-self: center;
    text-align: center;
`;

export const NameP = styled.p`
    font-size: 22px;
    text-overflow: ellipsis;
    max-width: 98%;
    overflow: hidden;
    white-space: nowrap;
    color: #000000;
    height: fit-content;
    align-self: center;
`;

export const Integer = styled.p`
    font-size: 30px;
    height: 24px;
    color: #000000;
    line-height: 24px;
    width: fit-content;
    align-self: center;
    margin-left: auto;
`;

export const Fraction = styled.span`
    font-size: 16px;
`;

export const Green = styled.p`
    font-size: 18px;
    color: #2FC20A;
    text-align: center;
    align-self: center;
    justify-content: center;
    display: flex;
`;

export const Red = styled.p`
    font-size: 18px;    
    text-align: center;
    align-self: center;
    justify-content: center;
    display: flex;
    color: #FF2C2C
`;

export const Input = styled.input`
    width: 360px;
    height: 60px;
    background-color: #F3F3F3;
    border-radius: 94px;
    color: #833AE0;
    font-size: 35px;
    text-align: center;
    outline: none;
    border-style: none;
    &::placeholder {
        vertical-align: middle;
        font-size: 25px;
      }
`;

export const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #FFDC40;
    font-size: 22px;
    font-weight: bold;
    background: #833AE0;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 67px;
`;

export const Name = styled.div`
     margin-left: 66px;
     display: flex;
     align-items: center;
`;

export const Amount = styled.div`
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Cont = styled.div`
    display: flex;
    vertical-align: center;
    text-align: center;
    align-items: center;
    font-family: Roboto;
    color: #833AE0;
`;

export const InputButton = styled.button`
    border: none;
    background-color: white;
    width: 50px;
    height: 50px;
    margin: 0 35px;
    font-weight: 200;
    font-size: 36px;
    line-height: 14px;
    text-align: center;
    color: #833AE0;
    cursor: pointer;
`;

export const InputP = styled.div`
    font-size: 64px;
    text-align: center;
    color: #833AE0;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 340px;
    ::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
      overflow-x: auto;
    }
    
    ::-webkit-scrollbar
    {
      width: 6px;
      height: 6px;
      background-color: #F5F5F5;
      overflow-x: auto;
    }
    
    ::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #833AE0;
      overflow-x: auto;
}
    `;