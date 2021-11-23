import { render, screen, fireEvent } from '@testing-library/react';
import MenuItem from '../components/MenuItem';
import React, { useState } from 'react';

test('target is _blank when openInNewTab is true', () => {
    // Arrange 
    render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />)
    // Act 
    const menuItem = screen.getByText('Blog');
    const targetAttribute = menuItem.getAttribute('target');
    // Assert
    expect(targetAttribute).toBe('_blank');

})


test('no target when openInNewTab is false', () => {
    // Arrange 
    render(<MenuItem text="Blog" href="https://adalab.es/blog" />)
    // Act 
    const menuItem = screen.getByText('Blog');
    const targetAttribute = menuItem.getAttribute('target');
    // Assert
    expect(targetAttribute).toBe('');

})


test('href is https://adalab.es/blog', () => {
    // Arrange 
    render(<MenuItem text="Blog" href="https://adalab.es/blog" />)
    // Act 
    const menuItem = screen.getByText('Blog');
    const targetAttribute = menuItem.getAttribute('href');
    // Assert
    expect(targetAttribute).toBe("https://adalab.es/blog");

})

test('button increments', () => {
    const TestComponent = () => {
        const [count, setCounter] = useState(0)

        return (
            <button onClick={() => setCounter(count => count + 1)}>
                Click to increase: {count}
            </button>
        )
    }

    render(<TestComponent />)
    const button = screen.getByText(/Click to increase/);

    fireEvent.click(button);

    expect(button.innerHTML).toBe("Click to increase: 1");
})