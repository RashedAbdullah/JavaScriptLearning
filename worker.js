

    let i = 0;
    //when here will loop huge of numbers, browser will be hang; and will stopded working; 
    while(i < 1000000000){
    i++;
    }

    postMessage(i);