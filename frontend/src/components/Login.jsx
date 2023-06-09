import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userServices";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../App.css";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email format")
      .required("Email is a required field"),
    password: yup.string().required(),
  })
  .required();

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!data) return console.log("Ups...something went wrong!");

    loginUser(data)
      .then(() => navigate("/home"))
      .catch((err) => console.error(err?.response?.data?.errors));
  };

  return (
    <>
      <div>
        <h2>
          Welcome to
          <span className="name">WEJYC</span> test!
        </h2>
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
            />
            {errors && <p className="errors">{errors.email?.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              id="password"
              name="password"
              type="password"
            />
            {errors && <p className="errors">{errors.password?.message}</p>}
          </div>
          <input type="submit" value="Login" />
        </form>
        <div>
          <p>
            Do not have an account?
            <span onClick={() => navigate("/")}> Sign up </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
