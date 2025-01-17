import { Button } from "components/Button/Button"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { theme } from "theme"

export const SFarm = styled.button<{ variant: "list" | "detail" }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 32px;

  width: 100%;

  padding: 20px 24px;

  border-radius: 12px;
  background-color: ${theme.colors.backgroundGray1000};

  transition: all ${theme.transitions.default};

  outline: none;
  border: 1px solid transparent;

  svg {
    width: 20px;
    height: 20px;
  }

  ${(props) => {
    if (props.variant === "detail") {
      return css`
        grid-template-columns: auto 1fr;
      `
    }

    return css`
      grid-template-columns: auto 1fr auto;
      cursor: pointer;

      &:hover {
        border-color: ${theme.colors.primary400};
      }
    `
  }}
`

export const SFarmRow = styled.div`
  display: grid;
  grid-template-columns: 92px 1fr;
  grid-column-gap: 12px;
  align-items: center;

  padding-bottom: 9px;
  margin-bottom: 9px;

  border-bottom: 2px solid ${theme.colors.backgroundGray800};
`

export const SFarmIcon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  height: 100%;

  margin-right: -10px;

  svg {
    width: 24px;
    height: 24px;

    opacity: 0.5;
    transform: rotate(-90deg);

    color: ${theme.colors.neutralGray200};
  }
`

export const SMaxButton = styled(Button)`
  background: rgba(${theme.rgbColors.white}, 0.06);
  color: ${theme.colors.white};
  font-weight: 600;

  :hover {
    background: rgba(${theme.rgbColors.white}, 0.15);
  }
`
