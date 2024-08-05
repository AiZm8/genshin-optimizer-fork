import type { LightConeKey } from '@genshin-optimizer/sr/consts'
import type { EquipmentConfig } from '../dm'

export const lightConeIdMap: Record<string, LightConeKey> = {
  20000: 'Arrows',
  20001: 'Cornucopia',
  20002: 'CollapsingSky',
  20003: 'Amber',
  20004: 'Void',
  20005: 'Chorus',
  20006: 'DataBank',
  20007: 'DartingArrow',
  20008: 'FineFruit',
  20009: 'ShatteredHome',
  20010: 'Defense',
  20011: 'Loop',
  20012: 'MeshingCogs',
  20013: 'Passkey',
  20014: 'Adversarial',
  20015: 'Multiplication',
  20016: 'MutualDemise',
  20017: 'Pioneering',
  20018: 'HiddenShadow',
  20019: 'Mediation',
  20020: 'Sagacity',
  21000: 'PostOpConversation',
  21001: 'GoodNightAndSleepWell',
  21002: 'DayOneOfMyNewLife',
  21003: 'OnlySilenceRemains',
  21004: 'MemoriesOfThePast',
  21005: 'TheMolesWelcomeYou',
  21006: 'TheBirthOfTheSelf',
  21007: 'SharedFeeling',
  21008: 'EyesOfThePrey',
  21009: 'LandausChoice',
  21010: 'Swordplay',
  21011: 'PlanetaryRendezvous',
  21012: 'ASecretVow',
  21013: 'MakeTheWorldClamor',
  21014: 'PerfectTiming',
  21015: 'ResolutionShinesAsPearlsOfSweat',
  21016: 'TrendOfTheUniversalMarket',
  21017: 'SubscribeForMore',
  21018: 'DanceDanceDance',
  21019: 'UnderTheBlueSky',
  21020: 'GeniusesRepose',
  21021: 'QuidProQuo',
  21022: 'Fermata',
  21023: 'WeAreWildfire',
  21024: 'RiverFlowsInSpring',
  21025: 'PastAndFuture',
  21026: 'WoofWalkTime',
  21027: 'TheSeriousnessOfBreakfast',
  21028: 'WarmthShortensColdNights',
  21029: 'WeWillMeetAgain',
  21030: 'ThisIsMe',
  21031: 'ReturnToDarkness',
  21032: 'CarveTheMoonWeaveTheClouds',
  21033: 'NowhereToRun',
  21034: 'TodayIsAnotherPeacefulDay',
  21035: 'WhatIsReal',
  21036: 'DreamvilleAdventure',
  21037: 'FinalVictor',
  21038: 'FlamesAfar',
  21039: 'DestinysThreadsForewoven',
  21040: 'TheDayTheCosmosFell',
  21041: 'ItsShowtime',
  21042: 'IndeliblePromise',
  21043: 'ConcertForTwo',
  21044: 'BoundlessChoreo',
  21045: 'AfterTheCharmonyFall',
  21046: 'PoisedToBloom',
  22000: 'BeforeTheTutorialMissionStarts',
  22001: 'HeyOverHere',
  23000: 'NightOnTheMilkyWay',
  23001: 'InTheNight',
  23002: 'SomethingIrreplaceable',
  23003: 'ButTheBattleIsntOver',
  23004: 'InTheNameOfTheWorld',
  23005: 'MomentOfVictory',
  23006: 'PatienceIsAllYouNeed',
  23007: 'IncessantRain',
  23008: 'EchoesOfTheCoffin',
  23009: 'TheUnreachableSide',
  23010: 'BeforeDawn',
  23011: 'SheAlreadyShutHerEyes',
  23012: 'SleepLikeTheDead',
  23013: 'TimeWaitsForNoOne',
  23014: 'IShallBeMyOwnSword',
  23015: 'BrighterThanTheSun',
  23016: 'WorrisomeBlissful',
  23017: 'NightOfFright',
  23018: 'AnInstantBeforeAGaze',
  23019: 'PastSelfInMirror',
  23020: 'BaptismOfPureThought',
  23021: 'EarthlyEscapade',
  23022: 'ReforgedRemembrance',
  23023: 'InherentlyUnjustDestiny',
  23024: 'AlongThePassingShore',
  23025: 'WhereaboutsShouldDreamsRest',
  23026: 'FlowingNightglow',
  23027: 'SailingTowardsASecondLife',
  23028: 'YetHopeIsPriceless',
  23030: 'DanceAtSunset',
  24000: 'OnTheFallOfAnAeon',
  24001: 'CruisingInTheStellarSea',
  24002: 'TextureOfMemories',
  24003: 'SolitaryHealing',
}
export type LightConeId = keyof typeof lightConeIdMap

export const lightConeRarityMap: Record<EquipmentConfig['Rarity'], 3 | 4 | 5> =
  {
    CombatPowerLightconeRarity3: 3,
    CombatPowerLightconeRarity4: 4,
    CombatPowerLightconeRarity5: 5,
  }
