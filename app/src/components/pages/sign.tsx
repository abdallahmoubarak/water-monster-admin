import Input from "../Input";
import { useState } from "react";
import InputsContainer from "../InputsContainer";
import Button from "../Button";
import { validSign } from "@/utils/signValidation";
import { useSignIn } from "@/hooks/useAuth";
import RootLayout from "./layout";

export default function SignPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const { mutate: signIn } = useSignIn({ setMsg, setIsLoading });

  const handleSign = () => {
    if (!isLoading) {
      setIsLoading(true);
      setMsg("");
      let newEmail = email.toLowerCase().trim();
      const { valid, message } = validSign({
        email: newEmail,
        password,
      });

      if (!valid) {
        setIsLoading(false);
        return setMsg("*" + message);
      }
      setMsg(message);
      signIn({ email: newEmail, password });
    }
  };
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center max-w-[26rem] mx-auto p-4 sign-container">
        <h1 className="w-full text-3xl pb-1 text-primary text-left">Sign In</h1>

        <InputsContainer>
          <Input name={"Email"} value={email} setValue={setEmail} />
          <Input
            name={"Password"}
            value={password}
            setValue={setPassword}
            inputType="password"
          />
        </InputsContainer>
        <div className="text-sm text-left min-h-[1rem] pl-1 text-secondary">
          {msg}
        </div>

        <Button
          text={"Sign In"}
          isLoading={isLoading}
          onClick={() => handleSign()}
        />
      </div>
    </RootLayout>
  );
}
