    // create candies with button
    let candyCounter = 0;
    const createCandy = document.querySelector('.create-candies');
    const writeCandy = document.querySelector('.candies');
    createCandy.addEventListener('click', event => {
      candyCounter++;
      writeCandy.innerText = `${candyCounter}`;
    });
    
    //buy lollypop
    let lollypopCounter = 0;
    const buyLollypop = document.querySelector('button.buy-lollypops');
    const writeLollypop = document.querySelector('dd.lollypops');
    const writeRate = document.querySelector('dd.speed');
    
    buyLollypop.addEventListener('click',() => {
      if (candyCounter >= 10) {
        buyLollypop.disabled = false;
        candyCounter -= 10;
        lollypopCounter++;
        writeLollypop.innerText += `🍭`;
        writeCandy.innerText = `${candyCounter}`;
        //lollypop generated candies
        if (lollypopCounter == 10) {
          candyRain.disabled = false;
          setInterval(function () {
            candyCounter += Math.floor(lollypopCounter/10*multiplyer);
            writeCandy.innerText = `${candyCounter}`;
            writeRate.innerText = `${Math.floor(lollypopCounter/10)*multiplyer}`;
          }, 1000);
        };
      } else {
        buyLollypop.disabled = true;
      }
    });
    
    //candy rain
    const candyRain = document.querySelector('button.candy-machine');
    let multiplyer = 1;
    
    candyRain.disabled = true;
    candyRain.addEventListener('click', event => {
      multiplyer = 10;
      candyRain.disabled = true;
      writeRate.innerText = `${Math.floor(lollypopCounter/10)*multiplyer}`
    });