const contactBtn = document.querySelector('.contact__btn');
    const navbarBar = document.querySelector('.navbaraa__bar');
    const contactAbout = document.querySelector('.contact__about')
   contactAbout.addEventListener('click', ()=>{
        navbarBar.classList.toggle('active');
        contactBtn.classList.toggle('actives');
    });




    const form = document.querySelector('.form'),
        formInput = document.querySelectorAll('.input'),
        btn = document.querySelector('.submit__btn'),
        newRoom = document.querySelector('.new-room');

        form.addEventListener('submit', (e)=>{
            e.preventDefault();

            if(formInput[0].value && formInput[1].value){
         

                const box =document.createElement('div');
                box.classList.add('box-result');

                const boxChild =document.createElement('div');
                boxChild.classList.add('box-child');
          

            let boxTitle =document.createElement('h6');
            boxTitle.classList.add('box-title');
            boxTitle.textContent = 'Данные успешно отправлены';
            boxChild.appendChild(boxTitle);


            let boxText =document.createElement('p');
            boxText.classList.add('box-text');
            boxText.textContent = 'Спасибо за заказ. Мы свяжемся с Вами по электронной почте  в течение часа для подтверждения, после чего вышлем ознакомительный выпуск обзора';
            boxChild.appendChild(boxText);


            let boxBtn =document.createElement('button');
            boxBtn.classList.add('box-btn');
            boxBtn.textContent = 'Ок';
            boxChild.appendChild(boxBtn);
            
          
            newRoom.appendChild(box);
            box.appendChild(boxChild);

            boxBtn.addEventListener('click', ()=>{
                newRoom.removeChild(box);
            })
            

            }else{
                const boxx =document.createElement('div');
                boxx.classList.add('boxx-result');

                const boxxChild =document.createElement('div');
                boxxChild.classList.add('boxx-result-child');

                let boxxTitle2 =document.createElement('h6');
                boxxTitle2.classList.add('boxx-title');
                boxxTitle2.textContent = 'Возникла ошибка. Что можно сделать?';
                boxxChild.appendChild(boxxTitle2);
    
    
                let boxxText2 =document.createElement('p');
                boxxText2.classList.add('boxx-text');
                boxxText2.textContent = '— Проверить соединение с интернетом  — Перезагрузить страницу и повторить отправку — Написать нам на электронную почту Info@ins-media.ru  Мы вышлем Вам бесплатный номер.';
                boxxChild.appendChild(boxxText2);
    
    
                let boxxBtn2 =document.createElement('button');
                boxxBtn2.classList.add('boxx-btn');
                boxxBtn2.textContent = 'Ок';
                boxxChild.appendChild(boxxBtn2);

                
                newRoom.appendChild(boxx);
                boxx.appendChild(boxxChild);
                

                boxxBtn2.addEventListener('click', ()=>{
                    newRoom.removeChild(boxx);
                })
            }
          

          


           form.reset();

           
        })













        
    const forma = document.querySelector('.formm'),
    formInputt = document.querySelectorAll('.inputt'),
    btnn = document.querySelector('.submit__btnn'),
    newRoomm = document.querySelector('.new-room');

    forma.addEventListener('submit', (e)=>{
        e.preventDefault();

        if(formInputt[0].value && formInputt[1].value){
     

            const box =document.createElement('div');
            box.classList.add('box-result');

            const boxChild =document.createElement('div');
            boxChild.classList.add('box-child');
      

        let boxTitle =document.createElement('h6');
        boxTitle.classList.add('box-title');
        boxTitle.textContent = 'Данные успешно отправлены';
        boxChild.appendChild(boxTitle);


        let boxText =document.createElement('p');
        boxText.classList.add('box-text');
        boxText.textContent = 'Спасибо за заказ. Мы свяжемся с Вами по электронной почте  в течение часа для подтверждения, после чего вышлем ознакомительный выпуск обзора';
        boxChild.appendChild(boxText);


        let boxBtn =document.createElement('button');
        boxBtn.classList.add('box-btn');
        boxBtn.textContent = 'Ок';
        boxChild.appendChild(boxBtn);
        
      
        newRoom.appendChild(box);
        box.appendChild(boxChild);

        boxBtn.addEventListener('click', ()=>{
            newRoom.removeChild(box);
        })
        

        }else{
            const boxx =document.createElement('div');
            boxx.classList.add('boxx-result');

            const boxxChild =document.createElement('div');
            boxxChild.classList.add('boxx-result-child');

            let boxxTitle2 =document.createElement('h6');
            boxxTitle2.classList.add('boxx-title');
            boxxTitle2.textContent = 'Возникла ошибка. Что можно сделать?';
            boxxChild.appendChild(boxxTitle2);


            let boxxText2 =document.createElement('p');
            boxxText2.classList.add('boxx-text');
            boxxText2.textContent = '— Проверить соединение с интернетом  — Перезагрузить страницу и повторить отправку — Написать нам на электронную почту Info@ins-media.ru  Мы вышлем Вам бесплатный номер.';
            boxxChild.appendChild(boxxText2);


            let boxxBtn2 =document.createElement('button');
            boxxBtn2.classList.add('boxx-btn');
            boxxBtn2.textContent = 'Ок';
            boxxChild.appendChild(boxxBtn2);

            
            newRoom.appendChild(boxx);
            boxx.appendChild(boxxChild);
            

            boxxBtn2.addEventListener('click', ()=>{
                newRoom.removeChild(boxx);
            })
        }
      

      


       form.reset();

       
    })


