import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/BackgroundImage.png";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Overlay = styled.div`
  margin-top: 3vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 94%;
  height: 100%;
  border-left: 1.5px solid rgb(255 255 255 / 60%);
  border-right: 1.5px solid rgb(255 255 255 / 60%);
  border-top: 1.5px solid rgb(255 255 255 / 60%);
  pointer-events: none;
  overflow: hidden;
`;

const WeddingInvitation = styled.p`
  position: absolute;
  margin-top: 6vw;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 0.8rem;
  font-family: MaruBuri;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.7;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Intro = () => {
  const overlayRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = overlayRef.current.offsetWidth;
    const height = canvas.height = overlayRef.current.offsetHeight;

    const petals = [];
    const maxHeight = height * 0.9; // 패딩 적용: 너무 아래까지 내려오지 않도록 제한

    class Petal {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * maxHeight; // 최대 높이 제한
        this.size = Math.random() * 4 + 2; // 크기
        this.speedX = Math.random() * 1 - 0.2; // 좌우 움직임
        this.speedY = Math.random() * 1 + 0.5; // 천천히 내려오도록 속도 
        this.opacity = Math.random() * 0.3 + 0.3; // 투명도 (0.2 ~ 0.5)
        this.angle = Math.random() * Math.PI * 2; // 꽃잎 회전 초기값
        this.rotationSpeed = (Math.random() - 0.5) * 0.02; // 회전 속도
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed; // 꽃잎이 회전하면서 내려오도록 설정

        if (this.y > maxHeight) {
          this.y = -10;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

        // 꽃잎 모양 그리기
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size, -this.size, -this.size * 1.5, this.size, 0, this.size * 2);
        ctx.bezierCurveTo(this.size * 1.5, this.size, this.size, -this.size, 0, 0);
        ctx.fill();

        ctx.restore();
      }
    }

    // 벚꽃잎 개수 
    for (let i = 0; i < 25; i++) {
      petals.push(new Petal());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <VideoWrapper>
      <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
      <img src={BackgroundImage} alt="BackgroundImage" width="100%" />
      <Overlay ref={overlayRef}>
        <Canvas ref={canvasRef} />
      </Overlay>
    </VideoWrapper>
  );
};

export default Intro;