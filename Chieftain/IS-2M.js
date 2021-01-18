// JavaScript World of Tanks Campiagns Workshop Calaculator
//Created By: Christopher Busacker 1/18/2021
function Calc4() {
	var scrapNum = parseInt(document.getElementById("scrap4").value);
	var ferNum = parseInt(document.getElementById("ferrous4").value);
	var nonfNum = parseInt(document.getElementById("nonFerrous4").value);
	var spareNum = parseInt(document.getElementById("spareParts4").value);
	var engineNum = parseInt(document.getElementById("engineCom4").value);
	var suspenNum = parseInt(document.getElementById("suspenCom4").value);
	var toolNum = parseInt(document.getElementById("tooling4").value);
	var fastNum = parseInt(document.getElementById("fast4").value);
	
	var engineNeeded = 5;
	var suspenNeeded = 3;
	var toolNeeded = 6;
	var fastNeeded = 9;
	
	var engineTime = 9;
	var gunTime = 4;
	var toolTime = 8;
	var fastTime = 4;
	var suspenTime = 6;
	var armorTime = 10;
	
	var totalTime = TimeTotal(engineNum, engineNeeded, engineTime, suspenNum, suspenNeeded, suspenTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var remainingTime = TimeRemaining(engineNum, engineNeeded, engineTime, suspenNum, suspenNeeded, suspenTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var totalNon = ((TotalEngineNon(engineNum, engineNeeded) + TotalFastNon(fastNum, fastNeeded)) - nonfNum);
	var totalFerr = ((TotalSuspenFerr(suspenNum, suspenNeeded) + TotalToolFerr(toolNum, toolNeeded) + TotalFastFerr(fastNum, fastNeeded)) - ferNum);
	var totalSpare = ((TotalEngineSpare(engineNum, engineNeeded) + TotalSuspenSpare(suspenNum, suspenNeeded) + TotalToolSpare(toolNum, toolNeeded) + TotalFastSpare(fastNum, fastNeeded)) - spareNum);
	var totalScrap = ((TotalEngineScrap(engineNum, engineNeeded) + TotalSuspenScrap(suspenNum, suspenNeeded) + TotalToolScrap(toolNum, toolNeeded)) - scrapNum);
	
	function TimeTotal(engineNum, engineNeeded, engineTime, suspenNum, suspenNeeded, suspenTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var totalTime
		
		totalTime = ((engineNeeded*engineTime)+(suspenNeeded*suspenTime)+(toolNeeded*toolTime)+(fastNeeded*fastTime));
		
		return totalTime;
	}
	
	function TimeRemaining(engineNum, engineNeeded, engineTime, suspenNum, suspenNeeded, suspenTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var remainingTime 
		
		remainingTime = (((engineNeeded - engineNum) * engineTime)+((suspenNeeded - suspenNum) * suspenTime)+((toolNeeded - toolNum) * toolTime)+((fastNeeded - fastNum) * fastTime));
		
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
	
	function TotalSuspenFerr(suspenNum, suspenNeeded){
		var suspenFerr = 9;
		var suspenFerrLeft;
		
		suspenFerrLeft = ((suspenNeeded - suspenNum) * suspenFerr);
		
		return suspenFerrLeft;
	}
	function TotalSuspenScrap(suspenNum, suspenNeeded){
		var suspenScrap = 14;
		var suspenScrapLeft;
		
		suspenScrapLeft = ((suspenNeeded - suspenNum) * suspenScrap);
		
		return suspenScrapLeft;
	}
	function TotalSuspenSpare(suspenNum, suspenNeeded){
		var suspenSpare = 7;
		var suspenFerrLeft;
		
		suspenSpareLeft = ((suspenNeeded - suspenNum) * suspenSpare);
		
		return suspenSpareLeft;
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
        document.getElementById("totalTime4").innerHTML = totalTime;
        document.getElementById("remainingTime4").innerHTML = remainingTime;
        document.getElementById("totalNon4").innerHTML = totalNon;
        document.getElementById("totalFerr4").innerHTML = totalFerr;
		document.getElementById("totalSpare4").innerHTML = totalSpare;
		document.getElementById("totalScrap4").innerHTML = totalScrap;
    }
}
