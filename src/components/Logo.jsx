import styled from "styled-components";

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const LogoImg = styled.div`
  width: 7rem;
  svg {
    width: 100%;
    height: 100%;
    path,
    circle {
      stroke: #fefcfd;
      /* stroke: #172026; */
    }
  }
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg>
        <svg
          width="170"
          height="170"
          viewBox="0 0 170 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="85" cy="85" r="80" stroke="black" strokeWidth="10" />
          <path
            d="M29 118.5L85.5 51L141.5 118.5"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M29 118.609L53.5 112.609C58.2144 101.494 61.0243 96.1526 68 97.1092"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M141 118.609L116.5 112.609C111.786 101.494 108.976 96.1526 102 97.1092"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M16 79.5L36.5 72L46.5 59L86 94L125.5 59L136 72L154.5 79.5"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M45 57L33 67.5L19 69.4828"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M127 57L139 67.7788L153 69.7616"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M44.5 57L30.1861 61.4051L24.4103 58.2877"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M127 57.0634L141.314 61.4685L147.09 58.3511"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M67 77L86 99L102.5 79.5"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </LogoImg>
    </LogoWrapper>
  );
};
