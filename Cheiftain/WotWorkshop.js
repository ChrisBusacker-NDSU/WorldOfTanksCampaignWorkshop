// JavaScript World of Tanks Campiagns Workshop Calaculator
function Calc() {
	var scrapNum = parseInt(document.getElementById("scrap").value);
	var ferNum = parseInt(document.getElementById("ferrous").value);
	var nonfNum = parseInt(document.getElementById("nonFerrous").value);
	var spareNum = parseInt(document.getElementById("spareParts").value);
	var engineNum = parseInt(document.getElementById("engineCom").value);
	var gunNum = parseInt(document.getElementById("gunCom").value);
	var toolNum = parseInt(document.getElementById("tooling").value);
	var fastNum = parseInt(document.getElementById("fast").value);
	
	var engineNeeded = 12;
	var gunNeeded = 15;
	var toolNeeded = 13;
	var fastNeeded = 22;
	
	var engineTime = 9;
	var gunTime = 4;
	var toolTime = 8;
	var fastTime = 4;
	var suspenTime = 6;
	var armorTime = 10;
	
	var totalTime = TimeTotal(engineNum, engineNeeded, engineTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var remainingTime = TimeRemaining(engineNum, engineNeeded, engineTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var totalNon = ((TotalEngineNon(engineNum, engineNeeded) + TotalGunNon(gunNum, gunNeeded) + TotalFastNon(fastNum, fastNeeded)) - nonfNum);
	var totalFerr = ((TotalGunFerr(gunNum, gunNeeded) + TotalToolFerr(toolNum, toolNeeded) + TotalFastFerr(fastNum, fastNeeded)) - ferNum);
	var totalSpare = ((TotalEngineSpare(engineNum, engineNeeded) + TotalGunSpare(gunNum, gunNeeded) + TotalToolSpare(toolNum, toolNeeded) + TotalFastSpare(fastNum, fastNeeded)) - spareNum);
	var totalScrap = ((TotalEngineScrap(engineNum, engineNeeded) + TotalToolScrap(toolNum, toolNeeded)) - scrapNum);
	
	function TimeTotal(engineNum, engineNeeded, engineTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var totalTime
		
		totalTime = ((engineNeeded*engineTime)+(gunNeeded*gunTime)+(toolNeeded*toolTime)+(fastNeeded*fastTime));
		
		return totalTime;
	}
	
	function TimeRemaining(engineNum, engineNeeded, engineTime, gunNum, gunNeeded, gunTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var remainingTime 
		
		remainingTime = (((engineNeeded - engineNum) * engineTime)+((gunNeeded - gunNum) * gunTime)+((toolNeeded - toolNum) * toolTime)+((fastNeeded - fastNum) * fastTime));
		
		return remainingTime;
	}
	
	function TotalEngineNon(engineNum, engineNeeded){
		var engineNon = 4;
		var engineNonLeft;
		
		engineNonLeft = ((engineNeeded - engineNum) * engineNon);
		
		return engineNonLeft;
		
	}
	function TotalEngineSpare(engineNum, engineNeeded){
		var engineSpare = 7;
		var engineSpareLeft;
		
		engineSpareLeft = ((engineNeeded - engineNum) * engineSpare);
		
		return engineSpareLeft;
	}
	function TotalEngineScrap(engineNum, engineNeeded){
		var engineScrap = 14;
		var engineScrapLeft;
		
		engineScrapLeft = ((engineNeeded - engineNum) * engineScrap);
		
		return engineScrapLeft;
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
        document.getElementById("totalTime").innerHTML = totalTime;
        document.getElementById("remainingTime").innerHTML = remainingTime;
        document.getElementById("totalNon").innerHTML = totalNon;
        document.getElementById("totalFerr").innerHTML = totalFerr;
		document.getElementById("totalSpare").innerHTML = totalSpare;
		document.getElementById("totalScrap").innerHTML = totalScrap;
    }
}
