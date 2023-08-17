import COVER_IMAGE from "./assets/cover_image.jfif";
import GOOGLE_ICON from "./assets/google.png" ;


const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9",
};

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative  w-1/2 h-full flex flex-col">
        {/* titre et sous titre */}
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-4x1 text-white font-extrabold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-full object-cover" />
      </div>
      {/*  */}

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold">Interactive Brand</h1>

        {/* affiche login */}
        <div className="w-full flex flex-col max-w-[500px]">
          {/*  */}
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2"> Welcome Back! Please Enter your details. </p>
          </div>
    {/* saisie du login */}
    <div className="w-full flex flex-col">
      <input 
      type="email"
      placeholder="Email"
      className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none" />

{/*  sasie du mot de passe */}
      <input 
      type="password"
      placeholder="Password"
      className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none" />
    </div>
    {/* se rappeler des infos saisies pour le relogin */}
    <div className="w-full flex items-center justify-between">
      <div className="w-full flex items-center">
        <input type="checkbox" className="w-4 h-4 mr-2"/>
        <p className="text-sm">Remember me for 30 days</p>
      </div>
      {/* mot de passe oublié */}
      <p className="text-sm font-medium cursor-pointer underline underline-offset-2">Forgot password</p>
    </div>

    {/* bouton Log in */}
    <div className="w-full flex flex-col my-4">
      <button className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
        Log in
      </button>
      {/*  création de compte*/}
      <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
        Register
      </button>
    </div>

{/* séparation du choix de type de compte */}
    <div className="w-full flex items-center justify-center relative py-2">
    <div className="w-full h-[1px] bg-black/40"></div>
    <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
    </div>
{/* login avec un compte google */}
    <div>
    <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center">
        <img src={ GOOGLE_ICON} className="h-6 mr-2"/>
        Sign In With Google
      </button>
    </div>

        </div>
{/*  */}
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">Don't have a account?
            <span className="font-semibold underline underline-offset-2 cursor-pointer"> Sign up for free</span></p>
        </div>

      </div>
    </div>
  );
};

export default Login;
