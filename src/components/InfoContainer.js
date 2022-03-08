import { StyledInfoContainer, Line } from './styles/InfoContainer.styled';
import { useContext } from 'react';
import { TrackerContext } from '../App';

const InfoContainer = () => {

	const { ipData } = useContext(TrackerContext);

	return (
		<StyledInfoContainer>
			<div>
				<span>IP ADDRESS</span>
				<p>{ ipData.ip }</p>
			</div>
			<Line />
			<div>
				<span>LOCATION</span>
				<p>{ ipData.location.city }, { ipData.location.country }</p>
				<p>{ ipData.location.geonameId }</p>
			</div>
			<Line />
			<div>
				<span>TIME ZONE</span>
				<p>UTC { ipData.location.timezone }</p>
			</div>
			<Line />
			<div>
				<span>ISP</span>
				<p>{ ipData.isp }</p>
			</div>
		</StyledInfoContainer>
	)
}

export default InfoContainer