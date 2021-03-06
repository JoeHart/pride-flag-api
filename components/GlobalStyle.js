import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: #222;
}

.page {
  max-width: 60em;
  margin: 0 auto;
}

p,
ul,
li {
  line-height: 1.5;
}

pre {
  background-color: #ddd;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  overflow: auto;
}

/* Rainbow underline from here: https://codepen.io/cssparadise/pen/ExxayxM */
a {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  z-index: 1;
  font-weight: bold;
}

a::after {
  content: "";
  position: absolute;
  left: 0;
  top: 1em;
  height: 0.2em;
  width: 100%;
  background: linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);
  z-index: -1;
  transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
}

a:hover::after {
  height: 0.4em;
}

.flagContainer {
  font-size: 10vw;
}

.prideFlag {
  margin: 0 auto;
  box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.75);
  width: 3em;
  height: 2em;
  background: linear-gradient(
    #e20a17 0%,
    #e20a17 calc(100% / 6),
    #fd8d25 calc(100% / 6),
    #fd8d25 calc(calc(100% / 6) * 2),
    #feec34 calc(calc(100% / 6) * 2),
    #feec34 calc(calc(100% / 6) * 3),
    #108028 calc(calc(100% / 6) * 3),
    #108028 calc(calc(100% / 6) * 4),
    #0f54fb calc(calc(100% / 6) * 4),
    #0f54fb calc(calc(100% / 6) * 5),
    #751086 calc(calc(100% / 6) * 5)
  );
  position: relative;
  overflow: hidden;
}

.progressUpper {
  content: "";
  display: block;
  position: absolute;
  width: 2em;
  height: 1em;
  overflow: hidden;
}

.progressUpper:after {
  content: "";
  transform: rotate(45deg);
  position: absolute;
  z-index: 1;
  width: 2em;
  height: 2em;
  margin-left: -1em;
  background: linear-gradient(
    black 0%,
    black calc(100% / 12),
    #784f17 calc(100% / 12),
    #784f17 calc(calc(100% / 12) * 2),
    #5bcefa calc(calc(100% / 12) * 2),
    #5bcefa calc(calc(100% / 12) * 3),
    #f5a9b8 calc(calc(100% / 12) * 3),
    #f5a9b8 calc(calc(100% / 12) * 4),
    white calc(calc(100% / 12) * 4),
    white calc(calc(100% / 12) * 5)
  );
}


`;

export default GlobalStyle;
