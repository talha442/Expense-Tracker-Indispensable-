import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";

function History() {
  const { transactionHistory } = useGlobalContext();

  return (
    <HistoryStyled>
      <div className="history-con">
        <h2>History</h2>
      </div>
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div``;

export default History;
