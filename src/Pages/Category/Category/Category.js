import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            <h5>{categoryNews.length} news found.</h5>
            {categoryNews.length === 0 && <h5 className='text-danger ' style={{ margin: '200px 0px 200px 180px ' }}>No News Found <Link to='/'>Go back to news page</Link></h5>}

            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }

        </div>
    );
};

export default Category;