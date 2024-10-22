import styled, { css } from 'styled-components';

interface StyledHeaderProps {
  isExpanded: boolean;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  ${({ isExpanded, theme }) => css`
    position: relative;
    transition: border-color 0.15s ease;
    border-bottom: solid 1px
      ${isExpanded
        ? 'transparent'
        : theme?.tokens?.alias?.color?.border?.separator?.base.weak};
    height: 3.6rem;
    background-color: ${theme?.tokens?.alias?.color?.background?.surface?.base
      ?.raised};
  `}
`;

interface StyledHeaderButtonProps {
  isSortable: boolean;
  isDragging: boolean;
}

export const StyledHeaderButton = styled.button<StyledHeaderButtonProps>`
  ${({ isDragging, isSortable, theme }) => {
    const colorTokens = theme?.tokens?.alias?.color;
    const elevationTokens = theme?.tokens?.alias?.elevation;

    return css`
      all: unset;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: ${isSortable ? (isDragging ? 'grabbing' : 'grab') : 'pointer'};

      &::after,
      &::before {
        content: '';
        position: absolute;
        inset: 0 0 0 0;
        transition: all ease 0.15s;
        pointer-events: none;
        background-color: transparent;
      }

      &:hover::before {
        background-color: ${colorTokens?.background?.surface?.backdrop?.base
          ?.hovered};
      }

      &:focus-visible {
        outline: none;
        box-shadow: ${elevationTokens?.boxShadow?.base?.focused};
      }
    `;
  }}
`;
