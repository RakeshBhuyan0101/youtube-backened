const asyncHandeler = (requestHandeler) => {
    (req,res,next) => {
        Promise.resolve(requestHandeler(req , res , next))
        .catch( (error) => next(error) )
    }
}



export {asyncHandeler}


// const asyncHandeler = () => {} 
// const asyncHandeler = (fn) => { () => {} }
// const asyncHandeler = (fn) =>  async() => {} 

// const asyncHandeler = (fn) =>  async (req , res , next ) => {
//     try {

//     } catch (error) {
//         res.status((err.code || 5000)).json ( {
//             sucess: false,
//             message : err.message
//         })
//     }
// } 