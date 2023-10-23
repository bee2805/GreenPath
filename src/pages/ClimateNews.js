import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

function ClimateNews() {
  const [newsData, setNewsData] = useState([]);
  const [renderedNews, setRenderedNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://climate-news-feed.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key": "588892d41emsha64adc852b6853bp1a24d1jsn14df02e4a17d",
          "X-RapidAPI-Host": "climate-news-feed.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setNewsData(response.data.articles); // Access the "articles" property
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // some news articles didn't have images so I don't want to show those ones
  const isThumbnailValid = async (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  useEffect(() => {
    const updateRenderedNews = async () => {
      const renderedNews = await Promise.all(
        newsData.map(async (news) => {
          const isValid = await isThumbnailValid(news.thumbnail);

          if (isValid) {
            return (
              <NewsCard
                key={news.title}
                articleLink={news.url}
                articleImage={news.thumbnail}
                source={news.source}
                date={new Date(news.published).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                articleTitle={news.title}
              />
            );
          }

          return null;
        })
      );

      setRenderedNews(renderedNews.filter((news) => news !== null));
    };

    updateRenderedNews();
  }, [newsData]);

  return (
    <div className="climateNews-container">
        
        <div className="news-header">
            <div className="news-info">
                <h1>Knowlege is Power</h1>
                <p>We believe staying informed is the first step towards a sustainable future. Explore the latest climate change news and empower yourself with the insights that drive positive change. Together, let's stay ahead, stay informed, and make a difference for our planet.</p>
            </div>
            <div className="news-header-image"/>
        </div>

        <h1 className="news-heading">Climate News</h1>

        <div className="list-of-articles">
            {renderedNews.length > 0 ? (
            renderedNews
            ) : (
            <p>Loading news...</p>
            )}
        </div>
    </div>
  );
}

export default ClimateNews;
