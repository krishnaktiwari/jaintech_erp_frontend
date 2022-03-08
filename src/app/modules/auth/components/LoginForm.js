import { Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { AppTextInput } from "../../../components/form/AppTextInput";
import {
	authSelector,
	clearFlag,
	LoginAction,
} from "../../../reducers/auth/AuthSlice";
const Schema = Yup.object().shape({
	login_id: Yup.string().required("Required"),
	password: Yup.string().required("Required"),
});
export const LoginForm = (props) => {
	const dispatch = useDispatch();
	const { error, message, user, token } = useSelector(authSelector);

	useEffect(() => {
		if (error == true) {
			//Alert.alert("Error", message);
			console.log(message);
			dispatch(clearFlag());
		}

		if (error == false) {
			const auth = JSON.stringify({
				user: user,
				token: token,
			});

			dispatch(clearFlag());
			//props.navigation.navigate("AppDrawer");
		}
	}, [error]);
	return (
		<Formik
			initialValues={{
				login_id: "krishna.shubhkamna@gmail.com",
				password: "Krishna@86#",
			}}
			validationSchema={Schema}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values) => dispatch(LoginAction(values))}
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => (
				<form onSubmit={handleSubmit}>
					<AppTextInput
						type="email"
						name="login_id"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.login_id}
						error={errors.login_id && touched.login_id && errors.login_id}
					/>

					<AppTextInput
						type="password"
						name="password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
						error={errors.password && touched.password && errors.password}
					/>

					<input type="submit" value="Login" />
				</form>
			)}
		</Formik>
	);
};
