import React from 'react';
import './HomeContactUs.scss';

const IFRAME_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4587.736347264823!2d24.02730693718647!3d54.90523598334507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e71820c82f2cb9%3A0xa771a53cd2f9d1bb!2sAteities%20pl.%2030A%2C%20Kaunas%2052163!5e0!3m2!1sen!2slt!4v1623173080822!5m2!1sen!2slt';

const HomeContactUs = ({ contactUs = {} }) => (contactUs.background ? (
	<div className="about-us-background">
		<section className="home-contact-us">
			<img
				src={contactUs.background.image.publicURL}
				alt={contactUs.background.alt}
				className="home-contact-us__section-background"
			/>

			<div className="home-contact-us__text-container">
				<h2
					data-sal="slide-left"
					data-sal-delay="200"
					data-sal-duration="1000"
					className="home-contact-us__title text-uppercase text-left"
				>
					{contactUs.title}
				</h2>
				<ul className="home-contact-us__list">
					{contactUs.info.map((point, index) => (
						<li
							data-sal={(index + 1) % 2 === 0 ? 'slide-right' : 'slide-left'}
							data-sal-delay={((index + 1) * 100)}
							data-sal-duration="1000"
							key={point.title}
						>
							<div className="flex flex-align-center home-contact-us__list-item">
								<img className="mr-24 mb-auto" src={point.image.image.publicURL} alt={point.image.alt} />
								<div className="text-left">
									<h3 className="text-uppercase text-left">{point.title}</h3>
									<p className="home-contact-us__description body-small text-left">{point.description}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
				<p
					className="body mb-40 text-left"
					data-sal="slide-right"
					data-sal-delay="300"
					data-sal-duration="1000"
				>
					{contactUs.description}
				</p>
			</div>
			<iframe
				title="Ateities pl. 30A"
				className="home-contact-us__iframe-location"
				src={IFRAME_SRC}
				width="600"
				height="450"
				allowFullScreen=""
				loading="lazy"
			/>
		</section>
	</div>
) : null);

export default HomeContactUs;
