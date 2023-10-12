import React from "react";
/* import memesData from "../memesData"; */


export default function Meme() {
   // const[memeImage, urlLink] = React.useState("")

   const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/lbij.jpg"

        }
   )

   const [allMemes, setAllMemes] = React.useState({})

    function getMeme () {
        
        const theMeme = allMemes
        const randomNumber = Math.floor(Math.random() * theMeme.length)
        const url = theMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, //pulling all of the properties of previous Meme
            randomImage: url
        }))
       
        
        
    }

    React.useEffect(function() {
     /*    async function getMemes () {
            const res = await fetch ("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[] )
 */



        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function InputText (event) {
        console.log("im here")
        const {type,placeholder,onChange,name,value} = event.target
        setMeme (prevMeme => ({
            ...prevMeme,
            [name] : value 

        }))
    }


    return (
        <div className="form">

            <div className="labels">

            <input
             type="text" 
             placeholder="Top text"
             onChange={InputText}
             name="topText"
             value={meme.topText}
             />
            

            <input
             type="text" 
             placeholder="Bottom text"
             onChange={InputText}
             name="bottomText"
             value={meme.bottomText}
            />

             
            
            </div>
            <div className="btnContainer">
            <button onClick={getMeme}> Get a new meme image</button>
            </div>

            <div className="imgContainer">
            <img src={meme.randomImage} alt="" className="memeImg"/>
            <h2 className="toptxt" > {meme.topText} </h2>
            <h2 className="bottomtxt" > {meme.bottomText}</h2>
            </div>
            

        </div>
    )
}