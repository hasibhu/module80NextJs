const { BsGoogle, BsGithub } = require("react-icons/bs");

const SocialSignin = () => {
        const handleSocialLogin = async (provider) => {
            const resp = await signIn(provider);
            console.log("Response from social login:", resp);
        };

        return (
            <div>
                <button
                    onClick={() => handleSocialLogin('google')}
                    className="btn btn-accent w-full text-4xl flex justify-center items-center text-red-600"
                >
                    <BsGoogle />
                </button>
                
                <button
                    onClick={() => handleSocialLogin('github')}
                    className="mt-10 btn btn-accent w-full text-4xl flex justify-center items-center text-yellow-400"
                >
                    <BsGithub />
                </button>
            </div>
        );
    };