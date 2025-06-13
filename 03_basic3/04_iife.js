// Immediately Invoked Function Expression (IIFE)

(function coffee (){
    console.log("DB Connected");
})();

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// }) ()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Lily')