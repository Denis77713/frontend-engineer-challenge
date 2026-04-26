import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../libs/validation";
import { InputPassword } from "@shared/ui/inputs/input-password/input-password";
import { Button } from "@shared/ui/button/button";
import { Url } from "@shared/ui/url/url";

export const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted, isValid } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
    }
  });



  const onSubmit = (data: LoginFormValues) => {
    console.log("Форма отправлена:", data);
  };
  console.log(isValid);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputPassword
        register={register("email")}
        label="Email"
        placeholder="example@mail.com"
        isSubmitted={isSubmitted}
        errorMessage={errors.email?.message}
        isValid={isValid}
      />
      <Url text="Забыли пароль?" href="#" />
      <Button text="Отправить" type="submit" />
    </form>
  );
};
