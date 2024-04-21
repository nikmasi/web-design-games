$(document).ready(function(){
    //alert("uspeh")

    let obrazac=[]
    let pokrenut=false;
    let izgenerisano=false;
    let ind=0

    $("#pokreni").click(function(){
        if(pokrenut)return;
        pokrenut=true
        let prethodni=0
        let broj=0;
        let tezina=$("#tezina").val()
        console.log(tezina)
        let rucka=setInterval(function(){
            $("#"+broj).css("background-color","aquamarine")
            broj=0
            if(tezina==obrazac.length){
                clearInterval(rucka)
                izgenerisano=true;
                return   
            }
            while(prethodni==broj)broj=parseInt(Math.floor(Math.random()*8+1))

            obrazac.push(broj)
            prethodni=broj
            $("#"+broj).css("background-color","blue")
            
            console.log(obrazac)
        },1000)
    })
    
    $("td").click(function(){
        if(!izgenerisano)return
        let polje=parseInt($(this).attr("id"))
        console.log(polje)
        console.log(obrazac[ind])
        if(polje==obrazac[ind]){
            $(this).css("background-color","green")
            ind++
            if(ind==obrazac.length){
                alert("Bravo")
                resetujSve()
                return;
            }
        }
        else{
            $("td").css("background-color","red")
            setTimeout(function(){
                $("td").css("background-color","aquamarine")
                ind=0
            },1000)
        }
    })

    function resetujSve(){
        obrazac=[]
        izgenerisano=false;
        pokrenut=false;
        $("td").css("background-color","aquamarine")
        ind=0
    }
})