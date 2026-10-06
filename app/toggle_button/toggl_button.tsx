import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="checkbox" />
          <span className="slider" />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
    position: relative;
    width: 64px;
    height: 32px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 32px;
    background-color: var(--dark);
    border-radius: 16px;
    cursor: pointer;
    border: none;
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    -webkit-box-shadow: inset 8px -3px 0px 0px var(--light);
    box-shadow: inset 8px -3px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked ~ .slider::before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default Switch;
