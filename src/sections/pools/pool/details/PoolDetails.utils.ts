import { useTradeVolume } from "api/volume"
import { useMemo } from "react"
import BN from "bignumber.js"
import { BN_0, BN_10 } from "utils/constants"
import { useSpotPrices } from "api/spotPrice"
import { useAUSD } from "api/asset"
import { useAssetMetaList } from "api/assetMeta"

export function usePoolDetailsTradeVolume(poolAddress: string) {
  const volume = useTradeVolume(poolAddress)

  const values = useMemo(() => {
    // Assuming trade volume is the aggregate amount being
    // sent between user account and pair account
    const sums =
      volume.data?.events.reduce<Record<string, BN>>((memo, item) => {
        const assetIn = item.args.assetIn.toString()
        const assetOut = item.args.assetOut.toString()

        if (memo[assetIn] == null) memo[assetIn] = BN_0
        if (memo[assetOut] == null) memo[assetOut] = BN_0

        if (item.name === "XYK.BuyExecuted") {
          memo[assetIn] = memo[assetIn].plus(item.args.amount)
          memo[assetOut] = memo[assetOut].plus(item.args.buyPrice)
        }

        if (item.name === "XYK.SellExecuted") {
          memo[assetIn] = memo[assetIn].plus(item.args.amount)
          memo[assetOut] = memo[assetOut].plus(item.args.salePrice)
        }

        return memo
      }, {}) ?? {}

    return { assets: Object.keys(sums), sums }
  }, [volume.data])

  const aUSD = useAUSD()
  const assets = useAssetMetaList(values.assets)
  const spotPrices = useSpotPrices(values.assets, aUSD.data?.id)

  return useMemo(() => {
    if (volume.isLoading) return null

    const combinedAssets = spotPrices.map((spotPrice, idx) => {
      const asset = assets[idx]
      if (asset.data?.data == null || spotPrice.data == null) return null
      return {
        spotPrice: spotPrice.data,
        asset: asset.data.data,
      }
    })

    let result = BN_0
    for (const item of combinedAssets) {
      if (item == null) return null

      const sum = values.sums[item.spotPrice.tokenIn]
      const sumScale = sum.dividedBy(BN_10.pow(item.asset.decimals.toHex()))

      result = result.plus(sumScale.multipliedBy(item.spotPrice.spotPrice))
    }

    return result
  }, [volume.isLoading, assets, spotPrices, values.sums])
}
