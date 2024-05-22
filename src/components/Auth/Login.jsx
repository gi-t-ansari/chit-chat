import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full flex flex-col gap-3">
      <Input name="email" type="email" label="Email" />
      <Input
        name="password"
        type={showPassword ? "text" : "password"}
        label="Password"
        icon={
          showPassword ? (
            <FaEye
              size={18}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEyeSlash
              size={20}
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )
        }
      />
      <Button
        size="sm"
        type="submit"
        className="bg-[#3cccfe] text-md tracking-widest"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
