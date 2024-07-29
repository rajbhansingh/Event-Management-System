let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
};


const getDetails = ()=>{
    try{
        const resp =  localStorage.getItem('userDetails')
        const data=  JSON.parse(resp)
        if(data?.length){
            return data
        }
        console.log(resp)
    }catch(error){
        console.log(error)
    }
    return []
}

const push =()=>{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const address = document.getElementById('address').value
    const curr = getDetails()
    curr.push({name,email,number,address})
localStorage.setItem('userDetails',JSON.stringify(curr))
location.reload()
}
