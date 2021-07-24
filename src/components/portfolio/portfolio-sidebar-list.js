import React from 'react';

const PortfolioSidebarList = (props) => {

    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div>
                <div>
                    <img src={portfolioItem.thumb_image_url} />
                </div>

                <div>
                    <h1>{portfolioItem.name}</h1>    
                    <h2>{portfolioItem.id}</h2>        
                </div>
            </div>
        )
    })

    return <div>{portfolioList}</div>
}

export default PortfolioSidebarList;