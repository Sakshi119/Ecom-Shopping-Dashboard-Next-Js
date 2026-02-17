export function mockLogin({email,password}){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(email === "admin@test.com" && password === "123456"){
                resolve({
                    email,
                    token: "mock-jwt-token",
                });
            }else{
                reject("Invalid email or password");
            }
        },1000)
    })
}