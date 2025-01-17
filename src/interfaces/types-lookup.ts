// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/lookup"

import type { Data } from "@polkadot/types"
import type {
  BTreeMap,
  Bytes,
  Compact,
  Enum,
  Null,
  Option,
  Result,
  Set,
  Struct,
  Text,
  U8aFixed,
  Vec,
  WrapperKeepOpaque,
  bool,
  i128,
  u128,
  u16,
  u32,
  u64,
  u8,
} from "@polkadot/types-codec"
import type { ITuple } from "@polkadot/types-codec/types"
import type { Vote } from "@polkadot/types/interfaces/elections"
import type {
  AccountId32,
  Call,
  H256,
  Perbill,
  Perquintill,
} from "@polkadot/types/interfaces/runtime"
import type { Event } from "@polkadot/types/interfaces/system"

declare module "@polkadot/types/lookup" {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32
    readonly consumers: u32
    readonly providers: u32
    readonly sufficients: u32
    readonly data: PalletBalancesAccountData
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128
    readonly reserved: u128
    readonly miscFrozen: u128
    readonly feeFrozen: u128
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (7) */
  interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64
    readonly operational: u64
    readonly mandatory: u64
  }

  /** @name SpRuntimeDigest (11) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean
    readonly asOther: Bytes
    readonly isConsensus: boolean
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>
    readonly isSeal: boolean
    readonly asSeal: ITuple<[U8aFixed, Bytes]>
    readonly isPreRuntime: boolean
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>
    readonly isRuntimeEnvironmentUpdated: boolean
    readonly type:
      | "Other"
      | "Consensus"
      | "Seal"
      | "PreRuntime"
      | "RuntimeEnvironmentUpdated"
  }

  /** @name FrameSystemEventRecord (16) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase
    readonly event: Event
    readonly topics: Vec<H256>
  }

  /** @name FrameSystemEvent (18) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo
    } & Struct
    readonly isExtrinsicFailed: boolean
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo
    } & Struct
    readonly isCodeUpdated: boolean
    readonly isNewAccount: boolean
    readonly asNewAccount: {
      readonly account: AccountId32
    } & Struct
    readonly isKilledAccount: boolean
    readonly asKilledAccount: {
      readonly account: AccountId32
    } & Struct
    readonly isRemarked: boolean
    readonly asRemarked: {
      readonly sender: AccountId32
      readonly hash_: H256
    } & Struct
    readonly type:
      | "ExtrinsicSuccess"
      | "ExtrinsicFailed"
      | "CodeUpdated"
      | "NewAccount"
      | "KilledAccount"
      | "Remarked"
  }

  /** @name FrameSupportWeightsDispatchInfo (19) */
  interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64
    readonly class: FrameSupportWeightsDispatchClass
    readonly paysFee: FrameSupportWeightsPays
  }

  /** @name FrameSupportWeightsDispatchClass (20) */
  interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean
    readonly isOperational: boolean
    readonly isMandatory: boolean
    readonly type: "Normal" | "Operational" | "Mandatory"
  }

  /** @name FrameSupportWeightsPays (21) */
  interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean
    readonly isNo: boolean
    readonly type: "Yes" | "No"
  }

  /** @name SpRuntimeDispatchError (22) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean
    readonly isCannotLookup: boolean
    readonly isBadOrigin: boolean
    readonly isModule: boolean
    readonly asModule: SpRuntimeModuleError
    readonly isConsumerRemaining: boolean
    readonly isNoProviders: boolean
    readonly isTooManyConsumers: boolean
    readonly isToken: boolean
    readonly asToken: SpRuntimeTokenError
    readonly isArithmetic: boolean
    readonly asArithmetic: SpRuntimeArithmeticError
    readonly type:
      | "Other"
      | "CannotLookup"
      | "BadOrigin"
      | "Module"
      | "ConsumerRemaining"
      | "NoProviders"
      | "TooManyConsumers"
      | "Token"
      | "Arithmetic"
  }

  /** @name SpRuntimeModuleError (23) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8
    readonly error: u8
  }

  /** @name SpRuntimeTokenError (24) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean
    readonly isWouldDie: boolean
    readonly isBelowMinimum: boolean
    readonly isCannotCreate: boolean
    readonly isUnknownAsset: boolean
    readonly isFrozen: boolean
    readonly isUnsupported: boolean
    readonly type:
      | "NoFunds"
      | "WouldDie"
      | "BelowMinimum"
      | "CannotCreate"
      | "UnknownAsset"
      | "Frozen"
      | "Unsupported"
  }

  /** @name SpRuntimeArithmeticError (25) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean
    readonly isOverflow: boolean
    readonly isDivisionByZero: boolean
    readonly type: "Underflow" | "Overflow" | "DivisionByZero"
  }

  /** @name PalletBalancesEvent (26) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean
    readonly asEndowed: {
      readonly account: AccountId32
      readonly freeBalance: u128
    } & Struct
    readonly isDustLost: boolean
    readonly asDustLost: {
      readonly account: AccountId32
      readonly amount: u128
    } & Struct
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
    } & Struct
    readonly isBalanceSet: boolean
    readonly asBalanceSet: {
      readonly who: AccountId32
      readonly free: u128
      readonly reserved: u128
    } & Struct
    readonly isReserved: boolean
    readonly asReserved: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isUnreserved: boolean
    readonly asUnreserved: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isReserveRepatriated: boolean
    readonly asReserveRepatriated: {
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus
    } & Struct
    readonly isDeposit: boolean
    readonly asDeposit: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isWithdraw: boolean
    readonly asWithdraw: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isSlashed: boolean
    readonly asSlashed: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly type:
      | "Endowed"
      | "DustLost"
      | "Transfer"
      | "BalanceSet"
      | "Reserved"
      | "Unreserved"
      | "ReserveRepatriated"
      | "Deposit"
      | "Withdraw"
      | "Slashed"
  }

  /** @name FrameSupportTokensMiscBalanceStatus (27) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean
    readonly isReserved: boolean
    readonly type: "Free" | "Reserved"
  }

  /** @name PalletTreasuryEvent (28) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean
    readonly asProposed: {
      readonly proposalIndex: u32
    } & Struct
    readonly isSpending: boolean
    readonly asSpending: {
      readonly budgetRemaining: u128
    } & Struct
    readonly isAwarded: boolean
    readonly asAwarded: {
      readonly proposalIndex: u32
      readonly award: u128
      readonly account: AccountId32
    } & Struct
    readonly isRejected: boolean
    readonly asRejected: {
      readonly proposalIndex: u32
      readonly slashed: u128
    } & Struct
    readonly isBurnt: boolean
    readonly asBurnt: {
      readonly burntFunds: u128
    } & Struct
    readonly isRollover: boolean
    readonly asRollover: {
      readonly rolloverBalance: u128
    } & Struct
    readonly isDeposit: boolean
    readonly asDeposit: {
      readonly value: u128
    } & Struct
    readonly type:
      | "Proposed"
      | "Spending"
      | "Awarded"
      | "Rejected"
      | "Burnt"
      | "Rollover"
      | "Deposit"
  }

  /** @name PalletUtilityEvent (29) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean
    readonly asBatchInterrupted: {
      readonly index: u32
      readonly error: SpRuntimeDispatchError
    } & Struct
    readonly isBatchCompleted: boolean
    readonly isItemCompleted: boolean
    readonly isDispatchedAs: boolean
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly type:
      | "BatchInterrupted"
      | "BatchCompleted"
      | "ItemCompleted"
      | "DispatchedAs"
  }

  /** @name PalletSchedulerEvent (32) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean
    readonly asScheduled: {
      readonly when: u32
      readonly index: u32
    } & Struct
    readonly isCanceled: boolean
    readonly asCanceled: {
      readonly when: u32
      readonly index: u32
    } & Struct
    readonly isDispatched: boolean
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>
      readonly id: Option<Bytes>
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isCallLookupFailed: boolean
    readonly asCallLookupFailed: {
      readonly task: ITuple<[u32, u32]>
      readonly id: Option<Bytes>
      readonly error: FrameSupportScheduleLookupError
    } & Struct
    readonly type: "Scheduled" | "Canceled" | "Dispatched" | "CallLookupFailed"
  }

  /** @name FrameSupportScheduleLookupError (35) */
  interface FrameSupportScheduleLookupError extends Enum {
    readonly isUnknown: boolean
    readonly isBadFormat: boolean
    readonly type: "Unknown" | "BadFormat"
  }

  /** @name PalletDemocracyEvent (36) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean
    readonly asProposed: {
      readonly proposalIndex: u32
      readonly deposit: u128
    } & Struct
    readonly isTabled: boolean
    readonly asTabled: {
      readonly proposalIndex: u32
      readonly deposit: u128
      readonly depositors: Vec<AccountId32>
    } & Struct
    readonly isExternalTabled: boolean
    readonly isStarted: boolean
    readonly asStarted: {
      readonly refIndex: u32
      readonly threshold: PalletDemocracyVoteThreshold
    } & Struct
    readonly isPassed: boolean
    readonly asPassed: {
      readonly refIndex: u32
    } & Struct
    readonly isNotPassed: boolean
    readonly asNotPassed: {
      readonly refIndex: u32
    } & Struct
    readonly isCancelled: boolean
    readonly asCancelled: {
      readonly refIndex: u32
    } & Struct
    readonly isExecuted: boolean
    readonly asExecuted: {
      readonly refIndex: u32
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isDelegated: boolean
    readonly asDelegated: {
      readonly who: AccountId32
      readonly target: AccountId32
    } & Struct
    readonly isUndelegated: boolean
    readonly asUndelegated: {
      readonly account: AccountId32
    } & Struct
    readonly isVetoed: boolean
    readonly asVetoed: {
      readonly who: AccountId32
      readonly proposalHash: H256
      readonly until: u32
    } & Struct
    readonly isPreimageNoted: boolean
    readonly asPreimageNoted: {
      readonly proposalHash: H256
      readonly who: AccountId32
      readonly deposit: u128
    } & Struct
    readonly isPreimageUsed: boolean
    readonly asPreimageUsed: {
      readonly proposalHash: H256
      readonly provider: AccountId32
      readonly deposit: u128
    } & Struct
    readonly isPreimageInvalid: boolean
    readonly asPreimageInvalid: {
      readonly proposalHash: H256
      readonly refIndex: u32
    } & Struct
    readonly isPreimageMissing: boolean
    readonly asPreimageMissing: {
      readonly proposalHash: H256
      readonly refIndex: u32
    } & Struct
    readonly isPreimageReaped: boolean
    readonly asPreimageReaped: {
      readonly proposalHash: H256
      readonly provider: AccountId32
      readonly deposit: u128
      readonly reaper: AccountId32
    } & Struct
    readonly isBlacklisted: boolean
    readonly asBlacklisted: {
      readonly proposalHash: H256
    } & Struct
    readonly isVoted: boolean
    readonly asVoted: {
      readonly voter: AccountId32
      readonly refIndex: u32
      readonly vote: PalletDemocracyVoteAccountVote
    } & Struct
    readonly isSeconded: boolean
    readonly asSeconded: {
      readonly seconder: AccountId32
      readonly propIndex: u32
    } & Struct
    readonly type:
      | "Proposed"
      | "Tabled"
      | "ExternalTabled"
      | "Started"
      | "Passed"
      | "NotPassed"
      | "Cancelled"
      | "Executed"
      | "Delegated"
      | "Undelegated"
      | "Vetoed"
      | "PreimageNoted"
      | "PreimageUsed"
      | "PreimageInvalid"
      | "PreimageMissing"
      | "PreimageReaped"
      | "Blacklisted"
      | "Voted"
      | "Seconded"
  }

  /** @name PalletDemocracyVoteThreshold (38) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean
    readonly isSuperMajorityAgainst: boolean
    readonly isSimpleMajority: boolean
    readonly type:
      | "SuperMajorityApprove"
      | "SuperMajorityAgainst"
      | "SimpleMajority"
  }

  /** @name PalletDemocracyVoteAccountVote (39) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean
    readonly asStandard: {
      readonly vote: Vote
      readonly balance: u128
    } & Struct
    readonly isSplit: boolean
    readonly asSplit: {
      readonly aye: u128
      readonly nay: u128
    } & Struct
    readonly type: "Standard" | "Split"
  }

  /** @name PalletElectionsPhragmenEvent (41) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>
    } & Struct
    readonly isEmptyTerm: boolean
    readonly isElectionError: boolean
    readonly isMemberKicked: boolean
    readonly asMemberKicked: {
      readonly member: AccountId32
    } & Struct
    readonly isRenounced: boolean
    readonly asRenounced: {
      readonly candidate: AccountId32
    } & Struct
    readonly isCandidateSlashed: boolean
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32
      readonly amount: u128
    } & Struct
    readonly isSeatHolderSlashed: boolean
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32
      readonly amount: u128
    } & Struct
    readonly type:
      | "NewTerm"
      | "EmptyTerm"
      | "ElectionError"
      | "MemberKicked"
      | "Renounced"
      | "CandidateSlashed"
      | "SeatHolderSlashed"
  }

  /** @name PalletCollectiveEvent (44) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean
    readonly asProposed: {
      readonly account: AccountId32
      readonly proposalIndex: u32
      readonly proposalHash: H256
      readonly threshold: u32
    } & Struct
    readonly isVoted: boolean
    readonly asVoted: {
      readonly account: AccountId32
      readonly proposalHash: H256
      readonly voted: bool
      readonly yes: u32
      readonly no: u32
    } & Struct
    readonly isApproved: boolean
    readonly asApproved: {
      readonly proposalHash: H256
    } & Struct
    readonly isDisapproved: boolean
    readonly asDisapproved: {
      readonly proposalHash: H256
    } & Struct
    readonly isExecuted: boolean
    readonly asExecuted: {
      readonly proposalHash: H256
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isMemberExecuted: boolean
    readonly asMemberExecuted: {
      readonly proposalHash: H256
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isClosed: boolean
    readonly asClosed: {
      readonly proposalHash: H256
      readonly yes: u32
      readonly no: u32
    } & Struct
    readonly type:
      | "Proposed"
      | "Voted"
      | "Approved"
      | "Disapproved"
      | "Executed"
      | "MemberExecuted"
      | "Closed"
  }

  /** @name OrmlVestingModuleEvent (47) */
  interface OrmlVestingModuleEvent extends Enum {
    readonly isVestingScheduleAdded: boolean
    readonly asVestingScheduleAdded: {
      readonly from: AccountId32
      readonly to: AccountId32
      readonly vestingSchedule: OrmlVestingVestingSchedule
    } & Struct
    readonly isClaimed: boolean
    readonly asClaimed: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isVestingSchedulesUpdated: boolean
    readonly asVestingSchedulesUpdated: {
      readonly who: AccountId32
    } & Struct
    readonly type:
      | "VestingScheduleAdded"
      | "Claimed"
      | "VestingSchedulesUpdated"
  }

  /** @name OrmlVestingVestingSchedule (48) */
  interface OrmlVestingVestingSchedule extends Struct {
    readonly start: u32
    readonly period: u32
    readonly periodCount: u32
    readonly perPeriod: Compact<u128>
  }

  /** @name PalletProxyEvent (50) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isAnonymousCreated: boolean
    readonly asAnonymousCreated: {
      readonly anonymous: AccountId32
      readonly who: AccountId32
      readonly proxyType: CommonRuntimeProxyType
      readonly disambiguationIndex: u16
    } & Struct
    readonly isAnnounced: boolean
    readonly asAnnounced: {
      readonly real: AccountId32
      readonly proxy: AccountId32
      readonly callHash: H256
    } & Struct
    readonly isProxyAdded: boolean
    readonly asProxyAdded: {
      readonly delegator: AccountId32
      readonly delegatee: AccountId32
      readonly proxyType: CommonRuntimeProxyType
      readonly delay: u32
    } & Struct
    readonly type:
      | "ProxyExecuted"
      | "AnonymousCreated"
      | "Announced"
      | "ProxyAdded"
  }

  /** @name CommonRuntimeProxyType (51) */
  interface CommonRuntimeProxyType extends Enum {
    readonly isAny: boolean
    readonly isCancelProxy: boolean
    readonly isGovernance: boolean
    readonly isExchange: boolean
    readonly isTransfer: boolean
    readonly type:
      | "Any"
      | "CancelProxy"
      | "Governance"
      | "Exchange"
      | "Transfer"
  }

  /** @name PalletTipsEvent (53) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean
    readonly asNewTip: {
      readonly tipHash: H256
    } & Struct
    readonly isTipClosing: boolean
    readonly asTipClosing: {
      readonly tipHash: H256
    } & Struct
    readonly isTipClosed: boolean
    readonly asTipClosed: {
      readonly tipHash: H256
      readonly who: AccountId32
      readonly payout: u128
    } & Struct
    readonly isTipRetracted: boolean
    readonly asTipRetracted: {
      readonly tipHash: H256
    } & Struct
    readonly isTipSlashed: boolean
    readonly asTipSlashed: {
      readonly tipHash: H256
      readonly finder: AccountId32
      readonly deposit: u128
    } & Struct
    readonly type:
      | "NewTip"
      | "TipClosing"
      | "TipClosed"
      | "TipRetracted"
      | "TipSlashed"
  }

  /** @name PalletCollatorSelectionEvent (54) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean
    readonly asNewInvulnerables: Vec<AccountId32>
    readonly isNewDesiredCandidates: boolean
    readonly asNewDesiredCandidates: u32
    readonly isNewCandidacyBond: boolean
    readonly asNewCandidacyBond: u128
    readonly isCandidateAdded: boolean
    readonly asCandidateAdded: ITuple<[AccountId32, u128]>
    readonly isCandidateRemoved: boolean
    readonly asCandidateRemoved: AccountId32
    readonly type:
      | "NewInvulnerables"
      | "NewDesiredCandidates"
      | "NewCandidacyBond"
      | "CandidateAdded"
      | "CandidateRemoved"
  }

  /** @name PalletSessionEvent (55) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean
    readonly asNewSession: {
      readonly sessionIndex: u32
    } & Struct
    readonly type: "NewSession"
  }

  /** @name PalletPreimageEvent (56) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean
    readonly asNoted: {
      readonly hash_: H256
    } & Struct
    readonly isRequested: boolean
    readonly asRequested: {
      readonly hash_: H256
    } & Struct
    readonly isCleared: boolean
    readonly asCleared: {
      readonly hash_: H256
    } & Struct
    readonly type: "Noted" | "Requested" | "Cleared"
  }

  /** @name PalletUniquesEvent (57) */
  interface PalletUniquesEvent extends Enum {
    readonly isCreated: boolean
    readonly asCreated: {
      readonly class: u128
      readonly creator: AccountId32
      readonly owner: AccountId32
    } & Struct
    readonly isForceCreated: boolean
    readonly asForceCreated: {
      readonly class: u128
      readonly owner: AccountId32
    } & Struct
    readonly isDestroyed: boolean
    readonly asDestroyed: {
      readonly class: u128
    } & Struct
    readonly isIssued: boolean
    readonly asIssued: {
      readonly class: u128
      readonly instance: u128
      readonly owner: AccountId32
    } & Struct
    readonly isTransferred: boolean
    readonly asTransferred: {
      readonly class: u128
      readonly instance: u128
      readonly from: AccountId32
      readonly to: AccountId32
    } & Struct
    readonly isBurned: boolean
    readonly asBurned: {
      readonly class: u128
      readonly instance: u128
      readonly owner: AccountId32
    } & Struct
    readonly isFrozen: boolean
    readonly asFrozen: {
      readonly class: u128
      readonly instance: u128
    } & Struct
    readonly isThawed: boolean
    readonly asThawed: {
      readonly class: u128
      readonly instance: u128
    } & Struct
    readonly isClassFrozen: boolean
    readonly asClassFrozen: {
      readonly class: u128
    } & Struct
    readonly isClassThawed: boolean
    readonly asClassThawed: {
      readonly class: u128
    } & Struct
    readonly isOwnerChanged: boolean
    readonly asOwnerChanged: {
      readonly class: u128
      readonly newOwner: AccountId32
    } & Struct
    readonly isTeamChanged: boolean
    readonly asTeamChanged: {
      readonly class: u128
      readonly issuer: AccountId32
      readonly admin: AccountId32
      readonly freezer: AccountId32
    } & Struct
    readonly isApprovedTransfer: boolean
    readonly asApprovedTransfer: {
      readonly class: u128
      readonly instance: u128
      readonly owner: AccountId32
      readonly delegate: AccountId32
    } & Struct
    readonly isApprovalCancelled: boolean
    readonly asApprovalCancelled: {
      readonly class: u128
      readonly instance: u128
      readonly owner: AccountId32
      readonly delegate: AccountId32
    } & Struct
    readonly isAssetStatusChanged: boolean
    readonly asAssetStatusChanged: {
      readonly class: u128
    } & Struct
    readonly isClassMetadataSet: boolean
    readonly asClassMetadataSet: {
      readonly class: u128
      readonly data: Bytes
      readonly isFrozen: bool
    } & Struct
    readonly isClassMetadataCleared: boolean
    readonly asClassMetadataCleared: {
      readonly class: u128
    } & Struct
    readonly isMetadataSet: boolean
    readonly asMetadataSet: {
      readonly class: u128
      readonly instance: u128
      readonly data: Bytes
      readonly isFrozen: bool
    } & Struct
    readonly isMetadataCleared: boolean
    readonly asMetadataCleared: {
      readonly class: u128
      readonly instance: u128
    } & Struct
    readonly isRedeposited: boolean
    readonly asRedeposited: {
      readonly class: u128
      readonly successfulInstances: Vec<u128>
    } & Struct
    readonly isAttributeSet: boolean
    readonly asAttributeSet: {
      readonly class: u128
      readonly maybeInstance: Option<u128>
      readonly key: Bytes
      readonly value: Bytes
    } & Struct
    readonly isAttributeCleared: boolean
    readonly asAttributeCleared: {
      readonly class: u128
      readonly maybeInstance: Option<u128>
      readonly key: Bytes
    } & Struct
    readonly type:
      | "Created"
      | "ForceCreated"
      | "Destroyed"
      | "Issued"
      | "Transferred"
      | "Burned"
      | "Frozen"
      | "Thawed"
      | "ClassFrozen"
      | "ClassThawed"
      | "OwnerChanged"
      | "TeamChanged"
      | "ApprovedTransfer"
      | "ApprovalCancelled"
      | "AssetStatusChanged"
      | "ClassMetadataSet"
      | "ClassMetadataCleared"
      | "MetadataSet"
      | "MetadataCleared"
      | "Redeposited"
      | "AttributeSet"
      | "AttributeCleared"
  }

  /** @name PalletIdentityEvent (63) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean
    readonly asIdentitySet: {
      readonly who: AccountId32
    } & Struct
    readonly isIdentityCleared: boolean
    readonly asIdentityCleared: {
      readonly who: AccountId32
      readonly deposit: u128
    } & Struct
    readonly isIdentityKilled: boolean
    readonly asIdentityKilled: {
      readonly who: AccountId32
      readonly deposit: u128
    } & Struct
    readonly isJudgementRequested: boolean
    readonly asJudgementRequested: {
      readonly who: AccountId32
      readonly registrarIndex: u32
    } & Struct
    readonly isJudgementUnrequested: boolean
    readonly asJudgementUnrequested: {
      readonly who: AccountId32
      readonly registrarIndex: u32
    } & Struct
    readonly isJudgementGiven: boolean
    readonly asJudgementGiven: {
      readonly target: AccountId32
      readonly registrarIndex: u32
    } & Struct
    readonly isRegistrarAdded: boolean
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32
    } & Struct
    readonly isSubIdentityAdded: boolean
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32
      readonly main: AccountId32
      readonly deposit: u128
    } & Struct
    readonly isSubIdentityRemoved: boolean
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32
      readonly main: AccountId32
      readonly deposit: u128
    } & Struct
    readonly isSubIdentityRevoked: boolean
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32
      readonly main: AccountId32
      readonly deposit: u128
    } & Struct
    readonly type:
      | "IdentitySet"
      | "IdentityCleared"
      | "IdentityKilled"
      | "JudgementRequested"
      | "JudgementUnrequested"
      | "JudgementGiven"
      | "RegistrarAdded"
      | "SubIdentityAdded"
      | "SubIdentityRemoved"
      | "SubIdentityRevoked"
  }

  /** @name PalletMultisigEvent (64) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean
    readonly asNewMultisig: {
      readonly approving: AccountId32
      readonly multisig: AccountId32
      readonly callHash: U8aFixed
    } & Struct
    readonly isMultisigApproval: boolean
    readonly asMultisigApproval: {
      readonly approving: AccountId32
      readonly timepoint: PalletMultisigTimepoint
      readonly multisig: AccountId32
      readonly callHash: U8aFixed
    } & Struct
    readonly isMultisigExecuted: boolean
    readonly asMultisigExecuted: {
      readonly approving: AccountId32
      readonly timepoint: PalletMultisigTimepoint
      readonly multisig: AccountId32
      readonly callHash: U8aFixed
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isMultisigCancelled: boolean
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32
      readonly timepoint: PalletMultisigTimepoint
      readonly multisig: AccountId32
      readonly callHash: U8aFixed
    } & Struct
    readonly type:
      | "NewMultisig"
      | "MultisigApproval"
      | "MultisigExecuted"
      | "MultisigCancelled"
  }

  /** @name PalletMultisigTimepoint (65) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32
    readonly index: u32
  }

  /** @name CumulusPalletParachainSystemEvent (66) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean
    readonly isValidationFunctionApplied: boolean
    readonly asValidationFunctionApplied: u32
    readonly isValidationFunctionDiscarded: boolean
    readonly isUpgradeAuthorized: boolean
    readonly asUpgradeAuthorized: H256
    readonly isDownwardMessagesReceived: boolean
    readonly asDownwardMessagesReceived: u32
    readonly isDownwardMessagesProcessed: boolean
    readonly asDownwardMessagesProcessed: ITuple<[u64, H256]>
    readonly type:
      | "ValidationFunctionStored"
      | "ValidationFunctionApplied"
      | "ValidationFunctionDiscarded"
      | "UpgradeAuthorized"
      | "DownwardMessagesReceived"
      | "DownwardMessagesProcessed"
  }

  /** @name PalletXcmEvent (67) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean
    readonly asAttempted: XcmV2TraitsOutcome
    readonly isSent: boolean
    readonly asSent: ITuple<[XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>
    readonly isUnexpectedResponse: boolean
    readonly asUnexpectedResponse: ITuple<[XcmV1MultiLocation, u64]>
    readonly isResponseReady: boolean
    readonly asResponseReady: ITuple<[u64, XcmV2Response]>
    readonly isNotified: boolean
    readonly asNotified: ITuple<[u64, u8, u8]>
    readonly isNotifyOverweight: boolean
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, u64, u64]>
    readonly isNotifyDispatchError: boolean
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>
    readonly isNotifyDecodeFailed: boolean
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>
    readonly isInvalidResponder: boolean
    readonly asInvalidResponder: ITuple<
      [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]
    >
    readonly isInvalidResponderVersion: boolean
    readonly asInvalidResponderVersion: ITuple<[XcmV1MultiLocation, u64]>
    readonly isResponseTaken: boolean
    readonly asResponseTaken: u64
    readonly isAssetsTrapped: boolean
    readonly asAssetsTrapped: ITuple<
      [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]
    >
    readonly isVersionChangeNotified: boolean
    readonly asVersionChangeNotified: ITuple<[XcmV1MultiLocation, u32]>
    readonly isSupportedVersionChanged: boolean
    readonly asSupportedVersionChanged: ITuple<[XcmV1MultiLocation, u32]>
    readonly isNotifyTargetSendFail: boolean
    readonly asNotifyTargetSendFail: ITuple<
      [XcmV1MultiLocation, u64, XcmV2TraitsError]
    >
    readonly isNotifyTargetMigrationFail: boolean
    readonly asNotifyTargetMigrationFail: ITuple<
      [XcmVersionedMultiLocation, u64]
    >
    readonly type:
      | "Attempted"
      | "Sent"
      | "UnexpectedResponse"
      | "ResponseReady"
      | "Notified"
      | "NotifyOverweight"
      | "NotifyDispatchError"
      | "NotifyDecodeFailed"
      | "InvalidResponder"
      | "InvalidResponderVersion"
      | "ResponseTaken"
      | "AssetsTrapped"
      | "VersionChangeNotified"
      | "SupportedVersionChanged"
      | "NotifyTargetSendFail"
      | "NotifyTargetMigrationFail"
  }

  /** @name XcmV2TraitsOutcome (68) */
  interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean
    readonly asComplete: u64
    readonly isIncomplete: boolean
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>
    readonly isError: boolean
    readonly asError: XcmV2TraitsError
    readonly type: "Complete" | "Incomplete" | "Error"
  }

  /** @name XcmV2TraitsError (69) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean
    readonly isUnimplemented: boolean
    readonly isUntrustedReserveLocation: boolean
    readonly isUntrustedTeleportLocation: boolean
    readonly isMultiLocationFull: boolean
    readonly isMultiLocationNotInvertible: boolean
    readonly isBadOrigin: boolean
    readonly isInvalidLocation: boolean
    readonly isAssetNotFound: boolean
    readonly isFailedToTransactAsset: boolean
    readonly isNotWithdrawable: boolean
    readonly isLocationCannotHold: boolean
    readonly isExceedsMaxMessageSize: boolean
    readonly isDestinationUnsupported: boolean
    readonly isTransport: boolean
    readonly isUnroutable: boolean
    readonly isUnknownClaim: boolean
    readonly isFailedToDecode: boolean
    readonly isMaxWeightInvalid: boolean
    readonly isNotHoldingFees: boolean
    readonly isTooExpensive: boolean
    readonly isTrap: boolean
    readonly asTrap: u64
    readonly isUnhandledXcmVersion: boolean
    readonly isWeightLimitReached: boolean
    readonly asWeightLimitReached: u64
    readonly isBarrier: boolean
    readonly isWeightNotComputable: boolean
    readonly type:
      | "Overflow"
      | "Unimplemented"
      | "UntrustedReserveLocation"
      | "UntrustedTeleportLocation"
      | "MultiLocationFull"
      | "MultiLocationNotInvertible"
      | "BadOrigin"
      | "InvalidLocation"
      | "AssetNotFound"
      | "FailedToTransactAsset"
      | "NotWithdrawable"
      | "LocationCannotHold"
      | "ExceedsMaxMessageSize"
      | "DestinationUnsupported"
      | "Transport"
      | "Unroutable"
      | "UnknownClaim"
      | "FailedToDecode"
      | "MaxWeightInvalid"
      | "NotHoldingFees"
      | "TooExpensive"
      | "Trap"
      | "UnhandledXcmVersion"
      | "WeightLimitReached"
      | "Barrier"
      | "WeightNotComputable"
  }

  /** @name XcmV1MultiLocation (70) */
  interface XcmV1MultiLocation extends Struct {
    readonly parents: u8
    readonly interior: XcmV1MultilocationJunctions
  }

  /** @name XcmV1MultilocationJunctions (71) */
  interface XcmV1MultilocationJunctions extends Enum {
    readonly isHere: boolean
    readonly isX1: boolean
    readonly asX1: XcmV1Junction
    readonly isX2: boolean
    readonly asX2: ITuple<[XcmV1Junction, XcmV1Junction]>
    readonly isX3: boolean
    readonly asX3: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction]>
    readonly isX4: boolean
    readonly asX4: ITuple<
      [XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]
    >
    readonly isX5: boolean
    readonly asX5: ITuple<
      [
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
      ]
    >
    readonly isX6: boolean
    readonly asX6: ITuple<
      [
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
      ]
    >
    readonly isX7: boolean
    readonly asX7: ITuple<
      [
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
      ]
    >
    readonly isX8: boolean
    readonly asX8: ITuple<
      [
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
        XcmV1Junction,
      ]
    >
    readonly type:
      | "Here"
      | "X1"
      | "X2"
      | "X3"
      | "X4"
      | "X5"
      | "X6"
      | "X7"
      | "X8"
  }

  /** @name XcmV1Junction (72) */
  interface XcmV1Junction extends Enum {
    readonly isParachain: boolean
    readonly asParachain: Compact<u32>
    readonly isAccountId32: boolean
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId
      readonly id: U8aFixed
    } & Struct
    readonly isAccountIndex64: boolean
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId
      readonly index: Compact<u64>
    } & Struct
    readonly isAccountKey20: boolean
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId
      readonly key: U8aFixed
    } & Struct
    readonly isPalletInstance: boolean
    readonly asPalletInstance: u8
    readonly isGeneralIndex: boolean
    readonly asGeneralIndex: Compact<u128>
    readonly isGeneralKey: boolean
    readonly asGeneralKey: Bytes
    readonly isOnlyChild: boolean
    readonly isPlurality: boolean
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId
      readonly part: XcmV0JunctionBodyPart
    } & Struct
    readonly type:
      | "Parachain"
      | "AccountId32"
      | "AccountIndex64"
      | "AccountKey20"
      | "PalletInstance"
      | "GeneralIndex"
      | "GeneralKey"
      | "OnlyChild"
      | "Plurality"
  }

  /** @name XcmV0JunctionNetworkId (74) */
  interface XcmV0JunctionNetworkId extends Enum {
    readonly isAny: boolean
    readonly isNamed: boolean
    readonly asNamed: Bytes
    readonly isPolkadot: boolean
    readonly isKusama: boolean
    readonly type: "Any" | "Named" | "Polkadot" | "Kusama"
  }

  /** @name XcmV0JunctionBodyId (77) */
  interface XcmV0JunctionBodyId extends Enum {
    readonly isUnit: boolean
    readonly isNamed: boolean
    readonly asNamed: Bytes
    readonly isIndex: boolean
    readonly asIndex: Compact<u32>
    readonly isExecutive: boolean
    readonly isTechnical: boolean
    readonly isLegislative: boolean
    readonly isJudicial: boolean
    readonly type:
      | "Unit"
      | "Named"
      | "Index"
      | "Executive"
      | "Technical"
      | "Legislative"
      | "Judicial"
  }

  /** @name XcmV0JunctionBodyPart (78) */
  interface XcmV0JunctionBodyPart extends Enum {
    readonly isVoice: boolean
    readonly isMembers: boolean
    readonly asMembers: {
      readonly count: Compact<u32>
    } & Struct
    readonly isFraction: boolean
    readonly asFraction: {
      readonly nom: Compact<u32>
      readonly denom: Compact<u32>
    } & Struct
    readonly isAtLeastProportion: boolean
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>
      readonly denom: Compact<u32>
    } & Struct
    readonly isMoreThanProportion: boolean
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>
      readonly denom: Compact<u32>
    } & Struct
    readonly type:
      | "Voice"
      | "Members"
      | "Fraction"
      | "AtLeastProportion"
      | "MoreThanProportion"
  }

  /** @name XcmV2Xcm (79) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (81) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean
    readonly asWithdrawAsset: XcmV1MultiassetMultiAssets
    readonly isReserveAssetDeposited: boolean
    readonly asReserveAssetDeposited: XcmV1MultiassetMultiAssets
    readonly isReceiveTeleportedAsset: boolean
    readonly asReceiveTeleportedAsset: XcmV1MultiassetMultiAssets
    readonly isQueryResponse: boolean
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>
      readonly response: XcmV2Response
      readonly maxWeight: Compact<u64>
    } & Struct
    readonly isTransferAsset: boolean
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly beneficiary: XcmV1MultiLocation
    } & Struct
    readonly isTransferReserveAsset: boolean
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly dest: XcmV1MultiLocation
      readonly xcm: XcmV2Xcm
    } & Struct
    readonly isTransact: boolean
    readonly asTransact: {
      readonly originType: XcmV0OriginKind
      readonly requireWeightAtMost: Compact<u64>
      readonly call: XcmDoubleEncoded
    } & Struct
    readonly isHrmpNewChannelOpenRequest: boolean
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>
      readonly maxMessageSize: Compact<u32>
      readonly maxCapacity: Compact<u32>
    } & Struct
    readonly isHrmpChannelAccepted: boolean
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>
    } & Struct
    readonly isHrmpChannelClosing: boolean
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>
      readonly sender: Compact<u32>
      readonly recipient: Compact<u32>
    } & Struct
    readonly isClearOrigin: boolean
    readonly isDescendOrigin: boolean
    readonly asDescendOrigin: XcmV1MultilocationJunctions
    readonly isReportError: boolean
    readonly asReportError: {
      readonly queryId: Compact<u64>
      readonly dest: XcmV1MultiLocation
      readonly maxResponseWeight: Compact<u64>
    } & Struct
    readonly isDepositAsset: boolean
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly maxAssets: Compact<u32>
      readonly beneficiary: XcmV1MultiLocation
    } & Struct
    readonly isDepositReserveAsset: boolean
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly maxAssets: Compact<u32>
      readonly dest: XcmV1MultiLocation
      readonly xcm: XcmV2Xcm
    } & Struct
    readonly isExchangeAsset: boolean
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter
      readonly receive: XcmV1MultiassetMultiAssets
    } & Struct
    readonly isInitiateReserveWithdraw: boolean
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly reserve: XcmV1MultiLocation
      readonly xcm: XcmV2Xcm
    } & Struct
    readonly isInitiateTeleport: boolean
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly dest: XcmV1MultiLocation
      readonly xcm: XcmV2Xcm
    } & Struct
    readonly isQueryHolding: boolean
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>
      readonly dest: XcmV1MultiLocation
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly maxResponseWeight: Compact<u64>
    } & Struct
    readonly isBuyExecution: boolean
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset
      readonly weightLimit: XcmV2WeightLimit
    } & Struct
    readonly isRefundSurplus: boolean
    readonly isSetErrorHandler: boolean
    readonly asSetErrorHandler: XcmV2Xcm
    readonly isSetAppendix: boolean
    readonly asSetAppendix: XcmV2Xcm
    readonly isClearError: boolean
    readonly isClaimAsset: boolean
    readonly asClaimAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly ticket: XcmV1MultiLocation
    } & Struct
    readonly isTrap: boolean
    readonly asTrap: Compact<u64>
    readonly isSubscribeVersion: boolean
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>
      readonly maxResponseWeight: Compact<u64>
    } & Struct
    readonly isUnsubscribeVersion: boolean
    readonly type:
      | "WithdrawAsset"
      | "ReserveAssetDeposited"
      | "ReceiveTeleportedAsset"
      | "QueryResponse"
      | "TransferAsset"
      | "TransferReserveAsset"
      | "Transact"
      | "HrmpNewChannelOpenRequest"
      | "HrmpChannelAccepted"
      | "HrmpChannelClosing"
      | "ClearOrigin"
      | "DescendOrigin"
      | "ReportError"
      | "DepositAsset"
      | "DepositReserveAsset"
      | "ExchangeAsset"
      | "InitiateReserveWithdraw"
      | "InitiateTeleport"
      | "QueryHolding"
      | "BuyExecution"
      | "RefundSurplus"
      | "SetErrorHandler"
      | "SetAppendix"
      | "ClearError"
      | "ClaimAsset"
      | "Trap"
      | "SubscribeVersion"
      | "UnsubscribeVersion"
  }

  /** @name XcmV1MultiassetMultiAssets (82) */
  interface XcmV1MultiassetMultiAssets extends Vec<XcmV1MultiAsset> {}

  /** @name XcmV1MultiAsset (84) */
  interface XcmV1MultiAsset extends Struct {
    readonly id: XcmV1MultiassetAssetId
    readonly fun: XcmV1MultiassetFungibility
  }

  /** @name XcmV1MultiassetAssetId (85) */
  interface XcmV1MultiassetAssetId extends Enum {
    readonly isConcrete: boolean
    readonly asConcrete: XcmV1MultiLocation
    readonly isAbstract: boolean
    readonly asAbstract: Bytes
    readonly type: "Concrete" | "Abstract"
  }

  /** @name XcmV1MultiassetFungibility (86) */
  interface XcmV1MultiassetFungibility extends Enum {
    readonly isFungible: boolean
    readonly asFungible: Compact<u128>
    readonly isNonFungible: boolean
    readonly asNonFungible: XcmV1MultiassetAssetInstance
    readonly type: "Fungible" | "NonFungible"
  }

  /** @name XcmV1MultiassetAssetInstance (87) */
  interface XcmV1MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean
    readonly isIndex: boolean
    readonly asIndex: Compact<u128>
    readonly isArray4: boolean
    readonly asArray4: U8aFixed
    readonly isArray8: boolean
    readonly asArray8: U8aFixed
    readonly isArray16: boolean
    readonly asArray16: U8aFixed
    readonly isArray32: boolean
    readonly asArray32: U8aFixed
    readonly isBlob: boolean
    readonly asBlob: Bytes
    readonly type:
      | "Undefined"
      | "Index"
      | "Array4"
      | "Array8"
      | "Array16"
      | "Array32"
      | "Blob"
  }

  /** @name XcmV2Response (90) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean
    readonly isAssets: boolean
    readonly asAssets: XcmV1MultiassetMultiAssets
    readonly isExecutionResult: boolean
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>
    readonly isVersion: boolean
    readonly asVersion: u32
    readonly type: "Null" | "Assets" | "ExecutionResult" | "Version"
  }

  /** @name XcmV0OriginKind (93) */
  interface XcmV0OriginKind extends Enum {
    readonly isNative: boolean
    readonly isSovereignAccount: boolean
    readonly isSuperuser: boolean
    readonly isXcm: boolean
    readonly type: "Native" | "SovereignAccount" | "Superuser" | "Xcm"
  }

  /** @name XcmDoubleEncoded (94) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes
  }

  /** @name XcmV1MultiassetMultiAssetFilter (95) */
  interface XcmV1MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean
    readonly asDefinite: XcmV1MultiassetMultiAssets
    readonly isWild: boolean
    readonly asWild: XcmV1MultiassetWildMultiAsset
    readonly type: "Definite" | "Wild"
  }

  /** @name XcmV1MultiassetWildMultiAsset (96) */
  interface XcmV1MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean
    readonly isAllOf: boolean
    readonly asAllOf: {
      readonly id: XcmV1MultiassetAssetId
      readonly fun: XcmV1MultiassetWildFungibility
    } & Struct
    readonly type: "All" | "AllOf"
  }

  /** @name XcmV1MultiassetWildFungibility (97) */
  interface XcmV1MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean
    readonly isNonFungible: boolean
    readonly type: "Fungible" | "NonFungible"
  }

  /** @name XcmV2WeightLimit (98) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean
    readonly isLimited: boolean
    readonly asLimited: Compact<u64>
    readonly type: "Unlimited" | "Limited"
  }

  /** @name XcmVersionedMultiAssets (100) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV0: boolean
    readonly asV0: Vec<XcmV0MultiAsset>
    readonly isV1: boolean
    readonly asV1: XcmV1MultiassetMultiAssets
    readonly type: "V0" | "V1"
  }

  /** @name XcmV0MultiAsset (102) */
  interface XcmV0MultiAsset extends Enum {
    readonly isNone: boolean
    readonly isAll: boolean
    readonly isAllFungible: boolean
    readonly isAllNonFungible: boolean
    readonly isAllAbstractFungible: boolean
    readonly asAllAbstractFungible: {
      readonly id: Bytes
    } & Struct
    readonly isAllAbstractNonFungible: boolean
    readonly asAllAbstractNonFungible: {
      readonly class: Bytes
    } & Struct
    readonly isAllConcreteFungible: boolean
    readonly asAllConcreteFungible: {
      readonly id: XcmV0MultiLocation
    } & Struct
    readonly isAllConcreteNonFungible: boolean
    readonly asAllConcreteNonFungible: {
      readonly class: XcmV0MultiLocation
    } & Struct
    readonly isAbstractFungible: boolean
    readonly asAbstractFungible: {
      readonly id: Bytes
      readonly amount: Compact<u128>
    } & Struct
    readonly isAbstractNonFungible: boolean
    readonly asAbstractNonFungible: {
      readonly class: Bytes
      readonly instance: XcmV1MultiassetAssetInstance
    } & Struct
    readonly isConcreteFungible: boolean
    readonly asConcreteFungible: {
      readonly id: XcmV0MultiLocation
      readonly amount: Compact<u128>
    } & Struct
    readonly isConcreteNonFungible: boolean
    readonly asConcreteNonFungible: {
      readonly class: XcmV0MultiLocation
      readonly instance: XcmV1MultiassetAssetInstance
    } & Struct
    readonly type:
      | "None"
      | "All"
      | "AllFungible"
      | "AllNonFungible"
      | "AllAbstractFungible"
      | "AllAbstractNonFungible"
      | "AllConcreteFungible"
      | "AllConcreteNonFungible"
      | "AbstractFungible"
      | "AbstractNonFungible"
      | "ConcreteFungible"
      | "ConcreteNonFungible"
  }

  /** @name XcmV0MultiLocation (103) */
  interface XcmV0MultiLocation extends Enum {
    readonly isNull: boolean
    readonly isX1: boolean
    readonly asX1: XcmV0Junction
    readonly isX2: boolean
    readonly asX2: ITuple<[XcmV0Junction, XcmV0Junction]>
    readonly isX3: boolean
    readonly asX3: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction]>
    readonly isX4: boolean
    readonly asX4: ITuple<
      [XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]
    >
    readonly isX5: boolean
    readonly asX5: ITuple<
      [
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
      ]
    >
    readonly isX6: boolean
    readonly asX6: ITuple<
      [
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
      ]
    >
    readonly isX7: boolean
    readonly asX7: ITuple<
      [
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
      ]
    >
    readonly isX8: boolean
    readonly asX8: ITuple<
      [
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
        XcmV0Junction,
      ]
    >
    readonly type:
      | "Null"
      | "X1"
      | "X2"
      | "X3"
      | "X4"
      | "X5"
      | "X6"
      | "X7"
      | "X8"
  }

  /** @name XcmV0Junction (104) */
  interface XcmV0Junction extends Enum {
    readonly isParent: boolean
    readonly isParachain: boolean
    readonly asParachain: Compact<u32>
    readonly isAccountId32: boolean
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId
      readonly id: U8aFixed
    } & Struct
    readonly isAccountIndex64: boolean
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId
      readonly index: Compact<u64>
    } & Struct
    readonly isAccountKey20: boolean
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId
      readonly key: U8aFixed
    } & Struct
    readonly isPalletInstance: boolean
    readonly asPalletInstance: u8
    readonly isGeneralIndex: boolean
    readonly asGeneralIndex: Compact<u128>
    readonly isGeneralKey: boolean
    readonly asGeneralKey: Bytes
    readonly isOnlyChild: boolean
    readonly isPlurality: boolean
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId
      readonly part: XcmV0JunctionBodyPart
    } & Struct
    readonly type:
      | "Parent"
      | "Parachain"
      | "AccountId32"
      | "AccountIndex64"
      | "AccountKey20"
      | "PalletInstance"
      | "GeneralIndex"
      | "GeneralKey"
      | "OnlyChild"
      | "Plurality"
  }

  /** @name XcmVersionedMultiLocation (105) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV0: boolean
    readonly asV0: XcmV0MultiLocation
    readonly isV1: boolean
    readonly asV1: XcmV1MultiLocation
    readonly type: "V0" | "V1"
  }

  /** @name CumulusPalletXcmEvent (106) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean
    readonly asInvalidFormat: U8aFixed
    readonly isUnsupportedVersion: boolean
    readonly asUnsupportedVersion: U8aFixed
    readonly isExecutedDownward: boolean
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>
    readonly type: "InvalidFormat" | "UnsupportedVersion" | "ExecutedDownward"
  }

  /** @name CumulusPalletXcmpQueueEvent (107) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean
    readonly asSuccess: Option<H256>
    readonly isFail: boolean
    readonly asFail: ITuple<[Option<H256>, XcmV2TraitsError]>
    readonly isBadVersion: boolean
    readonly asBadVersion: Option<H256>
    readonly isBadFormat: boolean
    readonly asBadFormat: Option<H256>
    readonly isUpwardMessageSent: boolean
    readonly asUpwardMessageSent: Option<H256>
    readonly isXcmpMessageSent: boolean
    readonly asXcmpMessageSent: Option<H256>
    readonly isOverweightEnqueued: boolean
    readonly asOverweightEnqueued: ITuple<[u32, u32, u64, u64]>
    readonly isOverweightServiced: boolean
    readonly asOverweightServiced: ITuple<[u64, u64]>
    readonly type:
      | "Success"
      | "Fail"
      | "BadVersion"
      | "BadFormat"
      | "UpwardMessageSent"
      | "XcmpMessageSent"
      | "OverweightEnqueued"
      | "OverweightServiced"
  }

  /** @name CumulusPalletDmpQueueEvent (110) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean
    readonly asInvalidFormat: U8aFixed
    readonly isUnsupportedVersion: boolean
    readonly asUnsupportedVersion: U8aFixed
    readonly isExecutedDownward: boolean
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>
    readonly isWeightExhausted: boolean
    readonly asWeightExhausted: ITuple<[U8aFixed, u64, u64]>
    readonly isOverweightEnqueued: boolean
    readonly asOverweightEnqueued: ITuple<[U8aFixed, u64, u64]>
    readonly isOverweightServiced: boolean
    readonly asOverweightServiced: ITuple<[u64, u64]>
    readonly type:
      | "InvalidFormat"
      | "UnsupportedVersion"
      | "ExecutedDownward"
      | "WeightExhausted"
      | "OverweightEnqueued"
      | "OverweightServiced"
  }

  /** @name PalletAssetRegistryEvent (111) */
  interface PalletAssetRegistryEvent extends Enum {
    readonly isRegistered: boolean
    readonly asRegistered: {
      readonly assetId: u32
      readonly assetName: Bytes
      readonly assetType: PalletAssetRegistryAssetType
    } & Struct
    readonly isUpdated: boolean
    readonly asUpdated: {
      readonly assetId: u32
      readonly assetName: Bytes
      readonly assetType: PalletAssetRegistryAssetType
    } & Struct
    readonly isMetadataSet: boolean
    readonly asMetadataSet: {
      readonly assetId: u32
      readonly symbol: Bytes
      readonly decimals: u8
    } & Struct
    readonly isLocationSet: boolean
    readonly asLocationSet: {
      readonly assetId: u32
      readonly location: CommonRuntimeAssetLocation
    } & Struct
    readonly type: "Registered" | "Updated" | "MetadataSet" | "LocationSet"
  }

  /** @name PalletAssetRegistryAssetType (113) */
  interface PalletAssetRegistryAssetType extends Enum {
    readonly isToken: boolean
    readonly isPoolShare: boolean
    readonly asPoolShare: ITuple<[u32, u32]>
    readonly type: "Token" | "PoolShare"
  }

  /** @name CommonRuntimeAssetLocation (114) */
  interface CommonRuntimeAssetLocation extends XcmV1MultiLocation {}

  /** @name PalletXykEvent (115) */
  interface PalletXykEvent extends Enum {
    readonly isLiquidityAdded: boolean
    readonly asLiquidityAdded: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly amountA: u128
      readonly amountB: u128
    } & Struct
    readonly isLiquidityRemoved: boolean
    readonly asLiquidityRemoved: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly shares: u128
    } & Struct
    readonly isPoolCreated: boolean
    readonly asPoolCreated: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly initialSharesAmount: u128
      readonly shareToken: u32
      readonly pool: AccountId32
    } & Struct
    readonly isPoolDestroyed: boolean
    readonly asPoolDestroyed: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly shareToken: u32
      readonly pool: AccountId32
    } & Struct
    readonly isSellExecuted: boolean
    readonly asSellExecuted: {
      readonly who: AccountId32
      readonly assetIn: u32
      readonly assetOut: u32
      readonly amount: u128
      readonly salePrice: u128
      readonly feeAsset: u32
      readonly feeAmount: u128
      readonly pool: AccountId32
    } & Struct
    readonly isBuyExecuted: boolean
    readonly asBuyExecuted: {
      readonly who: AccountId32
      readonly assetOut: u32
      readonly assetIn: u32
      readonly amount: u128
      readonly buyPrice: u128
      readonly feeAsset: u32
      readonly feeAmount: u128
      readonly pool: AccountId32
    } & Struct
    readonly type:
      | "LiquidityAdded"
      | "LiquidityRemoved"
      | "PoolCreated"
      | "PoolDestroyed"
      | "SellExecuted"
      | "BuyExecuted"
  }

  /** @name PalletDusterEvent (116) */
  interface PalletDusterEvent extends Enum {
    readonly isDusted: boolean
    readonly asDusted: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isAdded: boolean
    readonly asAdded: {
      readonly who: AccountId32
    } & Struct
    readonly isRemoved: boolean
    readonly asRemoved: {
      readonly who: AccountId32
    } & Struct
    readonly type: "Dusted" | "Added" | "Removed"
  }

  /** @name PalletExchangeEvent (117) */
  interface PalletExchangeEvent extends Enum {
    readonly isIntentionRegistered: boolean
    readonly asIntentionRegistered: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly amount: u128
      readonly intentionType: PrimitivesIntentionType
      readonly intentionId: H256
    } & Struct
    readonly isIntentionResolvedAMMTrade: boolean
    readonly asIntentionResolvedAMMTrade: {
      readonly who: AccountId32
      readonly intentionType: PrimitivesIntentionType
      readonly intentionId: H256
      readonly amount: u128
      readonly amountSoldOrBought: u128
      readonly poolAccountId: AccountId32
    } & Struct
    readonly isIntentionResolvedDirectTrade: boolean
    readonly asIntentionResolvedDirectTrade: {
      readonly accountIdA: AccountId32
      readonly accountIdB: AccountId32
      readonly intentionIdA: H256
      readonly intentionIdB: H256
      readonly amountA: u128
      readonly amountB: u128
    } & Struct
    readonly isIntentionResolvedDirectTradeFees: boolean
    readonly asIntentionResolvedDirectTradeFees: {
      readonly who: AccountId32
      readonly intentionId: H256
      readonly feeReceiver: AccountId32
      readonly assetId: u32
      readonly feeAmount: u128
    } & Struct
    readonly isInsufficientAssetBalanceEvent: boolean
    readonly asInsufficientAssetBalanceEvent: {
      readonly who: AccountId32
      readonly assetId: u32
      readonly intentionType: PrimitivesIntentionType
      readonly intentionId: H256
      readonly errorDetail: SpRuntimeDispatchError
    } & Struct
    readonly isIntentionResolveErrorEvent: boolean
    readonly asIntentionResolveErrorEvent: {
      readonly who: AccountId32
      readonly assetIds: PrimitivesAssetAssetPair
      readonly intentionType: PrimitivesIntentionType
      readonly intentionId: H256
      readonly errorDetail: SpRuntimeDispatchError
    } & Struct
    readonly type:
      | "IntentionRegistered"
      | "IntentionResolvedAMMTrade"
      | "IntentionResolvedDirectTrade"
      | "IntentionResolvedDirectTradeFees"
      | "InsufficientAssetBalanceEvent"
      | "IntentionResolveErrorEvent"
  }

  /** @name PrimitivesIntentionType (118) */
  interface PrimitivesIntentionType extends Enum {
    readonly isSell: boolean
    readonly isBuy: boolean
    readonly type: "Sell" | "Buy"
  }

  /** @name PrimitivesAssetAssetPair (119) */
  interface PrimitivesAssetAssetPair extends Struct {
    readonly assetIn: u32
    readonly assetOut: u32
  }

  /** @name PalletLbpEvent (120) */
  interface PalletLbpEvent extends Enum {
    readonly isPoolCreated: boolean
    readonly asPoolCreated: {
      readonly pool: AccountId32
      readonly data: PalletLbpPool
    } & Struct
    readonly isPoolUpdated: boolean
    readonly asPoolUpdated: {
      readonly pool: AccountId32
      readonly data: PalletLbpPool
    } & Struct
    readonly isLiquidityAdded: boolean
    readonly asLiquidityAdded: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly amountA: u128
      readonly amountB: u128
    } & Struct
    readonly isLiquidityRemoved: boolean
    readonly asLiquidityRemoved: {
      readonly who: AccountId32
      readonly assetA: u32
      readonly assetB: u32
      readonly amountA: u128
      readonly amountB: u128
    } & Struct
    readonly isSellExecuted: boolean
    readonly asSellExecuted: {
      readonly who: AccountId32
      readonly assetIn: u32
      readonly assetOut: u32
      readonly amount: u128
      readonly salePrice: u128
      readonly feeAsset: u32
      readonly feeAmount: u128
    } & Struct
    readonly isBuyExecuted: boolean
    readonly asBuyExecuted: {
      readonly who: AccountId32
      readonly assetOut: u32
      readonly assetIn: u32
      readonly amount: u128
      readonly buyPrice: u128
      readonly feeAsset: u32
      readonly feeAmount: u128
    } & Struct
    readonly type:
      | "PoolCreated"
      | "PoolUpdated"
      | "LiquidityAdded"
      | "LiquidityRemoved"
      | "SellExecuted"
      | "BuyExecuted"
  }

  /** @name PalletLbpPool (121) */
  interface PalletLbpPool extends Struct {
    readonly owner: AccountId32
    readonly start: Option<u32>
    readonly end: Option<u32>
    readonly assets: ITuple<[u32, u32]>
    readonly initialWeight: u32
    readonly finalWeight: u32
    readonly weightCurve: PalletLbpWeightCurveType
    readonly fee: ITuple<[u32, u32]>
    readonly feeCollector: AccountId32
    readonly repayTarget: u128
  }

  /** @name PalletLbpWeightCurveType (123) */
  interface PalletLbpWeightCurveType extends Enum {
    readonly isLinear: boolean
    readonly type: "Linear"
  }

  /** @name PalletNftEvent (124) */
  interface PalletNftEvent extends Enum {
    readonly isClassCreated: boolean
    readonly asClassCreated: {
      readonly owner: AccountId32
      readonly classId: u128
      readonly classType: PalletNftClassType
      readonly metadata: Bytes
    } & Struct
    readonly isInstanceMinted: boolean
    readonly asInstanceMinted: {
      readonly owner: AccountId32
      readonly classId: u128
      readonly instanceId: u128
      readonly metadata: Bytes
    } & Struct
    readonly isInstanceTransferred: boolean
    readonly asInstanceTransferred: {
      readonly from: AccountId32
      readonly to: AccountId32
      readonly classId: u128
      readonly instanceId: u128
    } & Struct
    readonly isInstanceBurned: boolean
    readonly asInstanceBurned: {
      readonly owner: AccountId32
      readonly classId: u128
      readonly instanceId: u128
    } & Struct
    readonly isClassDestroyed: boolean
    readonly asClassDestroyed: {
      readonly owner: AccountId32
      readonly classId: u128
    } & Struct
    readonly type:
      | "ClassCreated"
      | "InstanceMinted"
      | "InstanceTransferred"
      | "InstanceBurned"
      | "ClassDestroyed"
  }

  /** @name PalletNftClassType (125) */
  interface PalletNftClassType extends Enum {
    readonly isMarketplace: boolean
    readonly isLiquidityMining: boolean
    readonly isRedeemable: boolean
    readonly isAuction: boolean
    readonly isHydraHeads: boolean
    readonly type:
      | "Marketplace"
      | "LiquidityMining"
      | "Redeemable"
      | "Auction"
      | "HydraHeads"
  }

  /** @name PalletLiquidityMiningEvent (126) */
  interface PalletLiquidityMiningEvent extends Enum {
    readonly isGlobalFarmCreated: boolean
    readonly asGlobalFarmCreated: {
      readonly id: u32
      readonly owner: AccountId32
      readonly totalRewards: u128
      readonly rewardCurrency: u32
      readonly yieldPerPeriod: Perquintill
      readonly plannedYieldingPeriods: u32
      readonly blocksPerPeriod: u32
      readonly incentivizedAsset: u32
      readonly maxRewardPerPeriod: u128
      readonly minDeposit: u128
      readonly priceAdjustment: u128
    } & Struct
    readonly isYieldFarmCreated: boolean
    readonly asYieldFarmCreated: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly multiplier: u128
      readonly assetPair: PrimitivesAssetAssetPair
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>
    } & Struct
    readonly isGlobalFarmDestroyed: boolean
    readonly asGlobalFarmDestroyed: {
      readonly globalFarmId: u32
      readonly who: AccountId32
      readonly rewardCurrency: u32
      readonly undistributedRewards: u128
    } & Struct
    readonly isSharesDeposited: boolean
    readonly asSharesDeposited: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly amount: u128
      readonly lpToken: u32
    } & Struct
    readonly isSharesRedeposited: boolean
    readonly asSharesRedeposited: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly amount: u128
      readonly lpToken: u32
    } & Struct
    readonly isRewardClaimed: boolean
    readonly asRewardClaimed: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly claimed: u128
      readonly rewardCurrency: u32
    } & Struct
    readonly isSharesWithdrawn: boolean
    readonly asSharesWithdrawn: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly lpToken: u32
      readonly amount: u128
    } & Struct
    readonly isYieldFarmStopped: boolean
    readonly asYieldFarmStopped: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly assetPair: PrimitivesAssetAssetPair
    } & Struct
    readonly isYieldFarmResumed: boolean
    readonly asYieldFarmResumed: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly multiplier: u128
    } & Struct
    readonly isYieldFarmDestroyed: boolean
    readonly asYieldFarmDestroyed: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly assetPair: PrimitivesAssetAssetPair
    } & Struct
    readonly isYieldFarmUpdated: boolean
    readonly asYieldFarmUpdated: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly who: AccountId32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly multiplier: u128
    } & Struct
    readonly isDepositDestroyed: boolean
    readonly asDepositDestroyed: {
      readonly who: AccountId32
      readonly nftInstanceId: u128
    } & Struct
    readonly type:
      | "GlobalFarmCreated"
      | "YieldFarmCreated"
      | "GlobalFarmDestroyed"
      | "SharesDeposited"
      | "SharesRedeposited"
      | "RewardClaimed"
      | "SharesWithdrawn"
      | "YieldFarmStopped"
      | "YieldFarmResumed"
      | "YieldFarmDestroyed"
      | "YieldFarmUpdated"
      | "DepositDestroyed"
  }

  /** @name PalletLiquidityMiningLoyaltyCurve (130) */
  interface PalletLiquidityMiningLoyaltyCurve extends Struct {
    readonly initialRewardPercentage: u128
    readonly scaleCoef: u32
  }

  /** @name PalletTransactionMultiPaymentEvent (132) */
  interface PalletTransactionMultiPaymentEvent extends Enum {
    readonly isCurrencySet: boolean
    readonly asCurrencySet: {
      readonly accountId: AccountId32
      readonly assetId: u32
    } & Struct
    readonly isCurrencyAdded: boolean
    readonly asCurrencyAdded: {
      readonly assetId: u32
    } & Struct
    readonly isCurrencyRemoved: boolean
    readonly asCurrencyRemoved: {
      readonly assetId: u32
    } & Struct
    readonly isFeeWithdrawn: boolean
    readonly asFeeWithdrawn: {
      readonly accountId: AccountId32
      readonly assetId: u32
      readonly nativeFeeAmount: u128
      readonly nonNativeFeeAmount: u128
      readonly destinationAccountId: AccountId32
    } & Struct
    readonly type:
      | "CurrencySet"
      | "CurrencyAdded"
      | "CurrencyRemoved"
      | "FeeWithdrawn"
  }

  /** @name PalletPriceOracleEvent (133) */
  interface PalletPriceOracleEvent extends Enum {
    readonly isPoolRegistered: boolean
    readonly asPoolRegistered: {
      readonly assetA: u32
      readonly assetB: u32
    } & Struct
    readonly type: "PoolRegistered"
  }

  /** @name PalletRelaychainInfoEvent (134) */
  interface PalletRelaychainInfoEvent extends Enum {
    readonly isCurrentBlockNumbers: boolean
    readonly asCurrentBlockNumbers: {
      readonly parachainBlockNumber: u32
      readonly relaychainBlockNumber: u32
    } & Struct
    readonly type: "CurrentBlockNumbers"
  }

  /** @name PalletMarketplaceEvent (135) */
  interface PalletMarketplaceEvent extends Enum {
    readonly isTokenPriceUpdated: boolean
    readonly asTokenPriceUpdated: {
      readonly who: AccountId32
      readonly class: u128
      readonly instance: u128
      readonly price: Option<u128>
    } & Struct
    readonly isTokenSold: boolean
    readonly asTokenSold: {
      readonly owner: AccountId32
      readonly buyer: AccountId32
      readonly class: u128
      readonly instance: u128
      readonly price: u128
    } & Struct
    readonly isOfferPlaced: boolean
    readonly asOfferPlaced: {
      readonly who: AccountId32
      readonly class: u128
      readonly instance: u128
      readonly amount: u128
      readonly expires: u32
    } & Struct
    readonly isOfferWithdrawn: boolean
    readonly asOfferWithdrawn: {
      readonly who: AccountId32
      readonly class: u128
      readonly instance: u128
    } & Struct
    readonly isOfferAccepted: boolean
    readonly asOfferAccepted: {
      readonly who: AccountId32
      readonly class: u128
      readonly instance: u128
      readonly amount: u128
      readonly maker: AccountId32
    } & Struct
    readonly isRoyaltyPaid: boolean
    readonly asRoyaltyPaid: {
      readonly class: u128
      readonly instance: u128
      readonly author: AccountId32
      readonly royalty: u8
      readonly royaltyAmount: u128
    } & Struct
    readonly isRoyaltyAdded: boolean
    readonly asRoyaltyAdded: {
      readonly class: u128
      readonly instance: u128
      readonly author: AccountId32
      readonly royalty: u8
    } & Struct
    readonly type:
      | "TokenPriceUpdated"
      | "TokenSold"
      | "OfferPlaced"
      | "OfferWithdrawn"
      | "OfferAccepted"
      | "RoyaltyPaid"
      | "RoyaltyAdded"
  }

  /** @name OrmlCurrenciesModuleEvent (136) */
  interface OrmlCurrenciesModuleEvent extends Enum {
    readonly isTransferred: boolean
    readonly asTransferred: {
      readonly currencyId: u32
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
    } & Struct
    readonly isBalanceUpdated: boolean
    readonly asBalanceUpdated: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: i128
    } & Struct
    readonly isDeposited: boolean
    readonly asDeposited: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isWithdrawn: boolean
    readonly asWithdrawn: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly type: "Transferred" | "BalanceUpdated" | "Deposited" | "Withdrawn"
  }

  /** @name OrmlTokensModuleEvent (138) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean
    readonly asEndowed: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isDustLost: boolean
    readonly asDustLost: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly currencyId: u32
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
    } & Struct
    readonly isReserved: boolean
    readonly asReserved: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isUnreserved: boolean
    readonly asUnreserved: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isRepatriatedReserve: boolean
    readonly asRepatriatedReserve: {
      readonly currencyId: u32
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
      readonly status: FrameSupportTokensMiscBalanceStatus
    } & Struct
    readonly isBalanceSet: boolean
    readonly asBalanceSet: {
      readonly currencyId: u32
      readonly who: AccountId32
      readonly free: u128
      readonly reserved: u128
    } & Struct
    readonly type:
      | "Endowed"
      | "DustLost"
      | "Transfer"
      | "Reserved"
      | "Unreserved"
      | "RepatriatedReserve"
      | "BalanceSet"
  }

  /** @name OrmlXcmModuleEvent (139) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean
    readonly asSent: {
      readonly to: XcmV1MultiLocation
      readonly message: XcmV2Xcm
    } & Struct
    readonly type: "Sent"
  }

  /** @name OrmlXtokensModuleEvent (140) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32
      readonly assets: XcmV1MultiassetMultiAssets
      readonly fee: XcmV1MultiAsset
      readonly dest: XcmV1MultiLocation
    } & Struct
    readonly type: "TransferredMultiAssets"
  }

  /** @name OrmlUnknownTokensModuleEvent (141) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean
    readonly asDeposited: {
      readonly asset: XcmV1MultiAsset
      readonly who: XcmV1MultiLocation
    } & Struct
    readonly isWithdrawn: boolean
    readonly asWithdrawn: {
      readonly asset: XcmV1MultiAsset
      readonly who: XcmV1MultiLocation
    } & Struct
    readonly type: "Deposited" | "Withdrawn"
  }

  /** @name PalletSudoEvent (142) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isKeyChanged: boolean
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>
    } & Struct
    readonly isSudoAsDone: boolean
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly type: "Sudid" | "KeyChanged" | "SudoAsDone"
  }

  /** @name FrameSystemPhase (144) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean
    readonly asApplyExtrinsic: u32
    readonly isFinalization: boolean
    readonly isInitialization: boolean
    readonly type: "ApplyExtrinsic" | "Finalization" | "Initialization"
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (147) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>
    readonly specName: Text
  }

  /** @name FrameSystemCall (149) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean
    readonly asFillBlock: {
      readonly ratio: Perbill
    } & Struct
    readonly isRemark: boolean
    readonly asRemark: {
      readonly remark: Bytes
    } & Struct
    readonly isSetHeapPages: boolean
    readonly asSetHeapPages: {
      readonly pages: u64
    } & Struct
    readonly isSetCode: boolean
    readonly asSetCode: {
      readonly code: Bytes
    } & Struct
    readonly isSetCodeWithoutChecks: boolean
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes
    } & Struct
    readonly isSetStorage: boolean
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>
    } & Struct
    readonly isKillStorage: boolean
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>
    } & Struct
    readonly isKillPrefix: boolean
    readonly asKillPrefix: {
      readonly prefix: Bytes
      readonly subkeys: u32
    } & Struct
    readonly isRemarkWithEvent: boolean
    readonly asRemarkWithEvent: {
      readonly remark: Bytes
    } & Struct
    readonly type:
      | "FillBlock"
      | "Remark"
      | "SetHeapPages"
      | "SetCode"
      | "SetCodeWithoutChecks"
      | "SetStorage"
      | "KillStorage"
      | "KillPrefix"
      | "RemarkWithEvent"
  }

  /** @name FrameSystemLimitsBlockWeights (154) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64
    readonly maxBlock: u64
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (155) */
  interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass
    readonly operational: FrameSystemLimitsWeightsPerClass
    readonly mandatory: FrameSystemLimitsWeightsPerClass
  }

  /** @name FrameSystemLimitsWeightsPerClass (156) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64
    readonly maxExtrinsic: Option<u64>
    readonly maxTotal: Option<u64>
    readonly reserved: Option<u64>
  }

  /** @name FrameSystemLimitsBlockLength (158) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (159) */
  interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32
    readonly operational: u32
    readonly mandatory: u32
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (160) */
  interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64
    readonly write: u64
  }

  /** @name SpVersionRuntimeVersion (161) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text
    readonly implName: Text
    readonly authoringVersion: u32
    readonly specVersion: u32
    readonly implVersion: u32
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>
    readonly transactionVersion: u32
    readonly stateVersion: u8
  }

  /** @name FrameSystemError (165) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean
    readonly isSpecVersionNeedsToIncrease: boolean
    readonly isFailedToExtractRuntimeVersion: boolean
    readonly isNonDefaultComposite: boolean
    readonly isNonZeroRefCount: boolean
    readonly isCallFiltered: boolean
    readonly type:
      | "InvalidSpecName"
      | "SpecVersionNeedsToIncrease"
      | "FailedToExtractRuntimeVersion"
      | "NonDefaultComposite"
      | "NonZeroRefCount"
      | "CallFiltered"
  }

  /** @name PalletTimestampCall (166) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean
    readonly asSet: {
      readonly now: Compact<u64>
    } & Struct
    readonly type: "Set"
  }

  /** @name PalletBalancesBalanceLock (168) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed
    readonly amount: u128
    readonly reasons: PalletBalancesReasons
  }

  /** @name PalletBalancesReasons (169) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean
    readonly isMisc: boolean
    readonly isAll: boolean
    readonly type: "Fee" | "Misc" | "All"
  }

  /** @name PalletBalancesReserveData (172) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: Null
    readonly amount: u128
  }

  /** @name PalletBalancesReleases (174) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean
    readonly isV200: boolean
    readonly type: "V100" | "V200"
  }

  /** @name PalletBalancesCall (175) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly dest: AccountId32
      readonly value: Compact<u128>
    } & Struct
    readonly isSetBalance: boolean
    readonly asSetBalance: {
      readonly who: AccountId32
      readonly newFree: Compact<u128>
      readonly newReserved: Compact<u128>
    } & Struct
    readonly isForceTransfer: boolean
    readonly asForceTransfer: {
      readonly source: AccountId32
      readonly dest: AccountId32
      readonly value: Compact<u128>
    } & Struct
    readonly isTransferKeepAlive: boolean
    readonly asTransferKeepAlive: {
      readonly dest: AccountId32
      readonly value: Compact<u128>
    } & Struct
    readonly isTransferAll: boolean
    readonly asTransferAll: {
      readonly dest: AccountId32
      readonly keepAlive: bool
    } & Struct
    readonly isForceUnreserve: boolean
    readonly asForceUnreserve: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly type:
      | "Transfer"
      | "SetBalance"
      | "ForceTransfer"
      | "TransferKeepAlive"
      | "TransferAll"
      | "ForceUnreserve"
  }

  /** @name PalletBalancesError (176) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean
    readonly isLiquidityRestrictions: boolean
    readonly isInsufficientBalance: boolean
    readonly isExistentialDeposit: boolean
    readonly isKeepAlive: boolean
    readonly isExistingVestingSchedule: boolean
    readonly isDeadAccount: boolean
    readonly isTooManyReserves: boolean
    readonly type:
      | "VestingBalance"
      | "LiquidityRestrictions"
      | "InsufficientBalance"
      | "ExistentialDeposit"
      | "KeepAlive"
      | "ExistingVestingSchedule"
      | "DeadAccount"
      | "TooManyReserves"
  }

  /** @name PalletTransactionPaymentReleases (177) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean
    readonly isV2: boolean
    readonly type: "V1Ancient" | "V2"
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (179) */
  interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128
    readonly coeffFrac: Perbill
    readonly negative: bool
    readonly degree: u8
  }

  /** @name PalletTreasuryProposal (180) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32
    readonly value: u128
    readonly beneficiary: AccountId32
    readonly bond: u128
  }

  /** @name PalletTreasuryCall (183) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean
    readonly asProposeSpend: {
      readonly value: Compact<u128>
      readonly beneficiary: AccountId32
    } & Struct
    readonly isRejectProposal: boolean
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>
    } & Struct
    readonly isApproveProposal: boolean
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>
    } & Struct
    readonly type: "ProposeSpend" | "RejectProposal" | "ApproveProposal"
  }

  /** @name FrameSupportPalletId (185) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (186) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean
    readonly isInvalidIndex: boolean
    readonly isTooManyApprovals: boolean
    readonly type:
      | "InsufficientProposersBalance"
      | "InvalidIndex"
      | "TooManyApprovals"
  }

  /** @name PalletUtilityCall (187) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean
    readonly asBatch: {
      readonly calls: Vec<Call>
    } & Struct
    readonly isAsDerivative: boolean
    readonly asAsDerivative: {
      readonly index: u16
      readonly call: Call
    } & Struct
    readonly isBatchAll: boolean
    readonly asBatchAll: {
      readonly calls: Vec<Call>
    } & Struct
    readonly isDispatchAs: boolean
    readonly asDispatchAs: {
      readonly asOrigin: TestingBasiliskRuntimeOriginCaller
      readonly call: Call
    } & Struct
    readonly type: "Batch" | "AsDerivative" | "BatchAll" | "DispatchAs"
  }

  /** @name PalletSchedulerCall (190) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean
    readonly asSchedule: {
      readonly when: u32
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>
      readonly priority: u8
      readonly call: FrameSupportScheduleMaybeHashed
    } & Struct
    readonly isCancel: boolean
    readonly asCancel: {
      readonly when: u32
      readonly index: u32
    } & Struct
    readonly isScheduleNamed: boolean
    readonly asScheduleNamed: {
      readonly id: Bytes
      readonly when: u32
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>
      readonly priority: u8
      readonly call: FrameSupportScheduleMaybeHashed
    } & Struct
    readonly isCancelNamed: boolean
    readonly asCancelNamed: {
      readonly id: Bytes
    } & Struct
    readonly isScheduleAfter: boolean
    readonly asScheduleAfter: {
      readonly after: u32
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>
      readonly priority: u8
      readonly call: FrameSupportScheduleMaybeHashed
    } & Struct
    readonly isScheduleNamedAfter: boolean
    readonly asScheduleNamedAfter: {
      readonly id: Bytes
      readonly after: u32
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>
      readonly priority: u8
      readonly call: FrameSupportScheduleMaybeHashed
    } & Struct
    readonly type:
      | "Schedule"
      | "Cancel"
      | "ScheduleNamed"
      | "CancelNamed"
      | "ScheduleAfter"
      | "ScheduleNamedAfter"
  }

  /** @name FrameSupportScheduleMaybeHashed (192) */
  interface FrameSupportScheduleMaybeHashed extends Enum {
    readonly isValue: boolean
    readonly asValue: Call
    readonly isHash: boolean
    readonly asHash: H256
    readonly type: "Value" | "Hash"
  }

  /** @name PalletDemocracyCall (193) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean
    readonly asPropose: {
      readonly proposalHash: H256
      readonly value: Compact<u128>
    } & Struct
    readonly isSecond: boolean
    readonly asSecond: {
      readonly proposal: Compact<u32>
      readonly secondsUpperBound: Compact<u32>
    } & Struct
    readonly isVote: boolean
    readonly asVote: {
      readonly refIndex: Compact<u32>
      readonly vote: PalletDemocracyVoteAccountVote
    } & Struct
    readonly isEmergencyCancel: boolean
    readonly asEmergencyCancel: {
      readonly refIndex: u32
    } & Struct
    readonly isExternalPropose: boolean
    readonly asExternalPropose: {
      readonly proposalHash: H256
    } & Struct
    readonly isExternalProposeMajority: boolean
    readonly asExternalProposeMajority: {
      readonly proposalHash: H256
    } & Struct
    readonly isExternalProposeDefault: boolean
    readonly asExternalProposeDefault: {
      readonly proposalHash: H256
    } & Struct
    readonly isFastTrack: boolean
    readonly asFastTrack: {
      readonly proposalHash: H256
      readonly votingPeriod: u32
      readonly delay: u32
    } & Struct
    readonly isVetoExternal: boolean
    readonly asVetoExternal: {
      readonly proposalHash: H256
    } & Struct
    readonly isCancelReferendum: boolean
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>
    } & Struct
    readonly isCancelQueued: boolean
    readonly asCancelQueued: {
      readonly which: u32
    } & Struct
    readonly isDelegate: boolean
    readonly asDelegate: {
      readonly to: AccountId32
      readonly conviction: PalletDemocracyConviction
      readonly balance: u128
    } & Struct
    readonly isUndelegate: boolean
    readonly isClearPublicProposals: boolean
    readonly isNotePreimage: boolean
    readonly asNotePreimage: {
      readonly encodedProposal: Bytes
    } & Struct
    readonly isNotePreimageOperational: boolean
    readonly asNotePreimageOperational: {
      readonly encodedProposal: Bytes
    } & Struct
    readonly isNoteImminentPreimage: boolean
    readonly asNoteImminentPreimage: {
      readonly encodedProposal: Bytes
    } & Struct
    readonly isNoteImminentPreimageOperational: boolean
    readonly asNoteImminentPreimageOperational: {
      readonly encodedProposal: Bytes
    } & Struct
    readonly isReapPreimage: boolean
    readonly asReapPreimage: {
      readonly proposalHash: H256
      readonly proposalLenUpperBound: Compact<u32>
    } & Struct
    readonly isUnlock: boolean
    readonly asUnlock: {
      readonly target: AccountId32
    } & Struct
    readonly isRemoveVote: boolean
    readonly asRemoveVote: {
      readonly index: u32
    } & Struct
    readonly isRemoveOtherVote: boolean
    readonly asRemoveOtherVote: {
      readonly target: AccountId32
      readonly index: u32
    } & Struct
    readonly isEnactProposal: boolean
    readonly asEnactProposal: {
      readonly proposalHash: H256
      readonly index: u32
    } & Struct
    readonly isBlacklist: boolean
    readonly asBlacklist: {
      readonly proposalHash: H256
      readonly maybeRefIndex: Option<u32>
    } & Struct
    readonly isCancelProposal: boolean
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>
    } & Struct
    readonly type:
      | "Propose"
      | "Second"
      | "Vote"
      | "EmergencyCancel"
      | "ExternalPropose"
      | "ExternalProposeMajority"
      | "ExternalProposeDefault"
      | "FastTrack"
      | "VetoExternal"
      | "CancelReferendum"
      | "CancelQueued"
      | "Delegate"
      | "Undelegate"
      | "ClearPublicProposals"
      | "NotePreimage"
      | "NotePreimageOperational"
      | "NoteImminentPreimage"
      | "NoteImminentPreimageOperational"
      | "ReapPreimage"
      | "Unlock"
      | "RemoveVote"
      | "RemoveOtherVote"
      | "EnactProposal"
      | "Blacklist"
      | "CancelProposal"
  }

  /** @name PalletDemocracyConviction (194) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean
    readonly isLocked1x: boolean
    readonly isLocked2x: boolean
    readonly isLocked3x: boolean
    readonly isLocked4x: boolean
    readonly isLocked5x: boolean
    readonly isLocked6x: boolean
    readonly type:
      | "None"
      | "Locked1x"
      | "Locked2x"
      | "Locked3x"
      | "Locked4x"
      | "Locked5x"
      | "Locked6x"
  }

  /** @name PalletElectionsPhragmenCall (195) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean
    readonly asVote: {
      readonly votes: Vec<AccountId32>
      readonly value: Compact<u128>
    } & Struct
    readonly isRemoveVoter: boolean
    readonly isSubmitCandidacy: boolean
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>
    } & Struct
    readonly isRenounceCandidacy: boolean
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing
    } & Struct
    readonly isRemoveMember: boolean
    readonly asRemoveMember: {
      readonly who: AccountId32
      readonly hasReplacement: bool
    } & Struct
    readonly isCleanDefunctVoters: boolean
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32
      readonly numDefunct: u32
    } & Struct
    readonly type:
      | "Vote"
      | "RemoveVoter"
      | "SubmitCandidacy"
      | "RenounceCandidacy"
      | "RemoveMember"
      | "CleanDefunctVoters"
  }

  /** @name PalletElectionsPhragmenRenouncing (196) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean
    readonly isRunnerUp: boolean
    readonly isCandidate: boolean
    readonly asCandidate: Compact<u32>
    readonly type: "Member" | "RunnerUp" | "Candidate"
  }

  /** @name PalletCollectiveCall (197) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>
      readonly prime: Option<AccountId32>
      readonly oldCount: u32
    } & Struct
    readonly isExecute: boolean
    readonly asExecute: {
      readonly proposal: Call
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly isPropose: boolean
    readonly asPropose: {
      readonly threshold: Compact<u32>
      readonly proposal: Call
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly isVote: boolean
    readonly asVote: {
      readonly proposal: H256
      readonly index: Compact<u32>
      readonly approve: bool
    } & Struct
    readonly isClose: boolean
    readonly asClose: {
      readonly proposalHash: H256
      readonly index: Compact<u32>
      readonly proposalWeightBound: Compact<u64>
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly isDisapproveProposal: boolean
    readonly asDisapproveProposal: {
      readonly proposalHash: H256
    } & Struct
    readonly type:
      | "SetMembers"
      | "Execute"
      | "Propose"
      | "Vote"
      | "Close"
      | "DisapproveProposal"
  }

  /** @name OrmlVestingModuleCall (199) */
  interface OrmlVestingModuleCall extends Enum {
    readonly isClaim: boolean
    readonly isVestedTransfer: boolean
    readonly asVestedTransfer: {
      readonly dest: AccountId32
      readonly schedule: OrmlVestingVestingSchedule
    } & Struct
    readonly isUpdateVestingSchedules: boolean
    readonly asUpdateVestingSchedules: {
      readonly who: AccountId32
      readonly vestingSchedules: Vec<OrmlVestingVestingSchedule>
    } & Struct
    readonly isClaimFor: boolean
    readonly asClaimFor: {
      readonly dest: AccountId32
    } & Struct
    readonly type:
      | "Claim"
      | "VestedTransfer"
      | "UpdateVestingSchedules"
      | "ClaimFor"
  }

  /** @name PalletProxyCall (201) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean
    readonly asProxy: {
      readonly real: AccountId32
      readonly forceProxyType: Option<CommonRuntimeProxyType>
      readonly call: Call
    } & Struct
    readonly isAddProxy: boolean
    readonly asAddProxy: {
      readonly delegate: AccountId32
      readonly proxyType: CommonRuntimeProxyType
      readonly delay: u32
    } & Struct
    readonly isRemoveProxy: boolean
    readonly asRemoveProxy: {
      readonly delegate: AccountId32
      readonly proxyType: CommonRuntimeProxyType
      readonly delay: u32
    } & Struct
    readonly isRemoveProxies: boolean
    readonly isAnonymous: boolean
    readonly asAnonymous: {
      readonly proxyType: CommonRuntimeProxyType
      readonly delay: u32
      readonly index: u16
    } & Struct
    readonly isKillAnonymous: boolean
    readonly asKillAnonymous: {
      readonly spawner: AccountId32
      readonly proxyType: CommonRuntimeProxyType
      readonly index: u16
      readonly height: Compact<u32>
      readonly extIndex: Compact<u32>
    } & Struct
    readonly isAnnounce: boolean
    readonly asAnnounce: {
      readonly real: AccountId32
      readonly callHash: H256
    } & Struct
    readonly isRemoveAnnouncement: boolean
    readonly asRemoveAnnouncement: {
      readonly real: AccountId32
      readonly callHash: H256
    } & Struct
    readonly isRejectAnnouncement: boolean
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId32
      readonly callHash: H256
    } & Struct
    readonly isProxyAnnounced: boolean
    readonly asProxyAnnounced: {
      readonly delegate: AccountId32
      readonly real: AccountId32
      readonly forceProxyType: Option<CommonRuntimeProxyType>
      readonly call: Call
    } & Struct
    readonly type:
      | "Proxy"
      | "AddProxy"
      | "RemoveProxy"
      | "RemoveProxies"
      | "Anonymous"
      | "KillAnonymous"
      | "Announce"
      | "RemoveAnnouncement"
      | "RejectAnnouncement"
      | "ProxyAnnounced"
  }

  /** @name PalletTipsCall (203) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean
    readonly asReportAwesome: {
      readonly reason: Bytes
      readonly who: AccountId32
    } & Struct
    readonly isRetractTip: boolean
    readonly asRetractTip: {
      readonly hash_: H256
    } & Struct
    readonly isTipNew: boolean
    readonly asTipNew: {
      readonly reason: Bytes
      readonly who: AccountId32
      readonly tipValue: Compact<u128>
    } & Struct
    readonly isTip: boolean
    readonly asTip: {
      readonly hash_: H256
      readonly tipValue: Compact<u128>
    } & Struct
    readonly isCloseTip: boolean
    readonly asCloseTip: {
      readonly hash_: H256
    } & Struct
    readonly isSlashTip: boolean
    readonly asSlashTip: {
      readonly hash_: H256
    } & Struct
    readonly type:
      | "ReportAwesome"
      | "RetractTip"
      | "TipNew"
      | "Tip"
      | "CloseTip"
      | "SlashTip"
  }

  /** @name PalletAuthorshipCall (204) */
  interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean
    readonly asSetUncles: {
      readonly newUncles: Vec<SpRuntimeHeader>
    } & Struct
    readonly type: "SetUncles"
  }

  /** @name SpRuntimeHeader (206) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256
    readonly number: Compact<u32>
    readonly stateRoot: H256
    readonly extrinsicsRoot: H256
    readonly digest: SpRuntimeDigest
  }

  /** @name SpRuntimeBlakeTwo256 (207) */
  type SpRuntimeBlakeTwo256 = Null

  /** @name PalletCollatorSelectionCall (208) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>
    } & Struct
    readonly isSetDesiredCandidates: boolean
    readonly asSetDesiredCandidates: {
      readonly max: u32
    } & Struct
    readonly isSetCandidacyBond: boolean
    readonly asSetCandidacyBond: {
      readonly bond: u128
    } & Struct
    readonly isRegisterAsCandidate: boolean
    readonly isLeaveIntent: boolean
    readonly type:
      | "SetInvulnerables"
      | "SetDesiredCandidates"
      | "SetCandidacyBond"
      | "RegisterAsCandidate"
      | "LeaveIntent"
  }

  /** @name PalletSessionCall (209) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean
    readonly asSetKeys: {
      readonly keys_: TestingBasiliskRuntimeOpaqueSessionKeys
      readonly proof: Bytes
    } & Struct
    readonly isPurgeKeys: boolean
    readonly type: "SetKeys" | "PurgeKeys"
  }

  /** @name TestingBasiliskRuntimeOpaqueSessionKeys (210) */
  interface TestingBasiliskRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (211) */
  interface SpConsensusAuraSr25519AppSr25519Public
    extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (212) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletPreimageCall (213) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean
    readonly asNotePreimage: {
      readonly bytes: Bytes
    } & Struct
    readonly isUnnotePreimage: boolean
    readonly asUnnotePreimage: {
      readonly hash_: H256
    } & Struct
    readonly isRequestPreimage: boolean
    readonly asRequestPreimage: {
      readonly hash_: H256
    } & Struct
    readonly isUnrequestPreimage: boolean
    readonly asUnrequestPreimage: {
      readonly hash_: H256
    } & Struct
    readonly type:
      | "NotePreimage"
      | "UnnotePreimage"
      | "RequestPreimage"
      | "UnrequestPreimage"
  }

  /** @name PalletUniquesCall (214) */
  interface PalletUniquesCall extends Enum {
    readonly isCreate: boolean
    readonly asCreate: {
      readonly class: Compact<u128>
      readonly admin: AccountId32
    } & Struct
    readonly isForceCreate: boolean
    readonly asForceCreate: {
      readonly class: Compact<u128>
      readonly owner: AccountId32
      readonly freeHolding: bool
    } & Struct
    readonly isDestroy: boolean
    readonly asDestroy: {
      readonly class: Compact<u128>
      readonly witness: PalletUniquesDestroyWitness
    } & Struct
    readonly isMint: boolean
    readonly asMint: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
      readonly owner: AccountId32
    } & Struct
    readonly isBurn: boolean
    readonly asBurn: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
      readonly checkOwner: Option<AccountId32>
    } & Struct
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
      readonly dest: AccountId32
    } & Struct
    readonly isRedeposit: boolean
    readonly asRedeposit: {
      readonly class: Compact<u128>
      readonly instances: Vec<u128>
    } & Struct
    readonly isFreeze: boolean
    readonly asFreeze: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
    } & Struct
    readonly isThaw: boolean
    readonly asThaw: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
    } & Struct
    readonly isFreezeClass: boolean
    readonly asFreezeClass: {
      readonly class: Compact<u128>
    } & Struct
    readonly isThawClass: boolean
    readonly asThawClass: {
      readonly class: Compact<u128>
    } & Struct
    readonly isTransferOwnership: boolean
    readonly asTransferOwnership: {
      readonly class: Compact<u128>
      readonly owner: AccountId32
    } & Struct
    readonly isSetTeam: boolean
    readonly asSetTeam: {
      readonly class: Compact<u128>
      readonly issuer: AccountId32
      readonly admin: AccountId32
      readonly freezer: AccountId32
    } & Struct
    readonly isApproveTransfer: boolean
    readonly asApproveTransfer: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
      readonly delegate: AccountId32
    } & Struct
    readonly isCancelApproval: boolean
    readonly asCancelApproval: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
      readonly maybeCheckDelegate: Option<AccountId32>
    } & Struct
    readonly isForceAssetStatus: boolean
    readonly asForceAssetStatus: {
      readonly class: Compact<u128>
      readonly owner: AccountId32
      readonly issuer: AccountId32
      readonly admin: AccountId32
      readonly freezer: AccountId32
      readonly freeHolding: bool
      readonly isFrozen: bool
    } & Struct
    readonly isSetAttribute: boolean
    readonly asSetAttribute: {
      readonly class: Compact<u128>
      readonly maybeInstance: Option<u128>
      readonly key: Bytes
      readonly value: Bytes
    } & Struct
    readonly isClearAttribute: boolean
    readonly asClearAttribute: {
      readonly class: Compact<u128>
      readonly maybeInstance: Option<u128>
      readonly key: Bytes
    } & Struct
    readonly isSetMetadata: boolean
    readonly asSetMetadata: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
      readonly data: Bytes
      readonly isFrozen: bool
    } & Struct
    readonly isClearMetadata: boolean
    readonly asClearMetadata: {
      readonly class: Compact<u128>
      readonly instance: Compact<u128>
    } & Struct
    readonly isSetClassMetadata: boolean
    readonly asSetClassMetadata: {
      readonly class: Compact<u128>
      readonly data: Bytes
      readonly isFrozen: bool
    } & Struct
    readonly isClearClassMetadata: boolean
    readonly asClearClassMetadata: {
      readonly class: Compact<u128>
    } & Struct
    readonly type:
      | "Create"
      | "ForceCreate"
      | "Destroy"
      | "Mint"
      | "Burn"
      | "Transfer"
      | "Redeposit"
      | "Freeze"
      | "Thaw"
      | "FreezeClass"
      | "ThawClass"
      | "TransferOwnership"
      | "SetTeam"
      | "ApproveTransfer"
      | "CancelApproval"
      | "ForceAssetStatus"
      | "SetAttribute"
      | "ClearAttribute"
      | "SetMetadata"
      | "ClearMetadata"
      | "SetClassMetadata"
      | "ClearClassMetadata"
  }

  /** @name PalletUniquesDestroyWitness (215) */
  interface PalletUniquesDestroyWitness extends Struct {
    readonly instances: Compact<u32>
    readonly instanceMetadatas: Compact<u32>
    readonly attributes: Compact<u32>
  }

  /** @name PalletIdentityCall (216) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean
    readonly asAddRegistrar: {
      readonly account: AccountId32
    } & Struct
    readonly isSetIdentity: boolean
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo
    } & Struct
    readonly isSetSubs: boolean
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>
    } & Struct
    readonly isClearIdentity: boolean
    readonly isRequestJudgement: boolean
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>
      readonly maxFee: Compact<u128>
    } & Struct
    readonly isCancelRequest: boolean
    readonly asCancelRequest: {
      readonly regIndex: u32
    } & Struct
    readonly isSetFee: boolean
    readonly asSetFee: {
      readonly index: Compact<u32>
      readonly fee: Compact<u128>
    } & Struct
    readonly isSetAccountId: boolean
    readonly asSetAccountId: {
      readonly index: Compact<u32>
      readonly new_: AccountId32
    } & Struct
    readonly isSetFields: boolean
    readonly asSetFields: {
      readonly index: Compact<u32>
      readonly fields: PalletIdentityBitFlags
    } & Struct
    readonly isProvideJudgement: boolean
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>
      readonly target: AccountId32
      readonly judgement: PalletIdentityJudgement
    } & Struct
    readonly isKillIdentity: boolean
    readonly asKillIdentity: {
      readonly target: AccountId32
    } & Struct
    readonly isAddSub: boolean
    readonly asAddSub: {
      readonly sub: AccountId32
      readonly data: Data
    } & Struct
    readonly isRenameSub: boolean
    readonly asRenameSub: {
      readonly sub: AccountId32
      readonly data: Data
    } & Struct
    readonly isRemoveSub: boolean
    readonly asRemoveSub: {
      readonly sub: AccountId32
    } & Struct
    readonly isQuitSub: boolean
    readonly type:
      | "AddRegistrar"
      | "SetIdentity"
      | "SetSubs"
      | "ClearIdentity"
      | "RequestJudgement"
      | "CancelRequest"
      | "SetFee"
      | "SetAccountId"
      | "SetFields"
      | "ProvideJudgement"
      | "KillIdentity"
      | "AddSub"
      | "RenameSub"
      | "RemoveSub"
      | "QuitSub"
  }

  /** @name PalletIdentityIdentityInfo (217) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>
    readonly display: Data
    readonly legal: Data
    readonly web: Data
    readonly riot: Data
    readonly email: Data
    readonly pgpFingerprint: Option<U8aFixed>
    readonly image: Data
    readonly twitter: Data
  }

  /** @name PalletIdentityBitFlags (253) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean
    readonly isLegal: boolean
    readonly isWeb: boolean
    readonly isRiot: boolean
    readonly isEmail: boolean
    readonly isPgpFingerprint: boolean
    readonly isImage: boolean
    readonly isTwitter: boolean
  }

  /** @name PalletIdentityIdentityField (254) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean
    readonly isLegal: boolean
    readonly isWeb: boolean
    readonly isRiot: boolean
    readonly isEmail: boolean
    readonly isPgpFingerprint: boolean
    readonly isImage: boolean
    readonly isTwitter: boolean
    readonly type:
      | "Display"
      | "Legal"
      | "Web"
      | "Riot"
      | "Email"
      | "PgpFingerprint"
      | "Image"
      | "Twitter"
  }

  /** @name PalletIdentityJudgement (255) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean
    readonly isFeePaid: boolean
    readonly asFeePaid: u128
    readonly isReasonable: boolean
    readonly isKnownGood: boolean
    readonly isOutOfDate: boolean
    readonly isLowQuality: boolean
    readonly isErroneous: boolean
    readonly type:
      | "Unknown"
      | "FeePaid"
      | "Reasonable"
      | "KnownGood"
      | "OutOfDate"
      | "LowQuality"
      | "Erroneous"
  }

  /** @name PalletMultisigCall (256) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>
      readonly call: Call
    } & Struct
    readonly isAsMulti: boolean
    readonly asAsMulti: {
      readonly threshold: u16
      readonly otherSignatories: Vec<AccountId32>
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>
      readonly call: WrapperKeepOpaque<Call>
      readonly storeCall: bool
      readonly maxWeight: u64
    } & Struct
    readonly isApproveAsMulti: boolean
    readonly asApproveAsMulti: {
      readonly threshold: u16
      readonly otherSignatories: Vec<AccountId32>
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>
      readonly callHash: U8aFixed
      readonly maxWeight: u64
    } & Struct
    readonly isCancelAsMulti: boolean
    readonly asCancelAsMulti: {
      readonly threshold: u16
      readonly otherSignatories: Vec<AccountId32>
      readonly timepoint: PalletMultisigTimepoint
      readonly callHash: U8aFixed
    } & Struct
    readonly type:
      | "AsMultiThreshold1"
      | "AsMulti"
      | "ApproveAsMulti"
      | "CancelAsMulti"
  }

  /** @name CumulusPalletParachainSystemCall (259) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData
    } & Struct
    readonly isSudoSendUpwardMessage: boolean
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes
    } & Struct
    readonly isAuthorizeUpgrade: boolean
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256
    } & Struct
    readonly isEnactAuthorizedUpgrade: boolean
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes
    } & Struct
    readonly type:
      | "SetValidationData"
      | "SudoSendUpwardMessage"
      | "AuthorizeUpgrade"
      | "EnactAuthorizedUpgrade"
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (260) */
  interface CumulusPrimitivesParachainInherentParachainInherentData
    extends Struct {
    readonly validationData: PolkadotPrimitivesV1PersistedValidationData
    readonly relayChainState: SpTrieStorageProof
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>
    readonly horizontalMessages: BTreeMap<
      u32,
      Vec<PolkadotCorePrimitivesInboundHrmpMessage>
    >
  }

  /** @name PolkadotPrimitivesV1PersistedValidationData (261) */
  interface PolkadotPrimitivesV1PersistedValidationData extends Struct {
    readonly parentHead: Bytes
    readonly relayParentNumber: u32
    readonly relayParentStorageRoot: H256
    readonly maxPovSize: u32
  }

  /** @name SpTrieStorageProof (263) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: Vec<Bytes>
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (265) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32
    readonly msg: Bytes
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (268) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32
    readonly data: Bytes
  }

  /** @name PalletXcmCall (271) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation
      readonly message: XcmVersionedXcm
    } & Struct
    readonly isTeleportAssets: boolean
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation
      readonly beneficiary: XcmVersionedMultiLocation
      readonly assets: XcmVersionedMultiAssets
      readonly feeAssetItem: u32
    } & Struct
    readonly isReserveTransferAssets: boolean
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation
      readonly beneficiary: XcmVersionedMultiLocation
      readonly assets: XcmVersionedMultiAssets
      readonly feeAssetItem: u32
    } & Struct
    readonly isExecute: boolean
    readonly asExecute: {
      readonly message: XcmVersionedXcm
      readonly maxWeight: u64
    } & Struct
    readonly isForceXcmVersion: boolean
    readonly asForceXcmVersion: {
      readonly location: XcmV1MultiLocation
      readonly xcmVersion: u32
    } & Struct
    readonly isForceDefaultXcmVersion: boolean
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>
    } & Struct
    readonly isForceSubscribeVersionNotify: boolean
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation
    } & Struct
    readonly isForceUnsubscribeVersionNotify: boolean
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation
    } & Struct
    readonly isLimitedReserveTransferAssets: boolean
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation
      readonly beneficiary: XcmVersionedMultiLocation
      readonly assets: XcmVersionedMultiAssets
      readonly feeAssetItem: u32
      readonly weightLimit: XcmV2WeightLimit
    } & Struct
    readonly isLimitedTeleportAssets: boolean
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation
      readonly beneficiary: XcmVersionedMultiLocation
      readonly assets: XcmVersionedMultiAssets
      readonly feeAssetItem: u32
      readonly weightLimit: XcmV2WeightLimit
    } & Struct
    readonly type:
      | "Send"
      | "TeleportAssets"
      | "ReserveTransferAssets"
      | "Execute"
      | "ForceXcmVersion"
      | "ForceDefaultXcmVersion"
      | "ForceSubscribeVersionNotify"
      | "ForceUnsubscribeVersionNotify"
      | "LimitedReserveTransferAssets"
      | "LimitedTeleportAssets"
  }

  /** @name XcmVersionedXcm (272) */
  interface XcmVersionedXcm extends Enum {
    readonly isV0: boolean
    readonly asV0: XcmV0Xcm
    readonly isV1: boolean
    readonly asV1: XcmV1Xcm
    readonly isV2: boolean
    readonly asV2: XcmV2Xcm
    readonly type: "V0" | "V1" | "V2"
  }

  /** @name XcmV0Xcm (273) */
  interface XcmV0Xcm extends Enum {
    readonly isWithdrawAsset: boolean
    readonly asWithdrawAsset: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isReserveAssetDeposit: boolean
    readonly asReserveAssetDeposit: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isTeleportAsset: boolean
    readonly asTeleportAsset: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isQueryResponse: boolean
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>
      readonly response: XcmV0Response
    } & Struct
    readonly isTransferAsset: boolean
    readonly asTransferAsset: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly dest: XcmV0MultiLocation
    } & Struct
    readonly isTransferReserveAsset: boolean
    readonly asTransferReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly dest: XcmV0MultiLocation
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isTransact: boolean
    readonly asTransact: {
      readonly originType: XcmV0OriginKind
      readonly requireWeightAtMost: u64
      readonly call: XcmDoubleEncoded
    } & Struct
    readonly isHrmpNewChannelOpenRequest: boolean
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>
      readonly maxMessageSize: Compact<u32>
      readonly maxCapacity: Compact<u32>
    } & Struct
    readonly isHrmpChannelAccepted: boolean
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>
    } & Struct
    readonly isHrmpChannelClosing: boolean
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>
      readonly sender: Compact<u32>
      readonly recipient: Compact<u32>
    } & Struct
    readonly isRelayedFrom: boolean
    readonly asRelayedFrom: {
      readonly who: XcmV0MultiLocation
      readonly message: XcmV0Xcm
    } & Struct
    readonly type:
      | "WithdrawAsset"
      | "ReserveAssetDeposit"
      | "TeleportAsset"
      | "QueryResponse"
      | "TransferAsset"
      | "TransferReserveAsset"
      | "Transact"
      | "HrmpNewChannelOpenRequest"
      | "HrmpChannelAccepted"
      | "HrmpChannelClosing"
      | "RelayedFrom"
  }

  /** @name XcmV0Order (275) */
  interface XcmV0Order extends Enum {
    readonly isNull: boolean
    readonly isDepositAsset: boolean
    readonly asDepositAsset: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly dest: XcmV0MultiLocation
    } & Struct
    readonly isDepositReserveAsset: boolean
    readonly asDepositReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly dest: XcmV0MultiLocation
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isExchangeAsset: boolean
    readonly asExchangeAsset: {
      readonly give: Vec<XcmV0MultiAsset>
      readonly receive: Vec<XcmV0MultiAsset>
    } & Struct
    readonly isInitiateReserveWithdraw: boolean
    readonly asInitiateReserveWithdraw: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly reserve: XcmV0MultiLocation
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isInitiateTeleport: boolean
    readonly asInitiateTeleport: {
      readonly assets: Vec<XcmV0MultiAsset>
      readonly dest: XcmV0MultiLocation
      readonly effects: Vec<XcmV0Order>
    } & Struct
    readonly isQueryHolding: boolean
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>
      readonly dest: XcmV0MultiLocation
      readonly assets: Vec<XcmV0MultiAsset>
    } & Struct
    readonly isBuyExecution: boolean
    readonly asBuyExecution: {
      readonly fees: XcmV0MultiAsset
      readonly weight: u64
      readonly debt: u64
      readonly haltOnError: bool
      readonly xcm: Vec<XcmV0Xcm>
    } & Struct
    readonly type:
      | "Null"
      | "DepositAsset"
      | "DepositReserveAsset"
      | "ExchangeAsset"
      | "InitiateReserveWithdraw"
      | "InitiateTeleport"
      | "QueryHolding"
      | "BuyExecution"
  }

  /** @name XcmV0Response (277) */
  interface XcmV0Response extends Enum {
    readonly isAssets: boolean
    readonly asAssets: Vec<XcmV0MultiAsset>
    readonly type: "Assets"
  }

  /** @name XcmV1Xcm (278) */
  interface XcmV1Xcm extends Enum {
    readonly isWithdrawAsset: boolean
    readonly asWithdrawAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isReserveAssetDeposited: boolean
    readonly asReserveAssetDeposited: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isReceiveTeleportedAsset: boolean
    readonly asReceiveTeleportedAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isQueryResponse: boolean
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>
      readonly response: XcmV1Response
    } & Struct
    readonly isTransferAsset: boolean
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly beneficiary: XcmV1MultiLocation
    } & Struct
    readonly isTransferReserveAsset: boolean
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets
      readonly dest: XcmV1MultiLocation
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isTransact: boolean
    readonly asTransact: {
      readonly originType: XcmV0OriginKind
      readonly requireWeightAtMost: u64
      readonly call: XcmDoubleEncoded
    } & Struct
    readonly isHrmpNewChannelOpenRequest: boolean
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>
      readonly maxMessageSize: Compact<u32>
      readonly maxCapacity: Compact<u32>
    } & Struct
    readonly isHrmpChannelAccepted: boolean
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>
    } & Struct
    readonly isHrmpChannelClosing: boolean
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>
      readonly sender: Compact<u32>
      readonly recipient: Compact<u32>
    } & Struct
    readonly isRelayedFrom: boolean
    readonly asRelayedFrom: {
      readonly who: XcmV1MultilocationJunctions
      readonly message: XcmV1Xcm
    } & Struct
    readonly isSubscribeVersion: boolean
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>
      readonly maxResponseWeight: Compact<u64>
    } & Struct
    readonly isUnsubscribeVersion: boolean
    readonly type:
      | "WithdrawAsset"
      | "ReserveAssetDeposited"
      | "ReceiveTeleportedAsset"
      | "QueryResponse"
      | "TransferAsset"
      | "TransferReserveAsset"
      | "Transact"
      | "HrmpNewChannelOpenRequest"
      | "HrmpChannelAccepted"
      | "HrmpChannelClosing"
      | "RelayedFrom"
      | "SubscribeVersion"
      | "UnsubscribeVersion"
  }

  /** @name XcmV1Order (280) */
  interface XcmV1Order extends Enum {
    readonly isNoop: boolean
    readonly isDepositAsset: boolean
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly maxAssets: u32
      readonly beneficiary: XcmV1MultiLocation
    } & Struct
    readonly isDepositReserveAsset: boolean
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly maxAssets: u32
      readonly dest: XcmV1MultiLocation
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isExchangeAsset: boolean
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter
      readonly receive: XcmV1MultiassetMultiAssets
    } & Struct
    readonly isInitiateReserveWithdraw: boolean
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly reserve: XcmV1MultiLocation
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isInitiateTeleport: boolean
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter
      readonly dest: XcmV1MultiLocation
      readonly effects: Vec<XcmV1Order>
    } & Struct
    readonly isQueryHolding: boolean
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>
      readonly dest: XcmV1MultiLocation
      readonly assets: XcmV1MultiassetMultiAssetFilter
    } & Struct
    readonly isBuyExecution: boolean
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset
      readonly weight: u64
      readonly debt: u64
      readonly haltOnError: bool
      readonly instructions: Vec<XcmV1Xcm>
    } & Struct
    readonly type:
      | "Noop"
      | "DepositAsset"
      | "DepositReserveAsset"
      | "ExchangeAsset"
      | "InitiateReserveWithdraw"
      | "InitiateTeleport"
      | "QueryHolding"
      | "BuyExecution"
  }

  /** @name XcmV1Response (282) */
  interface XcmV1Response extends Enum {
    readonly isAssets: boolean
    readonly asAssets: XcmV1MultiassetMultiAssets
    readonly isVersion: boolean
    readonly asVersion: u32
    readonly type: "Assets" | "Version"
  }

  /** @name CumulusPalletXcmCall (296) */
  type CumulusPalletXcmCall = Null

  /** @name CumulusPalletDmpQueueCall (297) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean
    readonly asServiceOverweight: {
      readonly index: u64
      readonly weightLimit: u64
    } & Struct
    readonly type: "ServiceOverweight"
  }

  /** @name PalletAssetRegistryCall (298) */
  interface PalletAssetRegistryCall extends Enum {
    readonly isRegister: boolean
    readonly asRegister: {
      readonly name: Bytes
      readonly assetType: PalletAssetRegistryAssetType
      readonly existentialDeposit: u128
    } & Struct
    readonly isUpdate: boolean
    readonly asUpdate: {
      readonly assetId: u32
      readonly name: Bytes
      readonly assetType: PalletAssetRegistryAssetType
      readonly existentialDeposit: Option<u128>
    } & Struct
    readonly isSetMetadata: boolean
    readonly asSetMetadata: {
      readonly assetId: u32
      readonly symbol: Bytes
      readonly decimals: u8
    } & Struct
    readonly isSetLocation: boolean
    readonly asSetLocation: {
      readonly assetId: u32
      readonly location: CommonRuntimeAssetLocation
    } & Struct
    readonly type: "Register" | "Update" | "SetMetadata" | "SetLocation"
  }

  /** @name PalletXykCall (299) */
  interface PalletXykCall extends Enum {
    readonly isCreatePool: boolean
    readonly asCreatePool: {
      readonly assetA: u32
      readonly assetB: u32
      readonly amount: u128
      readonly initialPrice: u128
    } & Struct
    readonly isAddLiquidity: boolean
    readonly asAddLiquidity: {
      readonly assetA: u32
      readonly assetB: u32
      readonly amountA: u128
      readonly amountBMaxLimit: u128
    } & Struct
    readonly isRemoveLiquidity: boolean
    readonly asRemoveLiquidity: {
      readonly assetA: u32
      readonly assetB: u32
      readonly liquidityAmount: u128
    } & Struct
    readonly isSell: boolean
    readonly asSell: {
      readonly assetIn: u32
      readonly assetOut: u32
      readonly amount: u128
      readonly maxLimit: u128
      readonly discount: bool
    } & Struct
    readonly isBuy: boolean
    readonly asBuy: {
      readonly assetOut: u32
      readonly assetIn: u32
      readonly amount: u128
      readonly maxLimit: u128
      readonly discount: bool
    } & Struct
    readonly type:
      | "CreatePool"
      | "AddLiquidity"
      | "RemoveLiquidity"
      | "Sell"
      | "Buy"
  }

  /** @name PalletDusterCall (300) */
  interface PalletDusterCall extends Enum {
    readonly isDustAccount: boolean
    readonly asDustAccount: {
      readonly account: AccountId32
      readonly currencyId: u32
    } & Struct
    readonly isAddNondustableAccount: boolean
    readonly asAddNondustableAccount: {
      readonly account: AccountId32
    } & Struct
    readonly isRemoveNondustableAccount: boolean
    readonly asRemoveNondustableAccount: {
      readonly account: AccountId32
    } & Struct
    readonly type:
      | "DustAccount"
      | "AddNondustableAccount"
      | "RemoveNondustableAccount"
  }

  /** @name PalletExchangeCall (301) */
  interface PalletExchangeCall extends Enum {
    readonly isSell: boolean
    readonly asSell: {
      readonly assetSell: u32
      readonly assetBuy: u32
      readonly amountSell: u128
      readonly minBought: u128
      readonly discount: bool
    } & Struct
    readonly isBuy: boolean
    readonly asBuy: {
      readonly assetBuy: u32
      readonly assetSell: u32
      readonly amountBuy: u128
      readonly maxSold: u128
      readonly discount: bool
    } & Struct
    readonly type: "Sell" | "Buy"
  }

  /** @name PalletLbpCall (302) */
  interface PalletLbpCall extends Enum {
    readonly isCreatePool: boolean
    readonly asCreatePool: {
      readonly poolOwner: AccountId32
      readonly assetA: u32
      readonly assetAAmount: u128
      readonly assetB: u32
      readonly assetBAmount: u128
      readonly initialWeight: u32
      readonly finalWeight: u32
      readonly weightCurve: PalletLbpWeightCurveType
      readonly fee: ITuple<[u32, u32]>
      readonly feeCollector: AccountId32
      readonly repayTarget: u128
    } & Struct
    readonly isUpdatePoolData: boolean
    readonly asUpdatePoolData: {
      readonly poolId: AccountId32
      readonly poolOwner: Option<AccountId32>
      readonly start: Option<u32>
      readonly end: Option<u32>
      readonly initialWeight: Option<u32>
      readonly finalWeight: Option<u32>
      readonly fee: Option<ITuple<[u32, u32]>>
      readonly feeCollector: Option<AccountId32>
      readonly repayTarget: Option<u128>
    } & Struct
    readonly isAddLiquidity: boolean
    readonly asAddLiquidity: {
      readonly amountA: ITuple<[u32, u128]>
      readonly amountB: ITuple<[u32, u128]>
    } & Struct
    readonly isRemoveLiquidity: boolean
    readonly asRemoveLiquidity: {
      readonly poolId: AccountId32
    } & Struct
    readonly isSell: boolean
    readonly asSell: {
      readonly assetIn: u32
      readonly assetOut: u32
      readonly amount: u128
      readonly maxLimit: u128
    } & Struct
    readonly isBuy: boolean
    readonly asBuy: {
      readonly assetOut: u32
      readonly assetIn: u32
      readonly amount: u128
      readonly maxLimit: u128
    } & Struct
    readonly type:
      | "CreatePool"
      | "UpdatePoolData"
      | "AddLiquidity"
      | "RemoveLiquidity"
      | "Sell"
      | "Buy"
  }

  /** @name PalletNftCall (304) */
  interface PalletNftCall extends Enum {
    readonly isCreateClass: boolean
    readonly asCreateClass: {
      readonly classId: u128
      readonly classType: PalletNftClassType
      readonly metadata: Bytes
    } & Struct
    readonly isMint: boolean
    readonly asMint: {
      readonly classId: u128
      readonly instanceId: u128
      readonly metadata: Bytes
    } & Struct
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly classId: u128
      readonly instanceId: u128
      readonly dest: AccountId32
    } & Struct
    readonly isBurn: boolean
    readonly asBurn: {
      readonly classId: u128
      readonly instanceId: u128
    } & Struct
    readonly isDestroyClass: boolean
    readonly asDestroyClass: {
      readonly classId: u128
    } & Struct
    readonly type: "CreateClass" | "Mint" | "Transfer" | "Burn" | "DestroyClass"
  }

  /** @name PalletLiquidityMiningCall (305) */
  interface PalletLiquidityMiningCall extends Enum {
    readonly isCreateGlobalFarm: boolean
    readonly asCreateGlobalFarm: {
      readonly totalRewards: u128
      readonly plannedYieldingPeriods: u32
      readonly blocksPerPeriod: u32
      readonly incentivizedAsset: u32
      readonly rewardCurrency: u32
      readonly owner: AccountId32
      readonly yieldPerPeriod: Perquintill
      readonly minDeposit: u128
      readonly priceAdjustment: u128
    } & Struct
    readonly isDestroyGlobalFarm: boolean
    readonly asDestroyGlobalFarm: {
      readonly globalFarmId: u32
    } & Struct
    readonly isCreateYieldFarm: boolean
    readonly asCreateYieldFarm: {
      readonly globalFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly multiplier: u128
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>
    } & Struct
    readonly isUpdateYieldFarm: boolean
    readonly asUpdateYieldFarm: {
      readonly globalFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly multiplier: u128
    } & Struct
    readonly isStopYieldFarm: boolean
    readonly asStopYieldFarm: {
      readonly globalFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
    } & Struct
    readonly isResumeYieldFarm: boolean
    readonly asResumeYieldFarm: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly multiplier: u128
    } & Struct
    readonly isDestroyYieldFarm: boolean
    readonly asDestroyYieldFarm: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
    } & Struct
    readonly isDepositShares: boolean
    readonly asDepositShares: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly sharesAmount: u128
    } & Struct
    readonly isRedepositLpShares: boolean
    readonly asRedepositLpShares: {
      readonly globalFarmId: u32
      readonly yieldFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
      readonly depositId: u128
    } & Struct
    readonly isClaimRewards: boolean
    readonly asClaimRewards: {
      readonly depositId: u128
      readonly yieldFarmId: u32
    } & Struct
    readonly isWithdrawShares: boolean
    readonly asWithdrawShares: {
      readonly depositId: u128
      readonly yieldFarmId: u32
      readonly assetPair: PrimitivesAssetAssetPair
    } & Struct
    readonly type:
      | "CreateGlobalFarm"
      | "DestroyGlobalFarm"
      | "CreateYieldFarm"
      | "UpdateYieldFarm"
      | "StopYieldFarm"
      | "ResumeYieldFarm"
      | "DestroyYieldFarm"
      | "DepositShares"
      | "RedepositLpShares"
      | "ClaimRewards"
      | "WithdrawShares"
  }

  /** @name PalletTransactionMultiPaymentCall (306) */
  interface PalletTransactionMultiPaymentCall extends Enum {
    readonly isSetCurrency: boolean
    readonly asSetCurrency: {
      readonly currency: u32
    } & Struct
    readonly isAddCurrency: boolean
    readonly asAddCurrency: {
      readonly currency: u32
      readonly price: u128
    } & Struct
    readonly isRemoveCurrency: boolean
    readonly asRemoveCurrency: {
      readonly currency: u32
    } & Struct
    readonly type: "SetCurrency" | "AddCurrency" | "RemoveCurrency"
  }

  /** @name PalletPriceOracleCall (307) */
  type PalletPriceOracleCall = Null

  /** @name PalletMarketplaceCall (308) */
  interface PalletMarketplaceCall extends Enum {
    readonly isBuy: boolean
    readonly asBuy: {
      readonly classId: u128
      readonly instanceId: u128
    } & Struct
    readonly isSetPrice: boolean
    readonly asSetPrice: {
      readonly classId: u128
      readonly instanceId: u128
      readonly newPrice: Option<u128>
    } & Struct
    readonly isMakeOffer: boolean
    readonly asMakeOffer: {
      readonly classId: u128
      readonly instanceId: u128
      readonly amount: u128
      readonly expires: u32
    } & Struct
    readonly isWithdrawOffer: boolean
    readonly asWithdrawOffer: {
      readonly classId: u128
      readonly instanceId: u128
      readonly maker: AccountId32
    } & Struct
    readonly isAcceptOffer: boolean
    readonly asAcceptOffer: {
      readonly classId: u128
      readonly instanceId: u128
      readonly maker: AccountId32
    } & Struct
    readonly isAddRoyalty: boolean
    readonly asAddRoyalty: {
      readonly classId: u128
      readonly instanceId: u128
      readonly author: AccountId32
      readonly royalty: u8
    } & Struct
    readonly type:
      | "Buy"
      | "SetPrice"
      | "MakeOffer"
      | "WithdrawOffer"
      | "AcceptOffer"
      | "AddRoyalty"
  }

  /** @name OrmlCurrenciesModuleCall (309) */
  interface OrmlCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly dest: AccountId32
      readonly currencyId: u32
      readonly amount: Compact<u128>
    } & Struct
    readonly isTransferNativeCurrency: boolean
    readonly asTransferNativeCurrency: {
      readonly dest: AccountId32
      readonly amount: Compact<u128>
    } & Struct
    readonly isUpdateBalance: boolean
    readonly asUpdateBalance: {
      readonly who: AccountId32
      readonly currencyId: u32
      readonly amount: i128
    } & Struct
    readonly type: "Transfer" | "TransferNativeCurrency" | "UpdateBalance"
  }

  /** @name OrmlTokensModuleCall (310) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly dest: AccountId32
      readonly currencyId: u32
      readonly amount: Compact<u128>
    } & Struct
    readonly isTransferAll: boolean
    readonly asTransferAll: {
      readonly dest: AccountId32
      readonly currencyId: u32
      readonly keepAlive: bool
    } & Struct
    readonly isTransferKeepAlive: boolean
    readonly asTransferKeepAlive: {
      readonly dest: AccountId32
      readonly currencyId: u32
      readonly amount: Compact<u128>
    } & Struct
    readonly isForceTransfer: boolean
    readonly asForceTransfer: {
      readonly source: AccountId32
      readonly dest: AccountId32
      readonly currencyId: u32
      readonly amount: Compact<u128>
    } & Struct
    readonly isSetBalance: boolean
    readonly asSetBalance: {
      readonly who: AccountId32
      readonly currencyId: u32
      readonly newFree: Compact<u128>
      readonly newReserved: Compact<u128>
    } & Struct
    readonly type:
      | "Transfer"
      | "TransferAll"
      | "TransferKeepAlive"
      | "ForceTransfer"
      | "SetBalance"
  }

  /** @name OrmlXcmModuleCall (311) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean
    readonly asSendAsSovereign: {
      readonly dest: XcmVersionedMultiLocation
      readonly message: XcmVersionedXcm
    } & Struct
    readonly type: "SendAsSovereign"
  }

  /** @name OrmlXtokensModuleCall (312) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly currencyId: u32
      readonly amount: u128
      readonly dest: XcmVersionedMultiLocation
      readonly destWeight: u64
    } & Struct
    readonly isTransferMultiasset: boolean
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset
      readonly dest: XcmVersionedMultiLocation
      readonly destWeight: u64
    } & Struct
    readonly isTransferWithFee: boolean
    readonly asTransferWithFee: {
      readonly currencyId: u32
      readonly amount: u128
      readonly fee: u128
      readonly dest: XcmVersionedMultiLocation
      readonly destWeight: u64
    } & Struct
    readonly isTransferMultiassetWithFee: boolean
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset
      readonly fee: XcmVersionedMultiAsset
      readonly dest: XcmVersionedMultiLocation
      readonly destWeight: u64
    } & Struct
    readonly isTransferMulticurrencies: boolean
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[u32, u128]>>
      readonly feeItem: u32
      readonly dest: XcmVersionedMultiLocation
      readonly destWeight: u64
    } & Struct
    readonly isTransferMultiassets: boolean
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets
      readonly feeItem: u32
      readonly dest: XcmVersionedMultiLocation
      readonly destWeight: u64
    } & Struct
    readonly type:
      | "Transfer"
      | "TransferMultiasset"
      | "TransferWithFee"
      | "TransferMultiassetWithFee"
      | "TransferMulticurrencies"
      | "TransferMultiassets"
  }

  /** @name XcmVersionedMultiAsset (313) */
  interface XcmVersionedMultiAsset extends Enum {
    readonly isV0: boolean
    readonly asV0: XcmV0MultiAsset
    readonly isV1: boolean
    readonly asV1: XcmV1MultiAsset
    readonly type: "V0" | "V1"
  }

  /** @name PalletSudoCall (315) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean
    readonly asSudo: {
      readonly call: Call
    } & Struct
    readonly isSudoUncheckedWeight: boolean
    readonly asSudoUncheckedWeight: {
      readonly call: Call
      readonly weight: u64
    } & Struct
    readonly isSetKey: boolean
    readonly asSetKey: {
      readonly new_: AccountId32
    } & Struct
    readonly isSudoAs: boolean
    readonly asSudoAs: {
      readonly who: AccountId32
      readonly call: Call
    } & Struct
    readonly type: "Sudo" | "SudoUncheckedWeight" | "SetKey" | "SudoAs"
  }

  /** @name TestingBasiliskRuntimeOriginCaller (316) */
  interface TestingBasiliskRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean
    readonly asSystem: FrameSupportDispatchRawOrigin
    readonly isVoid: boolean
    readonly isCouncil: boolean
    readonly asCouncil: PalletCollectiveRawOrigin
    readonly isTechnicalCommittee: boolean
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin
    readonly isPolkadotXcm: boolean
    readonly asPolkadotXcm: PalletXcmOrigin
    readonly isCumulusXcm: boolean
    readonly asCumulusXcm: CumulusPalletXcmOrigin
    readonly type:
      | "System"
      | "Void"
      | "Council"
      | "TechnicalCommittee"
      | "PolkadotXcm"
      | "CumulusXcm"
  }

  /** @name FrameSupportDispatchRawOrigin (317) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean
    readonly isSigned: boolean
    readonly asSigned: AccountId32
    readonly isNone: boolean
    readonly type: "Root" | "Signed" | "None"
  }

  /** @name PalletCollectiveRawOrigin (318) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean
    readonly asMembers: ITuple<[u32, u32]>
    readonly isMember: boolean
    readonly asMember: AccountId32
    readonly isPhantom: boolean
    readonly type: "Members" | "Member" | "Phantom"
  }

  /** @name PalletXcmOrigin (320) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean
    readonly asXcm: XcmV1MultiLocation
    readonly isResponse: boolean
    readonly asResponse: XcmV1MultiLocation
    readonly type: "Xcm" | "Response"
  }

  /** @name CumulusPalletXcmOrigin (321) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean
    readonly isSiblingParachain: boolean
    readonly asSiblingParachain: u32
    readonly type: "Relay" | "SiblingParachain"
  }

  /** @name SpCoreVoid (322) */
  type SpCoreVoid = Null

  /** @name PalletUtilityError (323) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean
    readonly type: "TooManyCalls"
  }

  /** @name PalletSchedulerScheduledV3 (326) */
  interface PalletSchedulerScheduledV3 extends Struct {
    readonly maybeId: Option<Bytes>
    readonly priority: u8
    readonly call: FrameSupportScheduleMaybeHashed
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>
    readonly origin: TestingBasiliskRuntimeOriginCaller
  }

  /** @name PalletSchedulerError (327) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean
    readonly isNotFound: boolean
    readonly isTargetBlockNumberInPast: boolean
    readonly isRescheduleNoChange: boolean
    readonly type:
      | "FailedToSchedule"
      | "NotFound"
      | "TargetBlockNumberInPast"
      | "RescheduleNoChange"
  }

  /** @name PalletDemocracyPreimageStatus (331) */
  interface PalletDemocracyPreimageStatus extends Enum {
    readonly isMissing: boolean
    readonly asMissing: u32
    readonly isAvailable: boolean
    readonly asAvailable: {
      readonly data: Bytes
      readonly provider: AccountId32
      readonly deposit: u128
      readonly since: u32
      readonly expiry: Option<u32>
    } & Struct
    readonly type: "Missing" | "Available"
  }

  /** @name PalletDemocracyReferendumInfo (332) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean
    readonly asOngoing: PalletDemocracyReferendumStatus
    readonly isFinished: boolean
    readonly asFinished: {
      readonly approved: bool
      readonly end: u32
    } & Struct
    readonly type: "Ongoing" | "Finished"
  }

  /** @name PalletDemocracyReferendumStatus (333) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32
    readonly proposalHash: H256
    readonly threshold: PalletDemocracyVoteThreshold
    readonly delay: u32
    readonly tally: PalletDemocracyTally
  }

  /** @name PalletDemocracyTally (334) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128
    readonly nays: u128
    readonly turnout: u128
  }

  /** @name PalletDemocracyVoteVoting (335) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>
      readonly delegations: PalletDemocracyDelegations
      readonly prior: PalletDemocracyVotePriorLock
    } & Struct
    readonly isDelegating: boolean
    readonly asDelegating: {
      readonly balance: u128
      readonly target: AccountId32
      readonly conviction: PalletDemocracyConviction
      readonly delegations: PalletDemocracyDelegations
      readonly prior: PalletDemocracyVotePriorLock
    } & Struct
    readonly type: "Direct" | "Delegating"
  }

  /** @name PalletDemocracyDelegations (338) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128
    readonly capital: u128
  }

  /** @name PalletDemocracyVotePriorLock (339) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyReleases (342) */
  interface PalletDemocracyReleases extends Enum {
    readonly isV1: boolean
    readonly type: "V1"
  }

  /** @name PalletDemocracyError (343) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean
    readonly isProposalMissing: boolean
    readonly isAlreadyCanceled: boolean
    readonly isDuplicateProposal: boolean
    readonly isProposalBlacklisted: boolean
    readonly isNotSimpleMajority: boolean
    readonly isInvalidHash: boolean
    readonly isNoProposal: boolean
    readonly isAlreadyVetoed: boolean
    readonly isDuplicatePreimage: boolean
    readonly isNotImminent: boolean
    readonly isTooEarly: boolean
    readonly isImminent: boolean
    readonly isPreimageMissing: boolean
    readonly isReferendumInvalid: boolean
    readonly isPreimageInvalid: boolean
    readonly isNoneWaiting: boolean
    readonly isNotVoter: boolean
    readonly isNoPermission: boolean
    readonly isAlreadyDelegating: boolean
    readonly isInsufficientFunds: boolean
    readonly isNotDelegating: boolean
    readonly isVotesExist: boolean
    readonly isInstantNotAllowed: boolean
    readonly isNonsense: boolean
    readonly isWrongUpperBound: boolean
    readonly isMaxVotesReached: boolean
    readonly isTooManyProposals: boolean
    readonly type:
      | "ValueLow"
      | "ProposalMissing"
      | "AlreadyCanceled"
      | "DuplicateProposal"
      | "ProposalBlacklisted"
      | "NotSimpleMajority"
      | "InvalidHash"
      | "NoProposal"
      | "AlreadyVetoed"
      | "DuplicatePreimage"
      | "NotImminent"
      | "TooEarly"
      | "Imminent"
      | "PreimageMissing"
      | "ReferendumInvalid"
      | "PreimageInvalid"
      | "NoneWaiting"
      | "NotVoter"
      | "NoPermission"
      | "AlreadyDelegating"
      | "InsufficientFunds"
      | "NotDelegating"
      | "VotesExist"
      | "InstantNotAllowed"
      | "Nonsense"
      | "WrongUpperBound"
      | "MaxVotesReached"
      | "TooManyProposals"
  }

  /** @name PalletElectionsPhragmenSeatHolder (345) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32
    readonly stake: u128
    readonly deposit: u128
  }

  /** @name PalletElectionsPhragmenVoter (346) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>
    readonly stake: u128
    readonly deposit: u128
  }

  /** @name PalletElectionsPhragmenError (347) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean
    readonly isNoVotes: boolean
    readonly isTooManyVotes: boolean
    readonly isMaximumVotesExceeded: boolean
    readonly isLowBalance: boolean
    readonly isUnableToPayBond: boolean
    readonly isMustBeVoter: boolean
    readonly isReportSelf: boolean
    readonly isDuplicatedCandidate: boolean
    readonly isMemberSubmit: boolean
    readonly isRunnerUpSubmit: boolean
    readonly isInsufficientCandidateFunds: boolean
    readonly isNotMember: boolean
    readonly isInvalidWitnessData: boolean
    readonly isInvalidVoteCount: boolean
    readonly isInvalidRenouncing: boolean
    readonly isInvalidReplacement: boolean
    readonly type:
      | "UnableToVote"
      | "NoVotes"
      | "TooManyVotes"
      | "MaximumVotesExceeded"
      | "LowBalance"
      | "UnableToPayBond"
      | "MustBeVoter"
      | "ReportSelf"
      | "DuplicatedCandidate"
      | "MemberSubmit"
      | "RunnerUpSubmit"
      | "InsufficientCandidateFunds"
      | "NotMember"
      | "InvalidWitnessData"
      | "InvalidVoteCount"
      | "InvalidRenouncing"
      | "InvalidReplacement"
  }

  /** @name PalletCollectiveVotes (349) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32
    readonly threshold: u32
    readonly ayes: Vec<AccountId32>
    readonly nays: Vec<AccountId32>
    readonly end: u32
  }

  /** @name PalletCollectiveError (350) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean
    readonly isDuplicateProposal: boolean
    readonly isProposalMissing: boolean
    readonly isWrongIndex: boolean
    readonly isDuplicateVote: boolean
    readonly isAlreadyInitialized: boolean
    readonly isTooEarly: boolean
    readonly isTooManyProposals: boolean
    readonly isWrongProposalWeight: boolean
    readonly isWrongProposalLength: boolean
    readonly type:
      | "NotMember"
      | "DuplicateProposal"
      | "ProposalMissing"
      | "WrongIndex"
      | "DuplicateVote"
      | "AlreadyInitialized"
      | "TooEarly"
      | "TooManyProposals"
      | "WrongProposalWeight"
      | "WrongProposalLength"
  }

  /** @name OrmlVestingModuleError (354) */
  interface OrmlVestingModuleError extends Enum {
    readonly isZeroVestingPeriod: boolean
    readonly isZeroVestingPeriodCount: boolean
    readonly isInsufficientBalanceToLock: boolean
    readonly isTooManyVestingSchedules: boolean
    readonly isAmountLow: boolean
    readonly isMaxVestingSchedulesExceeded: boolean
    readonly type:
      | "ZeroVestingPeriod"
      | "ZeroVestingPeriodCount"
      | "InsufficientBalanceToLock"
      | "TooManyVestingSchedules"
      | "AmountLow"
      | "MaxVestingSchedulesExceeded"
  }

  /** @name PalletProxyProxyDefinition (357) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32
    readonly proxyType: CommonRuntimeProxyType
    readonly delay: u32
  }

  /** @name PalletProxyAnnouncement (361) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32
    readonly callHash: H256
    readonly height: u32
  }

  /** @name PalletProxyError (363) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean
    readonly isNotFound: boolean
    readonly isNotProxy: boolean
    readonly isUnproxyable: boolean
    readonly isDuplicate: boolean
    readonly isNoPermission: boolean
    readonly isUnannounced: boolean
    readonly isNoSelfProxy: boolean
    readonly type:
      | "TooMany"
      | "NotFound"
      | "NotProxy"
      | "Unproxyable"
      | "Duplicate"
      | "NoPermission"
      | "Unannounced"
      | "NoSelfProxy"
  }

  /** @name PalletTipsOpenTip (364) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256
    readonly who: AccountId32
    readonly finder: AccountId32
    readonly deposit: u128
    readonly closes: Option<u32>
    readonly tips: Vec<ITuple<[AccountId32, u128]>>
    readonly findersFee: bool
  }

  /** @name PalletTipsError (366) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean
    readonly isAlreadyKnown: boolean
    readonly isUnknownTip: boolean
    readonly isNotFinder: boolean
    readonly isStillOpen: boolean
    readonly isPremature: boolean
    readonly type:
      | "ReasonTooBig"
      | "AlreadyKnown"
      | "UnknownTip"
      | "NotFinder"
      | "StillOpen"
      | "Premature"
  }

  /** @name PalletAuthorshipUncleEntryItem (368) */
  interface PalletAuthorshipUncleEntryItem extends Enum {
    readonly isInclusionHeight: boolean
    readonly asInclusionHeight: u32
    readonly isUncle: boolean
    readonly asUncle: ITuple<[H256, Option<AccountId32>]>
    readonly type: "InclusionHeight" | "Uncle"
  }

  /** @name PalletAuthorshipError (369) */
  interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean
    readonly isUnclesAlreadySet: boolean
    readonly isTooManyUncles: boolean
    readonly isGenesisUncle: boolean
    readonly isTooHighUncle: boolean
    readonly isUncleAlreadyIncluded: boolean
    readonly isOldUncle: boolean
    readonly type:
      | "InvalidUncleParent"
      | "UnclesAlreadySet"
      | "TooManyUncles"
      | "GenesisUncle"
      | "TooHighUncle"
      | "UncleAlreadyIncluded"
      | "OldUncle"
  }

  /** @name PalletCollatorSelectionCandidateInfo (371) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32
    readonly deposit: u128
  }

  /** @name PalletCollatorSelectionError (372) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean
    readonly isTooFewCandidates: boolean
    readonly isUnknown: boolean
    readonly isPermission: boolean
    readonly isAlreadyCandidate: boolean
    readonly isNotCandidate: boolean
    readonly isAlreadyInvulnerable: boolean
    readonly isNoAssociatedValidatorId: boolean
    readonly isValidatorNotRegistered: boolean
    readonly type:
      | "TooManyCandidates"
      | "TooFewCandidates"
      | "Unknown"
      | "Permission"
      | "AlreadyCandidate"
      | "NotCandidate"
      | "AlreadyInvulnerable"
      | "NoAssociatedValidatorId"
      | "ValidatorNotRegistered"
  }

  /** @name SpCoreCryptoKeyTypeId (376) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (377) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean
    readonly isNoAssociatedValidatorId: boolean
    readonly isDuplicatedKey: boolean
    readonly isNoKeys: boolean
    readonly isNoAccount: boolean
    readonly type:
      | "InvalidProof"
      | "NoAssociatedValidatorId"
      | "DuplicatedKey"
      | "NoKeys"
      | "NoAccount"
  }

  /** @name PalletPreimageRequestStatus (378) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean
    readonly asUnrequested: Option<ITuple<[AccountId32, u128]>>
    readonly isRequested: boolean
    readonly asRequested: u32
    readonly type: "Unrequested" | "Requested"
  }

  /** @name PalletPreimageError (381) */
  interface PalletPreimageError extends Enum {
    readonly isTooLarge: boolean
    readonly isAlreadyNoted: boolean
    readonly isNotAuthorized: boolean
    readonly isNotNoted: boolean
    readonly isRequested: boolean
    readonly isNotRequested: boolean
    readonly type:
      | "TooLarge"
      | "AlreadyNoted"
      | "NotAuthorized"
      | "NotNoted"
      | "Requested"
      | "NotRequested"
  }

  /** @name PalletUniquesClassDetails (382) */
  interface PalletUniquesClassDetails extends Struct {
    readonly owner: AccountId32
    readonly issuer: AccountId32
    readonly admin: AccountId32
    readonly freezer: AccountId32
    readonly totalDeposit: u128
    readonly freeHolding: bool
    readonly instances: u32
    readonly instanceMetadatas: u32
    readonly attributes: u32
    readonly isFrozen: bool
  }

  /** @name PalletUniquesInstanceDetails (385) */
  interface PalletUniquesInstanceDetails extends Struct {
    readonly owner: AccountId32
    readonly approved: Option<AccountId32>
    readonly isFrozen: bool
    readonly deposit: u128
  }

  /** @name PalletUniquesClassMetadata (386) */
  interface PalletUniquesClassMetadata extends Struct {
    readonly deposit: u128
    readonly data: Bytes
    readonly isFrozen: bool
  }

  /** @name PalletUniquesInstanceMetadata (387) */
  interface PalletUniquesInstanceMetadata extends Struct {
    readonly deposit: u128
    readonly data: Bytes
    readonly isFrozen: bool
  }

  /** @name PalletUniquesError (390) */
  interface PalletUniquesError extends Enum {
    readonly isNoPermission: boolean
    readonly isUnknown: boolean
    readonly isAlreadyExists: boolean
    readonly isWrongOwner: boolean
    readonly isBadWitness: boolean
    readonly isInUse: boolean
    readonly isFrozen: boolean
    readonly isWrongDelegate: boolean
    readonly isNoDelegate: boolean
    readonly isUnapproved: boolean
    readonly type:
      | "NoPermission"
      | "Unknown"
      | "AlreadyExists"
      | "WrongOwner"
      | "BadWitness"
      | "InUse"
      | "Frozen"
      | "WrongDelegate"
      | "NoDelegate"
      | "Unapproved"
  }

  /** @name PalletIdentityRegistration (391) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>
    readonly deposit: u128
    readonly info: PalletIdentityIdentityInfo
  }

  /** @name PalletIdentityRegistrarInfo (399) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32
    readonly fee: u128
    readonly fields: PalletIdentityBitFlags
  }

  /** @name PalletIdentityError (401) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean
    readonly isNotFound: boolean
    readonly isNotNamed: boolean
    readonly isEmptyIndex: boolean
    readonly isFeeChanged: boolean
    readonly isNoIdentity: boolean
    readonly isStickyJudgement: boolean
    readonly isJudgementGiven: boolean
    readonly isInvalidJudgement: boolean
    readonly isInvalidIndex: boolean
    readonly isInvalidTarget: boolean
    readonly isTooManyFields: boolean
    readonly isTooManyRegistrars: boolean
    readonly isAlreadyClaimed: boolean
    readonly isNotSub: boolean
    readonly isNotOwned: boolean
    readonly type:
      | "TooManySubAccounts"
      | "NotFound"
      | "NotNamed"
      | "EmptyIndex"
      | "FeeChanged"
      | "NoIdentity"
      | "StickyJudgement"
      | "JudgementGiven"
      | "InvalidJudgement"
      | "InvalidIndex"
      | "InvalidTarget"
      | "TooManyFields"
      | "TooManyRegistrars"
      | "AlreadyClaimed"
      | "NotSub"
      | "NotOwned"
  }

  /** @name PalletMultisigMultisig (403) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint
    readonly deposit: u128
    readonly depositor: AccountId32
    readonly approvals: Vec<AccountId32>
  }

  /** @name PalletMultisigError (405) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean
    readonly isAlreadyApproved: boolean
    readonly isNoApprovalsNeeded: boolean
    readonly isTooFewSignatories: boolean
    readonly isTooManySignatories: boolean
    readonly isSignatoriesOutOfOrder: boolean
    readonly isSenderInSignatories: boolean
    readonly isNotFound: boolean
    readonly isNotOwner: boolean
    readonly isNoTimepoint: boolean
    readonly isWrongTimepoint: boolean
    readonly isUnexpectedTimepoint: boolean
    readonly isMaxWeightTooLow: boolean
    readonly isAlreadyStored: boolean
    readonly type:
      | "MinimumThreshold"
      | "AlreadyApproved"
      | "NoApprovalsNeeded"
      | "TooFewSignatories"
      | "TooManySignatories"
      | "SignatoriesOutOfOrder"
      | "SenderInSignatories"
      | "NotFound"
      | "NotOwner"
      | "NoTimepoint"
      | "WrongTimepoint"
      | "UnexpectedTimepoint"
      | "MaxWeightTooLow"
      | "AlreadyStored"
  }

  /** @name PolkadotPrimitivesV1UpgradeRestriction (407) */
  interface PolkadotPrimitivesV1UpgradeRestriction extends Enum {
    readonly isPresent: boolean
    readonly type: "Present"
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (408) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot
    extends Struct {
    readonly dmqMqcHead: H256
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>
    readonly ingressChannels: Vec<
      ITuple<[u32, PolkadotPrimitivesV1AbridgedHrmpChannel]>
    >
    readonly egressChannels: Vec<
      ITuple<[u32, PolkadotPrimitivesV1AbridgedHrmpChannel]>
    >
  }

  /** @name PolkadotPrimitivesV1AbridgedHrmpChannel (411) */
  interface PolkadotPrimitivesV1AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32
    readonly maxTotalSize: u32
    readonly maxMessageSize: u32
    readonly msgCount: u32
    readonly totalSize: u32
    readonly mqcHead: Option<H256>
  }

  /** @name PolkadotPrimitivesV1AbridgedHostConfiguration (412) */
  interface PolkadotPrimitivesV1AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32
    readonly maxHeadDataSize: u32
    readonly maxUpwardQueueCount: u32
    readonly maxUpwardQueueSize: u32
    readonly maxUpwardMessageSize: u32
    readonly maxUpwardMessageNumPerCandidate: u32
    readonly hrmpMaxMessageNumPerCandidate: u32
    readonly validationUpgradeCooldown: u32
    readonly validationUpgradeDelay: u32
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (418) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32
    readonly data: Bytes
  }

  /** @name CumulusPalletParachainSystemError (419) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean
    readonly isProhibitedByPolkadot: boolean
    readonly isTooBig: boolean
    readonly isValidationDataNotAvailable: boolean
    readonly isHostConfigurationNotAvailable: boolean
    readonly isNotScheduled: boolean
    readonly isNothingAuthorized: boolean
    readonly isUnauthorized: boolean
    readonly type:
      | "OverlappingUpgrades"
      | "ProhibitedByPolkadot"
      | "TooBig"
      | "ValidationDataNotAvailable"
      | "HostConfigurationNotAvailable"
      | "NotScheduled"
      | "NothingAuthorized"
      | "Unauthorized"
  }

  /** @name PalletXcmQueryStatus (420) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation
      readonly maybeNotify: Option<ITuple<[u8, u8]>>
      readonly timeout: u32
    } & Struct
    readonly isVersionNotifier: boolean
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation
      readonly isActive: bool
    } & Struct
    readonly isReady: boolean
    readonly asReady: {
      readonly response: XcmVersionedResponse
      readonly at: u32
    } & Struct
    readonly type: "Pending" | "VersionNotifier" | "Ready"
  }

  /** @name XcmVersionedResponse (423) */
  interface XcmVersionedResponse extends Enum {
    readonly isV0: boolean
    readonly asV0: XcmV0Response
    readonly isV1: boolean
    readonly asV1: XcmV1Response
    readonly isV2: boolean
    readonly asV2: XcmV2Response
    readonly type: "V0" | "V1" | "V2"
  }

  /** @name PalletXcmVersionMigrationStage (429) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean
    readonly isMigrateVersionNotifiers: boolean
    readonly isNotifyCurrentTargets: boolean
    readonly asNotifyCurrentTargets: Option<Bytes>
    readonly isMigrateAndNotifyOldTargets: boolean
    readonly type:
      | "MigrateSupportedVersion"
      | "MigrateVersionNotifiers"
      | "NotifyCurrentTargets"
      | "MigrateAndNotifyOldTargets"
  }

  /** @name PalletXcmError (430) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean
    readonly isSendFailure: boolean
    readonly isFiltered: boolean
    readonly isUnweighableMessage: boolean
    readonly isDestinationNotInvertible: boolean
    readonly isEmpty: boolean
    readonly isCannotReanchor: boolean
    readonly isTooManyAssets: boolean
    readonly isInvalidOrigin: boolean
    readonly isBadVersion: boolean
    readonly isBadLocation: boolean
    readonly isNoSubscription: boolean
    readonly isAlreadySubscribed: boolean
    readonly type:
      | "Unreachable"
      | "SendFailure"
      | "Filtered"
      | "UnweighableMessage"
      | "DestinationNotInvertible"
      | "Empty"
      | "CannotReanchor"
      | "TooManyAssets"
      | "InvalidOrigin"
      | "BadVersion"
      | "BadLocation"
      | "NoSubscription"
      | "AlreadySubscribed"
  }

  /** @name CumulusPalletXcmError (431) */
  type CumulusPalletXcmError = Null

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (433) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32
    readonly state: CumulusPalletXcmpQueueInboundState
    readonly messageMetadata: Vec<
      ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>
    >
  }

  /** @name CumulusPalletXcmpQueueInboundState (434) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean
    readonly isSuspended: boolean
    readonly type: "Ok" | "Suspended"
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (437) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean
    readonly isConcatenatedEncodedBlob: boolean
    readonly isSignals: boolean
    readonly type:
      | "ConcatenatedVersionedXcm"
      | "ConcatenatedEncodedBlob"
      | "Signals"
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (440) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32
    readonly state: CumulusPalletXcmpQueueOutboundState
    readonly signalsExist: bool
    readonly firstIndex: u16
    readonly lastIndex: u16
  }

  /** @name CumulusPalletXcmpQueueOutboundState (441) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean
    readonly isSuspended: boolean
    readonly type: "Ok" | "Suspended"
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (443) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32
    readonly dropThreshold: u32
    readonly resumeThreshold: u32
    readonly thresholdWeight: u64
    readonly weightRestrictDecay: u64
    readonly xcmpMaxIndividualWeight: u64
  }

  /** @name CumulusPalletXcmpQueueError (445) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean
    readonly isBadXcmOrigin: boolean
    readonly isBadXcm: boolean
    readonly isBadOverweightIndex: boolean
    readonly isWeightOverLimit: boolean
    readonly type:
      | "FailedToSend"
      | "BadXcmOrigin"
      | "BadXcm"
      | "BadOverweightIndex"
      | "WeightOverLimit"
  }

  /** @name CumulusPalletDmpQueueConfigData (446) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: u64
  }

  /** @name CumulusPalletDmpQueuePageIndexData (447) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32
    readonly endUsed: u32
    readonly overweightCount: u64
  }

  /** @name CumulusPalletDmpQueueError (450) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean
    readonly isOverLimit: boolean
    readonly type: "Unknown" | "OverLimit"
  }

  /** @name PalletAssetRegistryAssetDetails (451) */
  interface PalletAssetRegistryAssetDetails extends Struct {
    readonly name: Bytes
    readonly assetType: PalletAssetRegistryAssetType
    readonly existentialDeposit: u128
    readonly locked: bool
  }

  /** @name PalletAssetRegistryAssetMetadata (452) */
  interface PalletAssetRegistryAssetMetadata extends Struct {
    readonly symbol: Bytes
    readonly decimals: u8
  }

  /** @name PalletAssetRegistryError (453) */
  interface PalletAssetRegistryError extends Enum {
    readonly isNoIdAvailable: boolean
    readonly isAssetNotFound: boolean
    readonly isTooLong: boolean
    readonly isAssetNotRegistered: boolean
    readonly isAssetAlreadyRegistered: boolean
    readonly isInvalidSharedAssetLen: boolean
    readonly isCannotUpdateLocation: boolean
    readonly type:
      | "NoIdAvailable"
      | "AssetNotFound"
      | "TooLong"
      | "AssetNotRegistered"
      | "AssetAlreadyRegistered"
      | "InvalidSharedAssetLen"
      | "CannotUpdateLocation"
  }

  /** @name PalletXykError (454) */
  interface PalletXykError extends Enum {
    readonly isCannotCreatePoolWithSameAssets: boolean
    readonly isInsufficientLiquidity: boolean
    readonly isInsufficientTradingAmount: boolean
    readonly isZeroLiquidity: boolean
    readonly isZeroInitialPrice: boolean
    readonly isCreatePoolAssetAmountInvalid: boolean
    readonly isInvalidMintedLiquidity: boolean
    readonly isInvalidLiquidityAmount: boolean
    readonly isAssetAmountExceededLimit: boolean
    readonly isAssetAmountNotReachedLimit: boolean
    readonly isInsufficientAssetBalance: boolean
    readonly isInsufficientPoolAssetBalance: boolean
    readonly isInsufficientNativeCurrencyBalance: boolean
    readonly isTokenPoolNotFound: boolean
    readonly isTokenPoolAlreadyExists: boolean
    readonly isAddAssetAmountInvalid: boolean
    readonly isRemoveAssetAmountInvalid: boolean
    readonly isSellAssetAmountInvalid: boolean
    readonly isBuyAssetAmountInvalid: boolean
    readonly isFeeAmountInvalid: boolean
    readonly isCannotApplyDiscount: boolean
    readonly isMaxOutRatioExceeded: boolean
    readonly isMaxInRatioExceeded: boolean
    readonly isOverflow: boolean
    readonly isCannotCreatePool: boolean
    readonly type:
      | "CannotCreatePoolWithSameAssets"
      | "InsufficientLiquidity"
      | "InsufficientTradingAmount"
      | "ZeroLiquidity"
      | "ZeroInitialPrice"
      | "CreatePoolAssetAmountInvalid"
      | "InvalidMintedLiquidity"
      | "InvalidLiquidityAmount"
      | "AssetAmountExceededLimit"
      | "AssetAmountNotReachedLimit"
      | "InsufficientAssetBalance"
      | "InsufficientPoolAssetBalance"
      | "InsufficientNativeCurrencyBalance"
      | "TokenPoolNotFound"
      | "TokenPoolAlreadyExists"
      | "AddAssetAmountInvalid"
      | "RemoveAssetAmountInvalid"
      | "SellAssetAmountInvalid"
      | "BuyAssetAmountInvalid"
      | "FeeAmountInvalid"
      | "CannotApplyDiscount"
      | "MaxOutRatioExceeded"
      | "MaxInRatioExceeded"
      | "Overflow"
      | "CannotCreatePool"
  }

  /** @name PalletDusterError (455) */
  interface PalletDusterError extends Enum {
    readonly isAccountBlacklisted: boolean
    readonly isAccountNotBlacklisted: boolean
    readonly isZeroBalance: boolean
    readonly isBalanceSufficient: boolean
    readonly isDustAccountNotSet: boolean
    readonly isReserveAccountNotSet: boolean
    readonly type:
      | "AccountBlacklisted"
      | "AccountNotBlacklisted"
      | "ZeroBalance"
      | "BalanceSufficient"
      | "DustAccountNotSet"
      | "ReserveAccountNotSet"
  }

  /** @name PrimitivesExchangeIntention (457) */
  interface PrimitivesExchangeIntention extends Struct {
    readonly who: AccountId32
    readonly assets: PrimitivesAssetAssetPair
    readonly amountIn: u128
    readonly amountOut: u128
    readonly tradeLimit: u128
    readonly discount: bool
    readonly sellOrBuy: PrimitivesIntentionType
    readonly intentionId: H256
  }

  /** @name PalletExchangeError (458) */
  interface PalletExchangeError extends Enum {
    readonly isTokenPoolNotFound: boolean
    readonly isInsufficientAssetBalance: boolean
    readonly isTradeAmountExceededLimit: boolean
    readonly isTradeAmountNotReachedLimit: boolean
    readonly isZeroSpotPrice: boolean
    readonly isMinimumTradeLimitNotReached: boolean
    readonly isIntentionCountOverflow: boolean
    readonly type:
      | "TokenPoolNotFound"
      | "InsufficientAssetBalance"
      | "TradeAmountExceededLimit"
      | "TradeAmountNotReachedLimit"
      | "ZeroSpotPrice"
      | "MinimumTradeLimitNotReached"
      | "IntentionCountOverflow"
  }

  /** @name PalletLbpError (460) */
  interface PalletLbpError extends Enum {
    readonly isCannotCreatePoolWithSameAssets: boolean
    readonly isNotOwner: boolean
    readonly isSaleStarted: boolean
    readonly isSaleNotEnded: boolean
    readonly isSaleIsNotRunning: boolean
    readonly isMaxSaleDurationExceeded: boolean
    readonly isCannotAddZeroLiquidity: boolean
    readonly isInsufficientAssetBalance: boolean
    readonly isPoolNotFound: boolean
    readonly isPoolAlreadyExists: boolean
    readonly isInvalidBlockRange: boolean
    readonly isWeightCalculationError: boolean
    readonly isInvalidWeight: boolean
    readonly isZeroAmount: boolean
    readonly isMaxInRatioExceeded: boolean
    readonly isMaxOutRatioExceeded: boolean
    readonly isFeeAmountInvalid: boolean
    readonly isTradingLimitReached: boolean
    readonly isOverflow: boolean
    readonly isNothingToUpdate: boolean
    readonly isInsufficientLiquidity: boolean
    readonly isInsufficientTradingAmount: boolean
    readonly isFeeCollectorWithAssetAlreadyUsed: boolean
    readonly type:
      | "CannotCreatePoolWithSameAssets"
      | "NotOwner"
      | "SaleStarted"
      | "SaleNotEnded"
      | "SaleIsNotRunning"
      | "MaxSaleDurationExceeded"
      | "CannotAddZeroLiquidity"
      | "InsufficientAssetBalance"
      | "PoolNotFound"
      | "PoolAlreadyExists"
      | "InvalidBlockRange"
      | "WeightCalculationError"
      | "InvalidWeight"
      | "ZeroAmount"
      | "MaxInRatioExceeded"
      | "MaxOutRatioExceeded"
      | "FeeAmountInvalid"
      | "TradingLimitReached"
      | "Overflow"
      | "NothingToUpdate"
      | "InsufficientLiquidity"
      | "InsufficientTradingAmount"
      | "FeeCollectorWithAssetAlreadyUsed"
  }

  /** @name PalletNftClassInfo (461) */
  interface PalletNftClassInfo extends Struct {
    readonly classType: PalletNftClassType
    readonly metadata: Bytes
  }

  /** @name PalletNftInstanceInfo (462) */
  interface PalletNftInstanceInfo extends Struct {
    readonly metadata: Bytes
  }

  /** @name PalletNftError (463) */
  interface PalletNftError extends Enum {
    readonly isNoAvailableInstanceId: boolean
    readonly isNoAvailableClassId: boolean
    readonly isTokenClassNotEmpty: boolean
    readonly isClassUnknown: boolean
    readonly isInstanceUnknown: boolean
    readonly isNotPermitted: boolean
    readonly isIdReserved: boolean
    readonly type:
      | "NoAvailableInstanceId"
      | "NoAvailableClassId"
      | "TokenClassNotEmpty"
      | "ClassUnknown"
      | "InstanceUnknown"
      | "NotPermitted"
      | "IdReserved"
  }

  /** @name PalletLiquidityMiningError (464) */
  interface PalletLiquidityMiningError extends Enum {
    readonly isCantFindDepositOwner: boolean
    readonly isInsufficientAmmSharesBalance: boolean
    readonly isAmmPoolDoesNotExist: boolean
    readonly isNotDepositOwner: boolean
    readonly isCantGetAmmAssets: boolean
    readonly isYieldFarmNotFound: boolean
    readonly isDepositDataNotFound: boolean
    readonly type:
      | "CantFindDepositOwner"
      | "InsufficientAmmSharesBalance"
      | "AmmPoolDoesNotExist"
      | "NotDepositOwner"
      | "CantGetAmmAssets"
      | "YieldFarmNotFound"
      | "DepositDataNotFound"
  }

  /** @name PalletLiquidityMiningGlobalFarmData (465) */
  interface PalletLiquidityMiningGlobalFarmData extends Struct {
    readonly id: u32
    readonly owner: AccountId32
    readonly updatedAt: u32
    readonly totalSharesZ: u128
    readonly accumulatedRpz: u128
    readonly rewardCurrency: u32
    readonly accumulatedRewards: u128
    readonly paidAccumulatedRewards: u128
    readonly yieldPerPeriod: Perquintill
    readonly plannedYieldingPeriods: u32
    readonly blocksPerPeriod: u32
    readonly incentivizedAsset: u32
    readonly maxRewardPerPeriod: u128
    readonly minDeposit: u128
    readonly yieldFarmsCount: ITuple<[u32, u32]>
    readonly priceAdjustment: u128
    readonly state: PalletLiquidityMiningFarmState
  }

  /** @name TestingBasiliskRuntimeRuntime (466) */
  type TestingBasiliskRuntimeRuntime = Null

  /** @name PalletLiquidityMiningFarmState (467) */
  interface PalletLiquidityMiningFarmState extends Enum {
    readonly isActive: boolean
    readonly isStopped: boolean
    readonly isDeleted: boolean
    readonly type: "Active" | "Stopped" | "Deleted"
  }

  /** @name PalletLiquidityMiningYieldFarmData (469) */
  interface PalletLiquidityMiningYieldFarmData extends Struct {
    readonly id: u32
    readonly updatedAt: u32
    readonly totalShares: u128
    readonly totalValuedShares: u128
    readonly accumulatedRpvs: u128
    readonly accumulatedRpz: u128
    readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>
    readonly multiplier: u128
    readonly state: PalletLiquidityMiningFarmState
    readonly entriesCount: u64
  }

  /** @name PalletLiquidityMiningDepositData (470) */
  interface PalletLiquidityMiningDepositData extends Struct {
    readonly shares: u128
    readonly ammPoolId: AccountId32
    readonly yieldFarmEntries: Vec<PalletLiquidityMiningYieldFarmEntry>
  }

  /** @name PalletLiquidityMiningYieldFarmEntry (472) */
  interface PalletLiquidityMiningYieldFarmEntry extends Struct {
    readonly globalFarmId: u32
    readonly yieldFarmId: u32
    readonly valuedShares: u128
    readonly accumulatedRpvs: u128
    readonly accumulatedClaimedRewards: u128
    readonly enteredAt: u32
    readonly updatedAt: u32
  }

  /** @name PalletTransactionMultiPaymentError (475) */
  interface PalletTransactionMultiPaymentError extends Enum {
    readonly isUnsupportedCurrency: boolean
    readonly isZeroBalance: boolean
    readonly isAlreadyAccepted: boolean
    readonly isCoreAssetNotAllowed: boolean
    readonly isZeroPrice: boolean
    readonly isFallbackPriceNotFound: boolean
    readonly isOverflow: boolean
    readonly type:
      | "UnsupportedCurrency"
      | "ZeroBalance"
      | "AlreadyAccepted"
      | "CoreAssetNotAllowed"
      | "ZeroPrice"
      | "FallbackPriceNotFound"
      | "Overflow"
  }

  /** @name PalletPriceOraclePriceEntry (476) */
  interface PalletPriceOraclePriceEntry extends Struct {
    readonly price: u128
    readonly tradeAmount: u128
    readonly liquidityAmount: u128
  }

  /** @name PalletPriceOracleBucketQueue (479) */
  interface PalletPriceOracleBucketQueue extends Struct {
    readonly bucket: Vec<PalletPriceOraclePriceInfo>
    readonly last: u32
  }

  /** @name PalletPriceOraclePriceInfo (481) */
  interface PalletPriceOraclePriceInfo extends Struct {
    readonly avgPrice: u128
    readonly volume: u128
  }

  /** @name PalletPriceOracleError (482) */
  interface PalletPriceOracleError extends Enum {
    readonly isPriceComputationError: boolean
    readonly isUpdateDataOverflow: boolean
    readonly isAssetAlreadyAdded: boolean
    readonly isTrackedAssetsOverflow: boolean
    readonly type:
      | "PriceComputationError"
      | "UpdateDataOverflow"
      | "AssetAlreadyAdded"
      | "TrackedAssetsOverflow"
  }

  /** @name PalletRelaychainInfoError (483) */
  type PalletRelaychainInfoError = Null

  /** @name PalletMarketplaceOffer (485) */
  interface PalletMarketplaceOffer extends Struct {
    readonly maker: AccountId32
    readonly amount: u128
    readonly expires: u32
  }

  /** @name PalletMarketplaceRoyalty (486) */
  interface PalletMarketplaceRoyalty extends Struct {
    readonly author: AccountId32
    readonly royalty: u8
  }

  /** @name PalletMarketplaceError (487) */
  interface PalletMarketplaceError extends Enum {
    readonly isNotTheTokenOwner: boolean
    readonly isBuyFromSelf: boolean
    readonly isNotForSale: boolean
    readonly isClassOrInstanceUnknown: boolean
    readonly isOfferTooLow: boolean
    readonly isUnknownOffer: boolean
    readonly isOfferExpired: boolean
    readonly isAlreadyOffered: boolean
    readonly isWithdrawNotAuthorized: boolean
    readonly isAcceptNotAuthorized: boolean
    readonly isRoyaltyAlreadySet: boolean
    readonly isNotInRange: boolean
    readonly type:
      | "NotTheTokenOwner"
      | "BuyFromSelf"
      | "NotForSale"
      | "ClassOrInstanceUnknown"
      | "OfferTooLow"
      | "UnknownOffer"
      | "OfferExpired"
      | "AlreadyOffered"
      | "WithdrawNotAuthorized"
      | "AcceptNotAuthorized"
      | "RoyaltyAlreadySet"
      | "NotInRange"
  }

  /** @name OrmlCurrenciesModuleError (488) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean
    readonly isBalanceTooLow: boolean
    readonly isDepositFailed: boolean
    readonly type: "AmountIntoBalanceFailed" | "BalanceTooLow" | "DepositFailed"
  }

  /** @name OrmlTokensBalanceLock (490) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed
    readonly amount: u128
  }

  /** @name OrmlTokensAccountData (492) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128
    readonly reserved: u128
    readonly frozen: u128
  }

  /** @name OrmlTokensModuleError (493) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean
    readonly isAmountIntoBalanceFailed: boolean
    readonly isLiquidityRestrictions: boolean
    readonly isMaxLocksExceeded: boolean
    readonly isKeepAlive: boolean
    readonly isExistentialDeposit: boolean
    readonly isDeadAccount: boolean
    readonly type:
      | "BalanceTooLow"
      | "AmountIntoBalanceFailed"
      | "LiquidityRestrictions"
      | "MaxLocksExceeded"
      | "KeepAlive"
      | "ExistentialDeposit"
      | "DeadAccount"
  }

  /** @name OrmlXcmModuleError (494) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean
    readonly isSendFailure: boolean
    readonly isBadVersion: boolean
    readonly type: "Unreachable" | "SendFailure" | "BadVersion"
  }

  /** @name OrmlXtokensModuleError (495) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean
    readonly isNotCrossChainTransfer: boolean
    readonly isInvalidDest: boolean
    readonly isNotCrossChainTransferableCurrency: boolean
    readonly isUnweighableMessage: boolean
    readonly isXcmExecutionFailed: boolean
    readonly isCannotReanchor: boolean
    readonly isInvalidAncestry: boolean
    readonly isInvalidAsset: boolean
    readonly isDestinationNotInvertible: boolean
    readonly isBadVersion: boolean
    readonly isDistinctReserveForAssetAndFee: boolean
    readonly isZeroFee: boolean
    readonly isZeroAmount: boolean
    readonly isTooManyAssetsBeingSent: boolean
    readonly isAssetIndexNonExistent: boolean
    readonly type:
      | "AssetHasNoReserve"
      | "NotCrossChainTransfer"
      | "InvalidDest"
      | "NotCrossChainTransferableCurrency"
      | "UnweighableMessage"
      | "XcmExecutionFailed"
      | "CannotReanchor"
      | "InvalidAncestry"
      | "InvalidAsset"
      | "DestinationNotInvertible"
      | "BadVersion"
      | "DistinctReserveForAssetAndFee"
      | "ZeroFee"
      | "ZeroAmount"
      | "TooManyAssetsBeingSent"
      | "AssetIndexNonExistent"
  }

  /** @name OrmlUnknownTokensModuleError (498) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean
    readonly isBalanceOverflow: boolean
    readonly isUnhandledAsset: boolean
    readonly type: "BalanceTooLow" | "BalanceOverflow" | "UnhandledAsset"
  }

  /** @name PalletSudoError (499) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean
    readonly type: "RequireSudo"
  }

  /** @name SpRuntimeMultiSignature (501) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean
    readonly asEd25519: SpCoreEd25519Signature
    readonly isSr25519: boolean
    readonly asSr25519: SpCoreSr25519Signature
    readonly isEcdsa: boolean
    readonly asEcdsa: SpCoreEcdsaSignature
    readonly type: "Ed25519" | "Sr25519" | "Ecdsa"
  }

  /** @name SpCoreEd25519Signature (502) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (504) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (505) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckSpecVersion (508) */
  type FrameSystemExtensionsCheckSpecVersion = Null

  /** @name FrameSystemExtensionsCheckTxVersion (509) */
  type FrameSystemExtensionsCheckTxVersion = Null

  /** @name FrameSystemExtensionsCheckGenesis (510) */
  type FrameSystemExtensionsCheckGenesis = Null

  /** @name FrameSystemExtensionsCheckNonce (513) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (514) */
  type FrameSystemExtensionsCheckWeight = Null

  /** @name PalletTransactionPaymentChargeTransactionPayment (515) */
  interface PalletTransactionPaymentChargeTransactionPayment
    extends Compact<u128> {}

  /** @name PalletTransactionMultiPaymentCurrencyBalanceCheck (516) */
  type PalletTransactionMultiPaymentCurrencyBalanceCheck = Null
} // declare module
