import React from 'react';
import styled from 'styled-components';

import {CmsData} from "../data/CmsData";
import {variables} from "../components/styles/GlobalVariables";
import {colorTheme} from "../components/styles/ColorStyles";
import {H3} from "../components/styles/TextStyles";

const BlogSection = () => {
    return (
        <BlogWrapper >
            <BlogHeadline>Explore Natural Paint Co</BlogHeadline>
            <BlogCardWrapper className='layout--flex'>
                {CmsData.map(data => {
                    return (
                        <BlogCard key={data.id}>
                            <BlogCardImg src={data.img}/>
                            <BlogCardTitle>{data.name}</BlogCardTitle>
                        </BlogCard>
                    )
                })}
            </BlogCardWrapper>
        </BlogWrapper>
    )
}

const BlogWrapper = styled.div`
  width: 100%;
  padding: ${variables.sizeExtraHuge} ${variables.sizeHuge};
  background-color: ${colorTheme.tertiary};
`;

const BlogHeadline = styled(H3)`
  text-align: center;
  margin-bottom: ${variables.sizeHuge};
`;

const BlogCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.sizeExtraLarge};
`;

const BlogCard = styled.div`
  width: 22%;
`;

const BlogCardImg = styled.img`
  width: 100%;
  margin-bottom: ${variables.sizeExtraMedium};
`;

const BlogCardTitle = styled(H3)``;

export default BlogSection;