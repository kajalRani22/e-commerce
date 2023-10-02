import React  from 'react';
import bg from "./sale.jpg";
import { Row, Container } from 'react-bootstrap'; 



function TopSearch() {
	
	
	const myStyle = {
		
		backgroundImage:`url(${bg})`,
		height: '60vh',
		opacity : '0.8',
		

	};


	return (
		<section style={myStyle} className="pt-5 BG_style pb-5 homepage-search-block position-relative">
			
			<div className="banner-overlay"></div>
			<Container >
				<Row className="d-flex align-items-center">
					
					
				</Row>
			</Container>
			
		</section>
	);
}



		
	

export default TopSearch;