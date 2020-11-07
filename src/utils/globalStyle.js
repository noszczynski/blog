import { createGlobalStyle } from "styled-components"
import color from "./colors"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&family=Old+Standard+TT:wght@400;700&display=swap');

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    width: 6px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.dark};
    border: 0;
  }
}

.container {
  font-family: Montserrat, sans-serif;
  width: 100vw;
  min-height: 100vh;
}

.menu {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  padding: .5rem;

  &__item {
    color: ${color.dark};
    text-decoration: none;
    padding: .5rem 1rem;
    margin-right: 1rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }
}

.counter {
  position: fixed;
  top: 50%;
  right: 1rem;
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__item {
    color: ${color.dark};
    font-weight: 700;
    letter-spacing: 4px;
    width: 10px;
    overflow: hidden;
    height: 20px;
  }

  &__elements {
    height: auto;
    display: flex;
    flex-direction: column;
    transition: transform .3s ease-in-out;

    &__item {
      height: 20px;
      padding: 0;
      margin: 0;
    }
  }
}

.divider {
  width: 60%;
  height: 2px;
  border-color: ${color.dark};
}

.acticle__wrapper {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  transition: transform .3s ease-in-out;
  overflow-x: hidden;
}

.article__item {
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  position: relative;

  .article__title {
    font-size: 64px;
    font-family: Montserrat, san-serif;
    color: ${color.mustard};
    padding: 0;
    margin: 0;
  }

  .article__author, .article__subtitle {
    color: ${color.dark};
  }

  &__cover__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgba(${color.light}, 0.3);
    }
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 33%;
    max-width: 800px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
}

.article__link {
  margin-left: auto;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  text-align: right;
  color: ${color.dark};

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 0;
    height: 2px;
    background-color: ${color.dark};
    width: 66%;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}

.articles__navigation {
  display: flex;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 190px;

  &__button {
    color: ${color.light};
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0;
    cursor: pointer;
  }

  &__divider {
    height: 8px;
    width: 100px;
    border-bottom: 2px solid ${color.light};
    position: relative;
    z-index: 0;

    span {
      content: '';
      position: absolute;
      width: 100%;
      bottom: -2px;
      left: 0;
      right: 0;
      z-index: 1;
      height: 2px;
      background-color: ${color.mustard};
      transform-origin: left;
      transition: transform .3s ease-in-out;
    }
  }
}

.subtitle {
  font-size: 24px;
}

.color {
  &-light {
    color: ${color.light} !important;
  }
  &-dark {
    color: ${color.dark} !important;
  }
}

.background-light::after, .background-dark::after {
  content: '';
  position: absolute;
  top: -2rem;
  left: 0;
  width: 100%;
  height: calc(100% + 2rem);
  z-index: -1;
}

.background {
  &-light {
    position: relative;
    &::after {
      background-color: ${color.light};
    }
  }
  &-dark {
    position: relative;
    &::after {
      background-color: ${color.dark};
    }
  }
}

.translate-hover {
  transition: transform .1s ease-in-out;
  transform: translateY(0);

  &:hover {
    transform: translateY(-2px);
  }
}
`

export default GlobalStyles
