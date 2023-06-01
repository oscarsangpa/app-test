import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../services/userServices";

const schema = yup
  .object({
    name: yup.string().required("Field name is required"),
    email: yup
      .string()
      .email("Please enter a valid email format")
      .required("Email is a required field"),
    password: yup.string().required(),
  })
  .required();

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!data) console.log("Ups... Something went wrong!");

    registerUser(data)
      .then(() => navigate("/login"))
      .catch((err) => console.error(err?.response?.data?.errors));
  };

  return (
    <>
      <div>
        <h2>
          Welcome to <span className="name">WEJYC</span> test!
        </h2>
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              {...register("name")}
              id="name"
              name="name"
              type="text"
              placeholder="Jhon Doe"
            />
            {errors && <p className="errors">{errors.name?.message}</p>}
          </div>
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
          <input type="submit" value="Register" />
        </form>
        <div>
          <p>
            Already have an account?
            <span onClick={() => navigate("/login")}> Sign in </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
