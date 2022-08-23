import { BasiliskIcon } from "assets/icons/tokens/BasiliskIcon"
import { Box } from "components/Box/Box"
import { Separator } from "components/Separator/Separator"
import { Text } from "components/Typography/Text/Text"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { PoolIncentivesRow } from "sections/pools/pool/incentives/row/PoolIncentivesRow"

const mockRows = [
  { id: 1, icon: <BasiliskIcon />, name: "KAR", value: "5-10" },
  { id: 2, icon: <BasiliskIcon />, name: "KAR", value: "10-15" },
  { id: 3, icon: <BasiliskIcon />, name: "KAR", value: "15-20" },
]

export const PoolIncentives = () => {
  const { t } = useTranslation()
  return (
    <Box width={206}>
      <Text fs={14} lh={26} color="neutralGray400" mb={18}>
        {t("pools.pool.incentives.title")}
      </Text>
      {mockRows.map((row, rowI) => (
        <Fragment key={rowI}>
          <PoolIncentivesRow {...row} />
          {rowI !== mockRows.length - 1 && <Separator mb={13} />}
        </Fragment>
      ))}
    </Box>
  )
}