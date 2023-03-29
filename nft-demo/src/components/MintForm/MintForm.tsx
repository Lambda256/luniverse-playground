import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useMint from "../../hooks/useMint";
import useGetMetatdata from "../../hooks/useGetMetadata";
import { PropertiesState } from "../../states/recoil/properties";
import PropertyItem from "./PropertyItem";
import {
	AddIcon,
	Btn,
	BtnWrap,
	Container,
	Form,
	FormWrap,
	ImgInputWrap,
	ImgUploadBox,
	ImgUploadInput,
	ImgUploadLabel,
	Input,
	InputBox,
	InputLabel,
	PropertiesWrap,
	TextInputWrap,
	Title,
	UploadImg,
	AddForm,
	AddInputBox,
	AddInput,
	AddInputLabel,
	AddInputWrap,
	AddIconBox,
	UploadImgTitle,
	AddWrap,
	MetadataInputBox,
} from "./styled";
import {DEFAULT_INPUT_DATA, DEFAULT_PROPERTY_INPUT, DEFAULT_MAX_MINT_LIMIT, DEFAULT_METADATA_ID} from "./data"
import Loading from "../Loading";

const MintForm = () => {
	const [metadata, setMetadata] = useState<GetMetadataResponseData | undefined>(undefined)
	const [metadataId, setMetadataId] = useState(DEFAULT_METADATA_ID)
	const [inputData, setInputData] = useState(DEFAULT_INPUT_DATA);
	const [propertyInput, setPropertyInput] = useState(DEFAULT_PROPERTY_INPUT);
	const [properties, setProperties] = useRecoilState(PropertiesState);

	const nft = useMint(inputData);
	const useQueryMetadata = useGetMetatdata(metadataId);

	useEffect(() => {
		return () =>{
			setMetadata(undefined)
			setMetadataId(DEFAULT_METADATA_ID)
			setInputData(DEFAULT_INPUT_DATA)
			setProperties([])
		}
	}, [])

	if (nft.isLoading) return <Loading/>

	// Implement code when clicking submit or pressing enter
	const submitData = () => {
		let inputForm: HTMLFormElement | null =
			document.querySelector("#create-nft-form");

		// Check if required fields are filled out
		if (!inputForm!.checkValidity()) {
			inputForm!.reportValidity();
			return;
		}

		nft.mutateAsync();
	};

	/** Handle OnChanges **/
	const handleOnChangeImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const file = e.target.files![0];
		const uploadImg: HTMLImageElement | null =
			document.querySelector("#upload-img");
		uploadImg!.src = URL.createObjectURL(file);
		const formData = new FormData();
		formData.append("file", file);

		const fileNameLabel: HTMLLabelElement | null = document.querySelector(
			"#upload-img-filename"
		);
		fileNameLabel!.textContent = file.name;
		setInputData((prev) => ({ ...prev, image: formData }));
	};

	const handleOnChangeMetadata = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setMetadataId(e.target.value)
	}

	const handleOnChangeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value: string | number = e.target.value
		if(e.target.type === "number") value = e.target.valueAsNumber
		setInputData((prev) => ({ ...prev, [e.target.name]: value }));
	};

	const handleOnChangeProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPropertyInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	/** Handle Onclick buttons **/
	const handleOnClickAddProperties = (e: React.MouseEvent) => {
		e.preventDefault();
		let inputForm: HTMLFormElement | null = document.querySelector(
			"#add-properties-form"
		);

		// Check if required fields are filled out
		if (!inputForm!.checkValidity()) {
			inputForm!.reportValidity();
			return;
		}

		setProperties((prev) => [...prev, propertyInput]);
		inputForm!.reset();
		setPropertyInput(DEFAULT_PROPERTY_INPUT);
	};

	const handleOnClickFind = () => {
		useQueryMetadata.refetch().then((res) => {
			let data = res.data
			if(!!data) {
				setMetadata(data)
				setInputData(prev => ({...prev, metadataId: data?.id}))
				setProperties(data.properties)
			}
		})
	}

	const handleOnClickSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		submitData();
	};

	return (
		<Container>
			<FormWrap>
				<Title>Create Your NFT</Title>
				<Form id="create-nft-form" >
					<ImgInputWrap>
						<ImgUploadBox>
							<ImgUploadLabel
								htmlFor="img-upload"
								id="img-upload-label"
								isSelected={!!inputData.image || !!inputData.metadataId}
							>
								<UploadImg src={!!metadata ? metadata.image : "/assets/images/upload.png"} id="upload-img" />
								<UploadImgTitle htmlFor="img-upload" id="upload-img-filename" />
							</ImgUploadLabel>
							<ImgUploadInput
								id="img-upload"
								type="file"
								accept="image/*"
								onChange={(input) => handleOnChangeImgUpload(input)}
								required = {!inputData?.metadataId}
							/>
						</ImgUploadBox>
					</ImgInputWrap>
					<TextInputWrap>
						<InputBox>
							<InputLabel htmlFor="metadata-id" >
								Metadata ID
							</InputLabel>
							<MetadataInputBox>
								<Input
									id="metadata-id"
									name="editionNo"
									placeholder="If you don't have metadata id, skip this one."
									onChange={handleOnChangeMetadata}
								/>
								<Btn onClick={handleOnClickFind} disabled={!!metadata?.id}>
									Find
								</Btn>
							</MetadataInputBox>
						</InputBox>
						{/* Input1 end */}
						<InputBox>
							<InputLabel htmlFor="nft-name" required={true}>
								Name
							</InputLabel>
							<Input
								id="nft-name"
								name="name"
								onChange={handleOnChangeInputData}
								defaultValue={metadata?.name || ""}
								required = {!inputData?.metadataId}
								disabled={!!metadata?.id}
							/>
						</InputBox>
						{/* Input2 end */}
						<InputBox>
							<InputLabel htmlFor="nft-description" required={true}>
								Description
							</InputLabel>
							<Input
								id="nft-description"
								name="description"
								onChange={handleOnChangeInputData}
								defaultValue={metadata?.description || ""}
								required = {!inputData?.metadataId}
								disabled={!!metadata?.id}
							/>
						</InputBox>
						{/* Input3 end */}
						<InputBox>
							<InputLabel htmlFor="max-mint-limit" required={true}>
								Max Mint Limit
							</InputLabel>
							<Input
								id="max-mint-limit"
								name="maxMintLimit"
								type="number"
								min={0}
								max={4000000000}
								key={metadata?.editionMax}
								defaultValue={metadata?.editionMax || DEFAULT_MAX_MINT_LIMIT}
								onChange={handleOnChangeInputData}
								required = {!inputData?.metadataId}
								disabled={!!metadata?.id}
							/>
						</InputBox>
						{/* Input4 end */}

						<InputBox>
							<InputLabel>Properties</InputLabel>
							<PropertiesWrap id="properties">
								{properties.map((property, index) => (
									<PropertyItem key={index} index={index} property={property} disabled={!!metadata?.id} />
								))}
							</PropertiesWrap>
						</InputBox>
						{/* Input4 end */}
					</TextInputWrap>
				</Form>
				{!inputData?.metadataId && <AddForm id="add-properties-form">
					<AddWrap>
						<AddInputWrap>
							<AddInputBox>
								<AddInputLabel htmlFor="property-dispaly-type">Display Type</AddInputLabel>:{" "}
								<AddInput
									id="property-dispaly-type"
									name="displayType"
									onChange={handleOnChangeProperty}
									required = {!inputData?.metadataId}
								/>
							</AddInputBox>
							<AddInputBox>
								<AddInputLabel htmlFor="property-type">Type</AddInputLabel>:{" "}
								<AddInput
									id="property-type"
									name="type"
									onChange={handleOnChangeProperty}
									required = {!inputData?.metadataId}
								/>
							</AddInputBox>
							<AddInputBox>
								<AddInputLabel htmlFor="property-value" >Value</AddInputLabel>:{" "}
								<AddInput
									id="property-value"
									name="value"
									onChange={handleOnChangeProperty}
									required = {!inputData?.metadataId}
								/>
							</AddInputBox>
						</AddInputWrap>
						<AddIconBox>
							<AddIcon onClick={handleOnClickAddProperties} />
						</AddIconBox>
					</AddWrap>
				</AddForm>}
				<BtnWrap>
					<Btn onClick={handleOnClickSubmit}>
						Submit
					</Btn>
				</BtnWrap>
			</FormWrap>
		</Container>
	);
};

export default MintForm;
