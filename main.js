
var soundWood = new Audio("music/ChoppingWood2.mp3");
soundWood.volume = .56;
var backgroundSound = new Audio("music/Background.mp3");
backgroundSound.loop = true;
backgroundSound.volume = .58;
backgroundSound.play();

soundWood.loop = true;
var totalGold = 0;

var woodcuttingLevel = 1;
var totalWoodcuttingExp = 0;
var nextWoodcuttingLevel = 83;
var remainingWoodcutLevelExp = 83;

var miningLevel = 1;
var totalMiningExp = 0;
var nextMiningLevel = 83;
var remainingMiningLevelExp = 83;

var fishingLevel = 1;
var totalFishingExp = 0;
var nextFishingLevel = 83;
var remainingFishingLevelExp = 83;

var craftingLevel = 1;
var totalCraftingExp = 0;
var nextCraftingLevel = 83;
var remainingCraftingLevelExp = 83;

//Woodcut
var totalLogs = 0;
var totalOak = 0;
var totalWillow = 0;
var totalMaple = 0;
var totalYew = 0;
var totalMagic = 0;

var normalTree = 25;
var oakTree = 37.5;
var willowTree = 67.5;
var mapleTree = 90;
var yewTree = 175;
var magicTree = 250;
var prestige = 0;

var logVal = 1;
var oakLogVal = 15;
var willowLogVal = 35;
var mapleLogVal = 80;
var yewLogVal = 400;
var magicLogVal = 1250;

var logDelay;
var oakDelay;
var willowDelay;
var mapleDelay;
var yewDelay;
var magicDelay;

var loggerHired = false;
var oakLoggerHired = false;
var willowLoggerHired = false;
var mapleLoggerHired = false;
var yewLoggerHired = false;
var magicLoggerHired = false;

var loggerVal = 1000;
var oakLoggerVal = 15000;
var willowLoggerVal = 40000;
var mapleLoggerVal = 160000;
var yewLoggerVal = 450000;
var magicLoggerVal = 800000;

var numLoggers = 0;
var numOakLoggers = 0;
var numWillowLoggers = 0;
var numMapleLoggers = 0;
var numYewLoggers = 0;
var numMagicLoggers = 0;

//Mining
var totalCopper = 0;
var totalTin = 0;
var totalIron = 0;
var totalCoal = 0;
var totalMithril = 0;
var totalAdamantite = 0;
var totalRunite = 0;

var copperOre = 17.5;
var tinOre = 17.5;
var ironOre = 35;
var coalOre = 50;
var mithrilOre = 65;
var adamantiteOre = 95;
var runiteOre = 150;

var sapphire = 0;
var emerald = 0;
var ruby = 0;
var diamond = 0;
var dragonstone = 0;
var onyx = 0;
var zenyte = 0;

var copperVal = 1;
var tinVal = 1;
var ironVal = 20;
var coalVal = 100;
var mithrilVal = 550;
var adamantiteVal = 1450;
var runiteVal = 12000;

var copperDelay;
var tinDelay;
var ironDelay;
var coalDelay;
var mithrilDelay;
var adamantiteDelay;
var runiteDelay;

var copperMinerHired = false;
var tinMinerHired = false;
var ironMinerHired = false;
var coalMinerHired = false;
var mithrilMinerHired = false;
var adamantiteMinerHired = false;
var runiteMinerHired = false;

var copperMinerVal = 1500;
var tinMinerVal = 1500;
var ironMinerVal = 50000;
var coalMinerVal = 100000;
var mithrilMinerVal = 250000;
var adamantiteMinerVal = 500000;
var runiteMinerVal = 1000000;

var numCopperMiners = 0;
var numTinMiners = 0;
var numIronMiners = 0;
var numCoalMiners = 0;
var numMithrilMiners = 0;
var numAdamantiteMiners = 0;
var numRuniteMiners = 0;

//Fishing
var totalShrimp = 0;
var totalTrout = 0;
var totalSalmon = 0;
var totalTuna = 0;
var totalLobster = 0;
var totalSwordfish = 0;
var totalShark = 0;

var shrimp = 10;
var trout = 25;
var salmon = 40;
var tuna = 50;
var lobster = 90;
var swordfish = 120;
var shark = 250;

var shrimpVal = 1;
var troutVal = 10;
var salmonVal = 20;
var tunaVal = 70;
var lobsterVal = 120;
var swordfishVal = 280;
var sharkVal = 500;

var shrimpDelay;
var troutDelay;
var salmonDelay;
var tunaDelay;
var lobsterDelay;
var swordfishDelay;
var sharkDelay;

var shrimpFishermanVal = 500;
var troutFishermanVal = 15000;
var salmonFishermanVal = 60000;
var tunaFishermanVal = 95000;
var lobsterFishermanVal = 225000;
var swordfishFishermanVal = 600000;
var sharkFishermanVal = 1000000;

var shrimpFishermanHired = false;
var troutFishermanHired = false;
var salmonFishermanHired = false;
var tunaFishermanHired = false;
var lobsterFishermanHired = false;
var swordfishFishermanHired = false;
var sharkFishermanHired = false;

var numShrimpFisherman = 0;
var numTroutFisherman = 0;
var numSalmonFisherman = 0;
var numTunaFisherman = 0;
var numLobsterFisherman = 0;
var numSwordfishFisherman = 0;
var numSharkFisherman = 0;

//Crafting
var stick = 1;
var woodenAxe = 0;
var bronzeAxe = 0;
var ironAxe = 0;
var steelAxe = 0;
var mithrilAxe = 0;
var adamantiteAxe = 0;
var runiteAxe = 0;

var woodenPickaxe = 0;
var bronzePickaxe = 0;
var ironPickaxe = 0;
var steelPickaxe = 0;
var mithrilPickaxe = 0;
var adamantitePickaxe = 0;
var runitePickaxe = 0;

var woodenSword = 0;
var bronzeSword = 0;
var ironSword = 0;
var steelSword = 0;
var mithrilSword = 0;
var adamantiteSword = 0;
var runiteSword = 0;

var woodenHelmet = 0;
var bronzeHelmet = 0;
var ironHelmet = 0;
var steelHelmet = 0;
var mithrilHelmet = 0;
var adamantiteHelmet = 0;
var runiteHelmet = 0;

var woodenChestplate = 0;
var bronzeChestplate = 0;
var ironChestplate = 0;
var steelChestplate = 0;
var mithrilChestplate = 0;
var adamantiteChestplate = 0;
var runiteChestplate = 0;

var woodenPlatelegs = 0;
var bronzePlatelegs = 0;
var ironPlatelegs = 0;
var steelPlatelegs = 0;
var mithrilPlatelegs = 0;
var adamantitePlatelegs = 0;
var runitePlatelegs = 0;

var sapphireAmulet = 0;
var emeraldAmulet = 0;
var rubyAmulet = 0;
var diamondAmulet = 0;
var dragonstoneAmulet = 0;
var onyxAmulet = 0;
var zenyteAmulet = 0;

var woodenHarpoon = 0;
var bronzeHarpoon = 0;
var ironHarpoon = 0;
var steelHarpoon = 0;
var mithrilHarpoon = 0;
var adamantiteHarpoon = 0;
var runiteHarpoon = 0;

//Combat
var hpLevel = 10;
var totalHpExp = 1184;
var nextHpLevel = 211 + totalHpExp;
var remainingHpLevelExp = 211;

var attackLevel = 1;
var totalAttackExp = 0;
var nextAttackLevel = 83;
var remainingAttackLevelExp = 83;

var defenseLevel = 1;
var totalDefenseExp = 0;
var nextDefenseLevel = 83;
var remainingDefenseLevelExp = 83;

var strengthLevel = 1;
var totalStrengthExp = 0;
var nextStrengthLevel = 83;
var remainingStrengthLevelExp = 83;

var magicLevel = 1;
var totalMagicExp = 0;
var nextMagicLevel = 83;
var remainingMagicLevelExp = 83;

var combatLevel = 3;
var combinedCombatLevels = 14;
var health = 10;
var defensePower = 1;
var attackPower = 1;
var magicPower = 1;
var accuracy = 1;
var speed = 1;

var enemy = 0;
var enemyHp = 5;
var fightExp;
var attackStyle = 0;
var hit = 0;

var demonicRing = 0;
var draconicVisage = 0;

var moving = false;
var roll;

var count = 0;
var placeImIn = 1;

var combatArea = "none";
var fishingArea = "none";
var miningArea = "none";
var craftingArea = "none";
var woodcuttingArea = "block";

var logIndex;

function start(){
	updatePrice();
	document.getElementById("Woodcutting").style.display = "block"
	document.getElementById("Mining").style.display = "none"
	document.getElementById("Fishing").style.display = "none"
	document.getElementById("Combat").style.display = "none"
	document.getElementById("death").style.display = "none";
	document.getElementById("golden").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden2").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden3").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("woodcutExp").innerHTML = '&nbsp&nbsp' + "Woodcutting Level: " + woodcuttingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalWoodcuttingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingWoodcutLevelExp.toLocaleString();
	document.getElementById("miningExp").innerHTML = '&nbsp&nbsp' + "Mining Level: " + miningLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalMiningExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingMiningLevelExp.toLocaleString();
	document.getElementById("fishingExp").innerHTML = '&nbsp&nbsp' + "Fishing Level: " + fishingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalFishingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingFishingLevelExp.toLocaleString();
	document.getElementById("combatExp").innerHTML = '&nbsp&nbsp' + "Combat Level: " + combatLevel + '\xa0\xa0\xa0' + "Hitpoints Level: " + hpLevel + '\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalHpExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingHpLevelExp.toLocaleString();
	document.getElementById("craftingExp").innerHTML = '&nbsp&nbsp' + "Crafting Level: " + craftingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalCraftingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingCraftingLevelExp.toLocaleString();
	updateCombat();
}

function update(){
	remainingWoodcutLevelExp = nextWoodcuttingLevel - totalWoodcuttingExp;
	remainingMiningLevelExp = nextMiningLevel - totalMiningExp;
	remainingFishingLevelExp = nextFishingLevel - totalFishingExp;
	levelUp();
	updateWoodcutButtons();
	updateMiningButtons();
	updateFishingButtons();
	updateLogs();
	updateOres();
	updateFish();
	updateCombat();
	document.getElementById("golden").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden2").innerHTML = "Gold: " + totalGold.toLocaleString();
	document.getElementById("golden3").innerHTML = "Gold: " + totalGold.toLocaleString();
}

function levelUp(){
	if(totalWoodcuttingExp >= nextWoodcuttingLevel){
		woodcuttingLevel += 1;
		nextWoodcuttingLevel = Math.floor(woodcuttingLevel + 74.5 * Math.pow(2, woodcuttingLevel/7)) + nextWoodcuttingLevel;
		remainingWoodcutLevelExp = nextWoodcuttingLevel - totalWoodcuttingExp;
	}
	if(totalMiningExp >= nextMiningLevel){
		miningLevel += 1;
		nextMiningLevel = Math.floor(miningLevel + 74.5 * Math.pow(2, miningLevel/7)) + totalMiningExp;
		remainingMiningLevelExp = nextMiningLevel - totalMiningExp;
	}
	if(totalFishingExp >= nextFishingLevel){
		fishingLevel += 1;
		nextFishingLevel = Math.floor(fishingLevel + 74.5 * Math.pow(2, fishingLevel/7)) + totalFishingExp;
		remainingFishingLevelExp = nextFishingLevel - totalFishingExp;
	}
	if(totalAttackExp >= nextAttackLevel){
		attackLevel += 1;
		combinedCombatLevels += 1;
		nextAttackLevel = Math.floor(attackLevel + 74.5 * Math.pow(2, attackLevel/7)) + totalAttackExp;
		remainingAttackLevelExp = nextAttackLevel - totalAttackExp;
	}
	if(totalStrengthExp >= nextStrengthLevel){
		strengthLevel += 1;
		combinedCombatLevels += 1;
		nextStrengthLevel = Math.floor(strengthLevel + 74.5 * Math.pow(2, strengthLevel/7)) + totalStrengthExp;
		remainingStrengthLevelExp = nextStrengthLevel - totalStrengthExp;
	}
	if(totalDefenseExp >= nextDefenseLevel){
		defenseLevel += 1;
		combinedCombatLevels += 1;
		nextDefenseLevel = Math.floor(defenseLevel + 74.5 * Math.pow(2, defenseLevel/7)) + totalDefenseExp;
		remainingDefenseLevelExp = nextDefenseLevel - totalDefenseExp;
	}
	if(totalMagicExp >= nextMagicLevel){
		magicLevel += 1;
		combinedCombatLevels += 1;
		nextMagicLevel = Math.floor(magicLevel + 74.5 * Math.pow(2, magicLevel/7)) + totalMagicExp;
		remainingMagicLevelExp = nextMagicLevel - totalMagicExp;
	}
	if(totalHpExp >= nextHpLevel){
		hpLevel += 1;
		combinedCombatLevels += 1;
		nextHpLevel = Math.floor(hpLevel + 74.5 * Math.pow(2, hpLevel/7)) + totalHpExp;
		remainingHpLevelExp = nextHpLevel - totalHpExp;
	}
	
	combatLevel = Math.floor(combinedCombatLevels / 3);
	
}

function updateFishingButtons(){
	if(totalShrimp > 0){
		document.getElementById("sellShrimpButton").disabled = false;
	}
	else{
		document.getElementById("sellShrimpButton").disabled = true;
	}
	if(totalTrout > 0){
		document.getElementById("sellTroutButton").disabled = false;
	}
	else{
		document.getElementById("sellTroutButton").disabled = true;
	}
	if(totalSalmon > 0){
		document.getElementById("sellSalmonButton").disabled = false;
	}
	else{
		document.getElementById("sellSalmonButton").disabled = true;
	}
	if(totalTuna > 0){
		document.getElementById("sellTunaButton").disabled = false;
	}
	else{
		document.getElementById("sellTunaButton").disabled = true;
	}
	if(totalLobster > 0){
		document.getElementById("sellLobsterButton").disabled = false;
	}
	else{
		document.getElementById("sellLobsterButton").disabled = true;
	}
	if(totalSwordfish > 0){
		document.getElementById("sellSwordfishButton").disabled = false;
	}
	else{
		document.getElementById("sellSwordfishButton").disabled = true;
	}
	if(totalShark > 0){
		document.getElementById("sellSharkButton").disabled = false;
	}
	else{
		document.getElementById("sellSharkButton").disabled = true;
	}
	if(totalGold >= shrimpFishermanVal && numShrimpFisherman < fishingLevel){
		document.getElementById("shrimpFishermanButton").disabled = false;
	}
	else{
		document.getElementById("shrimpFishermanButton").disabled = true;
	}
	if(totalGold >= troutFishermanVal && numTroutFisherman < (fishingLevel - 15) && fishingLevel >= 15){
		document.getElementById("troutFishermanButton").disabled = false;
	}
	else{
		document.getElementById("troutFishermanButton").disabled = true;
	}
	if(totalGold >= salmonFishermanVal && numSalmonFisherman < (fishingLevel - 20) && fishingLevel >= 20){
		document.getElementById("salmonFishermanButton").disabled = false;
	}
	else{
		document.getElementById("salmonFishermanButton").disabled = true;
	}
	if(totalGold >= tunaFishermanVal && numTunaFisherman < (fishingLevel - 30) && fishingLevel >= 30){
		document.getElementById("tunaFishermanButton").disabled = false;
	}
	else{
		document.getElementById("tunaFishermanButton").disabled = true;
	}
	if(totalGold >= lobsterFishermanVal && numLobsterFisherman < (fishingLevel - 40) && fishingLevel >= 40){
		document.getElementById("lobsterFishermanButton").disabled = false;
	}
	else{
		document.getElementById("lobsterFishermanButton").disabled = true;
	}
	if(totalGold >= swordfishFishermanVal && numSwordfishFisherman < (fishingLevel - 55) && fishingLevel >= 55){
		document.getElementById("swordfishFishermanButton").disabled = false;
	}
	else{
		document.getElementById("swordfishFishermanButton").disabled = true;
	}
	if(totalGold >= sharkFishermanVal && numSharkFisherman < (fishingLevel - 76) && fishingLevel >= 76){
		document.getElementById("sharkFishermanButton").disabled = false;
	}
	else{
		document.getElementById("sharkFishermanButton").disabled = true;
	}
	if(fishingLevel >= 15){
		document.getElementById("troutButton").style.display = "block";
		document.getElementById("trout").style.display = "block";
		if(!troutFishermanHired){
			document.getElementById("troutFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 20){
		document.getElementById("salmonButton").style.display = "block";
		document.getElementById("salmon").style.display = "block";
		if(!salmonFishermanHired){
			document.getElementById("salmonFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 30){
		document.getElementById("tunaButton").style.display = "block";
		document.getElementById("tuna").style.display = "block";
		if(!tunaFishermanHired){
			document.getElementById("tunaFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 40){
		document.getElementById("lobsterButton").style.display = "block";
		document.getElementById("lobster").style.display = "block";
		if(!lobsterFishermanHired){
			document.getElementById("lobsterFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 55){
		document.getElementById("swordfishButton").style.display = "block";
		document.getElementById("swordfish").style.display = "block";
		if(!swordfishFishermanHired){
			document.getElementById("swordfishFishermanButton").style.display = "block";
		}
	}
	if(fishingLevel >= 76){
		document.getElementById("sharkButton").style.display = "block";
		document.getElementById("shark").style.display = "block";
		if(!sharkFishermanHired){
			document.getElementById("sharkFishermanButton").style.display = "block";
		}
	}
}

function updateMiningButtons(){
	if(totalCopper > 0){
		document.getElementById("sellCopperButton").disabled = false;
	}
	else{
		document.getElementById("sellCopperButton").disabled = true;
	}
	if(totalTin > 0){
		document.getElementById("sellTinButton").disabled = false;
	}
	else{
		document.getElementById("sellTinButton").disabled = true;
	}
	if(totalIron > 0){
		document.getElementById("sellIronButton").disabled = false;
	}
	else{
		document.getElementById("sellIronButton").disabled = true;
	}
	if(totalCoal > 0){
		document.getElementById("sellCoalButton").disabled = false;
	}
	else{
		document.getElementById("sellCoalButton").disabled = true;
	}
	if(totalMithril > 0){
		document.getElementById("sellMithrilButton").disabled = false;
	}
	else{
		document.getElementById("sellMithrilButton").disabled = true;
	}
	if(totalAdamantite > 0){
		document.getElementById("sellAdamantiteButton").disabled = false;
	}
	else{
		document.getElementById("sellAdamantiteButton").disabled = true;
	}
	if(totalRunite > 0){
		document.getElementById("sellRuniteButton").disabled = false;
	}
	else{
		document.getElementById("sellRuniteButton").disabled = true;
	}
	if(totalGold >= copperMinerVal && numCopperMiners < miningLevel){
		document.getElementById("copperMinerButton").disabled = false;
	}
	else{
		document.getElementById("copperMinerButton").disabled = true;
	}
	if(totalGold >= tinMinerVal && numTinMiners < miningLevel){
		document.getElementById("tinMinerButton").disabled = false;
	}
	else{
		document.getElementById("tinMinerButton").disabled = true;
	}
	if(totalGold >= ironMinerVal && numIronMiners < (miningLevel - 15) && miningLevel >= 15){
		document.getElementById("ironMinerButton").disabled = false;
	}
	else{
		document.getElementById("ironMinerButton").disabled = true;
	}
	if(totalGold >= coalMinerVal && numCoalMiners < (miningLevel - 30) && miningLevel >= 30){
		document.getElementById("coalMinerButton").disabled = false;
	}
	else{
		document.getElementById("coalMinerButton").disabled = true;
	}
	if(totalGold >= mithrilMinerVal && numMithrilMiners < (miningLevel - 55) && miningLevel >= 55){
		document.getElementById("mithrilMinerButton").disabled = false;
	}
	else{
		document.getElementById("mithrilMinerButton").disabled = true;
	}
	if(totalGold >= adamantiteMinerVal && numAdamantiteMiners < (miningLevel - 70) && miningLevel >= 70){
		document.getElementById("adamantiteMinerButton").disabled = false;
	}
	else{
		document.getElementById("adamantiteMinerButton").disabled = true;
	}
	if(totalGold >= runiteMinerVal && numRuniteMiners < (miningLevel - 85) && miningLevel >= 85){
		document.getElementById("runiteMinerButton").disabled = false;
	}
	else{
		document.getElementById("runiteMinerButton").disabled = true;
	}
	if(miningLevel >= 15){
		document.getElementById("ironButton").style.display = "block";
		document.getElementById("iron").style.display = "block";
		if(!ironMinerHired){
			document.getElementById("ironMinerButton").style.display = "block";
		}
	}
	if(miningLevel >= 30){
		document.getElementById("coalButton").style.display = "block";
		document.getElementById("coal").style.display = "block";
		if(!coalMinerHired){
			document.getElementById("coalMinerButton").style.display = "block";
		}
	}
	if(miningLevel >= 55){
		document.getElementById("mithrilButton").style.display = "block";
		document.getElementById("mithril").style.display = "block";
		if(!mithrilMinerHired){
			document.getElementById("mithrilMinerButton").style.display = "block";
		}
	}
	if(miningLevel >= 70){
		document.getElementById("adamantiteButton").style.display = "block";
		document.getElementById("adamantite").style.display = "block";
		if(!adamantiteMinerHired){
			document.getElementById("adamantiteMinerButton").style.display = "block";
		}
	}
	if(miningLevel >= 85){
		document.getElementById("runiteButton").style.display = "block";
		document.getElementById("runite").style.display = "block";
		if(!runiteMinerHired){
			document.getElementById("runiteMinerButton").style.display = "block";
		}
	}
}

function updateWoodcutButtons(){
	if(totalLogs > 0){
		document.getElementById("sellLogButton").disabled = false;
	}
	else{
		document.getElementById("sellLogButton").disabled = true;
	}
	if(totalOak > 0){
		document.getElementById("sellOakButton").disabled = false;
	}
	else{
		document.getElementById("sellOakButton").disabled = true;
	}
	if(totalWillow > 0){
		document.getElementById("sellWillowButton").disabled = false;
	}
	else{
		document.getElementById("sellWillowButton").disabled = true;
	}
	if(totalMaple > 0){
		document.getElementById("sellMapleButton").disabled = false;
	}
	else{
		document.getElementById("sellMapleButton").disabled = true;
	}
	if(totalYew > 0){
		document.getElementById("sellYewButton").disabled = false;
	}
	else{
		document.getElementById("sellYewButton").disabled = true;
	}
	if(totalMagic > 0){
		document.getElementById("sellMagicButton").disabled = false;
	}
	else{
		document.getElementById("sellMagicButton").disabled = true;
	}
	if(totalGold >= loggerVal && numLoggers < woodcuttingLevel){
		document.getElementById("loggerButton").disabled = false;
	}
	else{
		document.getElementById("loggerButton").disabled = true;
	}
	if(totalGold >= oakLoggerVal && numOakLoggers < (woodcuttingLevel - 15) && woodcuttingLevel >= 15){
		document.getElementById("oakLoggerButton").disabled = false;
	}
	else{
		document.getElementById("oakLoggerButton").disabled = true;
	}
	if(totalGold >= willowLoggerVal && numWillowLoggers < (woodcuttingLevel - 30) && woodcuttingLevel >= 30){
		document.getElementById("willowLoggerButton").disabled = false;
	}
	else{
		document.getElementById("willowLoggerButton").disabled = true;
	}
	if(totalGold >= mapleLoggerVal && numMapleLoggers < (woodcuttingLevel - 45) && woodcuttingLevel >= 45){
		document.getElementById("mapleLoggerButton").disabled = false;
	}
	else{
		document.getElementById("mapleLoggerButton").disabled = true;
	}
	if(totalGold >= yewLoggerVal && numYewLoggers < (woodcuttingLevel - 60) && woodcuttingLevel >= 60){
		document.getElementById("yewLoggerButton").disabled = false;
	}
	else{
		document.getElementById("yewLoggerButton").disabled = true;
	}
	if(totalGold >= magicLoggerVal && numMagicLoggers < (woodcuttingLevel - 75) && woodcuttingLevel >= 75){
		document.getElementById("magicLoggerButton").disabled = false;
	}
	else{
		document.getElementById("magicLoggerButton").disabled = true;
	}
	if(woodcuttingLevel >= 15){
		document.getElementById("oakButton").style.display = "block";
		document.getElementById("oak").style.display = "block";
		if(!oakLoggerHired){
			document.getElementById("oakLoggerButton").style.display = "block";
		}
	}
	if(woodcuttingLevel >= 30){
		document.getElementById("willowButton").style.display = "block";
		document.getElementById("willow").style.display = "block";
		if(!willowLoggerHired){
			document.getElementById("willowLoggerButton").style.display = "block";
		}
	}
	if(woodcuttingLevel >= 45){
		document.getElementById("mapleButton").style.display = "block";
		document.getElementById("maple").style.display = "block";
		if(!mapleLoggerHired){
			document.getElementById("mapleLoggerButton").style.display = "block";
		}
	}
	if(woodcuttingLevel >= 60){
		document.getElementById("yewButton").style.display = "block";
		document.getElementById("yew").style.display = "block";
		if(!yewLoggerHired){
			document.getElementById("yewLoggerButton").style.display = "block";
		}
	}
	if(woodcuttingLevel >= 75){
		document.getElementById("magicButton").style.display = "block";
		document.getElementById("magicTree").style.display = "block";
		if(!magicLoggerHired){
			document.getElementById("magicLoggerButton").style.display = "block";
		}
	}
}

function updateLogs(){
	document.getElementById("logs").innerHTML = "Logs: " + totalLogs;
	document.getElementById("oak").innerHTML = "Oaks: " + totalOak;
	document.getElementById("willow").innerHTML = "Willows: " + totalWillow;
	document.getElementById("maple").innerHTML = "Maples: " + totalMaple;
	document.getElementById("yew").innerHTML = "Yews: " + totalYew;
	document.getElementById("magicTree").innerHTML = "Magics: " + totalMagic;
	document.getElementById("woodcutExp").innerHTML = "Woodcutting Level: " + woodcuttingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalWoodcuttingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingWoodcutLevelExp.toLocaleString();
}

function updateOres(){
	document.getElementById("copper").innerHTML = "Copper: " + totalCopper;
	document.getElementById("tin").innerHTML = "Tin: " + totalTin;
	document.getElementById("iron").innerHTML = "Iron: " + totalIron;
	document.getElementById("coal").innerHTML = "Coal: " + totalCoal;
	document.getElementById("mithril").innerHTML = "Mithril: " + totalMithril;
	document.getElementById("adamantite").innerHTML = "Adamantite: " + totalAdamantite;
	document.getElementById("runite").innerHTML = "Runite: " + totalRunite;
	document.getElementById("miningExp").innerHTML = "Mining Level: " + miningLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalMiningExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingMiningLevelExp.toLocaleString();
}

function updateFish(){
	document.getElementById("shrimp").innerHTML = "Shrimp: " + totalShrimp;
	document.getElementById("trout").innerHTML = "Trout: " + totalTrout;
	document.getElementById("salmon").innerHTML = "Salmon: " + totalSalmon;
	document.getElementById("tuna").innerHTML = "Tuna: " + totalTuna;
	document.getElementById("lobster").innerHTML = "Lobster: " + totalLobster;
	document.getElementById("swordfish").innerHTML = "Swordfish: " + totalSwordfish;
	document.getElementById("shark").innerHTML = "Shark: " + totalShark;
	document.getElementById("fishingExp").innerHTML = "Fishing Level: " + fishingLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalFishingExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingFishingLevelExp.toLocaleString();
}

function updateCombat(){
	document.getElementById("health").innerHTML = '\xa0\xa0\xa0\xa0\xa0\xa0' + "Your Health: " + health;
	document.getElementById("attack").innerHTML = "Attack Power: " + attackPower;
	document.getElementById("defense").innerHTML = "Defensive Power: " + defensePower;
	document.getElementById("magic").innerHTML = "Magic Power: " + magicPower;
	document.getElementById("accuracy").innerHTML = "Accuracy: " + accuracy;
	document.getElementById("speed").innerHTML = "Speed: " + speed;
	document.getElementById("enemyHp").innerHTML = "Enemy Health: " + enemyHp;
	document.getElementById("attackExp").innerHTML = "Attack Level: " + attackLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalAttackExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingAttackLevelExp.toLocaleString();
	document.getElementById("defenseExp").innerHTML = "Defense Level: " + defenseLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalDefenseExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingDefenseLevelExp.toLocaleString();
	document.getElementById("strengthExp").innerHTML = "Strength Level: " + strengthLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalStrengthExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingStrengthLevelExp.toLocaleString();
	document.getElementById("magicExp").innerHTML = "Magic Level: " + magicLevel + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalMagicExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingMagicLevelExp.toLocaleString();
	document.getElementById("combatExp").innerHTML = '&nbsp&nbsp' + "Combat Level: " + combatLevel + '\xa0\xa0\xa0' + "Hitpoints Level: " + hpLevel + '\xa0\xa0\xa0\xa0\xa0' + "Experience: " + totalHpExp.toLocaleString() + '\xa0\xa0\xa0\xa0\xa0' + "Experience to Next Level: " + remainingHpLevelExp.toLocaleString();
}

function pauseTreeSound(){
	if(document.getElementById("treeButton").style.backgroundColor == 'red' || document.getElementById("oakButton").style.backgroundColor == 'red' || document.getElementById("willowButton").style.backgroundColor == 'red' || document.getElementById("mapleButton").style.backgroundColor == 'red' || document.getElementById("yewButton").style.backgroundColor == 'red' || document.getElementById("magicButton").style.backgroundColor == 'red'){
	
	}
	else{
		soundWood.pause()
		soundWood.currentTime = 0;
	}
}

function getTreeLogs(){
	if(!moving){
		if(soundWood.paused){
			soundWood.play();
		}
		document.getElementById("treeButton").style.backgroundColor = 'red';
		document.getElementById("treeButton").disabled = true;
		logDelay = ((Math.random() + .2) * (9900 - (woodcuttingLevel * 75))) + (125 - woodcuttingLevel);
		setTimeout(function(){
			totalLogs += 1;
			totalWoodcuttingExp += normalTree;
			update();
			document.getElementById("treeButton").disabled = false;
			document.getElementById("treeButton").style.backgroundColor = 'green';
			pauseTreeSound();
		}, logDelay);
	}
}

function getOakLogs(){
	if(!moving){
		if(soundWood.paused){
			soundWood.play();
		}
		document.getElementById("oakButton").style.backgroundColor = 'red';
		document.getElementById("oakButton").disabled = true;
		oakDelay = ((Math.random() + .25) * (10000 - (woodcuttingLevel * 75))) + (220 - woodcuttingLevel);
		setTimeout(function(){
			totalOak += 1;
			totalWoodcuttingExp += oakTree;
			update();
			document.getElementById("oakButton").disabled = false;
			document.getElementById("oakButton").style.backgroundColor = 'green';
			pauseTreeSound();
		}, oakDelay);
	}
}

function getWillowLogs(){
	if(!moving){
		if(soundWood.paused){
			soundWood.play();
		}
		document.getElementById("willowButton").style.backgroundColor = 'red';
		document.getElementById("willowButton").disabled = true;
		willowDelay = ((Math.random() + .25) * (13000 - (woodcuttingLevel * 75))) + (225 - woodcuttingLevel);
		setTimeout(function(){
			totalWillow += 1;
			totalWoodcuttingExp += willowTree;
			update();
			document.getElementById("willowButton").disabled = false;
			document.getElementById("willowButton").style.backgroundColor = 'green';
			pauseTreeSound();
		}, willowDelay);
	}
}

function getMapleLogs(){
	if(!moving){
		if(soundWood.paused){
			soundWood.play();
		}
		document.getElementById("mapleButton").style.backgroundColor = 'red';
		document.getElementById("mapleButton").disabled = true;
		mapleDelay = ((Math.random() + .3) * (16000 - (woodcuttingLevel * 75))) + (450 - woodcuttingLevel);
		setTimeout(function(){
			totalMaple += 1;
			totalWoodcuttingExp += mapleTree;
			update();
			document.getElementById("mapleButton").disabled = false;
			document.getElementById("mapleButton").style.backgroundColor = 'green';
			pauseTreeSound();
		}, mapleDelay);
	}
}

function getYewLogs(){
	if(!moving){
		if(soundWood.paused){
			soundWood.play();
		}
		document.getElementById("yewButton").style.backgroundColor = 'red';
		document.getElementById("yewButton").disabled = true;
		yewDelay = ((Math.random() + .4) * (21000 - (woodcuttingLevel * 100))) + (675 - woodcuttingLevel);
		setTimeout(function(){
			totalYew += 1;
			totalWoodcuttingExp += yewTree;
			update();
			document.getElementById("yewButton").disabled = false;
			document.getElementById("yewButton").style.backgroundColor = 'green';
			pauseTreeSound();
		}, yewDelay);
	}
}

function getMagicLogs(){
	if(!moving){
		if(soundWood.paused){
			soundWood.play();
		}
		document.getElementById("magicButton").style.backgroundColor = 'red';
		document.getElementById("magicButton").disabled = true;
		magicDelay = ((Math.random() + .55) * (24000 - (woodcuttingLevel * 100))) + (875 - woodcuttingLevel);
		setTimeout(function(){
			totalMagic += 1;
			totalWoodcuttingExp += magicTree;
			update();
			document.getElementById("magicButton").disabled = false;
			document.getElementById("magicButton").style.backgroundColor = 'green';
			pauseTreeSound();
		}, magicDelay);
	}
}

function hireLogger(){
	totalGold -= loggerVal;
	numLoggers += 1;
	loggerVal = Math.floor(loggerVal * 1.1) + 100;
	updatePrice();
	update();
	if(!loggerHired){
		loggerHired = true;
		continuousLogs();
	}
}

function hireOakLogger(){
	totalGold -= oakLoggerVal;
	numOakLoggers += 1;
	oakLoggerVal = Math.floor(oakLoggerVal * 1.1) + 1000;
	updatePrice();
	update();
	if(!oakLoggerHired){
		oakLoggerHired = true;
		continuousOakLogs();
	}
}

function hireWillowLogger(){
	totalGold -= willowLoggerVal;
	numWillowLoggers += 1;
	willowLoggerVal = Math.floor(willowLoggerVal * 1.1) + 5000;
	updatePrice();
	update();
	if(!willowLoggerHired){
		willowLoggerHired = true;
		continuousWillowLogs();
	}
}

function hireMapleLogger(){
	totalGold -= mapleLoggerVal;
	numMapleLoggers += 1;
	mapleLoggerVal = Math.floor(mapleLoggerVal * 1.1) + 10000;
	updatePrice();
	update();
	if(!mapleLoggerHired){
		mapleLoggerHired = true;
		continuousMapleLogs();
	}
}

function hireYewLogger(){
	totalGold -= yewLoggerVal;
	numYewLoggers += 1;
	yewLoggerVal = Math.floor(yewLoggerVal * 1.1) + 20000;
	updatePrice();
	update();
	if(!yewLoggerHired){
		yewLoggerHired = true;
		continuousYewLogs();
	}
}

function hireMagicLogger(){
	totalGold -= magicLoggerVal;
	numMagicLoggers += 1;
	magicLoggerVal = Math.floor(magicLoggerVal * 1.1) + 50000;
	updatePrice();
	update();
	if(!magicLoggerHired){
		magicLoggerHired = true;
		continuousMagicLogs();
	}
}

function continuousLogs(){
	logDelay = ((Math.random() + .85) * (17960 - (woodcuttingLevel * 16))) + (725 - woodcuttingLevel);
	setTimeout(function(){
		totalLogs += Math.ceil(Math.random() * Math.ceil(1 * (numLoggers / 3)));
		update();
		setInterval(continuousLogs(), 100);
	}, (logDelay - (numLoggers * 270)));
}

function continuousOakLogs(){
	oakDelay = ((Math.random() + .95) * (19850 - (woodcuttingLevel * 16))) + (800 - woodcuttingLevel);
	setTimeout(function(){
		totalOak += Math.ceil(Math.random() * Math.ceil(1 * (numLoggers / 3)));
		update();
		setInterval(continuousOakLogs(), 100);
	}, (oakDelay - (numOakLoggers * 265)));
}

function continuousWillowLogs(){
	willowDelay = ((Math.random() + 1.1) * (23000 - (woodcuttingLevel * 16))) + (1000 - woodcuttingLevel);
	setTimeout(function(){
		totalWillow += Math.ceil(Math.random() * Math.ceil(1 * (numLoggers / 3)));
		update();
		setInterval(continuousWillowLogs(), 100);
	}, (willowDelay - (numWillowLoggers * 260)));
}

function continuousMapleLogs(){
	mapleDelay = ((Math.random() + 1.2) * (30000 - (woodcuttingLevel * 15))) + (1150 - woodcuttingLevel);
	setTimeout(function(){
		totalMaple += Math.ceil(Math.random() * Math.ceil(1 * (numLoggers / 3)));
		update();
		setInterval(continuousMapleLogs(), 100);
	}, (mapleDelay - (numMapleLoggers * 255)));
}

function continuousYewLogs(){
	yewDelay = ((Math.random() + 1.4) * (36000 - (woodcuttingLevel * 13))) + (1550 - woodcuttingLevel);
	setTimeout(function(){
		totalYew += Math.ceil(Math.random() * Math.ceil(1 * (numLoggers / 3)));
		update();
		setInterval(continuousYewLogs(), 100);
	}, (yewDelay - (numYewLoggers*255)));
}

function continuousMagicLogs(){
	magicDelay = ((Math.random() + 1.45) * (44000 - (woodcuttingLevel * 11))) + (2400 - woodcuttingLevel);
	setTimeout(function(){
		totalMagic += Math.ceil(Math.random() * Math.ceil(1 * (numLoggers / 3)));
		update();
		setInterval(continuousMagicLogs(), 100);
	}, (magicDelay - (numMagicLoggers * 255)));
}

function sellLog(){
	if(totalLogs > 0){
		totalLogs -=1;
		totalGold += logVal;
		update();
	}
}

function sellOak(){
	if(totalOak > 0){
		totalOak -= 1;
		totalGold += oakLogVal;
		update();
	}
}

function sellWillow(){
	if(totalWillow > 0){
		totalWillow -= 1;
		totalGold += willowLogVal;
		update();
	}
}

function sellMaple(){
	if(totalMaple > 0){
		totalMaple -= 1;
		totalGold += mapleLogVal;
		update();
	}
}

function sellYew(){
	if(totalYew > 0){
		totalYew -= 1;
		totalGold += yewLogVal;
		update();
	}
}

function sellMagic(){
	if(totalMagic > 0){
		totalMagic -= 1;
		totalGold += magicLogVal;
		update();
	}
}

//Mining
function getCopper(){
	if(!moving){
		copperDelay = ((Math.random() + .09) * (9400 - (miningLevel * 86))) + (625 - miningLevel);
		document.getElementById("copperButton").style.backgroundColor = 'red';
		document.getElementById("copperButton").disabled = true;
		setTimeout(function(){
			totalCopper += 1;
			totalMiningExp += copperOre;
			update();
			document.getElementById("copperButton").disabled = false;
			document.getElementById("copperButton").style.backgroundColor = 'cyan';
		}, copperDelay);
	}	
}

function getTin(){
	if(!moving){
		tinDelay = ((Math.random() + .09) * (9400 - (miningLevel * 86))) + (625 - miningLevel);
		document.getElementById("tinButton").style.backgroundColor = 'red';
		document.getElementById("tinButton").disabled = true;
		setTimeout(function(){
			totalTin += 1;
			totalMiningExp += tinOre;
			update();
			document.getElementById("tinButton").disabled = false;
			document.getElementById("tinButton").style.backgroundColor = 'cyan';
		}, tinDelay);
	}	
}

function getIron(){
	if(!moving){
		ironDelay = ((Math.random() + .15) * (12250 - (miningLevel * 84))) + (750 - miningLevel);
		document.getElementById("ironButton").style.backgroundColor = 'red';
		document.getElementById("ironButton").disabled = true;
		setTimeout(function(){
			totalIron += 1;
			totalMiningExp += ironOre;
			update();
			document.getElementById("ironButton").disabled = false;
			document.getElementById("ironButton").style.backgroundColor = 'cyan';
		}, ironDelay);
	}
}

function getCoal(){
	if(!moving){
		coalDelay = ((Math.random() + .25) * (14250 - (miningLevel * 82))) + (900 - miningLevel);
		document.getElementById("coalButton").style.backgroundColor = 'red';
		document.getElementById("coalButton").disabled = true;
		setTimeout(function(){
			totalCoal += 1;
			totalMiningExp += coalOre;
			update();
			document.getElementById("coalButton").disabled = false;
			document.getElementById("coalButton").style.backgroundColor = 'cyan';
		}, coalDelay);
	}
}

function getMithril(){
	if(!moving){
		mithrilDelay = ((Math.random() + .5) * (18250 - (miningLevel * 80))) + (1100 - miningLevel);
		document.getElementById("mithrilButton").style.backgroundColor = 'red';
		document.getElementById("mithrilButton").disabled = true;
		setTimeout(function(){
			totalMithril += 1;
			totalMiningExp += mithrilOre;
			update();
			document.getElementById("mithrilButton").disabled = false;
			document.getElementById("mithrilButton").style.backgroundColor = 'cyan';
		}, mithrilDelay);
	}
}

function getAdamantite(){
	if(!moving){
		adamantiteDelay = ((Math.random() + .75) * (22500 - (miningLevel * 78))) + (1600 - miningLevel);
		document.getElementById("adamantiteButton").style.backgroundColor = 'red';
		document.getElementById("adamantiteButton").disabled = true;
		setTimeout(function(){
			totalAdamantite += 1;
			totalMiningExp += adamantiteOre;
			update();
			document.getElementById("adamantiteButton").disabled = false;
			document.getElementById("adamantiteButton").style.backgroundColor = 'cyan';
		}, adamantiteDelay);
	}	
}

function getRunite(){
	if(!moving){
		runiteDelay = ((Math.random() + .9) * (38000 - (miningLevel * 68))) + 2100;
		document.getElementById("runiteButton").style.backgroundColor = 'red';
		document.getElementById("runiteButton").disabled = true;
		setTimeout(function(){
			totalRunite += 1;
			totalMiningExp += runiteOre;
			update();
			document.getElementById("runiteButton").disabled = false;
			document.getElementById("runiteButton").style.backgroundColor = 'cyan';
		}, runiteDelay);
	}
}

function sellCopper(){
	if(totalCopper > 0){
		totalCopper -=1;
		totalGold += copperVal;
		update();
	}
}

function sellTin(){
	if(totalTin > 0){
		totalTin -=1;
		totalGold += tinVal;
		update();
	}
}

function sellIron(){
	if(totalIron > 0){
		totalIron -=1;
		totalGold += ironVal;
		update();
	}
}

function sellCoal(){
	if(totalCoal > 0){
		totalCoal -=1;
		totalGold += coalVal;
		update();
	}
}

function sellMithril(){
	if(totalMithril > 0){
		totalMithril -=1;
		totalGold += mithrilVal;
		update();
	}
}

function sellAdamantite(){
	if(totalAdamantite > 0){
		totalAdamantite -=1;
		totalGold += adamantiteVal;
		update();
	}
}

function sellRunite(){
	if(totalRunite > 0){
		totalRunite -=1;
		totalGold += runiteVal;
		update();
	}
}

function hireCopperMiner(){
	totalGold -= copperMinerVal;
	numCopperMiners += 1;
	copperMinerVal = Math.floor(copperMinerVal * 1.10) + 100;
	updatePrice();
	update();
	if(!copperMinerHired){	
		copperMinerHired = true;
		continuousCopper();
	}
}

function hireTinMiner(){
	totalGold -= tinMinerVal;
	numTinMiners += 1;
	tinMinerVal = Math.floor(tinMinerVal * 1.10) + 100;
	updatePrice();
	update();
	if(!tinMinerHired){	
		tinMinerHired = true;
		continuousTin();
	}
}

function hireIronMiner(){
	totalGold -= ironMinerVal;
	numIronMiners += 1;
	ironMinerVal = Math.floor(ironMinerVal * 1.10) + 1000;
	updatePrice();
	update();
	if(!ironMinerHired){	
		ironMinerHired = true;
		continuousIron();
	}
}

function hireCoalMiner(){
	totalGold -= coalMinerVal;
	numCoalMiners += 1;
	coalMinerVal = Math.floor(coalMinerVal * 1.10) + 20000;
	updatePrice();
	update();
	if(!coalMinerHired){	
		coalMinerHired = true;
		continuousCoal();
	}
}

function hireMithrilMiner(){
	totalGold -= mithrilMinerVal;
	numMithrilMiners += 1;
	mithrilMinerVal = Math.floor(mithrilMinerVal * 1.10) + 50000;
	updatePrice();
	update();
	if(!mithrilMinerHired){
		mithrilMinerHired = true;
		continuousMithril();
	}
}

function hireAdamantiteMiner(){
	totalGold -= adamantiteMinerVal;
	numAdamantiteMiners += 1;
	adamantiteMinerVal = Math.floor(adamantiteMinerVal * 1.10) + 100000;
	updatePrice();
	update();
	if(!adamantiteMinerHired){
		adamantiteMinerHired = true;
		continuousAdamantite();
	}
}

function hireRuniteMiner(){
	totalGold -= runiteMinerVal;
	numRuniteMiners += 1;
	runiteMinerHired = true;
	runiteMinerVal = Math.floor(runiteMinerVal * 1.10) + 100000;
	updatePrice();
	update();
	if(!runiteMinerHired){
		runiteMinerHired = true;
		continuousRunite();
	}
}

function continuousCopper(){
	copperDelay = ((Math.random() + .98) * (15000 - (miningLevel * 8))) + (525 - miningLevel);
	setTimeout(function(){
		totalCopper += Math.ceil(1 * (numCopperMiners/3));
		update();
		setInterval(continuousCopper(), 100);
	}, (copperDelay - (numCopperMiners * 260)));
}

function continuousTin(){
	tinDelay = ((Math.random() + .98) * (15000 - (miningLevel * 8))) + (525 - miningLevel);
	setTimeout(function(){
		totalTin += Math.ceil(1 * (numTinMiners/3));
		update();
		setInterval(continuousTin(), 100);
	}, (tinDelay - (numTinMiners * 260)));
}

function continuousIron(){
	ironDelay = ((Math.random() + 1.3) * (16500 - (miningLevel * 6))) + (650 - miningLevel);
	setTimeout(function(){
		totalIron += Math.ceil(1 * (numIronMiners/3));
		update();
		setInterval(continuousIron(), 100);
	}, (ironDelay - (numIronMiners * 260)));
}

function continuousCoal(){
	coalDelay = ((Math.random() + 1.5) * (18500 - (miningLevel * 5))) + (850 - miningLevel);
	setTimeout(function(){
		totalCoal += Math.ceil(1 * (numCoalMiners/3));
		update();
		setInterval(continuousCoal(), 100);
	}, (coalDelay - (numCoalMiners * 260)));
}

function continuousMithril(){
	mithrilDelay = ((Math.random() + 1.65) * (20500 - (miningLevel * 3))) + (1000 - miningLevel);
	setTimeout(function(){
		totalMithril += Math.ceil(1 * (numMithrilMiners/3));
		update();
		setInterval(continuousMithril(), 100);
	}, (mithrilDelay - (numMithrilMiners * 260)));
}

function continuousAdamantite(){
	adamantiteDelay = ((Math.random() + 1.8) * (24500 - (miningLevel * 2))) + (1100 - miningLevel);
	setTimeout(function(){
		totalAdamantite += Math.ceil(1 * (numAdamantiteMiners/3));
		update();
		setInterval(continuousAdamantite(), 100);
	}, (adamantiteDelay - (numAdamantiteMiners * 260)));
}

function continuousRunite(){
	runiteDelay = ((Math.random() + 2.3) * (31000 - (miningLevel * 1))) + (1600 - miningLevel);
	setTimeout(function(){
		totalRunite += Math.ceil(1 * (numRuniteMiners/3));
		update();
		setInterval(continuousRunite(), 100);
	}, (runiteDelay - (numRuniteMiners * 260)));
}

//Fishing
function getShrimp(){
	if(!moving){
		document.getElementById("shrimpButton").style.backgroundColor = 'red';
		document.getElementById("shrimpButton").disabled = true;
		shrimpDelay = ((Math.random() + .15) * (8150 - (fishingLevel * 80))) + (650 - fishingLevel);
		setTimeout(function(){
			totalShrimp += 1;
			totalFishingExp += shrimp;
			update();
			document.getElementById("shrimpButton").disabled = false;
			document.getElementById("shrimpButton").style.backgroundColor = 'white';
		}, shrimpDelay);
	}
}

function getTrout(){
	if(!moving){
		document.getElementById("troutButton").style.backgroundColor = 'red';
		document.getElementById("troutButton").disabled = true;
		troutDelay = ((Math.random() + .2) * (9000 - (fishingLevel * 80))) + (750 - fishingLevel);
		setTimeout(function(){
			totalTrout += 1;
			totalFishingExp += trout;
			update();
			document.getElementById("troutButton").disabled = false;
			document.getElementById("troutButton").style.backgroundColor = 'white';
		}, troutDelay);
	}
}

function getSalmon(){
	if(!moving){
		document.getElementById("salmonButton").style.backgroundColor = 'red';
		document.getElementById("salmonButton").disabled = true;
		salmonDelay = ((Math.random() + .25) * (9600 - (fishingLevel * 80))) + (950 - fishingLevel);
		setTimeout(function(){
			totalSalmon += 1;
			totalFishingExp += salmon;
			update();
			document.getElementById("salmonButton").disabled = false;
			document.getElementById("salmonButton").style.backgroundColor = 'white';
		}, salmonDelay);
	}
}

function getTuna(){
	if(!moving){
		document.getElementById("tunaButton").style.backgroundColor = 'red';
		document.getElementById("tunaButton").disabled = true;
		tunaDelay = ((Math.random() + .25) * (11000 - (fishingLevel * 81))) + (1050 - fishingLevel);
		setTimeout(function(){
			totalTuna += 1;
			totalFishingExp += tuna;
			update();
			document.getElementById("tunaButton").disabled = false;
			document.getElementById("tunaButton").style.backgroundColor = 'white';
		}, tunaDelay);
	}
}

function getLobster(){
	if(!moving){
		document.getElementById("lobsterButton").style.backgroundColor = 'red';
		document.getElementById("lobsterButton").disabled = true;
		lobsterDelay = ((Math.random() + .3) * (11500 - (fishingLevel * 80))) + (1100 - fishingLevel);
		setTimeout(function(){
			totalLobster += 1;
			totalFishingExp += lobster;
			update();
			document.getElementById("lobsterButton").disabled = false;
			document.getElementById("lobsterButton").style.backgroundColor = 'white';
		}, lobsterDelay);
	}
}

function getSwordfish(){
	if(!moving){
		document.getElementById("swordfishButton").style.backgroundColor = 'red';
		document.getElementById("swordfishButton").disabled = true;
		swordfishDelay = ((Math.random() + .45) * (14000 - (fishingLevel * 78))) + (1200 - fishingLevel);
		setTimeout(function(){
			totalSwordfish += 1;
			totalFishingExp += swordfish;
			update();
			document.getElementById("swordfishButton").disabled = false;
			document.getElementById("swordfishButton").style.backgroundColor = 'white';
		}, swordfishDelay);
	}
}

function getShark(){
	if(!moving){
		document.getElementById("sharkButton").style.backgroundColor = 'red';
		document.getElementById("sharkButton").disabled = true;
		sharkDelay = ((Math.random() + .8) * (24000 - (fishingLevel * 30))) + (1350 - fishingLevel);
		setTimeout(function(){
			totalShark+= 1;
			totalFishingExp += shark;
			update();
			document.getElementById("sharkButton").disabled = false;
			document.getElementById("sharkButton").style.backgroundColor = 'white';
		}, sharkDelay);
	}
}

function sellShrimp(){
	if(totalShrimp > 0){
		totalShrimp -= 1;
		totalGold += shrimpVal;
		update();
	}
}

function sellTrout(){
	if(totalTrout > 0){
		totalTrout -= 1;
		totalGold += troutVal;
		update();
	}
}

function sellSalmon(){
	if(totalSalmon > 0){
		totalSalmon -= 1;
		totalGold += salmonVal;
		update();
	}
}

function sellTuna(){
	if(totalTuna > 0){
		totalTuna -= 1;
		totalGold += tunaVal;
		update();
	}
}

function sellLobster(){
	if(totalLobster > 0){
		totalLobster -= 1;
		totalGold += lobsterVal;
		update();
	}
}

function sellSwordfish(){
	if(totalSwordfish > 0){
		totalSwordfish -= 1;
		totalGold += swordfishVal;
		update();
	}
}

function sellShark(){
	if(totalShark > 0){
		totalShark -= 1;
		totalGold += sharkVal;
		update();
	}
}

function hireShrimpFisherman(){
	totalGold -= shrimpFishermanVal;
	numShrimpFisherman += 1;
	shrimpFishermanVal = Math.floor(shrimpFishermanVal * 1.10) + 100;
	updatePrice();
	update();
	if(!shrimpFishermanHired){	
		shrimpFishermanHired = true;
		continuousShrimp();
	}
}

function hireTroutFisherman(){
	totalGold -= troutFishermanVal;
	numTroutFisherman += 1;
	troutFishermanVal = Math.floor(troutFishermanVal * 1.10) + 200;
	updatePrice();
	update();
	if(!troutFishermanHired){	
		troutFishermanHired = true;
		continuousTrout();
	}
}

function hireSalmonFisherman(){
	totalGold -= salmonFishermanVal;
	numSalmonFisherman += 1;
	salmonFishermanVal = Math.floor(salmonFishermanVal * 1.10) + 500;
	updatePrice();
	update();
	if(!salmonFishermanHired){	
		salmonFishermanHired = true;
		continuousSalmon();
	}
}

function hireTunaFisherman(){
	totalGold -= tunaFishermanVal;
	numTunaFisherman += 1;
	tunaFishermanVal = Math.floor(tunaFishermanVal * 1.10) + 1000;
	updatePrice();
	update();
	if(!tunaFishermanHired){	
		tunaFishermanHired = true;
		continuousTuna();
	}
}

function hireLobsterFisherman(){
	totalGold -= lobsterFishermanVal;
	numLobsterFisherman += 1;
	lobsterFishermanVal = Math.floor(lobsterFishermanVal * 1.10) + 10000;
	updatePrice();
	update();
	if(!lobsterFishermanHired){	
		lobsterFishermanHired = true;
		continuousLobster();
	}
}

function hireSwordfishFisherman(){
	totalGold -= swordfishFishermanVal;
	numSwordfishFisherman += 1;
	swordfishFishermanVal = Math.floor(swordfishFishermanVal * 1.10) + 25000;
	updatePrice();
	update();
	if(!swordfishFishermanHired){	
		swordfishFishermanHired = true;
		continuousSwordfish();
	}
}

function hireSharkFisherman(){
	totalGold -= sharkFishermanVal;
	numSharkFisherman += 1;
	sharkFishermanVal = Math.floor(sharkFishermanVal * 1.10) + 100000;
	updatePrice();
	update();
	if(!sharkFishermanHired){	
		sharkFishermanHired = true;
		continuousShark();
	}
}

function continuousShrimp(){
	shrimpDelay = ((Math.random() + .95) * (12000 - (fishingLevel * 20))) + (725 - fishingLevel);
	setTimeout(function(){
		totalShrimp += Math.ceil(1 * (numShrimpFisherman/3));
		update();
		setInterval(continuousShrimp(), 100);
	}, (shrimpDelay - (numShrimpFisherman * 260)));
}

function continuousTrout(){
	troutDelay = ((Math.random() + .98) * (13000 - (fishingLevel * 18))) + (825 - fishingLevel);
	setTimeout(function(){
		totalTrout += Math.ceil(1 * (numTroutFisherman/3));
		update();
		setInterval(continuousTrout(), 100);
	}, (troutDelay - (numTroutFisherman * 260)));
}

function continuousSalmon(){
	salmonDelay = ((Math.random() + 1.0) * (13500 - (fishingLevel * 15))) + (925 - fishingLevel);
	setTimeout(function(){
		totalSalmon += Math.ceil(1 * (numSalmonFisherman/3));
		update();
		setInterval(continuousSalmon(), 100);
	}, (salmonDelay - (numSalmonFisherman * 260)));
}

function continuousTuna(){
	tunaDelay = ((Math.random() + 1.02) * (14500 - (fishingLevel * 12))) + (1025 - fishingLevel);
	setTimeout(function(){
		totalTuna += Math.ceil(1 * (numTunaFisherman/3));
		update();
		setInterval(continuousTuna(), 100);
	}, (tunaDelay - (numTunaFisherman * 260)));
}

function continuousLobster(){
	lobsterDelay = ((Math.random() + 1.08) * (16000 - (fishingLevel * 10))) + (1150 - fishingLevel);
	setTimeout(function(){
		totalLobster += Math.ceil(1 * (numLobsterFisherman/3));
		update();
		setInterval(continuousLobster(), 100);
	}, (lobsterDelay - (numLobsterFisherman * 260)));
}

function continuousSwordfish(){
	swordfishDelay = ((Math.random() + 1.1) * (18000 - (fishingLevel * 8))) + (1200 - fishingLevel);
	setTimeout(function(){
		totalSwordfish += Math.ceil(1 * (numSwordfishFisherman/3));
		update();
		setInterval(continuousSwordfish(), 100);
	}, (swordfishDelay - (numSwordfishFisherman * 260)));
}

function continuousShark(){
	sharkDelay = ((Math.random() + 1.4) * (22000 - (fishingLevel * 4))) + (2250 - fishingLevel);
	setTimeout(function(){
		totalShark += Math.ceil(1 * (numSharkFisherman/3));
		update();
		setInterval(continuousShark(), 100);
	}, (sharkDelay - (numSharkFisherman * 260)));
}

//Combat
function fightGoblin(){
	document.getElementById("goblinButton").style.backgroundColor = "green";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Goblin";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 5";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function fightSkeleton(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "green";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Skeleton";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 15";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function fightGiant(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "green";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Giant";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 25";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function fightGhost(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "green";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Ghost";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 30";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function fightDemon(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "green";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Demon";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 50";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function fightHellhound(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "green";
	document.getElementById("dragonButton").style.backgroundColor = "black";
	document.getElementById("combatText").innerHTML = "You encounter a Hellhound";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 80";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function fightDragon(){
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "green";
	document.getElementById("combatText").innerHTML = "You encounter a Dragon";
	document.getElementById("enemyHp").innerHTML = "Enemy Health: 120";
	document.getElementById("goblinButton").disabled = true;
	document.getElementById("skeletonButton").disabled = true;
	document.getElementById("giantButton").disabled = true;
	document.getElementById("ghostButton").disabled = true;
	document.getElementById("demonButton").disabled = true;
	document.getElementById("hellhoundButton").disabled = true;
	document.getElementById("dragonButton").disabled = true;
	getEnemy();
}

function goblinLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 75);
		if(roll < 25){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 25 && roll < 50){
			totalGold += 25;
			document.getElementById("combatText").innerHTML = "You loot 25 gold pieces";
		}
		else if(roll >= 50 && roll < 60){
			woodenAxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden axe";
		}
		else if(roll >= 60 && roll < 70){
			woodenPickaxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden pickaxe";
		}
		else if(roll >= 70 && roll <= 75){
			woodenSword += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden sword";
		}
	}
	update();
}

function skeletonLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 80);
		if(roll < 30){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 30 && roll < 60){
			totalGold += 35;
			document.getElementById("combatText").innerHTML = "You loot 35 gold pieces";
		}
		else if(roll >= 60 && roll < 70){
			woodenPlatelegs += 1;
			document.getElementById("combatText").innerHTML = "You loot wooden platelegs";
		}
		else if(roll >= 70 && roll < 80){
			woodenPlatebody += 1;
			document.getElementById("combatText").innerHTML = "You loot a wooden platebody";
		}
	}
	update();
}

function giantLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 81);
		if(roll < 10){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 10 && roll < 50){
			totalGold += 50;
			document.getElementById("combatText").innerHTML = "You loot 50 gold pieces";
		}
		else if(roll >= 50 && roll < 60){
			ironSword += 1;
			document.getElementById("combatText").innerHTML = "You loot an iron sword";
		}
		else if(roll >= 60 && roll < 70){
			ironHarpoon += 1;
			document.getElementById("combatText").innerHTML = "You loot an iron harpoon";
		}
		else if(roll >= 70 && roll < 80){
			ironHelmet += 1;
			document.getElementById("combatText").innerHTML = "You loot an iron helmet";
		}
		else if(roll > 80 && roll < 81){
			sapphire += 1;
			document.getElementById("combatText").innerHTML = "You loot a sapphire";
		}
	}
	update();
}

function ghostLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 71);
		if(roll < 40){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 40 && roll < 60){
			totalGold += 70;
			document.getElementById("combatText").innerHTML = "You loot 70 gold pieces";
		}
		else if(roll >= 60 && roll < 65){
			steelPickaxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a steel pickaxe";
		}
		else if(roll >= 65 && roll < 70){
			steelAxe += 1;
			document.getElementById("combatText").innerHTML = "You loot a steel axe";
		}
		else if(roll >= 70 && roll < 71){
			emerald += 1;
			document.getElementById("combatText").innerHTML = "You loot an emerald";
		}
	}
	update();
}

function demonLoot(){
	if(enemyHp <= 0){
		roll = (Math.random() * 251);
		if(roll < 20){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 20 && roll < 50){
			totalGold += 150;
			document.getElementById("combatText").innerHTML = "You loot 150 gold pieces";
		}
		else if(roll >= 60 && roll < 70){
			ruby += 1;
			document.getElementById("combatText").innerHTML = "You loot a ruby";
		}
		else if(roll >= 70 && roll < 80){
			totalMagic += 1;
			document.getElementById("combatText").innerHTML = "You loot a magic log";
		}
		else if(roll >= 80 && roll < 100){
			totalMithril += 1;
			document.getElementById("combatText").innerHTML = "You loot a mithril ore";
		}
		else if(roll >= 100 && roll < 110){
			totalYew += 3;
			document.getElementById("combatText").innerHTML = "You loot 3 yew logs";
		}
		else if(roll >= 110 && roll < 130){
			totalCoal += 10;
			document.getElementById("combatText").innerHTML = "You loot 10 coal";
		}
		else if(roll >= 130 && roll < 140){
			sapphireAmulet += 1;
			document.getElementById("combatText").innerHTML = "You loot a sapphire amulet";
		}
		else if(roll >= 140 && roll < 145){
			runiteOre += 1;
			document.getElementById("combatText").innerHTML = "You loot a runite ore";
		}
		else if(roll >= 145 && roll < 150){
			diamond += 1;
			document.getElementById("combatText").innerHTML = "You loot a diamond";
		}
		else if(roll >= 150 && roll < 200){
			totalOak += 15;
			document.getElementById("combatText").innerHTML = "You loot 15 oak logs";
		}
		else if(roll >= 200 && roll < 220){
			totalLobster += 1;
			document.getElementById("combatText").innerHTML = "You loot a lobster";
		}
		else if(roll >= 220 && roll < 221){
			demonicRing += 1;
			document.getElementById("combatText").innerHTML = "You loot a demonic ring";
		}
	}
	update();
}

function hellhoundLoot(){
	if(enemyHp <= 0){
		roll = Math.random() * 256;
		if(roll < 256){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
	}
	update();
}

function dragonLoot(){
	if(enemyHp <= 0){
		roll = Math.random() * 256
		if(roll < 20){
			document.getElementById("combatText").innerHTML = "You loot nothing";
		}
		else if(roll >= 20 && roll < 255){
			totalGold += 1500;
			document.getElementById("combatText").innerHTML = "You loot 1500 gold";
		}
		else if(roll >= 255 && roll < 256){
			draconicVisage += 1;
			document.getElementById("combatText").innerHTML = "You loot a draconic visage";
		}
	}
	update();
}

function setAttack(){
	attackStyle = 0;
}

function setStrength(){
	attackStyle = 1;
}

function setDefense(){
	attackStyle = 2;
}

function attackEnemy(){
	if(enemy == 0){
		if(Math.random() * accuracy >= .15){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Goblin for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 2) - (defensePower * .065 + defenseLevel * .15));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Goblin hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Goblin missed";
		}
		goblinLoot();
	}
	else if(enemy == 1){
		if(Math.random() * accuracy >= 2){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Skeleton for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 9) - (defensePower * .055 + defenseLevel * .09));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Skeleton hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Skeleton missed";
		}
		skeletonLoot();
	}
	else if(enemy == 2){
		if(Math.random() * accuracy >= 8){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Giant for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 14) - (defensePower * .05 + defenseLevel * .09));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Giant hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Giant missed";
		}
		giantLoot();
	}
	else if(enemy == 3){
		if(Math.random() * accuracy >= 15){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Ghost for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.floor((Math.random() * 18) - (defensePower * .045 + defenseLevel * .09));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Ghost hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Ghost missed";
		}
		ghostLoot();
	}
	else if(enemy == 4){
		if(Math.random() * accuracy >= 24){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Demon for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.ceil((Math.random() * 22) - (defensePower * .04 + defenseLevel * .085));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Demon hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Demon missed";
		}
		demonLoot();
	}
	else if(enemy == 5){
		if(Math.random() * accuracy >= 30){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Hellhound for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.ceil((Math.random() * 25) - (defensePower * .04 + defenseLevel * .085));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Hellhound hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Hellhound missed";
		}
		hellhoundLoot();
	}
	else if(enemy == 6){
		if(Math.random() * accuracy >= 35){
			hit = Math.floor((Math.random() * ((strengthLevel * .4) + (attackPower * .2))) + Math.ceil(((attackPower + strengthLevel) / 64)));
			enemyHp -= hit;
			document.getElementById("combatText").innerHTML = "You hit Dragon for: " + hit;
		}
		else{
			hit = 0;
			document.getElementById("combatText").innerHTML = "You missed";
		}
		
		fightExp = hit * 4;
		
		hit = Math.ceil((Math.random() * 35) - (defensePower * .035 + defenseLevel * .08));
		
		if(hit > 0){
			health = health - hit;
			document.getElementById("enemyText").innerHTML = "Dragon hit: " + hit;
		}
		else{
			document.getElementById("enemyText").innerHTML = "Dragon missed";
		}
		dragonLoot();
	}
	
	if(enemy < 7){
		if(attackStyle == 0){
			totalAttackExp += fightExp;
		}
		else if(attackStyle == 1){
			totalStrengthExp += fightExp;
		}
		else if(attackStyle == 2){
			totalDefenseExp += fightExp;
		}
		
		totalHpExp += Math.floor(fightExp / 3);
	}
	
	if(health <= 0){
		health = hpLevel;
		enemyHp = "No enemy";
		update();
		document.getElementById("death").style.display = "block";
		getLoss();
		document.body.style.backgroundColor = "black";
		setTimeout(travelForest, 20000);
		document.getElementById("Combat").style.display = "none";
		document.getElementById("bottom").style.display = "none";
		document.getElementById("enemyText").innerHTML = "\xa0"
		enableCombatButtons();
		document.getElementById("combatText").innerHTML = "You died...";
		enemy = 7;
	}
	
	if(enemyHp <= 0){
		enemy = 7;
		enemyHp = "dead";
		document.getElementById("enemyText").innerHTML = "You killed an enemy!";
		enableCombatButtons();
	}
	
	update();
}

function getLoss(){
	document.getElementById("loss").innerHTML = "You lost: " + totalLogs + " Logs<br>" + "You lost: " + totalOak + " Oak Logs<br>" + "You lost: " + totalWillow + " Willow Logs<br>" + "You lost: " + totalMaple + " Maple Logs<br>" + "You lost: " + totalYew + " Yew Logs<br>" + "You lost: " + totalMagic + " Magic Logs<br>" + "You lost: " + totalCopper + " Copper Ores<br>" + "You lost: " + totalTin + " Tin Ores<br>" + "You lost: " + totalIron + " Iron Ores<br>" + "You lost: " + totalCoal + " Coal<br>" + "You lost: " + totalMithril + " Mithril Ores<br>" + "You lost: " + totalAdamantite + " Adamantite Ores<br>" + "You lost: " + totalRunite + " Runite Ores<br>" + "You lost: " + totalShrimp + " Shrimp<br>" + "You lost: " + totalTrout + " Trout<br>" + "You lost: " + totalSalmon + " Salmon<br>" + "You lost: " + totalTuna + " Tuna<br>" + "You lost: " + totalLobster + " Lobsters<br>" + "You lost: " + totalSwordfish + " Swordfish<br>" + "You lost: " + totalShark + " Sharks<br>" + "You lost: All your equipment";
	totalLogs = 0;
	totalOak = 0;
	totalWillow = 0;
	totalMaple = 0;
	totalYew = 0;
	totalMagic = 0;
	
	totalCopper = 0;
	totalTin = 0;
	totalIron = 0;
	totalCoal = 0;
	totalMithril = 0;
	totalAdamantite = 0;
	totalRunite = 0;
	
	totalShrimp = 0;
	totalTrout = 0;
	totalSalmon = 0;
	totalTuna = 0;
	totalLobster = 0;
	totalSwordfish = 0;
	totalShark = 0;
	
	stick = 1;
	woodenAxe = 0;
	bronzeAxe = 0;
	ironAxe = 0;
	steelAxe = 0;
	mithrilAxe = 0;
	adamantiteAxe = 0;
	runiteAxe = 0;

	woodenPickaxe = 0;
	bronzePickaxe = 0;
	ironPickaxe = 0;
	steelPickaxe = 0;
	mithrilPickaxe = 0;
	adamantitePickaxe = 0;
	runitePickaxe = 0;

	woodenSword = 0;
	bronzeSword = 0;
	ironSword = 0;
	steelSword = 0;
	mithrilSword = 0;
	adamantiteSword = 0;
	runiteSword = 0;

	woodenHelmet = 0;
	bronzeHelmet = 0;
	ironHelmet = 0;
	steelHelmet = 0;
	mithrilHelmet = 0;
	adamantiteHelmet = 0;
	runiteHelmet = 0;

	woodenChestplate = 0;
	bronzeChestplate = 0;
	ironChestplate = 0;
	steelChestplate = 0;
	mithrilChestplate = 0;
	adamantiteChestplate = 0;
	runiteChestplate = 0;

	woodenPlatelegs = 0;
	bronzePlatelegs = 0;
	ironPlatelegs = 0;
	steelPlatelegs = 0;
	mithrilPlatelegs = 0;
	adamantitePlatelegs = 0;
	runitePlatelegs = 0;

	sapphireAmulet = 0;
	emeraldAmulet = 0;
	rubyAmulet = 0;
	diamondAmulet = 0;
	dragonstoneAmulet = 0;
	onyxAmulet = 0;
	zenyteAmulet = 0;

	woodenHarpoon = 0;
	bronzeHarpoon = 0;
	ironHarpoon = 0;
	steelHarpoon = 0;
	mithrilHarpoon = 0;
	adamantiteHarpoon = 0;
	runiteHarpoon = 0;
	
	draconicVisage = 0;
	demonicRing = 0;
	
	update();
}

function getEnemy(){
	if(document.getElementById("goblinButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Goblin!";
		enemyHp = 5;
		enemy = 0;
	}
	else if(document.getElementById("skeletonButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Skeleton!";
		enemyHp = 15;
		enemy = 1;
	}
	else if(document.getElementById("giantButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Giant!";
		enemyHp = 25;
		enemy = 2;
	}
	else if(document.getElementById("ghostButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Ghost!";
		enemyHp = 30;
		enemy = 3;
	}
	else if(document.getElementById("demonButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Demon!";
		enemyHp = 50;
		enemy = 4;
	}
	else if(document.getElementById("hellhoundButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Hellhound!";
		enemyHp = 80;
		enemy = 5;
	}
	else if(document.getElementById("dragonButton").style.backgroundColor == "green"){
		document.getElementById("enemyText").innerHTML = "You are fighting a Dragon!";
		enemyHp = 120;
		enemy = 6;
	}
	
	update();
}

function enableCombatButtons(){
	document.getElementById("strengthButton").disabled = false;
	document.getElementById("defenseButton").disabled = false;
	document.getElementById("attackButton").disabled = false;
	document.getElementById("magicAttackButton").disabled = false;
	document.getElementById("itemButton").disabled = false;
	document.getElementById("goblinButton").disabled = false;
	document.getElementById("skeletonButton").disabled = false;
	document.getElementById("giantButton").disabled = false;
	document.getElementById("ghostButton").disabled = false;
	document.getElementById("demonButton").disabled = false;
	document.getElementById("hellhoundButton").disabled = false;
	document.getElementById("dragonButton").disabled = false;
	document.getElementById("ocean").disabled = false;
	document.getElementById("mines").disabled = false;
	document.getElementById("forest").disabled = false;
	document.getElementById("goblinButton").style.backgroundColor = "black";
	document.getElementById("skeletonButton").style.backgroundColor = "black";
	document.getElementById("giantButton").style.backgroundColor = "black";
	document.getElementById("ghostButton").style.backgroundColor = "black";
	document.getElementById("demonButton").style.backgroundColor = "black";
	document.getElementById("hellhoundButton").style.backgroundColor = "black";
	document.getElementById("dragonButton").style.backgroundColor = "black";
}

//TODO
function craft(obj){
	if(obj.id == "BronzeAxe"){
		if(totalLogs > 15 && totalGold > 25) bronzeAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 15 logs and 25 gold to buy the Bronze Axe";
			setTimeout(function(){CraftText("AxeText")}, 5000);
		}
	}
	else if(obj.id == "IronAxe"){
		if(totalOak > 50 && totalGold > 100) ironAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 50 oak logs and 100 gold to buy the Iron Axe";
			setTimeout(function(){CraftText("AxeText")}, 5000);
		}
	}
	else if(obj.id == "SteelAxe"){
		if(totalOak > 100 && totalGold > 500) steelAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 100 oak logs and 500 gold to buy the Steel Axe";
			setTimeout(function(){CraftText("AxeText")}, 5000);
		}
	}
	else if(obj.id == "MithrilAxe"){
		if(totalWillow > 250 && totalGold > 5000) mithrilAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 250 willow logs and 5000 gold to buy the Mithril Axe";
			setTimeout(function(){CraftText("AxeText")}, 5000);
		}
	}
	else if(obj.id == "AdamantAxe"){
		if(totalMaple > 500 && totalGold > 25000) adamantiteAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 500 maple logs and 25000 gold to buy the Adamant Axe";
			setTimeout(function(){CraftText("AxeText")}, 5000);
		}
	}
	else if(obj.id == "RuneAxe"){
		if(totalYew > 1000 && totalGold > 100000) steelAxe += 1;
		else{
			document.getElementById("AxeText").innerHTML = "You need 1000 yew logs and 100000 gold to buy the Rune Axe";
			setTimeout(function(){CraftText("AxeText")}, 5000);
		}
	}
}

function CraftText(id){
	document.getElementById(id).innerHTML = "";
}

function save(){
	document.cookie = "totalGoldC=" + totalGold;
	document.cookie = "remainingWoodcutLevelExpC=" + remainingWoodcutLevelExp;
	document.cookie = "remainingMiningLevelExpC=" + remainingMiningLevelExp;
	document.cookie = "remainingFishingLevelExpC=" + remainingFishingLevelExp;
	document.cookie = "nextWoodcuttingLevelC=" + nextWoodcuttingLevel; 
	document.cookie = "nextMiningLevelC=" + nextMiningLevel; 
	document.cookie = "nextFishingLevelC=" + nextFishingLevel;
	document.cookie = "totalWoodcuttingExpC=" + totalWoodcuttingExp; 
	document.cookie = "totalLogsC=" + totalLogs; 
	document.cookie = "totalOakC=" + totalOak; 
	document.cookie = "totalWillowC=" + totalWillow;
	document.cookie = "totalMapleC=" + totalMaple;
	document.cookie = "totalYewC=" + totalYew;
	document.cookie = "totalMagicC=" + totalMagic;
	document.cookie = "totalMiningExpC=" + totalMiningExp;
	document.cookie = "totalCopperC=" + totalCopper;
	document.cookie = "totalTinC=" + totalTin;
	document.cookie = "totalIronC=" + totalIron;
	document.cookie = "totalCoalC=" + totalCoal;
	document.cookie = "totalMithrilC=" + totalMithril; 
	document.cookie = "totalAdamantiteC=" + totalAdamantite; 
	document.cookie = "totalRuniteC=" + totalRunite;
	document.cookie = "totalFishingExpC=" + totalFishingExp;
	document.cookie = "totalShrimpC=" + totalShrimp; 
	document.cookie = "totalTroutC=" + totalTrout; 
	document.cookie = "totalSalmonC=" + totalSalmon; 
	document.cookie = "totalTunaC=" + totalTuna; 
	document.cookie = "totalLobsterC=" + totalLobster; 
	document.cookie = "totalSwordfishC=" + totalSwordfish; 
	document.cookie = "totalSharkC=" + totalShark;
	document.cookie = "numLoggersC=" + numLoggers; 
	document.cookie = "numOakLoggersC=" + numOakLoggers; 
	document.cookie = "numWillowLoggersC=" + numWillowLoggers; 
	document.cookie = "numMapleLoggersC=" + numMapleLoggers; 
	document.cookie = "numYewLoggersC=" + numYewLoggers; 
	document.cookie = "numMagicLoggersC=" + numMagicLoggers;
	document.cookie = "numCopperMinersC=" + numCopperMiners; 
	document.cookie = "numTinMinersC=" + numTinMiners; 
	document.cookie = "numIronMinersC=" + numIronMiners; 
	document.cookie = "numCoalMinersC=" + numCoalMiners; 
	document.cookie = "numMithrilMinersC=" + numMithrilMiners; 
	document.cookie = "numAdamantiteMinersC=" + numAdamantiteMiners; 
	document.cookie = "numRuniteMinersC=" + numRuniteMiners;
	document.cookie = "numShrimpFishermanC=" + numShrimpFisherman;
	document.cookie = "numTroutFishermanC=" + numTroutFisherman; 
	document.cookie = "numSalmonFishermanC=" + numSalmonFisherman; 
	document.cookie = "numTunaFishermanC=" + numTunaFisherman; 
	document.cookie = "numLobsterFishermanC=" + numLobsterFisherman; 
	document.cookie = "numSwordfishFishermanC=" + numSwordfishFisherman; 
	document.cookie = "numSharkFishermanC=" + numSharkFisherman; 
	document.cookie = "loggerValC=" + loggerVal; 
	document.cookie = "oakLoggerValC=" + oakLoggerVal; 
	document.cookie = "willowLoggerValC=" + willowLoggerVal; 
	document.cookie = "mapleLoggerValC=" + mapleLoggerVal; 
	document.cookie = "yewLoggerValC=" + yewLoggerVal; 
	document.cookie = "magicLoggerValC=" + magicLoggerVal;
	document.cookie = "copperMinerValC=" + copperMinerVal; 
	document.cookie = "tinMinerValC=" + tinMinerVal; 
	document.cookie = "ironMinerValC=" + ironMinerVal; 
	document.cookie = "coalMinerValC=" + coalMinerVal; 
	document.cookie = "mithrilMinerValC=" + mithrilMinerVal; 
	document.cookie = "adamantiteMinerValC=" + adamantiteMinerVal; 
	document.cookie = "runiteMinerValC=" + runiteMinerVal;
	document.cookie = "shrimpFishermanValC=" + shrimpFishermanVal; 
	document.cookie = "troutFishermanValC=" + troutFishermanVal; 
	document.cookie = "salmonFishermanValC=" + salmonFishermanVal; 
	document.cookie = "tunaFishermanValC=" + tunaFishermanVal; 
	document.cookie = "lobsterFishermanValC=" + lobsterFishermanVal;
	document.cookie = "swordfishFishermanValC=" + swordfishFishermanVal; 
	document.cookie = "sharkFishermanValC=" + sharkFishermanVal; 
	document.cookie = "sapphireC=" + sapphire; 
	document.cookie = "emeraldC=" + emerald; 
	document.cookie = "rubyC=" + ruby; 
	document.cookie = "diamondC=" + diamond; 
	document.cookie = "dragonstoneC=" + dragonstone; 
	document.cookie = "onyxC=" + onyx; 
	document.cookie = "zenyteC=" + zenyte;
}

function load(){
	totalGold = parseInt(getCookie("totalGoldC"));
	remainingWoodcutLevelExp = parseFloat(getCookie("remainingWoodcutLevelExpC"));
	remainingMiningLevelExp = parseFloat(getCookie("remainingMiningLevelExpC"));
	remainingFishingLevelExp = parseFloat(getCookie("remainingFishingLevelExpC"));
	nextWoodcuttingLevel = parseInt(getCookie("nextWoodcuttingLevelC"));
	nextMiningLevel = parseInt(getCookie("nextMiningLevelC"));
	nextFishingLevel = parseInt(getCookie("nextFishingLevelC"));
	
	totalWoodcuttingExp = parseFloat(getCookie("totalWoodcuttingExpC"));
	totalLogs = parseInt(getCookie("totalLogsC"));
	totalOak = parseInt(getCookie("totalOakC"));
	totalWillow = parseInt(getCookie("totalWillowC"));
	totalMaple = parseInt(getCookie("totalMapleC"));
	totalYew = parseInt(getCookie("totalYewC"));
	totalMagic = parseInt(getCookie("totalMagicC"));
	
	totalMiningExp = parseFloat(getCookie("totalMiningExpC"));
	totalCopper = parseInt(getCookie("totalCopperC"));
	totalTin = parseInt(getCookie("totalTinC"));
	totalIron = parseInt(getCookie("totalIronC"));
	totalCoal = parseInt(getCookie("totalCoalC"));
	totalMithril = parseInt(getCookie("totalMithrilC"));
	totalAdamantite = parseInt(getCookie("totalAdamantiteC"));
	totalRunite = parseInt(getCookie("totalRuniteC"));
	
	totalFishingExp = parseFloat(getCookie("totalFishingExpC"));
	totalShrimp = parseInt(getCookie("totalShrimpC"));
	totalTrout = parseInt(getCookie("totalTroutC"));
	totalSalmon = parseInt(getCookie("totalSalmonC"));
	totalTuna = parseInt(getCookie("totalTunaC"));
	totalLobster = parseInt(getCookie("totalLobsterC"));
	totalSwordfish = parseInt(getCookie("totalSwordfishC"));
	totalShark = parseInt(getCookie("totalSharkC"));
	
	numLoggers = parseInt(getCookie("numLoggersC"));
	numOakLoggers = parseInt(getCookie("numOakLoggersC"));
	numWillowLoggers = parseInt(getCookie("numWillowLoggersC"));
	numMapleLoggers = parseInt(getCookie("numMapleLoggersC"));
	numYewLoggers = parseInt(getCookie("numYewLoggersC"));
	numMagicLoggers = parseInt(getCookie("numMagicLoggersC"));
	
	numCopperMiners = parseInt(getCookie("numCopperMinersC"));
	numTinMiners = parseInt(getCookie("numTinMinersC"));
	numIronMiners = parseInt(getCookie("numIronMinersC"));
	numCoalMiners = parseInt(getCookie("numCoalMinersC"));
	numMithrilMiners = parseInt(getCookie("numMithrilMinersC"));
	numAdamantiteMiners = parseInt(getCookie("numAdamantiteMinersC"));
	numRuniteMiners = parseInt(getCookie("numRuniteMinersC"));		
	
	numShrimpFisherman = parseInt(getCookie("numShrimpFishermanC"));
	numTroutFisherman = parseInt(getCookie("numTroutFishermanC"));
	numSalmonFisherman = parseInt(getCookie("numSalmonFishermanC"));
	numTunaFisherman = parseInt(getCookie("numTunaFishermanC"));
	numLobsterFisherman = parseInt(getCookie("numLobsterFishermanC"));
	numSwordfishFisherman = parseInt(getCookie("numSwordfishFishermanC"));
	numSharkFisherman = parseInt(getCookie("numSharkFishermanC"));
	
	loggerVal = parseInt(getCookie("loggerValC"));
	oakLoggerVal = parseInt(getCookie("oakLoggerValC"));
	willowLoggerVal = parseInt(getCookie("willowLoggerValC"));
	mapleLoggerVal = parseInt(getCookie("mapleLoggerValC"));
	yewLoggerVal = parseInt(getCookie("yewLoggerValC"));
	magicLoggerVal = parseInt(getCookie("magicLoggerValC"));
	
	copperMinerVal = parseInt(getCookie("copperMinerValC"));
	tinMinerVal = parseInt(getCookie("tinMinerValC"));
	ironMinerVal = parseInt(getCookie("ironMinerValC"));
	coalMinerVal = parseInt(getCookie("coalMinerValC"));
	mithrilMinerVal = parseInt(getCookie("mithrilMinerValC"));
	adamantiteMinerVal = parseInt(getCookie("adamantiteMinerValC"));
	runiteMinerVal = parseInt(getCookie("runiteMinerValC"));
	
	shrimpFishermanVal = parseInt(getCookie("shrimpFishermanValC"));
	troutFishermanVal = parseInt(getCookie("troutFishermanValC"));
	salmonFishermanVal = parseInt(getCookie("salmonFishermanValC"));
	tunaFishermanVal = parseInt(getCookie("tunaFishermanValC"));
	lobsterFishermanVal = parseInt(getCookie("lobsterFishermanValC"));
	swordfishFishermanVal = parseInt(getCookie("swordfishFishermanValC"));
	sharkFishermanVal = parseInt(getCookie("sharkFishermanValC"));
	
	sapphire = parseInt(getCookie("sapphireC"));
	emerald = parseInt(getCookie("emeraldC"));
	ruby = parseInt(getCookie("rubyC"));
	diamond = parseInt(getCookie("diamondC"));
	dragonstone = parseInt(getCookie("dragonstoneC"));
	onyx = parseInt(getCookie("onyxC"));
	zenyte = parseInt(getCookie("zenyteC"));
	
	update();
}

function getCookie(cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++){
		var c = ca[i];
		while(c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0){
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


function travelMines(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "block";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("mines").style.display = "none";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#999999";
}

function travelForest(){
	document.getElementById("Woodcutting").style.display = "block";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "none";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("death").style.display = "none";
	document.getElementById("craft").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#D2B26F";
}

function travelOcean(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "block";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "none";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "cyan";
}

function travelDungeon(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "block";
	document.getElementById("Crafting").style.display = "none";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "none";
	document.getElementById("craft").style.display = "block";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#D20010";
}

function travelCraft(){
	document.getElementById("Woodcutting").style.display = "none";
	document.getElementById("Mining").style.display = "none";
	document.getElementById("Fishing").style.display = "none";
	document.getElementById("Combat").style.display = "none";
	document.getElementById("Crafting").style.display = "block";
	document.getElementById("mines").style.display = "block";
	document.getElementById("forest").style.display = "block";
	document.getElementById("ocean").style.display = "block";
	document.getElementById("dungeon").style.display = "block";
	document.getElementById("craft").style.display = "none";
	document.getElementById("bottom").style.display = "block";
	document.body.style.backgroundColor = "#DA9F4F";
}

function travelCook(){

	document.body.style.backgroundColor = "DF9FFF";
}

function reenableButtons(){
	document.getElementById("treeButton").disable = false;
	document.getElementById("oakButton").disable = false;
	document.getElementById("willowButton").disable = false;
	document.getElementById("mapleButton").disable = false;
	document.getElementById("yewButton").disable = false;
	document.getElementById("magicButton").disable = false;
	document.getElementById("copperButton").disable = false;
	document.getElementById("tinButton").disable = false;
	document.getElementById("ironButton").disable = false;
	document.getElementById("coalButton").disable = false;
	document.getElementById("mithrilButton").disable = false;
	document.getElementById("adamantiteButton").disable = false;
	document.getElementById("runiteButton").disable = false;
}

function move() {
	count += 1;
	moving = true;
	if(count == 1){
	  var elem = document.getElementById("myBar");   
	  var time = 5;
	  barWidth = 0;
	  var id = setInterval(frame, 1000);
	  function frame() {
		if (time <= 0) {
		  count = 0;
		  barWidth = 0;
		  time = 5;
		  elem.style.width = barWidth + '%';
		  document.getElementById("label").innerHTML = time * 1 + 's';
		  moving = false;
		  reenableButtons();
		  clearInterval(id);
		} else {
		  time--; 
		  barWidth += 100/5;
		  elem.style.width = barWidth + '%'; 
		  document.getElementById("label").innerHTML = time * 1  + 's';
		}
	  }
	}
}

function loadLevelChart(){
	if(!moving){
		woodcuttingArea = document.getElementById("Woodcutting").style.display;
		miningArea = document.getElementById("Mining").style.display;
		fishingArea = document.getElementById("Fishing").style.display;
		combatArea = document.getElementById("Combat").style.display;
		craftingArea = document.getElementById("Crafting").style.display;
		if(woodcuttingArea == "block"){
			placeImIn = 1;
		}
		else if(miningArea == "block"){
			placeImIn = 2;
		}
		else if(fishingArea == "block"){
			placeImIn = 3;
		}
		else if(combatArea == "block"){
			placeImIn = 4;
		}
		else if(craftingArea == "block"){
			placeImIn = 5;
		}
		document.getElementById("Woodcutting").style.display = "none";
		document.getElementById("Mining").style.display = "none";
		document.getElementById("Fishing").style.display = "none";
		document.getElementById("Combat").style.display = "none";
		document.getElementById("Crafting").style.display = "none";
		document.getElementById("mines").style.display = "none";
		document.getElementById("forest").style.display = "none";
		document.getElementById("ocean").style.display = "none";
		document.getElementById("dungeon").style.display = "none";
		document.getElementById("bottom").style.display = "none";
		document.getElementById("skillChart").style.display = "block";
		document.getElementById("skillChart2").style.display = "block";
	}
}

function backToGame(){
	document.getElementById("skillChart").style.display = "none";
	document.getElementById("skillChart2").style.display = "none";
	document.getElementById("bottom").style.display = "block";
	if(placeImIn == 1){
		document.getElementById("Woodcutting").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "#D2B26F";
	}
	else if(placeImIn == 2){
		document.getElementById("Mining").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "#999999";
	}
	else if(placeImIn == 3){
		document.getElementById("Fishing").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "cyan";
	}
	else if(placeImIn == 4){
		document.getElementById("Combat").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("craft").style.display = "block";
		document.body.style.backgroundColor = "#D20010";
	}
	else if(placeImIn == 5){
		document.getElementById("Crafting").style.display = "block";
		document.getElementById("forest").style.display = "block";
		document.getElementById("mines").style.display = "block";
		document.getElementById("ocean").style.display = "block";
		document.getElementById("dungeon").style.display = "block";
		document.body.style.backgroundColor = "#DA9F4F";
	}
}

function updatePrice(){
	document.getElementById("shrimpFishermanButton").innerText = "Hire Shrimp Fisherman: " + shrimpFishermanVal.toLocaleString();
	document.getElementById("troutFishermanButton").innerText = "Hire Trout Fisherman: " + troutFishermanVal.toLocaleString();
	document.getElementById("salmonFishermanButton").innerText = "Hire Salmon Fisherman: " + salmonFishermanVal.toLocaleString();
	document.getElementById("tunaFishermanButton").innerText = "Hire Tuna Fisherman: " + tunaFishermanVal.toLocaleString();
	document.getElementById("lobsterFishermanButton").innerText = "Hire Lobster Fisherman: " + lobsterFishermanVal.toLocaleString();
	document.getElementById("swordfishFishermanButton").innerText = "Hire Swordfish Fisherman: " + swordfishFishermanVal.toLocaleString();
	document.getElementById("sharkFishermanButton").innerText = "Hire Shark Fisherman: " + sharkFishermanVal.toLocaleString();
	
	document.getElementById("copperMinerButton").innerText = "Hire Copper Miner: " + copperMinerVal.toLocaleString();
	document.getElementById("tinMinerButton").innerText = "Hire Tin Miner: " + tinMinerVal.toLocaleString();
	document.getElementById("ironMinerButton").innerText = "Hire Iron Miner: " + ironMinerVal.toLocaleString();
	document.getElementById("coalMinerButton").innerText = "Hire Coal Miner: " + coalMinerVal.toLocaleString();
	document.getElementById("mithrilMinerButton").innerText = "Hire Mithril Miner: " + mithrilMinerVal.toLocaleString();
	document.getElementById("adamantiteMinerButton").innerText = "Hire Adamantite Miner: " + adamantiteMinerVal.toLocaleString();
	document.getElementById("runiteMinerButton").innerText = "Hire Runite Miner: " + runiteMinerVal.toLocaleString();
	
	document.getElementById("loggerButton").innerText = "Hire Logger: " + loggerVal.toLocaleString();
	document.getElementById("oakLoggerButton").innerText = "Hire Oak Logger: " + oakLoggerVal.toLocaleString();
	document.getElementById("willowLoggerButton").innerText = "Hire Willow Logger: " + willowLoggerVal.toLocaleString();
	document.getElementById("mapleLoggerButton").innerText = "Hire Maple Logger: " + mapleLoggerVal.toLocaleString();
	document.getElementById("yewLoggerButton").innerText = "Hire Yew Logger: " + yewLoggerVal.toLocaleString();
	document.getElementById("magicLoggerButton").innerText = "Hire Magic Logger: " + magicLoggerVal.toLocaleString();
}

function changeSound(){
	if(backgroundSound.paused){
		document.getElementById("settings").innerText = "Disable Sound";
		backgroundSound.play();
	}
	else{
		document.getElementById("settings").innerText = "Enable Sound";
		backgroundSound.pause();
	}
}
