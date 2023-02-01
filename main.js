var container=document.getElementsByClassName('container');
var allread=document.getElementsByClassName('allread')[0];
var counter=document.getElementById('counter');
var redpoint=document.getElementsByClassName('redpoint');





for(var i=0;i<2;i++)
{container[i].style.backgroundColor="hsl(211, 68%, 94%)";

}
for(var i=4;i<6;i++)
{container[i].style.backgroundColor="hsl(211, 68%, 94%)";

}

check();






for( i=0;i<container.length;i++)
{containerclick(container[i]);

}




allread.onclick=()=>
{
	for( i=0;i<container.length;i++)
		container[i].style.backgroundColor="hsl(0,0%,100%)";
	check();
}


function check()
{	var k=0;
	for( i=0;i<container.length;i++)
	if(container[i].style.backgroundColor=="rgb(229, 239, 250)")
	{redpoint[i].style.display="inline-block";
		k++;}
	else
	{redpoint[i].style.display="none";}
	counter.innerHTML=k;
}

function containerclick(container)
{
	container.onclick=()=>
	{container.style.backgroundColor="hsl(0,0%,100%)";
		check();}
	
}

