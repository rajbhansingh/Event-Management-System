const getDetails = ()=>{
    const body = document.getElementById('tbody')
    try{
        const resp =  localStorage.getItem('userDetails')
        const data=  JSON.parse(resp)
        const final = data.map((row)=>{
            return `<tr scope="row">
            <td>${row.name}</td>
            <td>${row.email}</td>
            <td>${row.number}</td>
            <td>${row.address}</td>
            </tr>`
        })
        console.log(final)
        body.innerHTML = final
    }catch(error){
        console.log(error)
    }
    return []
}

getDetails()