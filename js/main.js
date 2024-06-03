// const changeboxshadow = (e) =>{
//     console.log(e.offsetX , e.offsetY)
//     let outX = e.offsetX -30
// //     let outY = e.offsetY -30
// //     $(".fcart").css("box-shadow" , `inset gray ${outX}px ${outY}px 10px 0px`)
    
// // //     if (outX > 20 || outY > 20 || outX < -20 || outY < -20){
// // //     $(".fcart").css("box-shadow" , `inset gray 20px 20px 10px 0px`)
// // //     }
// // //     else{
// // //     $(".fcart").css("box-shadow" , `inset gray ${outX}px ${outY}px 10px 0px`)
// // // }
// // // $(".fcart").css("box-shadow" , `inset gray ${outX}px ${outY}px 10px 0px`)

// //     console.log("init2")

// // }

// // const changepos = (e) =>{
// //     $(".lightbox").css("left" ,` ${e.offsetX}px`)
// //     $(".lightbox").css("top" , `${e.offsetY}px`)
// //     console.log(e.offsetY)

// // }

// // $("#fcart1").on("click" , changepos)


const openmenu = () =>{
    $(".phonehead .menu").css("right" , 0)
    $(".glass").css("visibility" , "visible")
    $(".glass").css("opacity" , 1)
}
const closemenu = () => {
    $(".phonehead .menu").css("right" , "-100%")
    $(".glass").css("visibility" , "hidden")
    $(".glass").css("opacity" , 0)
}

$(".opener").on("click" , openmenu)
$(".closebtn").on("click" , closemenu)