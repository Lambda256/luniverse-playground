import React from 'react'
import { useRecoilState } from 'recoil';
import { PropertiesState } from '../../states/recoil/properties';
import { PropertyBox, PropertyText, PropertyTextBox, PropertyTextWrap, RemoveIcon, RemoveIconBox } from './styled'

const PropertyItem: React.FC<MintComponent.PropertyItem> = ({property, index, disabled}) => {
  const [properties, setProperties] = useRecoilState(PropertiesState)

  // Remove properties
	const handleOnClickRemoveProperties = () => {
    const copy = [...properties]
    copy.splice(index,1)
		setProperties(copy)
	};

  return (
		<>
			<PropertyBox>
				<PropertyTextWrap>
					<PropertyTextBox>
						<PropertyText>Display Type</PropertyText> :{" "}
						<PropertyText>{property.displayType}</PropertyText>
					</PropertyTextBox>
					<PropertyTextBox>
						<PropertyText>Type</PropertyText> :{" "}
						<PropertyText>{property.type}</PropertyText>
					</PropertyTextBox>
					<PropertyTextBox>
						<PropertyText>Value</PropertyText> :{" "}
						<PropertyText>{property.value}</PropertyText>
					</PropertyTextBox>
				</PropertyTextWrap>
				{disabled && (
					<RemoveIconBox>
						<RemoveIcon onClick={handleOnClickRemoveProperties} />
					</RemoveIconBox>
				)}
			</PropertyBox>
		</>
	);
}

export default PropertyItem