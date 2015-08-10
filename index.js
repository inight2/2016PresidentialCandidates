var republican = {};

var democrat = {};

republican.subtitle = "This is a republican party and we are elephants";
republican.info = "A political party that began in 1854 and is today one of the two major political parties in the United States. Originally, it was composed mainly of northerners from both major parties of the time, the Democrats and the Whigs, with some former Know-Nothings as well. The first Republicans were united by their opposition to the expansion of slavery. Their first winning presidential candidate was Abraham Lincoln in 1860.";
republican.cite = "http://dictionary.reference.com/browse/republican%20party";

democrat.subtitle = "This is a democratic party and we are donkeys";
democrat.info = "A political party that arose in the 1820s from a split in the Democratic-Republican party. Andrew Jackson was the first president elected from the Democratic party. The other Democratic presidents elected before the Civil War were Martin Van Buren, James K. Polk, Franklin Pierce, and James Buchanan. The party generally opposed the national bank, high protective tariffs, interference with slavery, and federal aid for internal improvements in the nation — all measures that the Whigs came to favor. The Democrats' greatest strength was with farmers, laborers, and people of the frontier.";
democrat.cite = "http://dictionary.reference.com/browse/democratic%20party";

$(document).ready(function(){
    document.getElementById("RepublicanSubtitle").innerHTML = republican.subtitle;
    document.getElementById("RepublicanPartyInfo").innerHTML = republican.info;
    $("#RepublicanPartyCite").attr("href", republican.cite);
    
    
    document.getElementById("DemocraticSubtitle").innerHTML = democrat.subtitle;
    document.getElementById("DemocratPartyInfo").innerHTML = democrat.info;
    $("#DemocratPartyCite").attr("href", democrat.cite);
    $("a").css("text-decoration", "none");
    
});