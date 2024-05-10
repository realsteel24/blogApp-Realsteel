import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput, SignupInput } from "@realsteel/medium-common";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="">
          <div className="text-3xl font-extrabold ">
            {type === "signup" ? "Create an Account" : "Log in to your Account"}
          </div>
          <div className="text-slate-400 ">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="underline"
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </div>

          <div className=" pt-4">
            <div className="">
              {type === "signup" ? (
                <LabelledInput
                  label="Name"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setPostInputs({ ...postInputs, name: e.target.value });
                  }}
                />
              ) : null}
              <LabelledInput
                label="Email"
                placeholder="Email address"
                onChange={(e) => {
                  type === "signup"
                    ? setPostInputs({ ...postInputs, email: e.target.value })
                    : setSigninInputs({
                        ...signinInputs,
                        email: e.target.value,
                      });
                }}
              />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder={
                  type === "signup" ? "Minimum 6 characters" : "Password"
                }
                onChange={(e) => {
                  type === "signup"
                    ? setPostInputs({ ...postInputs, password: e.target.value })
                    : setSigninInputs({
                        ...signinInputs,
                        password: e.target.value,
                      });
                }}
              />

              <button
                type="button"
                className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700 mt-2"
                onClick={
                  type === "signup"
                    ? async () => {
                        try {
                          const response = await fetch(
                            `${BACKEND_URL}/api/v1/user/signup`,
                            {
                              method: "POST",
                              body: JSON.stringify(postInputs),
                              headers: { "Content-Type": "application/json" },
                            }
                          );

                          if (!response.ok) {
                            throw new Error("Sign up failed");
                          }
                          const data = await response.json();
                          console.log(data.jwt);
                          console.log(data.name);
                          localStorage.setItem("token", data.jwt);
                          localStorage.setItem(
                            "name",
                            data.name ?? "Anonymous"
                          );
                          localStorage.setItem("id", data.id);
                          navigate("/blogs");
                        } catch (error: any) {
                          console.error("Error signing up:", error.message);
                          alert("Sign up failed. Please try again.");
                        }
                      }
                    : async () => {
                        try {
                          const response = await fetch(
                            `${BACKEND_URL}/api/v1/user/signin`,
                            {
                              method: "POST",
                              body: JSON.stringify(signinInputs),
                              headers: { "Content-Type": "application/json" },
                            }
                          );
                          console.log(response);
                          if (!response.ok) {
                            throw new Error("Sign in failed");
                          }
                          const data = await response.json();
                          localStorage.setItem("token", data.jwt);
                          localStorage.setItem(
                            "name",
                            data.name ?? "Anonymous"
                          );
                          localStorage.setItem("id", data.id);

                          navigate("/blogs");
                        } catch (error: any) {
                          console.error("Error signing up:", error.message);
                          alert("Sign in failed. Please try again.");
                        }
                      }
                }
              >
                {type === "signup" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <div className="">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            {label}
          </label>
          <input
            onChange={onChange}
            type={type || "text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2.5"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
}
