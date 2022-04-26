import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id: 909346,
    url: "https://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
    name: "Chapter Six: The Spy",
    season: 2,
    number: 6,
    type: "regular",
    airdate: "2017-10-27",
    airtime: "",
    airstamp: "2017-10-27T12:00:00+00:00",
    runtime: 52,
    rating: {
      average: 8.9,
    },
    image:
      "https://static.tvmaze.com/uploads/images/medium_landscape/399/998470.jpg",
    summary:
      'test',
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/909346",
      },
    },
  };
  
  const testImage = {
      id: 909346,
      url: "https://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
      name: "Chapter Six: The Spy",
      season: 2,
      number: 6,
      type: "regular",
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 52,
      rating: {
        average: 8.9,
      },
      image:
        null,
      summary:
        'test',
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/909346",
        },
      },
    };


test("renders without error", () => { 
    render(<Episode  episode = {testEpisode}/>)
});

test("renders the summary test passed as prop", () => { 
    render(<Episode episode = {testEpisode}/>)
    const summary = screen.queryByText(/test/i)
    expect(summary).toBeInTheDocument
    expect(summary).not.toBeNull()
    expect(summary).toBeTruthy()
});

test("renders default image when image is not defined", () => {
    render(<Episode episode = {testImage}/>)
    const img = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(img).toBeInTheDocument
 });
