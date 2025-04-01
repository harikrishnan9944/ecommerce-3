"use client";
import React from "react";
import { useFormik } from "formik";

export default function Regiser() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div className="h-screen w-full flex justify-center items-center bg-amber-50">

            <form onSubmit={formik.handleSubmit} className="flex flex-col bg-white  px-10 py-5 rounded shadow-2xl">
                <h1 className="text-center text-xl font-semibold">Regiser </h1>
                <div className="space-y-1">
                    <p className="mt-5">Username</p>
                    <input
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        className="py-1 px-2 outline-none border border-black focus:border focus:border-amber-200 rounded w-full"
                    />
                    <p className="pt-2">Password</p>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="py-1 px-2 outline-none border border-black focus:border focus:border-amber-200 rounded w-full"
                    />
                    <p className="pt-2">Conform Password</p>
                    <input
                        type="password"
                        name="confirm_password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        className="py-1 px-2 outline-none border border-black focus:border focus:border-amber-200 rounded w-full"
                    />

                    <button type="submit" className="w-full bg-amber-500 py-1 text-white rounded mt-5 mb-3 hover:bg-amber-600">Submit</button>
                </div>
            </form>
        </div>
    );
}
