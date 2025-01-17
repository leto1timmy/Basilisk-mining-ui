import { useQueries, useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "utils/queryKeys"
import { u32 } from "@polkadot/types"
import { useTradeRouter } from "utils/sdk"
import { TradeRouter } from "@galacticcouncil/sdk"
import { Maybe } from "utils/types"
import { BN_1, BN_10 } from "utils/constants"
import BN from "bignumber.js"

export const useSpotPrice = (
  assetA: Maybe<u32 | string>,
  assetB: Maybe<u32 | string>,
) => {
  const tradeRouter = useTradeRouter()
  const tokenIn = assetA?.toString() ?? ""
  const tokenOut = assetB?.toString() ?? ""

  return useQuery(
    QUERY_KEYS.spotPrice(tokenIn, tokenOut),
    getSpotPrice(tradeRouter, tokenIn, tokenOut),
    { enabled: !!tokenIn && !!tokenOut },
  )
}

export const useSpotPrices = (
  assetsIn: Maybe<u32 | string>[],
  assetOut: Maybe<u32 | string>,
) => {
  const tradeRouter = useTradeRouter()

  const assets = assetsIn
    .filter((a): a is u32 | string => !!a)
    .map((a) => a.toString())
  const tokenOut = assetOut?.toString() ?? ""

  return useQueries({
    queries: assets.map((tokenIn) => ({
      queryKey: QUERY_KEYS.spotPrice(tokenIn, tokenOut),
      queryFn: getSpotPrice(tradeRouter, tokenIn, tokenOut),
      enabled: !!tokenIn && !!tokenOut,
    })),
  })
}

export const getSpotPrice =
  (tradeRouter: TradeRouter, tokenIn: string, tokenOut: string) => async () => {
    // X -> X would return undefined, no need for spot price in such case
    if (tokenIn === tokenOut) return { tokenIn, tokenOut, spotPrice: BN_1 }

    const res = await tradeRouter.getBestSpotPrice(tokenIn, tokenOut)
    const spotPrice = res.amount.div(BN_10.pow(res.decimals))

    return { tokenIn, tokenOut, spotPrice }
  }

export type SpotPrice = {
  tokenIn: string
  tokenOut: string
  spotPrice: BN
}
