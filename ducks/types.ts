
import { CallData } from 'ethereum-types';
interface TxState{
    finalizeWithdrawState:IFinalizewithdraw
    hasAppliedState:IHasapplied
    approveKYCState:IApprovekyc
    governanceCycleDelayCeilingState:IGovernancecycledelayceiling
    removeOwnerState:IRemoveowner
    withdrawHistoryState:IWithdrawhistory
    isKYCPendingState:IIskycpending
    registerGoverningState:IRegistergoverning
    isKYCDeniedState:IIskycdenied
    newGovernanceCycleState:INewgovernancecycle
    voteState:IVote
    isOwnerState:IIsowner
    startWithdrawState:IStartwithdraw
    appealKYCState:IAppealkyc
    revokeKYCState:IRevokekyc
    setGovernanceCycleDelayState:ISetgovernancecycledelay
    updatePersonalRegistryState:IUpdatepersonalregistry
    nomineeBallotsState:INomineeballots
    revokeGoverningState:IRevokegoverning
    registerNonGoverningState:IRegisternongoverning
    approveGoverningState:IApprovegoverning
    canGovernState:ICangovern
    setMaxNomineesInCycleState:ISetmaxnomineesincycle
    averageMonthState:IAveragemonth
    deleteKYCState:IDeletekyc
    maxNomineesInCycleCeilingState:IMaxnomineesincycleceiling
    governanceCycleRecordsState:IGovernancecyclerecords
    findWinnersState:IFindwinners
    nominationFeeState:INominationfee
    ballotRecordsState:IBallotrecords
    addOwnerState:IAddowner
    nomineesInCycleState:INomineesincycle
    finalizeGovernanceCycleState:IFinalizegovernancecycle
    getRegistrationState:IGetregistration
    setWithdrawDelayState:ISetwithdrawdelay
    currentGovernanceCycleState:ICurrentgovernancecycle
    numOwnersState:INumowners
    withdrawRecordsState:IWithdrawrecords
    ballotHistoryState:IBallothistory
    withdrawDelayFloorState:IWithdrawdelayfloor
    applyKYCState:IApplykyc
    latestGovernanceCycleParticipatedState:ILatestgovernancecycleparticipated
    nominationFeeCeilingState:INominationfeeceiling
    withdrawDelayCeilingState:IWithdrawdelayceiling
    maxNomineesInCycleState:IMaxnomineesincycle
    denyKYCState:IDenykyc
    withdrawDelayState:IWithdrawdelay
    maxNomineesInCycleFloorState:IMaxnomineesincyclefloor
    numRegisteredState:INumregistered
    setNominationFeeState:ISetnominationfee
    ballotIndexState:IBallotindex
    nomineeBallotKeysState:INomineeballotkeys
    electionNomineesInCycleState:IElectionnomineesincycle
    evictionNomineesInCycleState:IEvictionnomineesincycle
    withdrawRecordsIndexState:IWithdrawrecordsindex
    governanceCycleDelayFloorState:IGovernancecycledelayfloor
    processKYCState:IProcesskyc
    isKYCApprovedState:IIskycapproved
    nominationFeeFloorState:INominationfeefloor
    governanceCycleDelayState:IGovernancecycledelay
    
}



//finalizeWithdraw Interface
export interface IFinalizewithdraw {
    callData:CallData
    params: FinalizewithdrawParams
}
export interface FinalizewithdrawParams {
    _withdrawIndex:uint256
}


//hasApplied Interface
export interface IHasapplied {
    callData:CallData
    params: HasappliedParams
}
export interface HasappliedParams {
    registrant:address
}


//approveKYC Interface
export interface IApprovekyc {
    callData:CallData
    params: ApprovekycParams
}
export interface ApprovekycParams {
    registrant:address
}


//GovernanceCycleDelayCeiling Interface
export interface IGovernancecycledelayceiling {
    callData:CallData
    params: GovernancecycledelayceilingParams
}
export interface GovernancecycledelayceilingParams {
}


//removeOwner Interface
export interface IRemoveowner {
    callData:CallData
    params: RemoveownerParams
}
export interface RemoveownerParams {
    removedOwner:address
}


//withdrawHistory Interface
export interface IWithdrawhistory {
    callData:CallData
    params: WithdrawhistoryParams
}
export interface WithdrawhistoryParams {
    param0:address
    param1:uint256
}


//isKYCPending Interface
export interface IIskycpending {
    callData:CallData
    params: IskycpendingParams
}
export interface IskycpendingParams {
    registrant:address
}


//registerGoverning Interface
export interface IRegistergoverning {
    callData:CallData
    params: RegistergoverningParams
}
export interface RegistergoverningParams {
    registrant:address
}


//isKYCDenied Interface
export interface IIskycdenied {
    callData:CallData
    params: IskycdeniedParams
}
export interface IskycdeniedParams {
    registrant:address
}


//newGovernanceCycle Interface
export interface INewgovernancecycle {
    callData:CallData
    params: NewgovernancecycleParams
}
export interface NewgovernancecycleParams {
}


//vote Interface
export interface IVote {
    callData:CallData
    params: VoteParams
}
export interface VoteParams {
    _voted_for:address
    _election:bool
    _inSupport:bool
    _votes:uint16
}


//isOwner Interface
export interface IIsowner {
    callData:CallData
    params: IsownerParams
}
export interface IsownerParams {
    maybeOwner:address
}


//startWithdraw Interface
export interface IStartwithdraw {
    callData:CallData
    params: StartwithdrawParams
}
export interface StartwithdrawParams {
    _governanceCycleId:uint256
    _ballotId:uint256
}


//appealKYC Interface
export interface IAppealkyc {
    callData:CallData
    params: AppealkycParams
}
export interface AppealkycParams {
}


//revokeKYC Interface
export interface IRevokekyc {
    callData:CallData
    params: RevokekycParams
}
export interface RevokekycParams {
    registrant:address
}


//setGovernanceCycleDelay Interface
export interface ISetgovernancecycledelay {
    callData:CallData
    params: SetgovernancecycledelayParams
}
export interface SetgovernancecycledelayParams {
    delayInSeconds:uint256
}


//updatePersonalRegistry Interface
export interface IUpdatepersonalregistry {
    callData:CallData
    params: UpdatepersonalregistryParams
}
export interface UpdatepersonalregistryParams {
    newRegistry:address
}


//nomineeBallots Interface
export interface INomineeballots {
    callData:CallData
    params: NomineeballotsParams
}
export interface NomineeballotsParams {
    param0:address
}


//revokeGoverning Interface
export interface IRevokegoverning {
    callData:CallData
    params: RevokegoverningParams
}
export interface RevokegoverningParams {
    registrant:address
}


//registerNonGoverning Interface
export interface IRegisternongoverning {
    callData:CallData
    params: RegisternongoverningParams
}
export interface RegisternongoverningParams {
    registrant:address
}


//approveGoverning Interface
export interface IApprovegoverning {
    callData:CallData
    params: ApprovegoverningParams
}
export interface ApprovegoverningParams {
    registrant:address
}


//canGovern Interface
export interface ICangovern {
    callData:CallData
    params: CangovernParams
}
export interface CangovernParams {
    registrant:address
}


//setMaxNomineesInCycle Interface
export interface ISetmaxnomineesincycle {
    callData:CallData
    params: SetmaxnomineesincycleParams
}
export interface SetmaxnomineesincycleParams {
    maxNominees:uint16
}


//AverageMonth Interface
export interface IAveragemonth {
    callData:CallData
    params: AveragemonthParams
}
export interface AveragemonthParams {
}


//deleteKYC Interface
export interface IDeletekyc {
    callData:CallData
    params: DeletekycParams
}
export interface DeletekycParams {
    registrant:address
}


//MaxNomineesInCycleCeiling Interface
export interface IMaxnomineesincycleceiling {
    callData:CallData
    params: MaxnomineesincycleceilingParams
}
export interface MaxnomineesincycleceilingParams {
}


//governanceCycleRecords Interface
export interface IGovernancecyclerecords {
    callData:CallData
    params: GovernancecyclerecordsParams
}
export interface GovernancecyclerecordsParams {
    param0:uint256
}


//findWinners Interface
export interface IFindwinners {
    callData:CallData
    params: FindwinnersParams
}
export interface FindwinnersParams {
}


//NominationFee Interface
export interface INominationfee {
    callData:CallData
    params: NominationfeeParams
}
export interface NominationfeeParams {
}


//ballotRecords Interface
export interface IBallotrecords {
    callData:CallData
    params: BallotrecordsParams
}
export interface BallotrecordsParams {
    param0:uint256
}


//addOwner Interface
export interface IAddowner {
    callData:CallData
    params: AddownerParams
}
export interface AddownerParams {
    newOwner:address
}


//nomineesInCycle Interface
export interface INomineesincycle {
    callData:CallData
    params: NomineesincycleParams
}
export interface NomineesincycleParams {
}


//finalizeGovernanceCycle Interface
export interface IFinalizegovernancecycle {
    callData:CallData
    params: FinalizegovernancecycleParams
}
export interface FinalizegovernancecycleParams {
}


//getRegistration Interface
export interface IGetregistration {
    callData:CallData
    params: GetregistrationParams
}
export interface GetregistrationParams {
    registrant:address
}


//setWithdrawDelay Interface
export interface ISetwithdrawdelay {
    callData:CallData
    params: SetwithdrawdelayParams
}
export interface SetwithdrawdelayParams {
    delayInSeconds:uint256
}


//currentGovernanceCycle Interface
export interface ICurrentgovernancecycle {
    callData:CallData
    params: CurrentgovernancecycleParams
}
export interface CurrentgovernancecycleParams {
}


//numOwners Interface
export interface INumowners {
    callData:CallData
    params: NumownersParams
}
export interface NumownersParams {
}


//withdrawRecords Interface
export interface IWithdrawrecords {
    callData:CallData
    params: WithdrawrecordsParams
}
export interface WithdrawrecordsParams {
    param0:uint256
}


//ballotHistory Interface
export interface IBallothistory {
    callData:CallData
    params: BallothistoryParams
}
export interface BallothistoryParams {
    param0:address
    param1:uint256
}


//WithdrawDelayFloor Interface
export interface IWithdrawdelayfloor {
    callData:CallData
    params: WithdrawdelayfloorParams
}
export interface WithdrawdelayfloorParams {
}


//applyKYC Interface
export interface IApplykyc {
    callData:CallData
    params: ApplykycParams
}
export interface ApplykycParams {
}


//latestGovernanceCycleParticipated Interface
export interface ILatestgovernancecycleparticipated {
    callData:CallData
    params: LatestgovernancecycleparticipatedParams
}
export interface LatestgovernancecycleparticipatedParams {
    param0:address
}


//NominationFeeCeiling Interface
export interface INominationfeeceiling {
    callData:CallData
    params: NominationfeeceilingParams
}
export interface NominationfeeceilingParams {
}


//WithdrawDelayCeiling Interface
export interface IWithdrawdelayceiling {
    callData:CallData
    params: WithdrawdelayceilingParams
}
export interface WithdrawdelayceilingParams {
}


//MaxNomineesInCycle Interface
export interface IMaxnomineesincycle {
    callData:CallData
    params: MaxnomineesincycleParams
}
export interface MaxnomineesincycleParams {
}


//denyKYC Interface
export interface IDenykyc {
    callData:CallData
    params: DenykycParams
}
export interface DenykycParams {
    registrant:address
}


//WithdrawDelay Interface
export interface IWithdrawdelay {
    callData:CallData
    params: WithdrawdelayParams
}
export interface WithdrawdelayParams {
}


//MaxNomineesInCycleFloor Interface
export interface IMaxnomineesincyclefloor {
    callData:CallData
    params: MaxnomineesincyclefloorParams
}
export interface MaxnomineesincyclefloorParams {
}


//numRegistered Interface
export interface INumregistered {
    callData:CallData
    params: NumregisteredParams
}
export interface NumregisteredParams {
}


//setNominationFee Interface
export interface ISetnominationfee {
    callData:CallData
    params: SetnominationfeeParams
}
export interface SetnominationfeeParams {
    feeInEXC:uint256
}


//ballotIndex Interface
export interface IBallotindex {
    callData:CallData
    params: BallotindexParams
}
export interface BallotindexParams {
}


//nomineeBallotKeys Interface
export interface INomineeballotkeys {
    callData:CallData
    params: NomineeballotkeysParams
}
export interface NomineeballotkeysParams {
    param0:uint256
}


//electionNomineesInCycle Interface
export interface IElectionnomineesincycle {
    callData:CallData
    params: ElectionnomineesincycleParams
}
export interface ElectionnomineesincycleParams {
}


//evictionNomineesInCycle Interface
export interface IEvictionnomineesincycle {
    callData:CallData
    params: EvictionnomineesincycleParams
}
export interface EvictionnomineesincycleParams {
}


//withdrawRecordsIndex Interface
export interface IWithdrawrecordsindex {
    callData:CallData
    params: WithdrawrecordsindexParams
}
export interface WithdrawrecordsindexParams {
}


//GovernanceCycleDelayFloor Interface
export interface IGovernancecycledelayfloor {
    callData:CallData
    params: GovernancecycledelayfloorParams
}
export interface GovernancecycledelayfloorParams {
}


//processKYC Interface
export interface IProcesskyc {
    callData:CallData
    params: ProcesskycParams
}
export interface ProcesskycParams {
    registrant:address
}


//isKYCApproved Interface
export interface IIskycapproved {
    callData:CallData
    params: IskycapprovedParams
}
export interface IskycapprovedParams {
    registrant:address
}


//NominationFeeFloor Interface
export interface INominationfeefloor {
    callData:CallData
    params: NominationfeefloorParams
}
export interface NominationfeefloorParams {
}


//GovernanceCycleDelay Interface
export interface IGovernancecycledelay {
    callData:CallData
    params: GovernancecycledelayParams
}
export interface GovernancecycledelayParams {
}


type address= string ;
type bool= boolean ;

type uint = number;
type uint8 = number;
type uint16 = number;
type uint24 = number;
type uint32 = number;
type uint40 = number;
type uint48 = number;
type uint56 = number;
type uint64 = number;
type uint72 = number;
type uint80 = number;
type uint88 = number;
type uint96 = number;
type uint104 = number;
type uint112 = number;
type uint120 = number;
type uint128 = number;
type uint136 = number;
type uint144 = number;
type uint152 = number;
type uint160 = number;
type uint168 = number;
type uint176 = number;
type uint184 = number;
type uint192 = number;
type uint200 = number;
type uint208 = number;
type uint216 = number;
type uint224 = number;
type uint232 = number;
type uint240 = number;
type uint248 = number;
type uint256 = number;

type int = number;
type int8 = number;
type int16 = number;
type int24 = number;
type int32 = number;
type int40 = number;
type int48 = number;
type int56 = number;
type int64 = number;
type int72 = number;
type int80 = number;
type int88 = number;
type int96 = number;
type int104 = number;
type int112 = number;
type int120 = number;
type int128 = number;
type int136 = number;
type int144 = number;
type int152 = number;
type int160 = number;
type int168 = number;
type int176 = number;
type int184 = number;
type int192 = number;
type int200 = number;
type int208 = number;
type int216 = number;
type int224 = number;
type int232 = number;
type int240 = number;
type int248 = number;
type int256 = number;

type bytes1= string;
type bytes2= string;
type bytes3= string;
type bytes4= string;
type bytes5= string;
type bytes6= string;
type bytes7= string;
type bytes8= string;
type bytes9= string;
type bytes10= string;
type bytes11= string;
type bytes12= string;
type bytes13= string;
type bytes14= string;
type bytes15= string;
type bytes16= string;
type bytes17= string;
type bytes18= string;
type bytes19= string;
type bytes20= string;
type bytes21= string;
type bytes22= string;
type bytes23= string;
type bytes24= string;
type bytes25= string;
type bytes26= string;
type bytes27= string;
type bytes28= string;
type bytes29= string;
type bytes30= string;
type bytes31= string;
type bytes32= string;

export default TxState