const fetchData=async (type,url,body)=>{
    try{
        console.log(url)
        const response=await fetch(url,{
            method:type,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
        if (response) {
            const responseData = await response.json();
            return responseData;
        } else {
            return false;
        }
    }
    catch(error){
        return false;
    }
}


async function registerUser(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        // Check if the response is ok (status code is in the range 200-299)
        if (response.ok) {
            const responseData = await response.json();
            if (responseData.statuscode >=200 && responseData.statuscode <300) {
                return responseData;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        // // Handle any other errors that might occur
        // console.error('Fetch error:', error);
        return false;
    }
}


async function checkOTP(data,url){
    const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    if(response.ok){
        const responseData=await response.json();
        if(responseData.statuscode=== 201){
            return responseData.data;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

async function login(data,url){
    const response=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    if(response.ok){
        const responseData=await response.json();
        if(responseData.statuscode=== 201){
            return responseData;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

async function getUser(url){
    const response=await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    if(response.ok){
        const responseData=await response.json();
        if(responseData.statuscode=== 201){
            return responseData;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
export {fetchData,registerUser,checkOTP,login,getUser}