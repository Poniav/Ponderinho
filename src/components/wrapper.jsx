import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import terra from "../connector/node.tsx";
import French from "../locales/fr.json";
import English from "../locales/en.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "en") {
  lang = English;
} else {
  if (local === "fr") {
    lang = French;
  }
}

const address = "terra1ks3r40ych7fct279mpskl492tj5vd8l6npj4zx";

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "fr") {
        setMessages(French);
      }
    }
  }

  const CoinsBalance = async () => {
    // const account = await terra.auth.accountInfo(address);
    const balance = await terra.bank.balance(address);
    let coins = {};
    const uusd = balance[0]._coins.uusd.amount;
    const uluna = balance[0]._coins.uluna.amount;
    console.log(uusd);
    console.log(uluna);
    coins.usd = uusd.toString();
    coins.luna = uluna.toString();
    console.log(uluna.toString());
    console.log(coins);
    return coins;
  };

  const TokenBalance = async () => {
    const balance = await terra.bank.total(address);
    const test = await terra.console.log(test);
    return balance;
  };

  CoinsBalance();
  TokenBalance();

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
