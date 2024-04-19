import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = '' // создадим типы для banknotes -он может быть 'DOLLARS', 'RUBLS' или 'All'
export type MoneyType = {
    banknote: BanknotsType
    nominal: any// не ленимся, убираем заглушку, и пишем правильный тип)
    id: any// ложку за Димыча, за...
}

let defaultMoney: any = [  // типизируем
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: any, filter: any): any => {
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
}


function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [money, setMoney] = useState<any>([])
    const [filterValue, setFilterValue] = useState<any>('')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
    const filteredMoney = moneyFilter(грошы, фильтръ)

    const addMoney = (banknote: BanknotsType) => {
        // Добавление денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
    }

    const removeMoney = (banknote: BanknotsType) => {
        // Снятие денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
       // const index = money.findIndex
       //  if (index !== -1) {
       //      setMoney(money.filter((el, i) => ...));
       //  }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
            />
        </div>
    );
}

export default App;
