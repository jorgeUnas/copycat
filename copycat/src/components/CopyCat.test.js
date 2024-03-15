import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CopyCat } from "./CopyCat";


it("Displays the provided name", () => {
render(<CopyCat name='Mack' value='' handleChange={() => {}} toggleTape={() => {}} isCopying={true} />);
const header = screen.getByText('Copy Cat Mack');
expect(header).toHaveTextContent('Copy Cat Mack');
});


it("Should display input text in paragraph when isCopying is set to true", () => {
  


});

it("Should not display input text in paragraph when isCopying is set to false", () => {

});
