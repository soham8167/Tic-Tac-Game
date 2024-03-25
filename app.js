let boxes=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
const winPatterns=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];

boxes.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        console.log("box clicked");
        if(turno){
            btn.innerText="O";
            turno = false;
        }else{
            btn.innerText="X";
            turno = true;
            
        }
        btn.disabled=true;
        checkWinner();
               
    });
});
const showWinner=(winner)=>{
  msg.innerText=`Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

        const checkWinner = ()=>{
            for(pattern of winPatterns){
                
                    let pos1val=boxes[pattern[0]].innerText;
                    let pos2val=boxes[pattern[1]].innerText;
                    let pos3val=boxes[pattern[2]].innerText;
                    
                    if(pos1val!="" && pos2val!="" && pos3val!=""){
                        if(pos1val===pos2val && pos2val===pos3val){
                            console.log("winner",pos1val);

                            showWinner(pos1val);
                        }
                    }
            }

        };
        const disableBox=()=>{
            for(let box of boxes){
                box.disabled=true;
            }
        };

        const enableBox=()=>{
            for(let box of boxes){
                box.disabled=false;
                box.innerText="";
            }
        };
 
        const resetGame=()=>{
            turno=true;
            enableBox();
            msgContainer.classList.add("hide");
        };

        newGameBtn.addEventListener("click",resetGame);
        resetBtn.addEventListener("click",resetGame);