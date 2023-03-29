import React, { useEffect, useRef, useState } from "react";
import useGenerateAuthToken from "../../hooks/useGenerateAuthToken";
import {
	Btn,
	BtnWrap,
	Container,
	CopyIcon,
	Form,
	FormWrap,
	Input,
	InputBox,
	InputLabel,
	Title,
} from "./styled";

const AuthTokenForm = () => {
	/** Refs **/
	const resultRef = useRef<HTMLInputElement>(null);
	const accessKeyRef = useRef<HTMLInputElement>(null);
	const secretKeyRef = useRef<HTMLInputElement>(null);
	const expiresInKeyRef = useRef<HTMLInputElement>(null);

	/** React-Query **/
	const authTokenMutation = useGenerateAuthToken();

	// Set 'enter' to submit
	const handleOnEnter: React.KeyboardEventHandler<HTMLFormElement> = (e) => {
		if (e.key === "Enter") {
			submitData();
		}
	};

	// Submit Input data
	const handleOnClickSubmit = async (e: React.MouseEvent) => {
		e.preventDefault();
		submitData();
	};

	// Copy to Clipboard
	const copyToClipboard = (copyEl: HTMLInputElement) => {
		if (!copyEl.value) {
			alert("Nothing to copy");
			return;
		}

		if (navigator.clipboard) {
			navigator.clipboard
				.writeText(copyEl.value)
				.then(() => alert(`Copied! \n ${copyEl?.value}`))
				.catch(() => alert("Copy failed"));
		} else {
			try {
				copyEl.select();
				document.execCommand("copy");
				alert(`Copied! \n ${copyEl.value}`);
			} catch (error) {
				alert("Copy failed");
			}
		}
	};

	// Handle on Copy button
	const handleOnClickCopy = () => {
		if (!resultRef.current) return;
		copyToClipboard(resultRef.current);
	};

	// Implement code when clicking submit or pressing enter
	const submitData = () => {
		let inputForm: HTMLFormElement | null =
			document.querySelector("#gernerate-form");

		// Check if required fields are filled out
		if (inputForm === null) throw "Input form is not existed.";
		if (!inputForm.checkValidity()) {
			inputForm.reportValidity();
			return;
		}
		if (
			!accessKeyRef.current ||
			!secretKeyRef.current ||
			!expiresInKeyRef.current
		) {
			alert("Please fill out all required fields");
			return;
		}

		// Send a request to generate a auth token
		authTokenMutation
			.mutateAsync({
				accessKey: accessKeyRef.current.value,
				secretKey: secretKeyRef.current.value,
				expiresIn: Number(expiresInKeyRef.current.value),
			})
			.then((data) => {
				console.log(`New auth token has been generated : ${data}`);
			})
			.catch((err) => {
				throw err;
			});
	};

	return (
		<Container>
			<FormWrap>
				<Title>Generate New Auth Token</Title>
				<Form id="gernerate-form" onKeyDown={handleOnEnter}>
					<InputBox>
						<InputLabel htmlFor="access-key" required={true}>
							Access Key
						</InputLabel>
						<Input
							id="access-key"
							name="accessKey"
							required
							placeholder="dUf1hL3tKYL8vceXppK9CmRQa0Md4E..."
							ref={accessKeyRef}
						/>
					</InputBox>
					{/* Input1 end */}
					<InputBox>
						<InputLabel htmlFor="secret-key" required={true}>
							Secret Key
						</InputLabel>
						<Input
							id="secret-key"
							name="secretKey"
							required
							placeholder="K0Md4EL8vceXppK9CmRQdUf1hL3tKY..."
							ref={secretKeyRef}
						/>
					</InputBox>
					{/* Input2 end */}
					<InputBox>
						<InputLabel htmlFor="expiry-value" required={true}>
							Expiry Value (seconds)
						</InputLabel>
						<Input
							id="expiry-value"
							name="expiresIn"
							required
							type="number"
							defaultValue={3600}
							ref={expiresInKeyRef}
						/>
					</InputBox>
					{/* Input3 end */}
					<InputBox>
						<InputLabel htmlFor="result">
							Generated Auth Token{" "}
							{authTokenMutation.data && (
								<CopyIcon onClick={handleOnClickCopy} />
							)}
						</InputLabel>
						<Input
							id="result"
							required
							type="text"
							readOnly
							value={authTokenMutation.data || ""}
							ref={resultRef}
						/>
					</InputBox>
					{/* Input4 end */}
				</Form>
				<BtnWrap>
					<Btn to="" onClick={handleOnClickSubmit}>
						Submit
					</Btn>
				</BtnWrap>
			</FormWrap>
		</Container>
	);
};

export default AuthTokenForm;
