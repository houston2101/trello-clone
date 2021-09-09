import * as React from "react";
import { Center } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CustomCenter = styled(Center)`
  @keyframes ldio-whjji0evncn {
    0% {
      background: #142f32;
    }
    12.5% {
      background: #142f32;
    }
    12.625% {
      background: #4a707a;
    }
    100% {
      background: #4a707a;
    }
  }
  .ldio-whjji0evncn div {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #4a707a;
    animation: ldio-whjji0evncn 1s linear infinite;
  }
  .loadingio-spinner-blocks-vqtak1cxkmd {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: transparent;
  }
  .ldio-whjji0evncn {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-whjji0evncn div {
    box-sizing: content-box;
  }
`;
export default function Spinner() {
  return (
    <CustomCenter h="100vh" w="100vw">
      <div className="loadingio-spinner-blocks-vqtak1cxkmd">
        <div className="ldio-whjji0evncn">
          <div style={{ left: "38px", top: "38px", animationDelay: "0s" }}></div>
          <div style={{ left: "122px", top: "38px", animationDelay: "0.25s" }}></div>
          <div style={{ left: "80px", top: "38px", animationDelay: "0.125s" }}></div>
          <div style={{ left: "38px", top: "80px", animationDelay: "0.875s" }}></div>
          <div style={{ left: "122px", top: "80px", animationDelay: "0.375s" }}></div>
          <div style={{ left: "38px", top: "122px", animationDelay: "0.75s" }}></div>
          <div style={{ left: "80px", top: "122px", animationDelay: "0.625s" }}></div>
          <div style={{ left: "122px", top: "122px", animationDelay: "0.5s" }}></div>
        </div>
      </div>
    </CustomCenter>
  );
}
