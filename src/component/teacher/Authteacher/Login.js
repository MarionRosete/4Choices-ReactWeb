
import React, { useState,  } from 'react'
import { Link,useHistory} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';


const Login = () => {
    const clientId = "669346893039-mv5nspklglnpal0h50i63vu8a70og3k1.apps.googleusercontent.com";

    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const[printRes, resJson]= useState('');
    const history = useHistory();


    const handleLogin=(event)=>{
        event.preventDefault()
        const user={email, password}
        console.log(user)
        const url = 'http://localhost:8000/api/login'
        fetch(url,
            {
            method:'post',
            headers:{'content-type':'application/json', 'accept':'application/json'},
            body:JSON.stringify(user)
            }
        ).then(response=>(
                    response.json()
                        .then(resjson=>{resJson(resjson.message);
                            if(resjson.success===true){
                                localStorage.setItem('token', resjson.token)
                                history.push({
                                    pathname:"/Dashboard",
                                    state:{token:resjson.token
                                }})
                            }else{
                                    console.log("unauthorized")
                            };
                            }
                        )
                )
            )
    }
    
    const onSuccess = (res) => {
        
        console.log('Login Success: currentUser:', res.profileObj);
        const fullname=res.profileObj.name;
        const email=res.profileObj.email;
        const user={fullname,email};
        console.log(user)
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
       
        fetch('http://localhost:8000/api/login/googlecallback',
        {
        method:'post',
        headers:{'content-type':'application/json', 'accept':'application/json'},
        body:JSON.stringify(user)
        }
    ).then(response=>(
                response.json().then(resjson=>{resJson(resjson.message);
                    if(resjson.success===true){
                        window.location.replace( "/Dashboard");
                        localStorage.setItem('token', resjson.token)
                        localStorage.setItem('status', resjson.message)
                    }else{
                            console.log("unauthorized")
                    };
                    }
                )
            )
        )
      
      };

        return (
          <>


            <div className="flex bg-blue-200 items-center justify-center w-screen h-screen p-10">
                <div className="space-y-5 md:grid md:grid-cols-2 md:justify-center shadow-lg m-8 rounded-2xl bg-white p-4">

                    <div className="teacher place-items-center md:p-5 text-center">
                        <h1 className="text-xl text-blue-900 font-medium p-2">
                            Logo here
                        </h1>
                        <p className="text-2xl text-blue-900 font-medium p-2">
                            Welcome Back
                        </p>
                        <GoogleLogin  
                            clientId={clientId}  
                            onSuccess={onSuccess} 
                        />
                      
                            <form onSubmit={handleLogin}>
                            <span className="block text-gray-400">
                                <svg className="inline w-10 mr-2" height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" strokeWidth="2" d="M0 1h90"/></svg>
                                  OR LOGIN WITH EMAIL
                                <svg className="inline w-10 ml-2"  height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" strokeWidth="2" d="M0 1h90"/></svg>
                            </span>


                            <div className="mt-5">
                                <p className="text-red-500">{printRes}</p>
                                <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" 
                                    type="email" 
                                    placeholder="Email"  
                                    value={email} 
                                    required 
                                    onChange={(e)=>setEmail(e.target.value)}
                                /><br></br>
                                <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    required
                                    onChange={(e)=>setPassword(e.target.value)} 
                                /><br></br>
                                <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 text-white font-bold font-sans p-2 w-80 ">
                                    Sign In
                                </button>
                            </div>
                            <div className="flex justify-between py-3 text-blue-500 text-xs w-80 m-auto">
                                <div className="inline text-blue-900">
                                    <span className="inline align-middle">
                                        <input type="checkbox" name="" id=""/>
                                    </span> 
                                    Keep me loggedin
                                </div>
                                <div className="inline text-blue-900">
                                    <Link to="/Forgetpassword">
                                        FORGOT PASSWORD
                                    </Link>
                                </div>
                            </div>

                            <div className="inline-flex justify-between">
                                <span className="text-blue-900 text-xs">
                                    Don't have an account yet?
                                </span>
                                <span className="text-xs text-blue-900">
                                    <Link to="/Register">&nbsp;SIGN UP!</Link>
                                </span>
                            </div>

                        </form>
                    </div>
                    <div className=" place-items-center md:flex ">
                    <button onClick={()=>  history.push({pathname:"/Attendeeslogin"})}>
                    <svg width="305" height="145" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M30.657 130.425l-.4-.149c-.088-.033-8.832-3.374-12.928-10.949-4.095-7.576-2.09-16.698-2.069-16.788l.0904-.416.4.15c.088.033 8.831 3.374 12.927 10.949 4.096 7.576 2.09 16.697 2.07 16.788l-.094.415zm-12.671-11.451c3.462 6.405 10.372 9.688 12.122 10.437.333-1.871 1.377-9.437-2.083-15.837-3.46-6.397-10.371-9.686-12.122-10.437-.333 1.872-1.377 9.439 2.083 15.837z" fill="#3F3D56"/><path d="M20.46 116.669c7.36 4.417 10.195 13.189 10.195 13.189s-9.099 1.612-16.46-2.804C6.836 122.637 4 113.864 4 113.864s9.1-1.611 16.46 2.805z" fill="#D0CDE1"/><path d="M256.027 1.687h-82.08V0h-37.219v1.687H54.31a5.564 5.564 0 00-3.926 1.622 5.533 5.533 0 00-1.626 3.915v112.091a5.53 5.53 0 001.626 3.915 5.559 5.559 0 003.926 1.622h201.717a5.558 5.558 0 003.925-1.622 5.533 5.533 0 001.627-3.915V7.225a5.538 5.538 0 00-5.552-5.538z" fill="#1D1D69"/><path d="M254.135 11.473H56.201v111.355h197.934V11.473z" fill="#fff"/><path d="M154.999 8.436a2.031 2.031 0 002.03-2.024 2.023 2.023 0 00-1.254-1.872 2.03 2.03 0 00-2.211.44 2.016 2.016 0 00-.595 1.432 2.031 2.031 0 002.03 2.024z" fill="#6C63FF"/><path d="M242.772 25.645h-9.383v-9.357h9.383v9.357zm-8.975-.406h8.567v-8.544h-8.567v8.544z" fill="#3F3D56"/><path d="M267.136 120.803h-19.317v-1.388a.276.276 0 00-.276-.275h-6.623a.279.279 0 00-.255.169.278.278 0 00-.021.106v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.276.276 0 00-.276.275v1.388h-4.14v-1.388a.276.276 0 00-.276-.275h-6.623a.279.279 0 00-.195.08.284.284 0 00-.081.195v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.276.276 0 00-.276.275v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.279.279 0 00-.195.08.28.28 0 00-.081.195v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.279.279 0 00-.255.169.278.278 0 00-.021.106v1.388h-4.139v-1.388a.275.275 0 00-.276-.275h-51.88a.279.279 0 00-.277.275v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.276.276 0 00-.276.275v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.279.279 0 00-.195.08.28.28 0 00-.081.195v1.388h-4.139v-1.388a.276.276 0 00-.276-.275h-6.623a.279.279 0 00-.255.169.276.276 0 00-.021.106v1.388h-4.14v-1.388a.279.279 0 00-.08-.195.278.278 0 00-.195-.08H82.52a.278.278 0 00-.276.275v1.388h-4.14v-1.388a.278.278 0 00-.08-.195.278.278 0 00-.196-.08h-6.623a.278.278 0 00-.195.08.279.279 0 00-.08.195v1.388h-4.14v-1.388a.274.274 0 00-.081-.194.274.274 0 00-.195-.081h-6.623a.279.279 0 00-.255.169.276.276 0 00-.02.106v1.388H46.921a6.634 6.634 0 00-4.683 1.934 6.597 6.597 0 00-1.94 4.671v2.987a6.594 6.594 0 001.94 4.671A6.634 6.634 0 0046.923 137h220.213a6.635 6.635 0 004.683-1.934 6.598 6.598 0 001.94-4.671v-2.987a6.598 6.598 0 00-1.94-4.671 6.637 6.637 0 00-4.683-1.934z" fill="#1D1D69"/><path d="M301 130.224H13.058v.876H301v-.876z" fill="#3F3D56"/><path d="M241.899 73.522h-63.728V37.338h63.728v36.184zm-63.097-.63h62.466V37.968h-62.466v34.924zm-53.633 7.867H68.382v-35.24h56.787v35.24zm-56.156-.63h55.525V46.15H69.013v33.98z" fill="#D0CDE1"/><path d="M94.912 67.229l-.054-.704c-.163-1.46.325-3.057 1.682-4.68 1.221-1.435 1.9-2.49 1.9-3.708 0-1.38-.869-2.3-2.578-2.327a4.829 4.829 0 00-2.74.84l-.651-1.706c.895-.649 2.441-1.082 3.88-1.082 3.12 0 4.53 1.921 4.53 3.978 0 1.84-1.03 3.166-2.333 4.708-1.194 1.407-1.628 2.597-1.547 3.977l.027.704h-2.116zm-.597 3.788a1.597 1.597 0 011.628-1.704c.95 0 1.6.703 1.6 1.704a1.606 1.606 0 01-.98 1.55 1.619 1.619 0 01-2.248-1.55zm113.857-11.654l-.054-.703c-.163-1.461.325-3.058 1.682-4.681 1.221-1.435 1.899-2.49 1.899-3.707 0-1.38-.868-2.3-2.578-2.327a4.829 4.829 0 00-2.74.838l-.651-1.704c.895-.65 2.442-1.083 3.88-1.083 3.12 0 4.531 1.922 4.531 3.977 0 1.84-1.031 3.167-2.334 4.71-1.193 1.406-1.627 2.596-1.546 3.977l.027.703h-2.116zm-.597 3.788a1.597 1.597 0 01.981-1.58c.205-.086.425-.128.647-.124.95 0 1.6.703 1.6 1.704a1.607 1.607 0 01-.98 1.549 1.622 1.622 0 01-1.55-.157 1.61 1.61 0 01-.698-1.392z" fill="#D0CDE1"/><path d="M156.283 109.224c15.035 0 27.224-12.156 27.224-27.15 0-14.996-12.189-27.152-27.224-27.152s-27.224 12.156-27.224 27.151 12.189 27.151 27.224 27.151z" fill="#2F2E41"/><path d="M145.768 119.254l-8.138-1.47 2.64-16.948 8.138 1.47-2.64 16.948zm18.916-14.01l-8.138-1.469-2.64 14.542 8.139 1.469 2.639-14.542z" fill="#2F2E41"/><path d="M167.485 120.579c.282-1.396-2.514-3.136-6.245-3.887-3.731-.751-6.985-.229-7.267 1.166-.283 1.396 2.513 3.136 6.244 3.887 3.732.751 6.985.229 7.268-1.166zm-16.951-.438c.187-1.412-2.72-2.96-6.493-3.459-3.774-.498-6.985.242-7.172 1.653-.188 1.411 2.719 2.959 6.493 3.458 3.773.498 6.984-.241 7.172-1.652z" fill="#2F2E41"/><path d="M158.189 84.711c5.138 0 9.304-4.154 9.304-9.279s-4.166-9.28-9.304-9.28c-5.139 0-9.304 4.155-9.304 9.28 0 5.125 4.165 9.28 9.304 9.28z" fill="#fff"/><path d="M162.013 75.199a3.097 3.097 0 003.101-3.093 3.097 3.097 0 00-3.101-3.093 3.097 3.097 0 00-3.102 3.093 3.098 3.098 0 003.102 3.093z" fill="#3F3D56"/><path d="M134.807 52.536c-.409-10.052 8.277-18.566 19.402-19.016 11.125-.451 20.475 7.332 20.884 17.384.41 10.051-7.323 12.335-18.448 12.786-11.125.45-21.429-1.103-21.838-11.154z" fill="#1D1D69"/><path d="M182.375 81.28c7.328-1.675 12.841-4.892 12.314-7.186-.528-2.294-6.895-2.796-14.223-1.121-7.328 1.675-12.84 4.893-12.313 7.187.527 2.294 6.895 2.796 14.222 1.12zm-53.439 8.864c7.327-1.675 12.84-4.893 12.313-7.187-.527-2.295-6.895-2.796-14.223-1.121-7.327 1.675-12.84 4.892-12.313 7.187.527 2.294 6.895 2.796 14.223 1.12z" fill="#2F2E41"/><path d="M148.806 92.773c-.145.8-.131 1.62.041 2.414.173.794.501 1.546.965 2.213a6.208 6.208 0 006.413 2.52 6.19 6.19 0 004.789-4.944c.61-3.361-1.997-4.55-5.368-5.16-3.371-.608-6.23-.405-6.84 2.957z" fill="#fff"/><path d="M97.517 4.129H52.754v42.466h44.763V4.129z" fill="#D0CDE1"/><path d="M92.43 9.202H57.84v26.38h34.59V9.202z" fill="#fff"/><path d="M76.62 38.694H57.807v.988h18.815v-.988zm0 2.963H57.807v.987h18.815v-.987z" fill="#F2F2F2"/><path d="M63.995 26.35a3.956 3.956 0 003.961-3.951 3.956 3.956 0 00-3.961-3.95 3.956 3.956 0 00-3.961 3.95 3.956 3.956 0 003.96 3.95z" fill="#1D1D69"/><path d="M75.135 26.35a3.955 3.955 0 003.961-3.951 3.956 3.956 0 00-3.96-3.95 3.956 3.956 0 00-3.962 3.95 3.955 3.955 0 003.961 3.95z" fill="#1D1D69" fillOpacity=".59"/><path d="M86.276 26.35a3.956 3.956 0 003.96-3.951 3.956 3.956 0 00-3.96-3.95 3.956 3.956 0 00-3.962 3.95 3.956 3.956 0 003.962 3.95z" fill="#E6E6E6"/><path d="M75.135 8.573a1.981 1.981 0 001.98-1.975 1.973 1.973 0 00-1.222-1.825 1.981 1.981 0 00-2.738 1.825 1.973 1.973 0 001.223 1.825c.24.1.497.15.757.15z" fill="#3F3D56"/><path d="M118.808 86.355H74.045v42.466h44.763V86.355z" fill="#D0CDE1"/><path d="M113.722 91.428h-34.59v26.38h34.59v-26.38z" fill="#fff"/><path d="M98.87 95.763H86.743v12.095H98.87V95.763z" fill="#6C63FF"/><path d="M91.385 98.788v14.685h14.725V98.788H91.385zm14.086 14.048H92.024V99.425h13.447v13.411z" fill="#3F3D56"/><path d="M97.912 120.427H79.097v.987h18.815v-.987z" fill="#F2F2F2"/><path d="M96.427 90.8a1.982 1.982 0 001.829-1.22 1.973 1.973 0 00-1.83-2.73 1.98 1.98 0 00-1.98 1.974 1.975 1.975 0 001.98 1.975z" fill="#3F3D56"/><path d="M235.353 73.642H190.59v42.466h44.763V73.642z" fill="#D0CDE1"/><path d="M230.267 78.715h-34.59v26.38h34.59v-26.38z" fill="#fff"/><path d="M216.692 99.367h-7.441v2.199h7.441v-2.2zm8.997-17.123h-25.434v.943h25.434v-.943zm0 2.985h-25.434v.942h25.434v-.942zm0 2.984h-25.434v.943h25.434v-.943zm0 2.985h-25.434v.943h25.434v-.943zm0 2.985h-25.434v.942h25.434v-.942z" fill="#3F3D56"/><path d="M214.457 107.714h-18.814v.987h18.814v-.987zm7.427 2.469h-26.241v.987h26.241v-.987z" fill="#F2F2F2"/><path d="M212.972 78.086a1.979 1.979 0 001.829-2.731 1.982 1.982 0 00-3.81.756 1.983 1.983 0 00.581 1.397 1.981 1.981 0 001.4.578z" fill="#3F3D56"/></g><defs><filter id="filter0_d" x="0" y="0" width="305" height="145" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                    </button>
                   </div>
                </div>
            </div>


        </>
       )

}



export default Login
