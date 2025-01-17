// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/consts"

import type { ApiTypes, AugmentedConst } from "@polkadot/api-base/types"
import type {
  Option,
  U8aFixed,
  Vec,
  bool,
  u128,
  u16,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec"
import type { Codec, ITuple } from "@polkadot/types-codec/types"
import type {
  AccountId32,
  Percent,
  Permill,
} from "@polkadot/types/interfaces/runtime"
import type {
  FrameSupportPalletId,
  FrameSupportWeightsPays,
  FrameSupportWeightsRuntimeDbWeight,
  FrameSupportWeightsWeightToFeeCoefficient,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  SpVersionRuntimeVersion,
  XcmV1MultiLocation,
} from "@polkadot/types/lookup"

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>

declare module "@polkadot/api-base/types/consts" {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Native Asset Id
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    authorship: {
      /**
       * The number of blocks back we should accept uncles.
       * This means that we will deal with uncle-parents that are
       * `UncleGenerations + 1` before `now`.
       **/
      uncleGenerations: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    currencies: {
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>
      /**
       * The period between a proposal being approved and enacted.
       *
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>
      /**
       * The maximum number of votes for an account.
       *
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: u128 & AugmentedConst<ApiType>
      /**
       * The minimum period of vote locking.
       *
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    duster: {
      /**
       * Native Asset Id
       **/
      nativeCurrencyId: u32 & AugmentedConst<ApiType>
      /**
       * Reward amount
       **/
      reward: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    elections: {
      /**
       * How much should be locked up in order to submit one's candidacy.
       **/
      candidacyBond: u128 & AugmentedConst<ApiType>
      /**
       * Number of members to elect.
       **/
      desiredMembers: u32 & AugmentedConst<ApiType>
      /**
       * Number of runners_up to keep.
       **/
      desiredRunnersUp: u32 & AugmentedConst<ApiType>
      /**
       * Identifier for the elections-phragmen pallet's lock
       **/
      palletId: U8aFixed & AugmentedConst<ApiType>
      /**
       * How long each seat is kept. This defines the next block number at which an election
       * round will happen. If set to zero, no elections are ever triggered and the module will
       * be in passive mode.
       **/
      termDuration: u32 & AugmentedConst<ApiType>
      /**
       * Base deposit associated with voting.
       *
       * This should be sensibly high to economically ensure the pallet cannot be attacked by
       * creating a gigantic number of votes.
       **/
      votingBondBase: u128 & AugmentedConst<ApiType>
      /**
       * The amount of bond that need to be locked for each vote (32 bytes).
       **/
      votingBondFactor: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    exchange: {
      maxOutRatio: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    lbp: {
      /**
       * Max fraction of pool to sell in single transaction
       **/
      maxInRatio: u128 & AugmentedConst<ApiType>
      /**
       * Max fraction of pool to buy in single transaction
       **/
      maxOutRatio: u128 & AugmentedConst<ApiType>
      /**
       * Minimum pool liquidity, sole purpose of this is to keep the math working
       **/
      minPoolLiquidity: u128 & AugmentedConst<ApiType>
      /**
       * Minimum trading limit, sole purpose of this is to keep the math working
       **/
      minTradingLimit: u128 & AugmentedConst<ApiType>
      repayFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    marketplace: {
      minimumOfferAmount: u128 & AugmentedConst<ApiType>
      royaltyBondAmount: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       *
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       *
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    multiTransactionPayment: {
      /**
       * Account where fees are deposited
       **/
      feeReceiver: AccountId32 & AugmentedConst<ApiType>
      /**
       * Native Asset
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>
      /**
       * Should fee be paid for setting a currency
       **/
      withdrawFeeForSetCurrency: FrameSupportWeightsPays &
        AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    nft: {
      /**
       * Class IDs reserved for runtime up to the following constant
       **/
      reserveClassIdUpTo: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       *
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>
      /**
       * The amount of currency needed per announcement made.
       *
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       *
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>
      /**
       * The amount of currency needed per proxy added.
       *
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables of less
       * priority than `schedule::HARD_DEADLINE`.
       **/
      maximumWeight: u64 & AugmentedConst<ApiType>
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>
      /**
       * The designated SS85 prefix of this chain.
       *
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    tips: {
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>
      /**
       * Maximum acceptable reason length.
       *
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: u32 & AugmentedConst<ApiType>
      /**
       * The percent of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       *
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       *
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       *
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       *
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: u128 & AugmentedConst<ApiType>
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<FrameSupportWeightsWeightToFeeCoefficient> &
        AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>
      /**
       * The maximum number of approvals that can wait in the spending queue.
       *
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    uniques: {
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an asset.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>
      /**
       * The basic amount of funds that must be reserved for an asset class.
       **/
      classDeposit: u128 & AugmentedConst<ApiType>
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>
      /**
       * The basic amount of funds that must be reserved for an asset instance.
       **/
      instanceDeposit: u128 & AugmentedConst<ApiType>
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    vesting: {
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    warehouseLM: {
      /**
       * Maximum number of yield farms same LP shares can be re/deposited into. This value always
       * MUST BE >= 1.
       **/
      maxFarmEntriesPerDeposit: u32 & AugmentedConst<ApiType>
      /**
       * Max number of yield farms can exist in global farm. This includes all farms in the
       * storage(active, stopped, deleted).
       **/
      maxYieldFarmsPerGlobalFarm: u32 & AugmentedConst<ApiType>
      /**
       * Minimum number of periods to run liquidity mining program.
       **/
      minPlannedYieldingPeriods: u32 & AugmentedConst<ApiType>
      /**
       * Minimum total rewards to distribute from global farm during liquidity mining.
       **/
      minTotalFarmRewards: u128 & AugmentedConst<ApiType>
      /**
       * Pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    xTokens: {
      /**
       * Base XCM weight.
       *
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: u64 & AugmentedConst<ApiType>
      /**
       * Self chain location.
       **/
      selfLocation: XcmV1MultiLocation & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
    xyk: {
      /**
       * Trading fee rate
       **/
      getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>
      /**
       * Max fraction of pool to sell in single transaction
       **/
      maxInRatio: u128 & AugmentedConst<ApiType>
      /**
       * Max fraction of pool to buy in single transaction
       **/
      maxOutRatio: u128 & AugmentedConst<ApiType>
      /**
       * Minimum pool liquidity
       **/
      minPoolLiquidity: u128 & AugmentedConst<ApiType>
      /**
       * Minimum trading limit
       **/
      minTradingLimit: u128 & AugmentedConst<ApiType>
      /**
       * Native Asset Id
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>
      /**
       * Generic const
       **/
      [key: string]: Codec
    }
  } // AugmentedConsts
} // declare module
