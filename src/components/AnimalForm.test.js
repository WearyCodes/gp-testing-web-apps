import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test('renders without errors', () => {
    render(<AnimalForm />)
})

test('when user fills all fields and submits, species appears in list', async () => {
    render(<AnimalForm />)
    const species = 'feline'
    const user = userEvent.setup()
    const speciesInput = screen.getByLabelText(/species:/i)
    await user.type(speciesInput, species)

    const ageInput = screen.getByLabelText(/age:/i)
    user.type(ageInput, '9');

    const notesInput = screen.getByLabelText(/notes:/i)
    user.type(notesInput, 'noted')

    const submitButton = screen.getByRole('button')
    user.click(submitButton)

    await waitFor(() => {
        const speciesFeedBack = screen.queryByText(species)
        expect(speciesFeedBack).toBeInTheDocument();
    })
})

/*

NOTE:

    The Guided Project video shows the older way of using the `userEvent` library.

    The newer version 14 (included in this starter code) works like this:

    test("renders AnimalForm without errors", () => {
        const user = userEvent.setup(); // instantiate a user
        render(<AnimalForm />); // render the component
        await user.type(specieInput, "foo"); // await user DOT event
    });

    Check the solution repo for the full GP code.

*/
