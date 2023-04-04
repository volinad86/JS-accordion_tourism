const plage =document.querySelectorAll('.item');
console.log(plage)

plage.forEach(item =>{
    item.addEventListener('click', () =>{
        removeFocus();
        item.classList.add('selected');
        item.classList.add('selected1');
    })
    removeFocus = () => {
        plage.forEach(item => {
            item.classList.remove('selected');
        })
    }

})