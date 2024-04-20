$(document).ready(function(){
    let broj =prompt("Unesite broj bombi")


    let izgenerisano=false;
    let niz=[]
    for(let i=0;i<16;i++){
        niz.push(0)
    }

    generisi(niz,broj);



    function generisi(niz,broj){
        let cnt=0;
        while(true){
            let r = Math.floor(Math.random()*16+1) ;
            if(niz[r]==0){
                niz[r]=1;
                cnt++;
            }
            
            if(cnt==broj)break;
        }
        console.log(niz)
        let pomocniNiz=""
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(niz[i*4+j]==0)pomocniNiz+=" O "
                else pomocniNiz+= " X "
            }
            pomocniNiz+="     ("+i+1+")"
            console.log(pomocniNiz);
            pomocniNiz=""
        }
    }
    let pogodjeno=0

    $("td").click(function(){
        let ind=$(this).attr("id")
        console.log(ind)
        console.log(niz[ind-1])
        if(niz[ind-1]==0){
            $(this).css("background-color","green").css('width','100px').css('height','100px');
            pogodjeno++;
            let poljaCnt=izracunaj(parseInt(ind))
            $(this).text(parseInt(poljaCnt));

            if(pogodjeno==16-broj){
                alert("Pobedili ste")
                resetujSve();
                return
            }
            
        }else{
            $("td").css("background-color","red")
            setTimeout(function(){
                alert("Izgubili ste")
                resetujSve();
                return;
            },1000)

        }
    })

    function resetujSve(){
        $("td").css("background-color","white")
        $("td").text("")
        niz=[]
        for(let i=0;i<16;i++){
            niz.push(0)
        }
        pogodjeno=0;
        generisi(niz,broj);
    }
        
    function izracunaj(ind){
        //1 -1 -5 -4 -3 5 4 3
        let n=[1,-1,-5,5,-4,4,-3,3]

        
        let cnt=0
        for(let i=0;i<n.length;i++){
            
            if(ind+n[i]-1>=0 && ind+n[i]-1<16){
                if(niz[ind+n[i]-1]==1)cnt++
                
            }
        }
        return cnt;
    }
       


})