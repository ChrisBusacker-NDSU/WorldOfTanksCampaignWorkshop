// JavaScript World of Tanks Campiagns Workshop Calaculator
//Created By: Christopher Busacker 1/18/2021
function Calc2() {
	var scrapNum = parseInt(document.getElementById("scrap2").value);
	var ferNum = parseInt(document.getElementById("ferrous2").value);
	var nonfNum = parseInt(document.getElementById("nonFerrous2").value);
	var spareNum = parseInt(document.getElementById("spareParts2").value);
	var suspenNum = parseInt(document.getElementById("suspenCom2").value);
	var armNum = parseInt(document.getElementById("armCom2").value);
	var toolNum = parseInt(document.getElementById("tooling2").value);
	var fastNum = parseInt(document.getElementById("fast2").value);
	
	var suspenNeeded = 16;
	var armNeeded = 8;
	var toolNeeded = 13;
	var fastNeeded = 17;
	
	var suspenTime = 6;
	var armTime = 10;
	var toolTime = 8;
	var fastTime = 4;
	
	var totalTime = TimeTotal(suspenNeeded, suspenTime, armNeeded, armTime, toolNeeded, toolTime, fastNeeded, fastTime);
	var remainingTime = TimeRemaining(suspenNum, suspenNeeded, suspenTime, armNum, armNeeded, armTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime);
	var totalNon = ((TotalArmNon(armNum, armNeeded) + TotalFastNon(fastNum, fastNeeded)) - nonfNum);
	var totalFerr = ((TotalSuspenFerr(suspenNum, suspenNeeded) + TotalArmFerr(armNum, armNeeded) + TotalToolFerr(toolNum, toolNeeded) + TotalFastFerr(fastNum, fastNeeded)) - ferNum);
	var totalSpare = ((TotalSuspenSpare(suspenNum, suspenNeeded) + TotalToolSpare(toolNum, toolNeeded) + TotalFastSpare(fastNum, fastNeeded)) - spareNum);
	var totalScrap = ((TotalSuspenScrap(suspenNum, suspenNeeded) + TotalArmScrap(armNum, armNeeded) + TotalToolScrap(toolNum, toolNeeded)) - scrapNum);
	
	function TimeTotal(suspenNeeded, suspenTime, armNeeded, armTime, toolNeeded, toolTime, fastNeeded, fastTime){
		var totalTime
		
		totalTime = ((suspenNeeded*suspenTime)+(armNeeded*armTime)+(toolNeeded*toolTime)+(fastNeeded*fastTime));
		
		return totalTime;
	}
	
	function TimeRemaining(SuspenNum, suspenNeeded, suspenTime, armNum, armNeeded, armTime, toolNum, toolNeeded, toolTime, fastNum, fastNeeded, fastTime){
		var remainingTime 
		
		remainingTime = (((suspenNeeded - SuspenNum) * suspenTime)+((armNeeded - armNum) * armTime)+((toolNeeded - toolNum) * toolTime)+((fastNeeded - fastNum) * fastTime));
		
		return remainingTime;
	}
	
	function TotalSuspenFerr(suspenNum, suspenNeeded){
		var suspenFerr = 9;
		var suspenFerrLeft;
		
		suspenFerrLeft = ((suspenNeeded - suspenNum) * suspenFerr);
		
		return suspenFerrLeft;
		
	}
	function TotalSuspenSpare(suspenNum, suspenNeeded){
		var suspenSpare = 7;
		var suspenSpareLeft;
		
		suspenSpareLeft = ((suspenNeeded - suspenNum) * suspenSpare);
		
		return suspenSpareLeft;
	}
	function TotalSuspenScrap(suspenNum, suspenNeeded){
		var suspenScrap = 14;
		var suspenScrapLeft;
		
		suspenScrapLeft = ((suspenNeeded - suspenNum) * suspenScrap);
		
		return suspenScrapLeft;
	}
	
	function TotalArmFerr(armNum, armNeeded){
		var armFerr = 28;
		var armFerrLeft;
		
		armFerrLeft = ((armNeeded - armNum) * armFerr);
		
		return armFerrLeft;
	}
	function TotalArmNon(armNum, armNeeded){
		var armNon = 9;
		var armNonLeft;
		
		armNonLeft = ((armNeeded - armNum) * armNon);
		
		return armNonLeft;
	}
	function TotalArmScrap(armNum, armNeeded){
		var armScrap = 37;
		var armScrapLeft;
		
		armScrapLeft = ((armNeeded - armNum) * armScrap);
		
		return armScrapLeft;
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
        document.getElementById("totalTime2").innerHTML = totalTime;
        document.getElementById("remainingTime2").innerHTML = remainingTime;
        document.getElementById("totalNon2").innerHTML = totalNon;
        document.getElementById("totalFerr2").innerHTML = totalFerr;
		document.getElementById("totalSpare2").innerHTML = totalSpare;
		document.getElementById("totalScrap2").innerHTML = totalScrap;
    }
}
