import { AwakenedDukeSucellus } from './AwakenedDukeSucellus';
import { AwakenedTheLeviathan } from './AwakenedTheLeviathan';
import { AwakenedTheWhisperer } from './AwakenedTheWhisperer';
import { AwakenedVardorvis } from './AwakenedVardorvis';
import Bryophyta from './Bryophyta';
import CommanderZilyana from './CommanderZilyana';
import DagannothPrime from './DagannothPrime';
import DagannothRex from './DagannothRex';
import DagannothSupreme from './DagannothSupreme';
import DerangedArchaeologist from './DerangedArchaeologist';
import { DukeSucellus } from './DukeSucellus';
import GeneralGraardor from './GeneralGraardor';
import GiantMole from './GiantMole';
import KalphiteQueen from './KalphiteQueen';
import Kreearra from './Kreearra';
import KrilTsutsaroth from './KrilTsutsaroth';
import Obor from './Obor';
import PhantomMuspah from './PhantomMuspah';
import Sarachnis from './Sarachnis';
import Skotizo from './Skotizo';
import { allSlayerBosses } from './slayer';
import { TheLeviathan } from './TheLeviathan';
import { TheWhisperer } from './TheWhisperer';
import { Vardorvis } from './Vardorvis';
import Vorkath from './Vorkath';
import { allWildyBosses } from './wildy';
import CorporealBeast from './wildy/CorporealBeast';
import Zulrah from './Zulrah';

export const allBosses = {
	CorporealBeast,
	DagannothPrime,
	DagannothRex,
	DagannothSupreme,
	GiantMole,
	KalphiteQueen,
	Obor,
	Sarachnis,
	Vorkath,
	Zulrah,
	CommanderZilyana,
	GeneralGraardor,
	Kreearra,
	KrilTsutsaroth,
	Bryophyta,
	Skotizo,
	DerangedArchaeologist,
	PhantomMuspah,
	DukeSucellus,
	Vardorvis,
	TheLeviathan,
	TheWhisperer,
	AwakenedDukeSucellus,
	AwakenedTheLeviathan,
	AwakenedTheWhisperer,
	AwakenedVardorvis,
	...allWildyBosses,
	...allSlayerBosses
};
