import React from 'react';
import styled from 'styled-components';
import Carousel from "nuka-carousel";

import {TestimonialsData} from "../data/TestimonialsData";
import {BodyMain, H3} from "../components/styles/TextStyles";
import {variables} from "../components/styles/GlobalVariables";

const Testimonials = () => {
    return (
        <Carousel
            animation="fade"
            autoplay
            autoplayInterval={4000}
            enableKeyboardControls
            speed={3000}
            dragging={false}
            dragThreshold={0.2}
            wrapAround
            style={{height: '850px'}}
        >
            {TestimonialsData.map(data => {
                return (
                    <TestimonialSlider key={data.id}>
                        <TestimonialTextWrapper className='layout--center'>
                            <TestimonialText>
                                <TestimonialQuote>"{data.quote}"</TestimonialQuote>
                                <TestimonialCustomer>{data.customer}</TestimonialCustomer>
                                <TestimonialDesc>{data.description}</TestimonialDesc>
                            </TestimonialText>
                        </TestimonialTextWrapper>
                        <TestimonialImage className='image-container' backgroundImg={data.image}/>
                    </TestimonialSlider>
                )
            })}
        </Carousel>
    )
}

const TestimonialSlider = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: space-between;
`;

const TestimonialTextWrapper = styled.div`
  width: 46%;
`;

const TestimonialText = styled.div`
  width: 50%;
`;

const TestimonialQuote = styled(H3)`
  margin-bottom: ${variables.sizeMedium};
`;

const TestimonialCustomer = styled(BodyMain)`
  font-weight: 600;
`;

const TestimonialDesc = styled(BodyMain)``;

const TestimonialImage = styled.img`
  width: 50%;
  background-image: url(${props => props.backgroundImg});
`;

export default Testimonials;