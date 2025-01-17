import { ModalMeta } from "components/Modal/Modal"
import { useTranslation } from "react-i18next"
import { useAPR } from "utils/apr"
import { u32 } from "@polkadot/types"
import { PoolBase } from "@galacticcouncil/sdk"
import { Fragment } from "react"
import { PoolJoinFarmDeposit } from "./PoolJoinFarmDeposit"
import { PoolJoinFarmItem } from "./PoolJoinFarmItem"
import { Text } from "components/Typography/Text/Text"
import { useAccountDepositIds, useDeposits } from "api/deposits"
import { useAccountStore } from "state/store"
import { PoolJoinFarmClaim } from "./PoolJoinFarmClaim"
import { PoolJoinFarmWithdraw } from "./PoolJoinFarmWithdraw"
import { PalletLiquidityMiningYieldFarmEntry } from "@polkadot/types/lookup"

export function PoolJoinFarmSectionList(props: {
  pool: PoolBase
  onSelect: (
    value: {
      yieldFarmId: u32
      globalFarmId: u32
      yieldFarmEntry?: PalletLiquidityMiningYieldFarmEntry
    } | null,
  ) => void
}) {
  const { t } = useTranslation()

  const { account } = useAccountStore()
  const apr = useAPR(props.pool.address)
  const deposits = useDeposits(props.pool.address)
  const accountDepositIds = useAccountDepositIds(account?.address)

  const positions = deposits.data?.filter((deposit) =>
    accountDepositIds.data?.some((ad) => ad.instanceId.eq(deposit.id)),
  )

  const [assetIn, assetOut] = props.pool.tokens

  return (
    <Fragment key="list">
      <ModalMeta
        title={t("pools.allFarms.modal.title", {
          symbol1: assetIn.symbol,
          symbol2: assetOut.symbol,
        })}
      />

      {account && (
        <>
          <Text fs={18} fw={700} sx={{ mb: 16 }}>
            {t("pools.allFarms.modal.list.positions")}
          </Text>

          <PoolJoinFarmClaim pool={props.pool} />

          {positions?.map((deposit) => {
            return (
              <Fragment key={deposit.id.toString()}>
                {deposit.deposit.yieldFarmEntries.map((entry) => {
                  const farm = apr.data.find(
                    (i) =>
                      entry.globalFarmId.eq(i.globalFarm.id) &&
                      entry.yieldFarmId.eq(i.yieldFarm.id),
                  )

                  if (farm == null) return null
                  return (
                    <PoolJoinFarmItem
                      key={farm.yieldFarm.id.toString()}
                      farm={farm}
                      pool={props.pool}
                      deposit={deposit}
                      onSelect={() =>
                        props.onSelect({
                          globalFarmId: farm.globalFarm.id,
                          yieldFarmId: farm.yieldFarm.id,
                          yieldFarmEntry: entry,
                        })
                      }
                    />
                  )
                })}
              </Fragment>
            )
          })}

          {!!positions?.length && (
            <div sx={{ flex: "row", justify: "center" }}>
              <PoolJoinFarmWithdraw pool={props.pool} />
            </div>
          )}

          <Text fs={18} fw={700} sx={{ mt: 20, mb: 16 }}>
            {t("pools.allFarms.modal.list.availableFarms")}
          </Text>
        </>
      )}

      {apr.data.map((farm) => (
        <PoolJoinFarmItem
          key={[farm.globalFarm.id, farm.yieldFarm.id].join(",")}
          farm={farm}
          pool={props.pool}
          onSelect={() =>
            props.onSelect({
              globalFarmId: farm.globalFarm.id,
              yieldFarmId: farm.yieldFarm.id,
            })
          }
        />
      ))}

      <PoolJoinFarmDeposit pool={props.pool} />
    </Fragment>
  )
}
