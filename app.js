function bankRobbery() {
    const  heroes =['Spiderman', 'Superman', 'Batman', 'Thor'];
    function cryForHelp(){
        for(let hero of heroes) {
            console.log(`PLEASE HELP ME ${hero.toUpperCase()}`);
        }    
    }
    cryForHelp();
}