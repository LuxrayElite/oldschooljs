import { randInt, roll } from 'e';

import Bank from '../../structures/Bank';
import Clue from '../../structures/Clue';
import LootTable from '../../structures/LootTable';
import { itemID } from '../../util';
import { BlessingTable, PrayerPageTable, TeleportScrollTable } from './General';

export const MediumUnicornTable = new LootTable().add('White unicorn mask').add('Black unicorn mask');

export const MediumElegantTable = new LootTable()
	.add('Purple elegant shirt')
	.add('Purple elegant legs')
	.add('Purple elegant blouse')
	.add('Purple elegant skirt')
	.add('Black elegant shirt')
	.add('Black elegant legs')
	.add('White elegant blouse')
	.add('White elegant skirt')
	.add('Pink elegant shirt')
	.add('Pink elegant legs')
	.add('Pink elegant blouse')
	.add('Pink elegant skirt')
	.add('Gold elegant shirt')
	.add('Gold elegant legs')
	.add('Gold elegant blouse')
	.add('Gold elegant skirt');

export const MediumRareTable = new LootTable()
	.add('Ranger boots')
	.add('Wizard boots')
	.add('Leprechaun Hat')
	.add('Cat mask')
	.add('Penguin mask')
	.add('Crier hat')
	.add('Adamant cane')
	.add('Cabbage round shield')
	.add('Crier coat')
	.add('Crier bell')
	.add('Black leprechaun hat')
	.add('Holy sandals')
	.add('Wolf mask')
	.add('Wolf cloak')
	.add('Spiked manacles')
	.add('Red headband')
	.add('Black headband')
	.add('Brown headband')
	.add('White headband')
	.add('Blue headband')
	.add('Gold headband')
	.add('Pink headband')
	.add('Green headband')
	.add('Red boater')
	.add('Orange boater')
	.add('Green boater')
	.add('Black boater')
	.add('Blue boater')
	.add('Pink boater')
	.add('Purple boater')
	.add('White boater')
	.add('Adamant platebody (t)')
	.add('Adamant platelegs (t)')
	.add('Adamant kiteshield (t)')
	.add('Adamant full helm (t)')
	.add('Adamant plateskirt (t)')
	.add('Mithril platebody (t)')
	.add('Mithril platelegs (t)')
	.add('Mithril plateskirt (t)')
	.add('Mithril kiteshield (t)')
	.add('Mithril full helm (t)')
	.add('Adamant platebody (g)')
	.add('Adamant platelegs (g)')
	.add('Adamant kiteshield (g)')
	.add('Adamant full helm (g)')
	.add('Adamant plateskirt (g)')
	.add('Mithril platebody (g)')
	.add('Mithril platelegs (g)')
	.add('Mithril plateskirt (g)')
	.add('Mithril kiteshield (g)')
	.add('Mithril full helm (g)')
	.add('Climbing boots (g)')
	.add('Adamant shield (h1)')
	.add('Adamant shield (h2)')
	.add('Adamant shield (h3)')
	.add('Adamant shield (h4)')
	.add('Adamant shield (h5)')
	.add('Adamant helm (h1)')
	.add('Adamant helm (h2)')
	.add('Adamant helm (h3)')
	.add('Adamant helm (h4)')
	.add('Adamant helm (h5)')
	.add('Adamant platebody (h1)')
	.add('Adamant platebody (h2)')
	.add('Adamant platebody (h3)')
	.add('Adamant platebody (h4)')
	.add('Adamant platebody (h5)')
	.add("Green d'hide body (g)")
	.add("Green d'hide body (t)")
	.add("Green d'hide chaps (g)")
	.add("Green d'hide chaps (t)")
	.add('Saradomin mitre')
	.add('Guthix mitre')
	.add('Zamorak mitre')
	.add('Ancient mitre')
	.add('Armadyl mitre')
	.add('Bandos mitre')
	.add('Saradomin cloak')
	.add('Guthix cloak')
	.add('Zamorak cloak')
	.add('Ancient cloak')
	.add('Armadyl cloak')
	.add('Bandos cloak')
	.add('Ancient stole')
	.add('Bandos stole')
	.add('Armadyl stole')
	.add('Ancient crozier')
	.add('Armadyl crozier')
	.add('Bandos crozier')
	.add('Arceuus banner')
	.add('Piscarilius banner')
	.add('Hosidius banner')
	.add('Shayzien banner')
	.add('Lovakengj banner')
	.add(MediumUnicornTable)
	.add(MediumElegantTable, 1, 8);

// For some reason the medium table has 1 less firelighter chance?
export const MediumSubFirelighterTable = new LootTable()
	.add('Red firelighter', [4, 9])
	.add('Green firelighter', [4, 9])
	.add('Blue firelighter', [4, 9])
	.add('Purple firelighter', [4, 9])
	.add('White firelighter', [4, 9]);

export const MediumFirelighterTable = new LootTable().add('Gnomish firelighter').add(MediumSubFirelighterTable, 1, 9);

export const MediumAmuletTable = new LootTable().add('Strength amulet (t)').add('Amulet of power', 1, 9);

export const MediumBowTable = new LootTable().add('Yew comp bow').add('Yew longbow', 1, 9);

export const MediumStandardTable = new LootTable()
	.add('Coins', [200, 1000])
	.add('Lobster', [8, 12])
	.add('Swordfish', [8, 12])
	.add('Air rune', [50, 100])
	.add('Fire rune', [50, 100])
	.add('Water rune', [50, 100])
	.add('Earth rune', [50, 100])
	.add('Mind rune', [50, 100])
	.add('Death rune', [10, 10])
	.add('Law rune', [10, 10])
	.add('Chaos rune', [10, 10])
	.add('Nature rune', [10, 10])
	.add('Adamant longsword')
	.add('Adamant full helm')
	.add('Adamant platelegs')
	.add('Adamant battleaxe')
	.add('Adamant axe')
	.add('Adamant pickaxe')
	.add('Adamant dagger')
	.add('Adamant platebody')
	.add('Purple sweets', [5, 10])
	.add('Fire battlestaff')
	.add("Green d'hide chaps")
	.add("Green d'hide body")
	.add('Yew shortbow')
	.add(PrayerPageTable)
	.add(TeleportScrollTable)
	.add(BlessingTable)
	.add(MediumFirelighterTable)
	.add(MediumAmuletTable)
	.add(MediumBowTable);

export const MediumClueTable = new LootTable().add(MediumStandardTable, 1, 10).add(MediumRareTable, 1, 1);

export class MediumCasket extends Clue {
	public open(quantity = 1): Bank {
		const loot = new Bank();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = randInt(3, 5);

			if (roll(30)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(MediumClueTable.roll());
			}
		}

		return loot;
	}
}

const mediumCasket = new MediumCasket({ table: MediumClueTable });
mediumCasket.allItems.push(itemID('Clue scroll (master)'));
export default mediumCasket;
