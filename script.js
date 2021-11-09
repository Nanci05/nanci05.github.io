var names = new Array();
names[0] = "Alan";
names[1] = "Jack";
names[2] = "Joy";
names[3] = "Rex";
names[4] = "Joe";
names[5] = "Deeps";
names[6] = "Leema";
names[7] = "Mano";
names[8] = "Jeniffer";
names[9] = "Nanci";

for(var i=0; i<names.length; i++)
{
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j')
	{
		console.log("Goodbye "+names[i]);
	}
	else
	{
		console.log("Hello "+names[i]);
	}
}