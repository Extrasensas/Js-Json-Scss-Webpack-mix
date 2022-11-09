const ajaxService =(term)=>{
    const url = "https://api.postit.lt/?term="
    const key = "0v2Vn6RpgzAEW01XVB4f"

    return fetch(`${url}${term}&key=${key}`)
        .then(response =>response.json())
}

export default ajaxService