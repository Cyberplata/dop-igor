import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
    data: any //встречаем денюжки
}

export const City = () => {
// с деструктуризацией пожалуйста


    // const mappedMoney = props.data.map((el: MoneyType, index) => (
    //     <CurrentBankomat
    //         key={el.id}
    //         money={el}
    //     />
    // ))

    return (
        <Wrapper>
         Одна банконота-одна компонента
        </Wrapper>
    );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`