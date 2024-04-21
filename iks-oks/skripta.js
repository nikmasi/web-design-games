$(document).ready(function(){
    let niz=[]
    for(let i=0;i<9;i++){
        niz.push(-1)
    }
    let ukupno=0

    let turn=1
    console.log(niz)
    $("td").click(function(){
        let ind=parseInt($(this).attr("id"));
        
        if(niz[ind-1]==-1){
            niz[ind-1]=turn;
            if(turn==1)$(this).text("X").css('width','200px').css('height','200px');
            else $(this).text("O").css('width','200px').css('height','200px');
            ukupno++
        }

        console.log(ind)
        console.log(niz)
        turn=(turn+1)%2

        let pr=provera(niz)
        if(pr==true){
            
            setTimeout(resetuj,1000)
        }else if(ukupno==9){
            $("td").css("background-color","red")
            setTimeout(resetuj,1000)
            
        }
    })

    function resetuj(){
        niz=[]
        for(let i=0;i<9;i++){
            niz.push(-1)
        }
        $("#1").css("background-color","white").text("")
        $("#2").css("background-color","white").text("")
        $("#3").css("background-color","white").text("")
        $("#4").css("background-color","white").text("")
        $("#5").css("background-color","white").text("")
        $("#6").css("background-color","white").text("")
        $("#7").css("background-color","white").text("")
        $("#8").css("background-color","white").text("")
        $("#9").css("background-color","white").text("")
        turn=1
        ukupno=0
    }

    function provera(niz){
        let flag=false
        for(let i=0;i<3;i++){
            if(niz[i*3+0]==niz[i*3+1] && niz[i*3+1]==niz[i*3+2] && niz[i*3+0]!=-1){
                let c1=i*3+0+1
                let c2=i*3+1+1
                let c3=i*3+2+1
                $("#"+c1).css("background-color","green")
                $("#"+c2).css("background-color","green")
                $("#"+c3).css("background-color","green")
                flag=true;
                return flag
            }
        }
        for(let i=0;i<3;i++){
            if(niz[i+0*3]==niz[i+1*3] && niz[i+1*3]==niz[i+2*3] && niz[i+0*3]!=-1){
                let c1=i+0*3+1
                let c2=i+1*3+1
                let c3=i+2*3+1
                $("#"+c1).css("background-color","green")
                $("#"+c2).css("background-color","green")
                $("#"+c3).css("background-color","green")
                flag=true;
                break;
            }
        }
        if(niz[0]==niz[4] && niz[4]==niz[8] && niz[0]!=-1){
            $("#1").css("background-color","green")
            $("#5").css("background-color","green")
            $("#9").css("background-color","green")
            
            flag=true;
        }
        if(niz[2]==niz[4] && niz[4]==niz[6] && niz[2]!=-1){
            $("#3").css("background-color","green")
            $("#5").css("background-color","green")
            $("#7").css("background-color","green")
            
            flag=true;
        }
        return flag

    }

})