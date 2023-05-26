import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    overflow: auto;
  }
`;

export const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    padding: 1rem;
  }
`;
