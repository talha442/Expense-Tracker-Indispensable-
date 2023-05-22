import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";

function History() {
  const { transactionHistory } = useGlobalContext();

  return <HistoryStyled>History</HistoryStyled>;
}

const HistoryStyled = styled.div``;

export default History;
