import Bank from '../../structures/Bank';
import Clue from '../../structures/Clue';
import LootTable from '../../structures/LootTable';

type MimicClueTier = 'master' | 'elite';

export const Mimic3rdAgeTable = new LootTable()
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
	.add('3rd age kiteshield')
	.add('3rd age longsword')
	.add('3rd age cloak')
	.add('3rd age wand')
	.add('3rd age bow')
	.add('3rd age druidic staff')
	.add('3rd age druidic cloak')
	.add('3rd age druidic robe top')
	.add('3rd age druidic robe bottoms')
	.add('3rd age pickaxe')
	.add('3rd age axe');

export const EliteMimicTable = new LootTable()
	.every('Mahogany plank')
	.oneIn(44, 'Ring of 3rd age')
	.oneIn(250, Mimic3rdAgeTable)
	.add('Death rune', 480)
	.add('Death rune', 600)
	.add('Blood rune', 400)
	.add('Blood rune', 500)
	.add('Grimy ranarr weed', 25, 2)
	.add('Raw manta ray', 15, 2)
	.add('Wine of zamorak', 25, 2);

export const MasterMimicTable = new LootTable()
	.every('Mahogany plank')
	.oneIn(40, 'Ring of 3rd age')
	.oneIn(228, Mimic3rdAgeTable)
	.add('Death rune', 480)
	.add('Death rune', 600)
	.add('Blood rune', 400)
	.add('Blood rune', 500)
	.add('Grimy ranarr weed', 25, 2)
	.add('Raw manta ray', 15, 2)
	.add('Wine of zamorak', 25, 2);

class MimicCasket extends Clue {
	public open(tier: MimicClueTier = 'master', quantity = 1) {
		const loot = new Bank();
		for (let i = 0; i < quantity; i++) {
			loot.add(tier.toLowerCase() === 'elite' ? EliteMimicTable.roll() : MasterMimicTable.roll());
		}
		return loot;
	}
}

export default new MimicCasket({ table: MasterMimicTable });
