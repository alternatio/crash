import Head from 'next/head'
import Header from "../components/Header";
import {Wrapper} from "../components/Wrapper";
import React, {useState} from "react";
import Scoreboard from "../components/Scoreboard";
import Main from "../components/Main";
import WinPopup from "../components/winPopup";

const Home = () => {
  const [isDarkTheme, handleIsDarkTheme] = useState<boolean>(false)
  const [coefficient, setCoefficient] = useState<number>(1)
  const [isCrash, handleIsCrash] = useState<boolean>(true)
  const [bet, setBet] = useState<number>(0)
  const [money, setMoney] = useState<number>(100)
  const [moneyIsSeized, handleMoneyIsSeized] = useState<boolean>(true)
  const [targetCoefficient, setTargetCoefficient] = useState<number>(1)
  const [history, setHistory] = useState<number[]>([])
  const [targetCoefficientIsEnable, handleTargetCoefficient] = useState<boolean>(false)
  const [winPopupIsVisible, handleWinPopup] = useState<boolean>(false)
  const [totalWin, setTotalWin] = useState<number>(0)

  return (
    <>
      <Head>
        <title>
          Crash
        </title>
      </Head>
      <Header />
      <Wrapper isDarkTheme={isDarkTheme}>
        <WinPopup
          handleWinPopup={handleWinPopup}
          winPopupIsVisible={winPopupIsVisible}
          totalWin={totalWin} />
        <Scoreboard
          isCrash={isCrash}
          coefficient={coefficient}
          moneyIsSeized={moneyIsSeized}/>
        <Main
          bet={bet}
          handleTargetCoefficient={handleTargetCoefficient}
          money={money}
          setBet={setBet}
          setTargetCoefficient={setTargetCoefficient}
          targetCoefficient={targetCoefficient}
          targetCoefficientIsEnable={targetCoefficientIsEnable}
          coefficient={coefficient}
          handleIsCrash={handleIsCrash}
          handleMoneyIsSeized={handleMoneyIsSeized}
          history={history}
          isCrash={isCrash}
          setCoefficient={setCoefficient}
          setHistory={setHistory}
          setMoney={setMoney}
          moneyIsSeized={moneyIsSeized}
          handleWinPopup={handleWinPopup}
          setTotalWin={setTotalWin}/>
      </Wrapper>
    </>

  )
}

export default React.memo(Home)