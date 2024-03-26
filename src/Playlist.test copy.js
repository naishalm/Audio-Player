import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Playlist from './Playlist';

describe('Playlist component', () => {
    const songsData = [
        { title: 'Song 1', artist: 'Artist 10000', year: 2020 },
        { title: 'Song 2', artist: 'Artist 2', year: 2019 },
        { title: 'Song 3', artist: 'Artist 3', year: 2021 },
    ];

    const podcastsData = [
        { season: 1, episode: 1, episodeTitle: 'Podcast Episode 1' },
        { season: 2, episode: 3, episodeTitle: 'Podcast Episode 3' },
        { season: 1, episode: 2, episodeTitle: 'Podcast Episode 2' },
    ];

    it('renders the shuffled playlist correctly', () => {
        const { getByText } = render(<Playlist />);

        // Check that the shuffled list contains 6 items
        expect(getByText('Shuffled Playlist')).toBeInTheDocument();
        expect(getByText('Song 1')).toBeInTheDocument();
        expect(getByText('Artist 10000')).toBeInTheDocument();
        expect(getByText('2020')).toBeInTheDocument();
        expect(getByText('Podcast Episode 1')).toBeInTheDocument();
        expect(getByText('Podcast')).toBeInTheDocument();
        expect(getByText('Season 1')).toBeInTheDocument();
        expect(getByText('Episode 1')).toBeInTheDocument();
        expect(getByText('Song 2')).toBeInTheDocument();
        expect(getByText('Artist 2')).toBeInTheDocument();
        expect(getByText('2019')).toBeInTheDocument();
    })
})