const string = `
.skin *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 .skin *::after,
  before {
    box-sizing: border-box;
  }
.skin {
    height: 50vh;
    background-color: rgb(255, 230, 0);
    position: relative;
  }
  .nose {
    border: 10px solid red;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    border-color: black transparent transparent;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  .nose .apex-cover {
    height: 4px;
    width: 20px;
    left: 50%;
    margin-left: -10px;
    top: -14px;
    position: absolute;
    background-color: transparent;
    overflow: hidden;
  }
  
  .nose .apex-cover .apex {
    width: 20px;
    height: 8px;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    border-radius: 50% 50% 50% 50%;
    background-color: black;
  }
  
  .eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    left: 50%;
    margin-left: -32px;
    position: absolute;
    top: 110px;
    border-radius: 50%;
    background-color: rgb(46, 46, 46);
  }
  .eye.left {
    transform: translateX(-120px);
  }
  .eye.right {
    transform: translateX(120px);
  }
  .eye::before {
    content: "";
    border: 3px solid #000;
    display: block;
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: -1px;
    animation: eyeMove 3s infinite;
  }
  @keyframes eyeMove {
    0%,
    to {
      top: 2px;
      left: 2px;
    }
  
    30%,
    60%,
    70% {
      top: 0;
      left: 20px;
    }
  
    40% {
      top: 0;
      left: 15px;
    }
  
    50% {
      top: 0;
      left: 10px;
    }
  
    80%,
    90% {
      top: 17px;
      left: 15px;
    }
  }
  .mouth {
    width: 204px;
    height: 300px;
    position: absolute;
    left: 50%;
    margin-left: -102px;
    top: 180px;
    overflow: hidden;
    animation: mouthMove 3s infinite;
  }
  @keyframes mouthMove {
    0%,
    46%,
    54%,
    to {
      height: 300px;
    }
  
    50% {
      height: 10px;
    }
  }
  .mouth .up {
    position: relative;
    z-index: 5;
    top: -20px;
  }
  .mouth .lip {
    background-color: rgb(255, 230, 0);
    border: 3px solid black;
    height: 40px;
    width: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-top-left-radius: 20%;
    border-bottom-left-radius: 80%;
  }
  
  .mouth .lip.left {
    transform: rotate(-25deg) translateX(-55px);
  }
  .mouth .lip.right {
    transform: rotateY(180deg) rotate(-25deg) translateX(-56px);
  }
  .mouth .lip::before {
    content: "";
    display: block;
    width: 8px;
    height: 6px;
    background-color: rgb(255, 230, 0);
    position: absolute;
    top: -1px;
    left: -4px;
    transform: rotate(25deg);
  }
  /* 遮盖下嘴唇 */
  .lip-cover {
    width: 100%;
    height: 20px;
    background-color: rgb(255, 230, 0);
    position: relative;
    z-index: 1;
    top: -5px;
  }
  
  .mouth .down {
    border: 3px solid black;
    height: 1000px;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: -800px;
    background-color: rgb(155, 0, 10);
    overflow: hidden;
  }
  .mouth .down .tongue {
    background-color: rgb(255, 72, 95);
    height: 300px;
    width: 200px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    border: 3px solid black;
    height: 88px;
    width: 88px;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    top: 240px;
    border-radius: 50%;
    background-color: #f00;
  }
  .face.left {
    transform: translateX(-170px);
  }
  .face.right {
    transform: translateX(170px);
  }
  .face-wrap:hover img {
    display: block;
  }
  img {
    position: absolute;
    top: 44px;
    left: 44px;
    display: none;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: left top;
  }
`;
export default string;
