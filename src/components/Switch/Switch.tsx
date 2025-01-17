import { Label } from "components/Label/Label"
import { FC } from "react"
import { SSwitch, SThumb } from "./Switch.styled"

type SwitchProps = {
  value: boolean
  onCheckedChange: (v: boolean) => void
  label: string
  name: string
  disabled?: boolean
  size?: "small" | "regular"
  withLabel?: boolean
}

export const Switch: FC<SwitchProps> = ({
  value,
  onCheckedChange,
  disabled,
  size = "regular",
  name,
  label,
  withLabel = false,
}) => {
  return (
    <Label
      id={name}
      label={label}
      withLabel={withLabel}
      css={{ fontSize: 14, display: "flex", alignItems: "center" }}
    >
      <SSwitch
        checked={value}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        size={size}
        name={name}
        id={name}
        withLabel={withLabel}
      >
        <SThumb checked={value} disabled={disabled} size={size} />
      </SSwitch>
    </Label>
  )
}
