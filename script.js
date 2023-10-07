var names =new Array();
names[0]= "Yaakov";
names[1]= "John";
names[2]= "Jason";
names[3]= "Paul";
names[4]= "Jen";
names[5]= "Tom";
names[6]= "Larry";
names[7]= "Paula";
names[8]= "laura";




for ( var i = 0; i < names.length; i++) {
    if( names[i].charAt(0) === 'J' || names[i].charAt(0)==='J'){
        console.log("Goodbye" + names[i])

    }
    else{
        console.log("hello" + names[i])
    }
}