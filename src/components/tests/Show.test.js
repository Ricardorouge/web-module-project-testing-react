import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import userEvent from '@testing-library/user-event';

const testShow = {
    name:'test 1',
    summary: 'test s',
    seasons:[
        {
            id:1,
            name:'season 1',
            episodes:[]
        },
        {
            id:2,
            name:'season 2',
            episodes:[]
        },
    ]
}

test('renders without errors', () => { 
    render(<Show show = {testShow} selectedSeason={'none'}/>)
});

test('renders Loading component when prop show is null', () => { 
    render(<Show show ={null}/>)
    const loading = screen.queryByTestId('loading-container')
    expect(loading).toBeInTheDocument
});

test('renders same number of options seasons are passed in', () => { 
    render(<Show show ={testShow} selectedSeason={'none'}/>)
    const seasons = screen.queryAllByTestId('season-option')
    expect(seasons).toHaveLength(2)
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn()

    render(<Show show={testShow} selectedSeason ={'none'} handleSelect ={handleSelect}/>)
    const selectBox = screen.getByLabelText(/Select A Season/i)
    userEvent.selectOptions(selectBox,['2'])

    expect(handleSelect).toBeCalled()
 });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
    const { rerender} = render(<Show show ={testShow} selectedSeason = {'none'}/>)
    let episodesComponent = screen.queryByTestId('episodes-container')
    expect(episodesComponent).not.toBeInTheDocument

    rerender(<Show show ={testShow} selectedSeason={1}/>)
    expect(episodesComponent).toBeInTheDocument
});
