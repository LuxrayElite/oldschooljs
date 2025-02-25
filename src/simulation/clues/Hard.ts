import { randInt, roll } from 'e';

import Bank from '../../structures/Bank';
import Clue from '../../structures/Clue';
import LootTable from '../../structures/LootTable';
import { itemID } from '../../util';
import { BlessingTable, FirelighterTable, GildedTable, PrayerPageTable, TeleportScrollTable } from './General';

export const Hard3rdageTable = new LootTable()
	.add('3rd age range coif')
	.add('3rd age range top')
	.add('3rd age range legs')
	.add('3rd age vambraces')
	.add('3rd age robe top')
	.add('3rd age robe')
	.add('3rd age mage hat')
	.add('3rd age amulet')
	.add('3rd age platelegs')
	.add('3rd age platebody')
	.add('3rd age full helmet')
	.add('3rd age plateskirt')
	.add('3rd age kiteshield');

export const HardMegaRareTable = new LootTable()
	.add('Super energy(4)', 15)
	.add('Super restore(4)', 15)
	.add('Antifire potion(4)', 15)
	.add([
		['Super attack(4)', 5],
		['Super strength(4)', 5],
		['Super defence(4)', 5]
	])
	.add(Hard3rdageTable)
	.add(GildedTable, 1, 5);

export const HardBlessedShields = new LootTable()
	.add("Guthix d'hide shield")
	.add("Saradomin d'hide shield")
	.add("Zamorak d'hide shield")
	.add("Ancient d'hide shield")
	.add("Armadyl d'hide shield")
	.add("Bandos d'hide shield");

export const HardHeralicPlatebody = new LootTable()
	.add('Rune platebody (h1)')
	.add('Rune platebody (h2)')
	.add('Rune platebody (h3)')
	.add('Rune platebody (h4)')
	.add('Rune platebody (h5)');

export const HardRareTable = new LootTable()
	.add('Robin Hood hat')
	.add('Tan Cavalier')
	.add('Dark Cavalier')
	.add('Black Cavalier')
	.add('White Cavalier')
	.add('Red Cavalier')
	.add('Navy Cavalier')
	.add("Pirate's hat")
	.add('Enchanted hat')
	.add('Enchanted top')
	.add('Enchanted robe')
	.add('Amulet of glory (t4)')
	.add('Pith helmet')
	.add('Explorer backpack')
	.add(19_912) // Zombie head
	.add('Nunchaku')
	.add('Cyclops head')
	.add('Dragon boots ornament kit')
	.add('Dual sai')
	.add('Thieving bag')
	.add('Rune defender ornament kit')
	.add('Tzhaar-ket-om ornament kit')
	.add('Berserker necklace ornament kit')
	.add('Rune cane')
	.add('Green dragon mask')
	.add('Blue dragon mask')
	.add('Red dragon mask')
	.add('Black dragon mask')
	.add('Rune platebody (t)')
	.add('Rune platelegs (t)')
	.add('Rune plateskirt (t)')
	.add('Rune kiteshield (t)')
	.add('Rune full helm (t)')
	.add('Rune platebody (g)')
	.add('Rune platelegs (g)')
	.add('Rune plateskirt (g)')
	.add('Rune kiteshield (g)')
	.add('Rune full helm (g)')
	.add('Rune helm (h1)')
	.add('Rune helm (h2)')
	.add('Rune helm (h3)')
	.add('Rune helm (h4)')
	.add('Rune helm (h5)')
	.add('Rune shield (h1)')
	.add('Rune shield (h2)')
	.add('Rune shield (h3)')
	.add('Rune shield (h4)')
	.add('Rune shield (h5)')
	.add('Zamorak platebody')
	.add('Zamorak platelegs')
	.add('Zamorak plateskirt')
	.add('Zamorak kiteshield')
	.add('Zamorak full helm')
	.add('Zamorak bracers')
	.add("Zamorak d'hide body")
	.add('Zamorak chaps')
	.add('Zamorak coif')
	.add('Zamorak crozier')
	.add('Zamorak stole')
	.add("Zamorak d'hide boots")
	.add('Saradomin platebody')
	.add('Saradomin platelegs')
	.add('Saradomin plateskirt')
	.add('Saradomin kiteshield')
	.add('Saradomin full helm')
	.add('Saradomin bracers')
	.add("Saradomin d'hide body")
	.add('Saradomin chaps')
	.add('Saradomin coif')
	.add('Saradomin crozier')
	.add('Saradomin stole')
	.add("Saradomin d'hide boots")
	.add('Guthix platebody')
	.add('Guthix platelegs')
	.add('Guthix plateskirt')
	.add('Guthix kiteshield')
	.add('Guthix full helm')
	.add('Guthix bracers')
	.add("Guthix d'hide body")
	.add('Guthix chaps')
	.add('Guthix coif')
	.add('Guthix crozier')
	.add('Guthix stole')
	.add("Guthix d'hide boots")
	.add('Bandos platebody')
	.add('Bandos platelegs')
	.add('Bandos plateskirt')
	.add('Bandos kiteshield')
	.add('Bandos full helm')
	.add('Bandos bracers')
	.add("Bandos d'hide body")
	.add('Bandos chaps')
	.add('Bandos coif')
	.add("Bandos d'hide boots")
	.add('Armadyl platebody')
	.add('Armadyl platelegs')
	.add('Armadyl plateskirt')
	.add('Armadyl kiteshield')
	.add('Armadyl full helm')
	.add('Armadyl bracers')
	.add("Armadyl d'hide body")
	.add('Armadyl chaps')
	.add('Armadyl coif')
	.add("Armadyl d'hide boots")
	.add('Ancient platebody')
	.add('Ancient platelegs')
	.add('Ancient plateskirt')
	.add('Ancient kiteshield')
	.add('Ancient full helm')
	.add('Ancient bracers')
	.add("Ancient d'hide body")
	.add('Ancient chaps')
	.add('Ancient coif')
	.add("Ancient d'hide boots")
	.add("Blue d'hide body (t)")
	.add("Blue d'hide chaps (t)")
	.add("Blue d'hide body (g)")
	.add("Blue d'hide chaps (g)")
	.add("Red d'hide body (t)")
	.add("Red d'hide chaps (t)")
	.add("Red d'hide body (g)")
	.add("Red d'hide chaps (g)")
	.add(HardMegaRareTable)
	.add(HardBlessedShields)
	.add(HardHeralicPlatebody);

export const HardBowTable = new LootTable().add('Magic comp bow').add('Magic longbow', 1, 9);

export const HardStandardTable = new LootTable()
	.add('Coins', [1000, 5000])
	.add('Lobster', [12, 15])
	.add('Shark', [12, 15])
	.add('Law rune', [30, 50])
	.add('Blood rune', [20, 30])
	.add('Nature rune', [30, 50])
	.add('Purple sweets', [7, 15])
	.add('Rune longsword')
	.add('Rune full helm')
	.add('Rune platelegs')
	.add('Rune battleaxe')
	.add('Rune axe')
	.add('Rune pickaxe')
	.add('Rune dagger')
	.add('Rune platebody')
	.add('Rune platelegs')
	.add('Rune plateskirt')
	.add('Rune kiteshield')
	.add("Black d'hide chaps")
	.add("Black d'hide body")
	.add('Magic shortbow')
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(TeleportScrollTable)
	.add(BlessingTable)
	.add(HardBowTable);

export const HardClueTable = new LootTable().add(HardStandardTable, 1, 12).add(HardRareTable, 1, 1);

export class HardCasket extends Clue {
	public open(quantity = 1): Bank {
		const loot = new Bank();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = randInt(4, 6);

			if (roll(15)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(HardClueTable.roll());
			}
		}

		return loot;
	}
}

const hardCasket = new HardCasket({ table: HardClueTable });
hardCasket.allItems.push(itemID('Clue scroll (master)'));
export default hardCasket;
