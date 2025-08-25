import { Box } from "@mantine/core";
import styled from "styled-components";

const StarBackground = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #2d2d2d 100%);
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(2px 2px at 20px 30px, #fff, transparent),
      radial-gradient(
        2px 2px at 40px 70px,
        rgba(255, 255, 255, 0.8),
        transparent
      ),
      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
      radial-gradient(
        1px 1px at 130px 80px,
        rgba(255, 255, 255, 0.6),
        transparent
      ),
      radial-gradient(2px 2px at 160px 30px, #fff, transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    animation: sparkle 20s linear infinite;
  }

  @keyframes sparkle {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(200px);
    }
  }
`;

export default StarBackground;
