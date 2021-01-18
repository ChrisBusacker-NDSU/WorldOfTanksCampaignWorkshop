// JavaScript World of Tanks Campiagns Workshop Calaculator
//Created By: Christopher Busacker 1/18/2021
function Calc3() {
	var scrapNum = parseInt(document.getElementById("scrap3").value);
	var ferNum = parseInt(document.getElementById("ferrous3").value);
	var nonfNum = parseInt(document.getElementById("nonFerrous3").value);
	var spareNum = parseInt(document.getElementById("spareParts3").value);
	var armNum = parseInt(document.getElementById("armCom3").value);
	var gunNum = parseInt(document.getElementById("gunCom3").value);
	var toolNum = parseInt(document.getElementById("tooling3").value);
	var fastNum = parseInt(document.getElementById("fast3").value);
	
	var armNeeded = 2;
	var gunNeeded = 4;
	var toolNeeded = 4
	var fastNeeded = 7;
	
	var enigneTime = 9;
	var gunTime = 4;
	var toolTime = 8;
	var fastTime = 4;
	var suspenTime = 6;
	var armTime = 10;
	
	var totalTime = TimeTotal(armNum, armNeeded, armTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var remainingTime = TimeRemaining(armNum, armNeeded, armTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var totalNon = ((TotalArmNon(armNum, armNeeded) + TotalGunNon(gunNum, gunNeeded) + TotalFastNon(fastNum, fastNeeded)) - nonfNum);
	var totalFerr = ((TotalArmFerr(armNum, armNeeded) + TotalGunFerr(gunNum, gunNeeded) + TotalToolFerr(toolNum, toolNeeded) + TotalFastFerr(fastNum, fastNeeded)) - ferNum);
	var totalSpare = ((TotalGunSpare(gunNum, gunNeeded) + TotalToolSpare(toolNum, toolNeeded) + TotalFastSpare(fastNum, fastNeeded)) - spareNum);
	var totalScrap = ((TotalArmScrap(armNum, armNeeded) + TotalToolScrap(toolNum, toolNeeded)) - scrapNum);
	
	function TimeTotal(armNum, armNeeded, armTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var totalTime
		
		totalTime = ((armNeeded*armTime)+(gunNeeded*gunTime)+(toolNeeded*toolTime)+(fastNeeded*fastTime));
		
		return totalTime;
	}
	
	function TimeRemaining(armNum, armNeeded, armTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var remainingTime 
		
		remainingTime = (((armNeeded - armNum) * armTime)+((gunNeeded - gunNum) * gunTime)+((toolNeeded - toolNum) * toolTime)+((fastNeeded - fastNum) * fastTime));
		
		return remainingTime;
	}
	
	function TotalArmNon(armNum, armNeeded){
		var armNon = 9;
		var armNonLeft;
		
		armNonLeft = ((armNeeded - armNum) * armNon);
		
		return armNonLeft;
		
	}
	function TotalArmFerr(armNum, armNeeded){
		var armFerr = 28;
		var armFerrLeft;
		
		armFerrLeft = ((armNeeded - armNum) * armFerr);
		
		return armFerrLeft;
	}
	function TotalArmScrap(armNum, armNeeded){
		var armScrap = 37;
		var armScrapLeft;
		
		armScrapLeft = ((armNeeded - armNum) * armScrap);
		
		return armScrapLeft;
	}
	
	function TotalGunFerr(gunNum, gunNeeded){
		var gunFerr = 13;
		var gunFerrLeft;
		
		gunFerrLeft = ((gunNeeded - gunNum) * gunFerr);
		
		return gunFerrLeft;
	}
	function TotalGunNon(gunNum, gunNeeded){
		var gunNon = 5;
		var gunNonLeft;
		
		gunNonLeft = ((gunNeeded - gunNum) * gunNon);
		
		return gunNonLeft;
	}
	function TotalGunSpare(gunNum, gunNeeded){
		var gunSpare = 7;
		var gunFerrLeft;
		
		gunSpareLeft = ((gunNeeded - gunNum) * gunSpare);
		
		return gunSpareLeft;
	}
	function TotalToolFerr(toolNum, toolNeeded){
		var toolFerr = 10;
		var toolFerrLeft;

		toolFerrLeft = ((toolNeeded - toolNum) * toolFerr);
		
		return toolFerrLeft;
	}
	function TotalToolSpare(toolNum, toolNeeded){
		var toolSpare = 6;
		var toolSpareLeft;
		
		toolSpareLeft = ((toolNeeded - toolNum) * toolSpare);
		
		return toolSpareLeft;
	}
	function TotalToolScrap(toolNum, toolNeeded){
		var toolScrap = 17;
		var toolScrapLeft;
		
		toolScrapLeft = ((toolNeeded - toolNum) * toolScrap);
		
		return toolScrapLeft;
	}
	function TotalFastNon(fastNum, fastNeeded){
		var fastNon = 2;
		var fastNonLeft;
		
		fastNonLeft = ((fastNeeded - fastNum) * fastNon);
		
		return fastNonLeft;
	}
	function TotalFastSpare(fastNum, fastNeeded){
		var fastSpare = 4;
		var fastSpareLeft;

		fastSpareLeft = ((fastNeeded - fastNum) * fastSpare);
		
		return fastSpareLeft;
	}
	function TotalFastFerr(fastNum, fastNeeded){
		var fastFerr = 5;
		var fastFerrLeft;
		
		fastFerrLeft = ((fastNeeded - fastNum) * fastFerr);
		
		return fastFerrLeft;
	}
	ShowResult(totalTime, remainingTime, totalNon, totalFerr, totalSpare, totalScrap);
    function ShowResult(totalTime, remainingTime, totalNon, totalFerr, totalSpare, totalScrap) {
        document.getElementById("totalTime3").innerHTML = totalTime;
        document.getElementById("remainingTime3").innerHTML = remainingTime;
        document.getElementById("totalNon3").innerHTML = totalNon;
        document.getElementById("totalFerr3").innerHTML = totalFerr;
		document.getElementById("totalSpare3").innerHTML = totalSpare;
		document.getElementById("totalScrap3").innerHTML = totalScrap;
    }
}
