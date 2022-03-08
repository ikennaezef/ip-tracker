import {StyledBackground, InputBox} from './styles/Background.styled';
import InfoContainer from './InfoContainer'
import { useState, useEffect, useContext } from 'react';
import {TrackerContext} from '../App';

const Background = () => {

	const { ipData, setIpData } = useContext(TrackerContext);

	const [ ipQuery, setIpQuery ] = useState('');

	// const apiKey = 'at_THr1vS7ht5tAD4MZGa5HNyYa1qRM1';

	// Gets IP Address of the user
	const getIp = async() => {
		await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_THr1vS7ht5tAD4MZGa5HNyYa1qRM1&ipAddress=').then(res => res.json()).then(data => {
			setIpData(data);
		}).catch(err => console.log(err));
	}

	const searchIp = async() => {
		// If there is no search input, it finds IP Address of user
		if (ipQuery === ' ') {
			getIp();
		} else {
			await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_THr1vS7ht5tAD4MZGa5HNyYa1qRM1&ipAddress=${ipQuery}`).then(res => res.json()).then(data => {
				setIpData(data);
			}).catch(err => console.log(err));
		}
	}

	// Gets IP Address of the user when the page loads
	useEffect(() => {		
		getIp();
	}, [ ])


	return (
		<StyledBackground>
			<h1>IP Address Tracker</h1>
			<InputBox>
				<input type="text" placeholder="Search for any IP address or domain" onChange={ (e) => setIpQuery(e.target.value) }/>
				<span onClick ={ searchIp }>
					<img src="images/icon-arrow.svg" alt="arrow icon"/>
				</span>
			</InputBox>
       	   { ipData && <InfoContainer /> } 
		</StyledBackground>
	)
}

export default Background